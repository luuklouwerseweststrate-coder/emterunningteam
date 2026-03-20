'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

interface Result {
  event: string;
  date: string;
  runner: string;
  distance: string;
  time: string;
  pr: boolean;
}

const results: Result[] = [
  {
    event: '65 van Walcheren 2025',
    date: '2025-06-14',
    runner: 'Luuk Louwerse',
    distance: '65 km',
    time: '7:12:34',
    pr: false,
  },
  {
    event: '65 van Walcheren 2025',
    date: '2025-06-14',
    runner: 'Bart Joziasse',
    distance: '65 km',
    time: '6:48:21',
    pr: true,
  },
  {
    event: '65 van Walcheren 2025',
    date: '2025-06-14',
    runner: 'Matthijs Geleijnse',
    distance: '40 km',
    time: '3:32:08',
    pr: true,
  },
  {
    event: '65 van Walcheren 2025',
    date: '2025-06-14',
    runner: 'Evi Passenier',
    distance: '40 km',
    time: '3:55:44',
    pr: false,
  },
  {
    event: '65 van Walcheren 2025',
    date: '2025-06-14',
    runner: 'Juriaan Boogaard',
    distance: '25 km',
    time: '2:18:05',
    pr: true,
  },
  {
    event: '65 van Walcheren 2025',
    date: '2025-06-14',
    runner: 'Imara Murre',
    distance: '25 km',
    time: '2:24:39',
    pr: false,
  },
  {
    event: 'Sip & Run 2025',
    date: '2025-09-06',
    runner: 'Matthijs Geleijnse',
    distance: '10 km',
    time: '48:22',
    pr: false,
  },
  {
    event: 'Sip & Run 2025',
    date: '2025-09-06',
    runner: 'Luuk Louwerse',
    distance: '10 km',
    time: '52:14',
    pr: false,
  },
  {
    event: 'Sip & Run 2025',
    date: '2025-09-06',
    runner: 'Imara Murre',
    distance: '10 km',
    time: '54:08',
    pr: false,
  },
  {
    event: 'Sip & Run 2025',
    date: '2025-09-06',
    runner: 'Bart Joziasse',
    distance: '10 km',
    time: '49:55',
    pr: false,
  },
  {
    event: 'Sip & Run 2025',
    date: '2025-09-06',
    runner: 'Juriaan Boogaard',
    distance: '10 km',
    time: '56:33',
    pr: false,
  },
  {
    event: 'Sip & Run 2025',
    date: '2025-09-06',
    runner: 'Evi Passenier',
    distance: '10 km',
    time: '51:47',
    pr: false,
  },
];

// Group results by event
function groupByEvent(results: Result[]) {
  const groups: Record<string, Result[]> = {};
  for (const r of results) {
    const key = `${r.event}|${r.date}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  }
  return Object.entries(groups)
    .map(([key, results]) => {
      const [event, date] = key.split('|');
      return { event, date, results: results.sort((a, b) => a.time.localeCompare(b.time)) };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export default function ResultatenPage() {
  const grouped = groupByEvent(results);

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
              Resultaten
            </h1>
            <div className="mt-4 h-1 w-20 rounded-full bg-emte-yellow" />
            <p className="mt-6 max-w-2xl text-lg text-emte-gray-200">
              Onze tijden, onze PR&apos;s en onze prestaties. Sommige gelopen met een
              kater, allemaal gevierd met een biertje.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="bg-emte-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Race Resultaten"
              subtitle="Alle tijden van het EMTE Running Team"
              centered
            />
          </AnimatedSection>

          <div className="space-y-10">
            {grouped.map((group, gi) => (
              <AnimatedSection key={group.event + group.date} delay={gi * 0.1}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                  {/* Event header */}
                  <div className="bg-emte-green px-6 py-4">
                    <h3 className="text-lg font-bold text-white">{group.event}</h3>
                    <p className="text-sm text-emte-gray-200">
                      {new Date(group.date).toLocaleDateString('nl-NL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  {/* Results table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-emte-gray-100">
                          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-emte-gray-500">
                            Loper
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-emte-gray-500">
                            Afstand
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-emte-gray-500">
                            Tijd
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-emte-gray-500">
                            PR
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.results.map((r, i) => (
                          <tr
                            key={r.runner + r.distance}
                            className={`${
                              i % 2 === 0 ? 'bg-white' : 'bg-emte-gray-50'
                            } transition-colors hover:bg-emte-yellow/5`}
                          >
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-emte-gray-900">
                              {r.runner}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-emte-gray-600">
                              {r.distance}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-mono font-semibold text-emte-green">
                              {r.time}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-center">
                              {r.pr && (
                                <span className="inline-flex items-center rounded-full bg-emte-yellow/20 px-2.5 py-0.5 text-xs font-bold text-emte-yellow-dark">
                                  PR!
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Team Stats Summary */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 text-center shadow-md">
                <p className="text-3xl font-bold text-emte-green">
                  {results.length}
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  Finishes totaal
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center shadow-md">
                <p className="text-3xl font-bold text-emte-green">
                  {results.filter((r) => r.pr).length}
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  Persoonlijke records
                </p>
              </div>
              <div className="rounded-2xl bg-emte-yellow/10 border-2 border-emte-yellow/30 p-6 text-center">
                <p className="text-3xl font-bold text-emte-yellow-dark">
                  100%
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  Na de finish een biertje
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
