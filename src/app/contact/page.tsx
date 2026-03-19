'use client';

import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const onderwerpen = [
  'Algemene vraag',
  'Lid worden',
  'Sponsoring',
  'Evenementen',
  'Anders',
];

export default function ContactPage() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [onderwerp, setOnderwerp] = useState('');
  const [bericht, setBericht] = useState('');
  const [verzonden, setVerzonden] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVerzonden(true);
  };

  const inputClasses =
    'w-full rounded-xl border border-emte-gray-300 px-4 py-3 text-emte-gray-900 placeholder:text-emte-gray-400 focus:outline-none focus:ring-2 focus:ring-emte-green focus:border-transparent transition';

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-emte-green py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-emte-yellow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-emte-yellow" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-emte-gray-200 sm:text-xl">
              Vragen, idee&euml;n of gewoon even hallo zeggen? We zitten in Westkapelle, aan de voet van de vuurtoren. Kom langs of stuur een bericht!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left column - Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <SectionHeading
                  title="Stuur Ons een Bericht"
                  subtitle="Vul het formulier in en we nemen zo snel mogelijk contact met je op."
                  centered={false}
                />
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                {verzonden ? (
                  <div className="rounded-2xl border border-emte-green/20 bg-emte-green/5 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emte-green/10">
                      <svg
                        className="h-8 w-8 text-emte-green"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-emte-gray-900">
                      Bericht Verzonden!
                    </h3>
                    <p className="mt-2 text-emte-gray-600">
                      Bedankt voor je bericht. We nemen zo snel mogelijk contact met je
                      op.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setVerzonden(false);
                        setNaam('');
                        setEmail('');
                        setOnderwerp('');
                        setBericht('');
                      }}
                      className="mt-6 text-sm font-semibold text-emte-green hover:text-emte-green-light transition"
                    >
                      Nog een bericht versturen &rarr;
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="naam"
                        className="mb-2 block text-sm font-medium text-emte-gray-700"
                      >
                        Naam
                      </label>
                      <input
                        type="text"
                        id="naam"
                        required
                        value={naam}
                        onChange={(e) => setNaam(e.target.value)}
                        placeholder="Je volledige naam"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-emte-gray-700"
                      >
                        E-mailadres
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="je@voorbeeld.nl"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="onderwerp"
                        className="mb-2 block text-sm font-medium text-emte-gray-700"
                      >
                        Onderwerp
                      </label>
                      <select
                        id="onderwerp"
                        required
                        value={onderwerp}
                        onChange={(e) => setOnderwerp(e.target.value)}
                        className={`${inputClasses} ${
                          onderwerp === '' ? 'text-emte-gray-400' : ''
                        }`}
                      >
                        <option value="" disabled>
                          Selecteer een onderwerp
                        </option>
                        {onderwerpen.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="bericht"
                        className="mb-2 block text-sm font-medium text-emte-gray-700"
                      >
                        Bericht
                      </label>
                      <textarea
                        id="bericht"
                        required
                        rows={5}
                        value={bericht}
                        onChange={(e) => setBericht(e.target.value)}
                        placeholder="Waar kunnen we je mee helpen?"
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-xl bg-emte-green px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:bg-emte-green-light active:bg-emte-green-dark focus:outline-none focus:ring-2 focus:ring-emte-green focus:ring-offset-2"
                    >
                      Verstuur Bericht
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Right column - Contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <SectionHeading
                  title="Contactgegevens"
                  subtitle="Je kunt ons ook rechtstreeks bereiken."
                  centered={false}
                />
              </AnimatedSection>

              <div className="space-y-4">
                {/* Email */}
                <AnimatedSection delay={0.25}>
                  <div className="flex items-start gap-4 rounded-2xl border border-emte-gray-100 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emte-green/10 text-emte-green">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emte-gray-900">E-mail</h3>
                      <a
                        href="mailto:info@emterunningteam.nl"
                        className="mt-1 text-emte-green hover:text-emte-green-light transition"
                      >
                        info@emterunningteam.nl
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Telefoon */}
                <AnimatedSection delay={0.3}>
                  <div className="flex items-start gap-4 rounded-2xl border border-emte-gray-100 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emte-green/10 text-emte-green">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emte-gray-900">Telefoon</h3>
                      <a
                        href="tel:+31612345678"
                        className="mt-1 text-emte-green hover:text-emte-green-light transition"
                      >
                        +31 6 12345678
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Locatie */}
                <AnimatedSection delay={0.35}>
                  <div className="flex items-start gap-4 rounded-2xl border border-emte-gray-100 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emte-green/10 text-emte-green">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-emte-gray-900">Locatie</h3>
                      <p className="mt-1 text-emte-gray-600">
                        Westkapelle, Zeeland
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Sponsor worden card */}
                <AnimatedSection delay={0.4}>
                  <div className="rounded-2xl border-2 border-emte-yellow bg-emte-yellow/5 p-6">
                    <h3 className="text-lg font-bold text-emte-gray-900">
                      Sponsor Worden?
                    </h3>
                    <p className="mt-2 text-sm text-emte-gray-600">
                      Wil je jouw merk verbinden aan een ambitieus en groeiend
                      hardloopteam uit Zeeland? Ontdek onze sponsormogelijkheden.
                    </p>
                    <div className="mt-4">
                      <Button href="/sponsoren" variant="secondary" size="sm">
                        Bekijk Mogelijkheden
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Social links */}
                <AnimatedSection delay={0.45}>
                  <div className="rounded-2xl border border-emte-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="font-semibold text-emte-gray-900">Volg Ons</h3>
                    <p className="mt-1 text-sm text-emte-gray-600">
                      Blijf op de hoogte via onze social media kanalen.
                    </p>
                    <div className="mt-4 flex gap-3">
                      {/* Instagram */}
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-emte-gray-100 text-emte-gray-600 transition hover:bg-emte-green hover:text-white"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                      {/* Strava */}
                      <a
                        href="#"
                        aria-label="Strava"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-emte-gray-100 text-emte-gray-600 transition hover:bg-emte-green hover:text-white"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
                        </svg>
                      </a>
                      {/* Facebook */}
                      <a
                        href="#"
                        aria-label="Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-emte-gray-100 text-emte-gray-600 transition hover:bg-emte-green hover:text-white"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex h-64 items-center justify-center rounded-2xl bg-emte-gray-100 sm:h-80">
              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-emte-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                  />
                </svg>
                <p className="mt-3 text-lg font-medium text-emte-gray-500">
                  Kaart volgt binnenkort
                </p>
                <p className="mt-1 text-sm text-emte-gray-400">
                  Westkapelle, Zeeland &mdash; niet te missen, net als de vuurtoren
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
