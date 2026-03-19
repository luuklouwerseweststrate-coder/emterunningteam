import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Over Ons | EMTE Running Team',
  description:
    'Leer het EMTE Running Team kennen. Hybride atleten uit Westkapelle: zaterdag in de kroeg, zondag in de hardloopschoenen.',
};

const timeline = [
  {
    year: '2019',
    title: 'De Dronken Weddenschap',
    description:
      'Na te veel biertjes in een Westkapels cafe wedden een paar vrienden dat ze de 65 van Walcheren kunnen lopen. De volgende ochtend — met kater — staan ze er nog steeds achter. Het EMTE Running Team is geboren.',
  },
  {
    year: '2020',
    title: 'Eerste Kater-Run',
    description:
      'De traditie begint: zaterdagavond de kroeg, zondagochtend de dijk. Ondanks corona wordt de eerste officiele kater-run gelopen — een virtuele 10 km die begint en eindigt bij de koelkast.',
  },
  {
    year: '2022',
    title: 'Officieel Tenue & Eerste Borrel-Sponsor',
    description:
      'De teamshirts worden onthuld op een borrel die drie dagen duurt. Het team groeit en de hybride atleet-filosofie verspreidt zich door Walcheren.',
  },
  {
    year: '2023',
    title: 'Eerste Sponsoren',
    description:
      'Lokale bedrijven herkennen de kracht van hybride atleten. De eerste sponsoren sluiten zich aan — ze snappen dat bier en kilometers prima samengaan.',
  },
  {
    year: '2024',
    title: 'Recordjaar',
    description:
      'De 65 van Walcheren, de Kustmarathon en talloze kroegentochten. We bewijzen dat je een marathon kunt lopen op zondagochtend en zaterdagavond nog in de kroeg kunt staan.',
  },
];

const cultuurCards = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Iedereen Welkom',
    description:
      'Of je nou een bierveteraan bent of meer van de wijn — bij ons is iedereen welkom. Geen minimum tempo, geen maximum drankjes.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: 'Hybride Ambitie',
    description:
      'We lopen PR\'s op zondagochtend met de kater van zaterdagavond. Dat is pas echte ambitie. Presteren en feesten gaan bij ons hand in hand.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    title: 'De Derde Helft',
    description:
      'De finish is pas het begin. Daarna volgt het belangrijkste onderdeel: bier, slechte grappen en verhalen die steeds mooier worden.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: 'Teamgevoel',
    description:
      'Samen lopen, samen drinken, samen de kater overleven. We moedigen elkaar aan — zowel bij kilometer 30 als bij rondje 10.',
  },
];

