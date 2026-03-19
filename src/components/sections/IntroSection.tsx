"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function IntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <SectionHeading
            title="Meer dan een hardloopteam"
            subtitle="Wij zijn het EMTE Running Team"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-lg text-emte-gray-600 leading-relaxed max-w-3xl mx-auto">
            Wat begon als een groepje hardlopers uit Westkapelle dat samen de
            dijken van Walcheren onveilig maakte, is uitgegroeid tot een
            ambitieus running team met een duidelijke missie: laten zien dat
            hardlopen leuker is als je het samen doet. Met de Zeeuwse kust als
            ons decor en de wind als vaste trainingspartner — of je nu traint
            voor je eerste 5 kilometer of je voorbereidt op een marathon — bij
            ons vind je de juiste energie, het juiste gezelschap en af en toe een
            goed excuus om taart te eten na de finish.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ambitie",
                description:
                  "We leggen de lat hoog, maar houden de sfeer laag. Presteren doe je samen.",
                icon: "\uD83C\uDFAF",
              },
              {
                title: "Zeeuws DNA",
                description:
                  "Nuchter, vastberaden en altijd klaar voor een rondje Walcheren. Hardlopen met kustkarakter.",
                icon: "\uD83C\uDF0A",
              },
              {
                title: "Plezier",
                description:
                  "Serieus trainen, maar nooit vergeten waarom we het doen: omdat het gewoon leuk is.",
                icon: "\u26A1",
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
