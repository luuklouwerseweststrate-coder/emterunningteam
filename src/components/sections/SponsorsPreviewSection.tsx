"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { sponsors } from "@/data/sponsors";

export default function SponsorsPreviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Onze Sponsoren"
            subtitle="Samen maken we het verschil"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="h-28 w-56 rounded-2xl bg-emte-gray-50 border border-emte-gray-200 flex items-center justify-center p-4 hover:bg-emte-gray-100 transition-colors"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-14 text-center">
            <p className="text-emte-gray-500 mb-4">
              Wil jouw bedrijf ook onderdeel zijn van het EMTÉ Running Team?
            </p>
            <Button variant="primary" href="/sponsoren">
              Word Sponsor
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
