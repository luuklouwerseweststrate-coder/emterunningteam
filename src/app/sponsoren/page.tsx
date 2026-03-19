'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { sponsors, sponsorPackages } from '@/data/sponsors';

const benefits = [
  {
    title: 'Logo op wedstrijdkleding',
    description:
      'Uw logo op het shirt van onze lopers — zichtbaar bij elke training en wedstrijd.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Zichtbaarheid op de website',
    description:
      'Uw bedrijf prominent in beeld op onze website met logo, beschrijving en directe link.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Aanwezigheid bij evenementen',
    description:
      'Uw banner en promotiemateriaal bij alle wedstrijden en evenementen van het team.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    title: 'Exposure op social media',
    description:
      'Regelmatige vermeldingen en tags op onze Instagram, Facebook en andere kanalen.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    title: 'Netwerkmogelijkheden',
    description:
      'Toegang tot een netwerk van lokale ondernemers en gelijkgestemde partners.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Gezamenlijke PR',
    description:
      'Samen in het nieuws. Persberichten, interviews en media-aandacht voor uw merk.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      'Het sponsoren van het EMTE Running Team voelt als een echt partnerschap. De gasten op onze camping vragen er regelmatig naar — het leeft echt in de gemeenschap.',
    author: 'Familie Boogaard',
    company: 'Mini Camping Boogaard',
  },
  {
    quote:
      'De zichtbaarheid die we krijgen bij evenementen door heel Zeeland is fantastisch. Van de Kustmarathon tot lokale lopen op Walcheren — een geweldig team om mee samen te werken.',
    author: 'Bombaai Team',
    company: 'Bombaai Strandbar',
  },
];

export default function SponsorenPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-emte-green-dark pb-24 pt-32">
        <div className="absolute inset-0">
          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-emte-green/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-emte-yellow/10 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-emte-yellow/20 px-4 py-1.5 text-sm font-semibold text-emte-yellow">
                Partnerschappen
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Samen Sterker
              </h1>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-emte-yellow" />
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emte-gray-200">
                Het EMTE Running Team draait op twee dingen: kilometers en sponsoren
                die snappen dat hybride atleten de beste ambassadeurs zijn.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-emte-gray-900 sm:text-4xl">
                Meer dan een logo op een bezweet shirt
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emte-yellow" />
              <p className="mt-6 text-lg leading-relaxed text-emte-gray-600">
                Sponsoring van het EMTE Running Team is een investering in
                zichtbaarheid bij wedstrijden, op terrassen en in kroegen door heel
                Zeeland. Uw merk is zichtbaar waar het ertoe doet — van de startlijn
                tot de bar. Onze sponsors zijn geen nummers, ze zijn onderdeel van
                het team.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Onze Sponsoren */}
      <section className="bg-emte-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Onze Sponsoren"
              subtitle="De bedrijven die het EMTE Running Team mogelijk maken"
              centered
            />
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {sponsors.map((sponsor, i) => (
              <AnimatedSection key={sponsor.id} delay={i * 0.15}>
                <motion.a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group block rounded-2xl bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-emte-gray-50 p-4">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={280}
                      height={160}
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-emte-gray-900 group-hover:text-emte-green">
                    {sponsor.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-emte-gray-600">
                    {sponsor.description}
                  </p>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Waarom sponsoren?"
              subtitle="Dit bieden wij onze partners"
              centered
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-emte-gray-100 bg-white p-6 transition-all hover:border-emte-green/20 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emte-green/10 text-emte-green">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-emte-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-emte-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Packages */}
      <section className="bg-emte-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Sponsorpakketten"
              subtitle="Kies het pakket dat bij uw organisatie past"
              centered
            />
          </AnimatedSection>
          <div className="grid items-stretch gap-8 lg:grid-cols-3">
            {sponsorPackages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-md ${
                    pkg.highlighted
                      ? 'border-2 border-emte-yellow ring-1 ring-emte-yellow/30'
                      : 'border border-emte-gray-100'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-emte-yellow px-4 py-1 text-xs font-bold text-emte-green-dark shadow-sm">
                        Populair
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-emte-gray-900">
                      {pkg.name}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-emte-green">
                        {pkg.price.split('/')[0].trim()}
                      </span>
                      <span className="text-sm text-emte-gray-500">/ jaar</span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-emte-gray-700"
                      >
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-emte-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.highlighted ? 'primary' : 'outline'}
                    size="md"
                    href="/contact"
                    className="w-full"
                  >
                    Neem contact op
                  </Button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Wat onze partners zeggen"
              centered
            />
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.company} delay={i * 0.15}>
                <div className="rounded-2xl bg-emte-gray-50 p-8">
                  <svg
                    className="mb-4 h-8 w-8 text-emte-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                  </svg>
                  <blockquote className="mb-6 text-lg leading-relaxed text-emte-gray-700">
                    {testimonial.quote}
                  </blockquote>
                  <div>
                    <p className="font-bold text-emte-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-emte-green">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emte-green-dark py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Word partner van het EMTE Running Team
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emte-yellow" />
              <p className="mt-6 text-lg leading-relaxed text-emte-gray-200">
                Wilt u uw merk verbinden aan de leukste hybride atleten van
                Zeeland? Wij vertellen u graag meer over de mogelijkheden. Geen
                verplichtingen, wel een goed gesprek — het liefst met een biertje erbij.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="secondary" size="lg" href="/contact">
                  Neem contact op
                </Button>
                <Button variant="outline" size="lg" href="mailto:sponsoring@emterunningteam.nl" className="border-white text-white hover:bg-white hover:text-emte-green-dark">
                  sponsoring@emterunningteam.nl
                </Button>
              </div>
              <p className="mt-8 text-sm text-emte-gray-300">
                Of bel direct: 076 - 123 45 67
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
