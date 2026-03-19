"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function MissionSection() {
  return (
    <section className="py-24 bg-emte-green-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emte-green-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emte-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-emte-yellow/10 text-emte-yellow rounded-full border border-emte-yellow/20 mb-6">
            Onze Missie
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Samen sneller,{" "}
            <span className="text-emte-yellow">samen sterker</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Het EMTÉ Running Team gelooft dat hardlopen meer is dan kilometers vreten.
            Het gaat om de mensen naast je, het gevoel na de finish en de drive om steeds
            een stukje beter te worden. Wij combineren serieuze sportambitie met een
            teamcultuur waar iedereen welkom is — van de doorgewinterde marathonloper
            tot de enthousiaste beginner die net ontdekt heeft dat hardlopen eigenlijk
            best leuk is (na de eerste twee kilometer).
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Toegankelijk",
                text: "Iedereen kan meedoen, ongeacht niveau. Wij geloven in groei, niet in uitsluiting.",
              },
              {
                title: "Professioneel",
                text: "Met serieuze trainingsschema's, goede begeleiding en de juiste sponsoren.",
              },
              {
                title: "Verbindend",
                text: "We bouwen niet alleen aan snelle tijden, maar ook aan sterke vriendschappen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-emte-yellow">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
