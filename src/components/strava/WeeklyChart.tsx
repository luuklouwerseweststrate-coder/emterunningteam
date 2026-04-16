'use client';

import { motion } from 'framer-motion';
import { WeeklyDataPoint } from '@/lib/strava/types';

interface WeeklyChartProps {
  data: WeeklyDataPoint[];
}

export default function WeeklyChart({ data }: WeeklyChartProps) {
  if (data.length === 0) return null;

  const maxKm = Math.max(...data.map((d) => d.totalKm), 1);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h3 className="mb-6 text-lg font-bold text-emte-gray-900">
        Wekelijkse kilometers
      </h3>

      <div className="flex items-end gap-2" style={{ height: 200 }}>
        {data.map((point, i) => {
          const heightPercent = (point.totalKm / maxKm) * 100;
          const isCurrentWeek = i === data.length - 1;

          return (
            <div
              key={point.week}
              className="group relative flex flex-1 flex-col items-center justify-end"
              style={{ height: '100%' }}
            >
              {/* Tooltip */}
              <div className="pointer-events-none absolute -top-12 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-emte-gray-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                <p className="font-bold">{point.totalKm} km</p>
                <p className="text-emte-gray-300">{point.totalRuns} runs</p>
              </div>

              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${Math.max(heightPercent, 2)}%` }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
                className={`w-full rounded-t-lg transition-colors ${
                  isCurrentWeek
                    ? 'bg-emte-yellow'
                    : 'bg-emte-green/70 group-hover:bg-emte-green'
                }`}
              />

              {/* Label */}
              <p className={`mt-2 text-[10px] leading-none ${
                isCurrentWeek ? 'font-bold text-emte-yellow-dark' : 'text-emte-gray-400'
              }`}>
                {point.weekLabel}
              </p>
            </div>
          );
        })}
      </div>

      {/* Totalen */}
      <div className="mt-6 flex items-center justify-between border-t border-emte-gray-100 pt-4">
        <div className="text-sm text-emte-gray-500">
          Afgelopen {data.length} weken
        </div>
        <div className="flex gap-6">
          <div className="text-right">
            <p className="text-lg font-bold text-emte-green">
              {Math.round(data.reduce((s, d) => s + d.totalKm, 0))}
            </p>
            <p className="text-xs text-emte-gray-400">totaal km</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-emte-green">
              {Math.round(data.reduce((s, d) => s + d.totalKm, 0) / data.length)}
            </p>
            <p className="text-xs text-emte-gray-400">gem. km/week</p>
          </div>
        </div>
      </div>
    </div>
  );
}
