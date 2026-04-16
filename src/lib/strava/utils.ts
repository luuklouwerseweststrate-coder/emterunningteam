// Hulpfuncties voor Strava data verwerking

import {
  StravaActivity,
  ProcessedActivity,
  ProcessedStats,
  WeekStats,
  MonthStats,
  YearStats,
  AllTimeStats,
  PersonalRecord,
  WeeklyDataPoint,
  StravaBestEffort,
} from './types';

// === Formattering ===

// Seconden naar "1:23:45" of "45:12" formaat
export function formatDuration(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

// m/s naar min/km formaat "5:23"
export function formatPace(metersPerSecond: number): string {
  if (metersPerSecond <= 0) return '-';
  const secPerKm = 1000 / metersPerSecond;
  const mins = Math.floor(secPerKm / 60);
  const secs = Math.floor(secPerKm % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

// Meters naar km met 1 decimaal
export function metersToKm(meters: number): number {
  return Math.round(meters / 100) / 10;
}

// Datum naar Nederlandse string
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Datum naar korte string
export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'short',
  });
}

// Relatieve datum ("2 uur geleden", "gisteren")
export function formatRelativeDate(dateString: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins} min geleden`;
  if (diffHours < 24) return `${diffHours} uur geleden`;
  if (diffDays === 1) return 'gisteren';
  if (diffDays < 7) return `${diffDays} dagen geleden`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weken geleden`;
  return formatDateShort(dateString);
}

// Activity type naar Nederlandse naam
export function getActivityTypeName(type: string): string {
  const typeMap: Record<string, string> = {
    Run: 'Hardlopen',
    TrailRun: 'Trailrun',
    Walk: 'Wandelen',
    Hike: 'Hiken',
    Ride: 'Fietsen',
    VirtualRun: 'Virtueel hardlopen',
    Workout: 'Training',
    WeightTraining: 'Krachttraining',
    Swim: 'Zwemmen',
    Yoga: 'Yoga',
  };
  return typeMap[type] || type;
}

// Activity type naar emoji
export function getActivityTypeIcon(type: string): string {
  const iconMap: Record<string, string> = {
    Run: '\u{1F3C3}',
    TrailRun: '\u{26F0}\u{FE0F}',
    Walk: '\u{1F6B6}',
    Hike: '\u{1F97E}',
    Ride: '\u{1F6B4}',
    VirtualRun: '\u{1F3AE}',
    Workout: '\u{1F4AA}',
    WeightTraining: '\u{1F3CB}\u{FE0F}',
    Swim: '\u{1F3CA}',
  };
  return iconMap[type] || '\u{1F3C3}';
}

// === Data verwerking ===

// Verwerk een Strava activiteit naar een UI-friendly object
export function processActivity(activity: StravaActivity): ProcessedActivity {
  return {
    id: activity.id,
    name: activity.name,
    type: activity.type,
    date: activity.start_date_local,
    distanceKm: metersToKm(activity.distance),
    durationFormatted: formatDuration(activity.moving_time),
    paceFormatted: formatPace(activity.average_speed),
    elevationGain: Math.round(activity.total_elevation_gain),
    averageHeartrate: activity.average_heartrate,
    calories: activity.calories,
    kudosCount: activity.kudos_count,
    achievementCount: activity.achievement_count,
    prCount: activity.pr_count,
    polyline: activity.map?.summary_polyline || null,
    startLatlng: activity.start_latlng,
    sufferScore: activity.suffer_score,
  };
}

// Bereken week stats voor een lijst activiteiten
function calculatePeriodStats(activities: StravaActivity[]): WeekStats {
  const runs = activities.filter((a) => a.type === 'Run' || a.type === 'TrailRun');
  const totalDistance = runs.reduce((sum, a) => sum + a.distance, 0);
  const totalTime = runs.reduce((sum, a) => sum + a.moving_time, 0);
  const totalElevation = runs.reduce((sum, a) => sum + a.total_elevation_gain, 0);

  return {
    totalKm: metersToKm(totalDistance),
    totalRuns: runs.length,
    totalTime,
    avgPace: totalDistance > 0 ? (totalTime / totalDistance) * 1000 / 60 : 0, // min/km
    totalElevation: Math.round(totalElevation),
  };
}

// Bereken start van de huidige week (maandag)
function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

// Bereken start van de huidige maand
function getMonthStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

// Bereken start van het jaar
function getYearStart(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1);
}

