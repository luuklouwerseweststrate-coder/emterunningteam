'use client';

import { Suspense, useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import type { ProcessedStats, StravaAthleteStats } from '@/lib/strava/types';
import { formatDuration, metersToKm } from '@/lib/strava/utils';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StravaConnect from '@/components/strava/StravaConnect';
import StatsOverview from '@/components/strava/StatsOverview';
import WeeklyChart from '@/components/strava/WeeklyChart';
import ActivityFeed from '@/components/strava/ActivityFeed';

interface StravaData {
  connected: boolean;
  athlete?: {
    id: number;
    firstname: string;
    lastname: string;
    profile: string;
    profile_medium: string;
  };
  stats?: ProcessedStats;
  athleteStats?: StravaAthleteStats;
  lastUpdated?: string;
  error?: string;
}

function StravaDashboard() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<StravaData | null>(null);
  const [loading, setLoading] = useState(true);

  const justConnected = searchParams.get('connected') === 'true';
  const authError = searchParams.get('error');

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/strava/data');
      const json = await res.json();
      setData(json);
    } catch {
      setData({ connected: false, error: 'Kan Strava data niet laden' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emte-green-dark via-emte-green to-emte-green-light pb-16 pt-44 sm:pt-52">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#FC4C02]" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emte-yellow" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <AnimatedSection>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FC4C02]/20">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[#FC4C02]" aria-hidden="true">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Strava Dashboard
                  </h1>
                  <p className="mt-1 text-emte-gray-200">
                    Live hardloopdata van het EMTE Running Team
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {data && (
              <StravaConnect
                connected={data.connected}
                athleteName={data.athlete ? `${data.athlete.firstname} ${data.athlete.lastname}` : undefined}
                athletePhoto={data.athlete?.profile_medium}
              />
            )}
          </div>

          {justConnected && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-xl bg-green-500/20 px-4 py-3 text-sm text-green-100"
            >
              Strava succesvol verbonden! Je data wordt nu geladen...
            </motion.div>
          )}
          {authError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-100"
            >
              {authError === 'auth_denied'
                ? 'Je hebt de Strava-autorisatie geweigerd. Probeer het opnieuw.'
                : 'Er ging iets mis bij het verbinden. Probeer het opnieuw.'}
            </motion.div>
          )}
        </div>
      </section>

      {loading && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-emte-green border-t-transparent" />
              <p className="text-emte-gray-500">Strava data laden...</p>
            </div>
          </div>
        </section>
      )}

      {!loading && data && !data.connected && (
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="rounded-3xl bg-white p-12 shadow-xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FC4C02]/10">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 fill-[#FC4C02]" aria-hidden="true">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-emte-gray-900">
                  Verbind je Strava account
                </h2>
                <p className="mt-3 text-emte-gray-600">
                  Koppel je Strava om live hardloopstatistieken, activiteiten en
                  persoonlijke records te zien op je dashboard.
                </p>
                <div className="mt-8">
                  <StravaConnect connected={false} />
                </div>
                <p className="mt-6 text-xs text-emte-gray-400">
                  We vragen alleen leestoegang tot je activiteiten. We kunnen niets wijzigen of posten.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {!loading && data?.connected && data.stats && (
        <>
          <section className="bg-emte-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <StatsOverview stats={data.stats} />
              </AnimatedSection>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <WeeklyChart data={data.stats.weeklyProgress} />
              </AnimatedSection>
            </div>
          </section>

          {data.athleteStats && (
            <section className="bg-emte-green py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                  <div className="text-center">
                    <h3 className="mb-8 text-lg font-bold text-emte-yellow">
                      All-time hardloopstatistieken
                    </h3>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                      <div>
                        <p className="text-3xl font-bold text-white">
                          {metersToKm(data.athleteStats.all_run_totals.distance).toLocaleString('nl-NL')}
                        </p>
                        <p className="mt-1 text-sm text-white/60">kilometer totaal</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">
                          {data.athleteStats.all_run_totals.count}
                        </p>
                        <p className="mt-1 text-sm text-white/60">runs totaal</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">
                          {formatDuration(data.athleteStats.all_run_totals.moving_time)}
                        </p>
                        <p className="mt-1 text-sm text-white/60">totale looptijd</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-emte-yellow">
                          {Math.round(data.athleteStats.all_run_totals.elevation_gain).toLocaleString('nl-NL')}
                        </p>
                        <p className="mt-1 text-sm text-white/60">hoogtemeters</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )}

          <section className="bg-emte-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <h2 className="mb-2 text-2xl font-bold text-emte-gray-900">
                  Recente activiteiten
                </h2>
                <p className="mb-8 text-emte-gray-500">
                  De laatste runs, trails en workouts
                </p>
              </AnimatedSection>
              <ActivityFeed activities={data.stats.recentActivities} />
            </div>
          </section>

          {data.lastUpdated && (
            <div className="bg-white py-4 text-center text-xs text-emte-gray-400">
              Laatste update: {new Date(data.lastUpdated).toLocaleString('nl-NL')}
              <button
                onClick={fetchData}
                className="ml-2 text-emte-green underline hover:no-underline"
              >
                Vernieuwen
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}

// Wrapper met Suspense (vereist door useSearchParams in Next.js)
export default function StravaPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-emte-green-dark via-emte-green to-emte-green-light pb-16 pt-44 sm:pt-52">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Strava Dashboard
            </h1>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-emte-green border-t-transparent" />
              <p className="text-emte-gray-500">Laden...</p>
            </div>
          </div>
        </section>
      </main>
    }>
      <StravaDashboard />
    </Suspense>
  );
}
