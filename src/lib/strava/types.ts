// Strava API types

export interface StravaTokens {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  athlete_id: number;
}

export interface StravaAthlete {
  id: number;
  firstname: string;
  lastname: string;
  profile: string;
  profile_medium: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  weight: number;
  created_at: string;
  updated_at: string;
}

export interface StravaActivity {
  id: number;
  name: string;
  type: string;
  sport_type: string;
  distance: number; // meters
  moving_time: number; // seconds
  elapsed_time: number; // seconds
  total_elevation_gain: number; // meters
  start_date: string;
  start_date_local: string;
  timezone: string;
  start_latlng: [number, number] | null;
  end_latlng: [number, number] | null;
  achievement_count: number;
  pr_count: number;
  average_speed: number; // m/s
  max_speed: number; // m/s
  average_heartrate?: number;
  max_heartrate?: number;
  average_cadence?: number;
  suffer_score?: number;
  map: {
    id: string;
    summary_polyline: string | null;
    polyline?: string | null;
  };
  kudos_count: number;
  comment_count: number;
  photo_count: number;
  has_kudos: boolean;
  calories?: number;
  description?: string;
  workout_type?: number;
}

export interface StravaDetailedActivity extends StravaActivity {
  map: {
    id: string;
    polyline: string | null;
    summary_polyline: string | null;
  };
  splits_metric?: StravaSplit[];
  laps?: StravaLap[];
  best_efforts?: StravaBestEffort[];
  segment_efforts?: StravaSegmentEffort[];
}

export interface StravaSplit {
  distance: number;
  elapsed_time: number;
  moving_time: number;
  average_speed: number;
  elevation_difference: number;
  split: number;
  pace_zone: number;
}

export interface StravaLap {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  average_speed: number;
  max_speed: number;
  lap_index: number;
  split: number;
}

export interface StravaBestEffort {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  start_date: string;
  pr_rank: number | null;
}

export interface StravaSegmentEffort {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  pr_rank: number | null;
  achievements: { type_id: number; type: string; rank: number }[];
}

export interface StravaAthleteStats {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_run_totals: StravaActivityTotals;
  recent_ride_totals: StravaActivityTotals;
  ytd_run_totals: StravaActivityTotals;
  ytd_ride_totals: StravaActivityTotals;
  all_run_totals: StravaActivityTotals;
  all_ride_totals: StravaActivityTotals;
}

export interface StravaActivityTotals {
  count: number;
  distance: number; // meters
  moving_time: number; // seconds
  elapsed_time: number; // seconds
  elevation_gain: number; // meters
  achievement_count?: number;
}

// Verwerkte data types voor de UI

export interface ProcessedStats {
  thisWeek: WeekStats;
  thisMonth: MonthStats;
  thisYear: YearStats;
  allTime: AllTimeStats;
  recentActivities: ProcessedActivity[];
  personalRecords: PersonalRecord[];
  weeklyProgress: WeeklyDataPoint[];
  currentStreak: number;
  longestStreak: number;
}

export interface WeekStats {
  totalKm: number;
  totalRuns: number;
  totalTime: number; // seconds
  avgPace: number; // min/km
  totalElevation: number;
}

export interface MonthStats extends WeekStats {
  comparedToLastMonth: number; // percentage change
}

export interface YearStats extends WeekStats {
  totalRaces: number;
  prs: number;
}

export interface AllTimeStats {
  totalKm: number;
  totalRuns: number;
  totalTime: number;
  avgPace: number;
}

export interface ProcessedActivity {
  id: number;
  name: string;
  type: string;
  date: string;
  distanceKm: number;
  durationFormatted: string;
  paceFormatted: string;
  elevationGain: number;
  averageHeartrate?: number;
  calories?: number;
  kudosCount: number;
  achievementCount: number;
  prCount: number;
  polyline: string | null;
  startLatlng: [number, number] | null;
  sufferScore?: number;
}

export interface PersonalRecord {
  name: string;
  distance: string;
  time: string;
  date: string;
  paceFormatted: string;
}

export interface WeeklyDataPoint {
  week: string; // "2026-W16"
  weekLabel: string; // "14 apr"
  totalKm: number;
  totalRuns: number;
  avgPace: number;
}
