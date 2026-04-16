'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ProcessedStats } from '@/lib/strava/types';
import ActivityCard from './ActivityCard';

interface MemberStravaStatsProps {
  memberId: string;
}

interface StravaResponse {
  connected: boolean;
  stats?: ProcessedStats;
}

export default function MemberStravaStats({ memberId }: MemberStravaStatsProps) {
  const [data, setData] = useState<StravaResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Voorlopig laden we data van de primary athlete (Luuk)
    // Later: koppeling per teamlid
    if (memberId !== 'luuk-louwerse') {
      setLoading(false);
      return;
    }

    fetch('/api/strava/data')
      .then((r) => r.json())
      .then((json) => setData(json))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [memberId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-3 border-emte-green border-t-transparent" />
      </div>
    );
  }

  if (!data?.connected || !data.stats) {
    // Niet verbonden of niet dit teamlid
    if (memberId === 'luuk-louwerse') {
      return (
        <div className="rounded-2xl bg-emte-gray-50 p-8 text-center">
          <p className="text-emte-gray-500">Strava nog niet verbonden</p>
          <a
            href="/strava"
            className="mt-3 inline-block text-sm font-medium text-emte-green underline hover:no-underline"
          >
            Verbind Strava op het dashboard
          </a>
        </div>
      );
    }
    return null; // Andere teamleden: toon niets
  }

  const { stats } = data;

  return (
    <div className="space-y-8">
      {/* Live stats header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FC4C02]/10">
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#FC4C02]" aria-hidden="true">
            <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-emte-gray-900">Live Strava data</h2>
        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-emte-gray-50 p-5 text-center"
        >
          <p className="text-3xl font-bold text-emte-green">{stats.thisWeek.totalKm}</p>
          <p className="mt-1 text-sm text-emte-gray-500">km deze week</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl bg-emte-gray-50 p-5 text-center"
        >
          <p className="text-3xl font-bold text-emte-green">{stats.thisMonth.totalKm}</p>
          <p className="mt-1 text-sm text-emte-gray-500">km deze maand</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-emte-gray-50 p-5 text-center"
        >
          <p className="text-3xl font-bold text-emte-green">{stats.thisYear.totalKm}</p>
          <p className="mt-1 text-sm text-emte-gray-500">km dit jaar</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl bg-emte-yellow/10 border-2 border-emte-yellow/30 p-5 text-center"
        >
          <p className="text-3xl font-bold text-emte-yellow-dark">{stats.currentStreak}</p>
          <p className="mt-1 text-sm text-emte-gray-500">dagen streak</p>
        </motion.div>
      </div>

      {/* Laatste 3 activiteiten */}
      {stats.recentActivities.length > 0 && (
        <div>
          <h3 className="mb-4 text-lg font-bold text-emte-gray-900">Laatste activiteiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.recentActivities.slice(0, 3).map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <a
              href="/strava"
              className="text-sm font-medium text-emte-green underline hover:no-underline"
            >
              Bekijk alle activiteiten op het Strava dashboard &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