// Bereken hardloop-streak (opeenvolgende dagen met een run)
function calculateStreak(activities: StravaActivity[]): { current: number; longest: number } {
  const runs = activities
    .filter((a) => a.type === 'Run' || a.type === 'TrailRun')
    .sort((a, b) => new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime());

  if (runs.length === 0) return { current: 0, longest: 0 };

  // Unieke dagen met runs
  const runDays = new Set<string>();
  runs.forEach((r) => {
    runDays.add(new Date(r.start_date_local).toISOString().split('T')[0]);
  });

  const sortedDays = Array.from(runDays).sort().reverse();

  // Current streak: tel vanaf vandaag of gisteren terug
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  let currentStreak = 0;
  let checkDate = runDays.has(today) ? today : yesterday;

  if (runDays.has(checkDate)) {
    let d = new Date(checkDate);
    while (runDays.has(d.toISOString().split('T')[0])) {
      currentStreak++;
      d = new Date(d.getTime() - 86400000);
    }
  }

  // Longest streak
  let longestStreak = 0;
  let streak = 1;
  for (let i = 0; i < sortedDays.length - 1; i++) {
    const diff = new Date(sortedDays[i]).getTime() - new Date(sortedDays[i + 1]).getTime();
    if (diff === 86400000) {
      streak++;
    } else {
      longestStreak = Math.max(longestStreak, streak);
      streak = 1;
    }
  }
  longestStreak = Math.max(longestStreak, streak);

  return { current: currentStreak, longest: longestStreak };
}

// Bereken wekelijkse datapunten voor de grafiek (laatste 12 weken)
function calculateWeeklyProgress(activities: StravaActivity[], weeks = 12): WeeklyDataPoint[] {
  const now = new Date();
  const dataPoints: WeeklyDataPoint[] = [];

  for (let i = weeks - 1; i >= 0; i--) {
    const weekStart = getWeekStart(new Date(now.getTime() - i * 7 * 86400000));
    const weekEnd = new Date(weekStart.getTime() + 7 * 86400000);

    const weekActivities = activities.filter((a) => {
      const d = new Date(a.start_date_local);
      return d >= weekStart && d < weekEnd;
    });

    const stats = calculatePeriodStats(weekActivities);

    // ISO week nummer
    const weekNum = getISOWeek(weekStart);

    dataPoints.push({
      week: `${weekStart.getFullYear()}-W${String(weekNum).padStart(2, '0')}`,
      weekLabel: `${weekStart.getDate()} ${weekStart.toLocaleDateString('nl-NL', { month: 'short' })}`,
      totalKm: stats.totalKm,
      totalRuns: stats.totalRuns,
      avgPace: stats.avgPace,
    });
  }

  return dataPoints;
}

function getISOWeek(date: Date): number {
  const d = new Date(date.getTime());
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const week1 = new Date(d.getFullYear(), 0, 4);
  return 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
}

// Extract persoonlijke records uit best efforts
export function extractPersonalRecords(bestEfforts: StravaBestEffort[]): PersonalRecord[] {
  // Alleen PR's (rank 1)
  const prs = bestEfforts.filter((e) => e.pr_rank === 1);

  return prs.map((pr) => ({
    name: pr.name,
    distance: metersToKm(pr.distance) + ' km',
    time: formatDuration(pr.moving_time),
    date: formatDate(pr.start_date),
    paceFormatted: formatPace(pr.distance / pr.moving_time),
  }));
}

// === Hoofd verwerking ===

export function processAllStats(activities: StravaActivity[]): ProcessedStats {
  const now = new Date();
  const weekStart = getWeekStart(now);
  const monthStart = getMonthStart(now);
  const yearStart = getYearStart(now);
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  // Filter per periode
  const thisWeekActivities = activities.filter((a) => new Date(a.start_date_local) >= weekStart);
  const thisMonthActivities = activities.filter((a) => new Date(a.start_date_local) >= monthStart);
  const lastMonthActivities = activities.filter((a) => {
    const d = new Date(a.start_date_local);
    return d >= lastMonthStart && d < monthStart;
  });
  const thisYearActivities = activities.filter((a) => new Date(a.start_date_local) >= yearStart);

  const thisWeek = calculatePeriodStats(thisWeekActivities);
  const thisMonth = calculatePeriodStats(thisMonthActivities);
  const lastMonth = calculatePeriodStats(lastMonthActivities);
  const thisYear = calculatePeriodStats(thisYearActivities);
  const allTime = calculatePeriodStats(activities);

  const streaks = calculateStreak(activities);

  // Maandelijkse vergelijking
  const monthChange = lastMonth.totalKm > 0
    ? Math.round(((thisMonth.totalKm - lastMonth.totalKm) / lastMonth.totalKm) * 100)
    : 0;

  // PR's dit jaar tellen
  const yearPrs = thisYearActivities.reduce((sum, a) => sum + a.pr_count, 0);

  return {
    thisWeek,
    thisMonth: {
      ...thisMonth,
      comparedToLastMonth: monthChange,
    } as MonthStats,
    thisYear: {
      ...thisYear,
      totalRaces: 0, // Wordt later aangevuld met race data
      prs: yearPrs,
    } as YearStats,
    allTime: {
      totalKm: allTime.totalKm,
      totalRuns: allTime.totalRuns,
      totalTime: allTime.totalTime,
      avgPace: allTime.avgPace,
    } as AllTimeStats,
    recentActivities: activities
      .sort((a, b) => new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime())
      .slice(0, 20)
      .map(processActivity),
    personalRecords: [], // Wordt aangevuld via getActivity detail calls
    weeklyProgress: calculateWeeklyProgress(activities),
    currentStreak: streaks.current,
    longestStreak: streaks.longest,
  };
}
