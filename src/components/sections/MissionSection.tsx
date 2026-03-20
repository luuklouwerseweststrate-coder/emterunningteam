"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import WestkapelleTower from "@/components/ui/WestkapelleTower";

export default function MissionSection() {
  return (
    <section className="py-24 bg-emte-green-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emte-green-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emte-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Tower silhouette - subtle background element */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <WestkapelleTower height={500} color="white" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-emte-yellow/10 text-emte-yellow rounded-full border border-emte-yellow/20 mb-6">
            Onze Missie
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Zaterdag de kroeg,{" "}
            <span className="text-emte-yellow">zondag de dijk</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            Geworteld in Westkapelle, gevormd door de Zeeuwse wind en
            zaterdagavonden in het cafe. Het EMTE Running Team gelooft dat
            hardlopen en bier drinken geen tegenstellingen zijn, het zijn twee
            kanten van dezelfde medaille. Wij zijn hybride atleten: we lopen
            PR's op zondagochtend met de kater van zaterdagavond. De finish
            is pas compleet met een biertje in de hand. En de borrel is pas
            compleet als je weet dat je morgen weer gaat lopen.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Geen Excuses",
                text: "Kater? Geen excuus. Laat uit de kroeg? Geen excuus. Zondagochtend wordt er gelopen. Altijd.",
              },
              {
                title: "Balans",
                text: "Elke kilometer die je loopt is een drankje dat je mag drinken. Wij noemen dat sportwetenschap.",
              },
              {
                title: "Zeeuws Karakter",
                text: "Nuchter, vastberaden en altijd door, of het nou de dijk is of de derde ronde aan de bar.",
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
