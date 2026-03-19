'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import EventCard from '@/components/ui/EventCard';
import { events } from '@/data/events';

type Tab = 'upcoming' | 'past';

export default function EvenementenPage() {
  const [activeTab, setActiveTab] = useState<Tab>('upcoming');

  const filteredEvents = events
    .filter((e) => e.status === activeTab)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return activeTab === 'upcoming' ? dateA - dateB : dateB - dateA;
    });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-emte-green pb-20 pt-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emte-yellow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Evenementen
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-emte-yellow" />
            <p className="mt-6 max-w-2xl text-lg text-emte-gray-200">
              Van duinlopen langs de Walcherse kust tot grote marathons door Zeeland
              — het EMTE Running Team is overal te vinden. Bekijk waar je ons kunt
              tegenkomen en sluit je aan!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tab Filter + Events */}
      <section className="bg-emte-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Onze Agenda"
              subtitle="Plan je volgende wedstrijd samen met het team"
              centered
            />
          </AnimatedSection>

          {/* Tabs */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12 flex justify-center">
              <div className="inline-flex rounded-xl bg-white p-1 shadow-md">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`relative rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'bg-emte-green text-white shadow-sm'
                      : 'text-emte-gray-600 hover:text-emte-green'
                  }`}
                >
                  Aankomend
                  {activeTab === 'upcoming' && (
                    <motion.span
                      layoutId="tab-count"
                      className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emte-yellow text-xs font-bold text-emte-green-dark"
                    >
                      {filteredEvents.length}
                    </motion.span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`relative rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'bg-emte-green text-white shadow-sm'
                      : 'text-emte-gray-600 hover:text-emte-green'
                  }`}
                >
                  Afgelopen
                  {activeTab === 'past' && (
                    <motion.span
                      layoutId="tab-count"
                      className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emte-yellow text-xs font-bold text-emte-green-dark"
                    >
                      {filteredEvents.length}
                    </motion.span>
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline-style events grid */}
          {filteredEvents.length > 0 ? (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-emte-green/20 lg:left-1/2 lg:block" />

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event, index) => (
                  <AnimatedSection
                    key={event.id}
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                  >
                    {/* Date marker */}
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-emte-green">
                        <div className="h-1.5 w-1.5 rounded-full bg-emte-yellow" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-emte-gray-400">
                        {new Date(event.date).toLocaleDateString('nl-NL', {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <EventCard
                      name={event.name}
                      date={event.date}
                      location={event.location}
                      distance={event.distance}
                      status={event.status}
                      description={event.description}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ) : (
            <AnimatedSection>
              <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emte-green/10">
                  <svg
                    className="h-8 w-8 text-emte-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-emte-gray-900">
                  {activeTab === 'upcoming'
                    ? 'Geen aankomende evenementen'
                    : 'Geen afgelopen evenementen'}
                </h3>
                <p className="mt-2 text-sm text-emte-gray-500">
                  {activeTab === 'upcoming'
                    ? 'Er worden binnenkort nieuwe evenementen aangekondigd. Houd deze pagina in de gaten!'
                    : 'Er zijn nog geen afgelopen evenementen geregistreerd.'}
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Stats / CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-emte-green p-10 text-center lg:p-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Loop je volgende wedstrijd met ons
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-emte-gray-200">
                Samen trainen langs de Zeeuwse kust, samen reizen, samen finishen.
                Sluit je aan bij het EMTE Running Team vanuit Westkapelle en maak
                van elke wedstrijd een teambelevenis.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                {[
                  { value: `${events.length}+`, label: 'Evenementen per jaar' },
                  { value: '30+', label: 'Actieve lopers' },
                  { value: '100%', label: 'Teamspirit' },
                ].map((stat, i) => (
                  <AnimatedSection key={stat.label} delay={i * 0.15}>
                    <div>
                      <div className="text-4xl font-extrabold text-emte-yellow">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-emte-gray-200">
                        {stat.label}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
