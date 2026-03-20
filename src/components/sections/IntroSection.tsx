"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <SectionHeading
            title="Hybride Atleten"
            subtitle="Wij zijn het EMTE Running Team"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-emte-gray-600 leading-relaxed max-w-3xl mx-auto">
            Wat begon als een dronken weddenschap in een Waschappels cafe is
            uitgegroeid tot een team van hybride atleten met een duidelijke
            filosofie: je kunt zaterdagavond in de kroeg staan en zondagochtend
            een PR lopen. Wij bewijzen dat bier en hardlopen prima samengaan.
            Met de Zeeuwse kust als ons decor en de kater als vaste
            trainingspartner, bij ons vind je de juiste energie, het juiste
            gezelschap en altijd een goed excuus om na de finish een biertje
            te pakken.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hybride Lifestyle",
                description:
                  "Zaterdagavond de kroeg, zondagochtend de dijk. Wij combineren feesten met presteren.",
                icon: "\uD83C\uDF7B",
              },
              {
                title: "Zeeuws DNA",
                description:
                  "Nuchter, vastberaden en altijd klaar voor een rondje Walcheren, en een rondje aan de bar.",
                icon: "\uD83C\uDF0A",
              },
              {
                title: "Bier & Kilometers",
                description:
                  "Elke kilometer die je loopt is een biertje dat je mag drinken. Simpele wiskunde.",
                icon: "\uD83C\uDFC3",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-emte-gray-50 hover:bg-emte-gray-100 transition-colors duration-300"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-emte-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-emte-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
