'use client';

import { motion } from 'framer-motion';
import { ProcessedStats } from '@/lib/strava/types';
import { formatDuration } from '@/lib/strava/utils';

interface StatsOverviewProps {
  stats: ProcessedStats;
}

function StatBlock({
  label,
  value,
  unit,
  subtext,
  highlight,
  delay,
}: {
  label: string;
  value: string | number;
  unit?: string;
  subtext?: string;
  highlight?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`rounded-2xl p-6 text-center ${
        highlight
          ? 'bg-emte-yellow/10 border-2 border-emte-yellow/30'
          : 'bg-white shadow-md'
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-emte-gray-500">
        {label}
      </p>
      <p className={`mt-2 text-3xl font-bold ${highlight ? 'text-emte-yellow-dark' : 'text-emte-green'}`}>
        {value}
        {unit && <span className="ml-1 text-lg font-medium text-emte-gray-400">{unit}</span>}
      </p>
      {subtext && (
        <p className="mt-1 text-xs text-emte-gray-400">{subtext}</p>
      )}
    </motion.div>
  );
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
  const avgPaceFormatted = stats.thisWeek.avgPace > 0
    ? `${Math.floor(stats.thisWeek.avgPace)}:${String(Math.round((stats.thisWeek.avgPace % 1) * 60)).padStart(2, '0')}`
    : '-';

  return (
    <div className="space-y-8">
      {/* Deze week */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-emte-gray-900">Deze week</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatBlock label="Kilometers" value={stats.thisWeek.totalKm} unit="km" delay={0} />
          <StatBlock label="Runs" value={stats.thisWeek.totalRuns} delay={0.05} />
          <StatBlock label="Tijd" value={formatDuration(stats.thisWeek.totalTime)} delay={0.1} />
          <StatBlock label="Gem. tempo" value={avgPaceFormatted} unit="/km" delay={0.15} />
        </div>
      </div>

      {/* Deze maand */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-emte-gray-900">Deze maand</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatBlock label="Kilometers" value={stats.thisMonth.totalKm} unit="km" delay={0.2} />
          <StatBlock label="Runs" value={stats.thisMonth.totalRuns} delay={0.25} />
          <StatBlock
            label="vs. vorige maand"
            value={`${stats.thisMonth.comparedToLastMonth > 0 ? '+' : ''}${stats.thisMonth.comparedToLastMonth}%`}
            highlight={stats.thisMonth.comparedToLastMonth > 0}
            delay={0.3}
          />
          <StatBlock label="Hoogtemeters" value={stats.thisMonth.totalElevation} unit="m" delay={0.35} />
        </div>
      </div>

      {/* Streaks + jaar totaal */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-emte-gray-900">Streaks & jaaroverzicht</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatBlock
            label="Huidige streak"
            value={stats.currentStreak}
            unit={stats.currentStreak === 1 ? 'dag' : 'dagen'}
            highlight
            delay={0.4}
          />
          <StatBlock
            label="Langste streak"
            value={stats.longestStreak}
            unit="dagen"
            delay={0.45}
          />
          <StatBlock
            label="Dit jaar"
            value={stats.thisYear.totalKm}
            unit="km"
            delay={0.5}
          />
          <StatBlock
            label="PR's dit jaar"
            value={stats.thisYear.prs}
            highlight={stats.thisYear.prs > 0}
            delay={0.55}
          />
        </div>
      </div>
    </div>
  );
}
