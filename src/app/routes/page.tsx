'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { routes, type RunRoute } from '@/data/routes';

// Dynamic import for Leaflet (no SSR)
const RouteMap = dynamic(() => import('@/components/ui/RouteMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] items-center justify-center rounded-2xl bg-emte-gray-100">
      <div className="text-center">
        <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-emte-green border-t-transparent" />
        <p className="text-sm text-emte-gray-500">Kaart laden...</p>
      </div>
    </div>
  ),
});

const difficultyColors: Record<string, string> = {
  Makkelijk: 'bg-green-100 text-green-700',
  Gemiddeld: 'bg-yellow-100 text-yellow-700',
  Pittig: 'bg-red-100 text-red-700',
};

export default function RoutesPage() {
  const [selectedRoute, setSelectedRoute] = useState<RunRoute | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-emte-green pb-20 pt-44 sm:pt-52">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emte-yellow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hardlooproutes
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-emte-yellow" />
            <p className="mt-6 max-w-2xl text-lg text-emte-gray-200">
              Onze favoriete routes op Walcheren. Van dijkenrondjes tot
              duinentrails, elke route eindigt bij een kroeg. Want zo doen we dat
              bij het EMTE Running Team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Map + Routes */}
      <section className="bg-emte-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Ontdek Walcheren"
              subtitle="Klik op een route voor meer info, of bekijk ze op de kaart"
              centered
            />
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Route Cards */}
            <div className="space-y-4 lg:col-span-1">
              {routes.map((route, i) => (
                <AnimatedSection key={route.id} delay={i * 0.1}>
                  <motion.button
                    onClick={() =>
                      setSelectedRoute(
                        selectedRoute?.id === route.id ? null : route
                      )
                    }
                    whileHover={{ x: 4 }}
                    className={`w-full rounded-2xl border-2 p-5 text-left transition-all ${
                      selectedRoute?.id === route.id
                        ? 'border-emte-green bg-emte-green/5 shadow-lg'
                        : 'border-transparent bg-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-bold text-emte-gray-900">
                        {route.name}
                      </h3>
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: route.color }}
                      />
                    </div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-emte-green/10 px-2.5 py-0.5 text-xs font-semibold text-emte-green">
                        {route.distance}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${difficultyColors[route.difficulty]}`}
                      >
                        {route.difficulty}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-emte-gray-600 line-clamp-2">
                      {route.description}
                    </p>

                    {/* Pub stop preview */}
                    <div className="mt-3 flex items-center gap-2 rounded-lg bg-emte-yellow/10 px-3 py-2">
                      <span className="text-base">🍺</span>
                      <div>
                        <p className="text-xs font-semibold text-emte-gray-900">
                          {route.pubStop.name}
                        </p>
                        <p className="text-xs text-emte-gray-500">
                          {route.pubStop.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                </AnimatedSection>
              ))}
            </div>

            {/* Map */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="sticky top-32 overflow-hidden rounded-2xl shadow-lg">
                <RouteMap
                  routes={routes}
                  selectedRoute={selectedRoute}
                  onSelectRoute={setSelectedRoute}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Selected route detail */}
      {selectedRoute && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="rounded-2xl border-2 border-emte-green/20 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: selectedRoute.color }}
                  />
                  <h2 className="text-2xl font-bold text-emte-gray-900">
                    {selectedRoute.name}
                  </h2>
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-emte-green/10 px-3 py-1 text-sm font-semibold text-emte-green">
                    {selectedRoute.distance}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${difficultyColors[selectedRoute.difficulty]}`}
                  >
                    {selectedRoute.difficulty}
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-emte-gray-700">
                  {selectedRoute.description}
                </p>
                <div className="mt-6 rounded-xl bg-emte-yellow/10 p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🍺</span>
                    <div>
                      <h3 className="font-bold text-emte-gray-900">
                        Kroeg-stop: {selectedRoute.pubStop.name}
                      </h3>
                      <p className="text-sm text-emte-gray-600">
                        {selectedRoute.pubStop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </main>
  );
}