export default function OverOnsPage() {
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
              Over Ons
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-emte-yellow" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-emte-gray-200 sm:text-xl">
              Hybride atleten uit Westkapelle. Zaterdag in de kroeg, zondag in de
              hardloopschoenen. Dit is ons verhaal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ons Verhaal */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <SectionHeading
                title="Ons Verhaal"
                subtitle="Van kroeg naar startlijn"
                centered
              />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative my-10 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/team-group.jpeg"
                  alt="Het EMTE Running Team samen op de Walcherse kust"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-6 py-4">
                  <p className="text-sm font-medium text-white">Het EMTE Running Team — samen onderweg</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6 text-lg leading-relaxed text-emte-gray-700">
                <p>
                  Het begon allemaal met een dronken weddenschap in een Westkapels cafe.
                  In 2019 daagde iemand na zes biertjes de rest uit om de 65 van
                  Walcheren te lopen. &quot;Hoe moeilijk kan het zijn?&quot; waren de beroemde
                  laatste woorden. De volgende ochtend — met een monumentale kater —
                  stond iedereen er nog steeds achter. Dat zegt alles over dit team.
                </p>
                <p>
                  Wat volgde was een traditie die tot op de dag van vandaag
                  voortduurt: zaterdagavond de kroeg, zondagochtend de dijk. De
                  WhatsApp-groep &quot;Kater Run?&quot; groeide sneller dan het bierverbruik.
                  En ergens tussen de trainingen op de dijk en de biertjes op het
                  terras ontstond er iets bijzonders: een team van hybride atleten
                  die bewijzen dat bier en kilometers prima samengaan.
                </p>
                <p>
                  Vandaag de dag zijn we een hecht team van hybride atleten uit
                  Westkapelle. Van de bierveteraan die zijn kater eraf loopt tot de
                  prosecco princess die na elke trail een fles ontkurkt. Wat ons
                  bindt? De overtuiging dat het leven te kort is om te kiezen tussen
                  de kroeg en de hardloopschoenen. Wij doen gewoon allebei.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-emte-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Onze Mijlpalen"
              subtitle="De belangrijkste momenten uit onze geschiedenis"
              centered
            />
          </AnimatedSection>

          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-emte-gray-200 sm:left-1/2 sm:-translate-x-px" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <AnimatedSection
                    key={item.year}
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? 'left' : 'right'}
                  >
                    <div className="relative flex items-start gap-6 sm:gap-8">
                      {/* Dot */}
                      <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-emte-yellow bg-white shadow-md sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                        <span className="text-sm font-bold text-emte-green-dark">
                          {item.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 rounded-2xl bg-white p-6 shadow-sm sm:w-[calc(50%-3rem)] ${
                          index % 2 === 0
                            ? 'sm:mr-auto sm:pr-8'
                            : 'sm:ml-auto sm:pl-8'
                        }`}
                      >
                        <h3 className="text-lg font-bold text-emte-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-emte-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Cultuur */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Onze Cultuur"
              subtitle="De waarden die ons team vormgeven"
              centered
            />
          </AnimatedSection>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {cultuurCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-emte-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emte-green/10 text-emte-green">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-emte-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-emte-gray-600">
                    {card.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Wat Ons Anders Maakt */}
      <section className="bg-emte-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              title="Wat Ons Anders Maakt"
              subtitle="De balans tussen de kroeg en de startlijn"
              centered
            />
          </AnimatedSection>

          <div className="mx-auto max-w-4xl">
            <AnimatedSection delay={0.1}>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emte-yellow/20">
                    <svg className="h-6 w-6 text-emte-yellow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-emte-gray-900">Geen Excuses</h3>
                  <p className="mt-2 text-sm text-emte-gray-600">
                    Kater? Geen excuus. Zondagochtend wordt er gelopen. Altijd.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emte-yellow/20">
                    <svg className="h-6 w-6 text-emte-yellow" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-emte-gray-900">Hybride Lifestyle</h3>
                  <p className="mt-2 text-sm text-emte-gray-600">
                    Bier op zaterdag, PR&apos;s op zondag. Dat is onze manier van leven.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emte-yellow/20">
                    <svg className="h-6 w-6 text-emte-yellow" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-emte-gray-900">Samen Sterk</h3>
                  <p className="mt-2 text-sm text-emte-gray-600">
                    Van trainingsadvies tot morele support bij rondje 8 aan de bar.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Quote */}
            <AnimatedSection delay={0.2}>
              <div className="mt-12 rounded-2xl bg-emte-green p-8 text-center sm:p-12">
                <svg
                  className="mx-auto mb-4 h-10 w-10 text-emte-yellow opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg font-medium italic leading-relaxed text-white sm:text-xl">
                  &quot;Ik kwam voor het bier, maar ik bleef voor de kilometers. Of
                  was het andersom? Maakt niet uit — dit team heeft me een
                  betere loper en een betere drinker gemaakt.&quot;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-emte-yellow">
                  &mdash; Een anonieme hybride atleet
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl rounded-2xl bg-emte-green p-10 text-center shadow-xl sm:p-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Word Deel van Ons Verhaal
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emte-yellow" />
              <p className="mx-auto mt-6 max-w-xl text-lg text-emte-gray-200">
                Of je nu wilt meelopen, meedrinken of allebei &mdash; we horen graag van je.
                Het enige wat je nodig hebt is hardloopschoenen en een gezonde dorst.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" variant="secondary" size="lg">
                  Neem Contact Op
                </Button>
                <Button href="/sponsoren" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emte-green">
                  Sponsor Worden
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
