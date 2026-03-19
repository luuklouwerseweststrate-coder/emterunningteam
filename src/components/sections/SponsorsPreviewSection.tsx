"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { sponsors } from "@/data/sponsors";

export default function SponsorsPreviewSection() {
  const hoofdpartners = sponsors.filter((s) => s.tier === "hoofdpartner");
  const partners = sponsors.filter((s) => s.tier === "partner");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Onze Partners"
            subtitle="Samen maken we het verschil"
          />
        </AnimatedSection>

        {/* Hoofdpartners */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12">
            <p className="text-center text-sm font-semibold text-emte-gray-400 uppercase tracking-wider mb-6">
              Hoofdpartners
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {hoofdpartners.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="w-48 h-24 bg-emte-gray-50 rounded-2xl flex items-center justify-center p-4 hover:bg-emte-gray-100 transition-colors border border-emte-gray-200"
                >
                  <span className="text-lg font-bold text-emte-gray-400">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Partners */}
        <AnimatedSection delay={0.3}>
          <div className="mt-10">
            <p className="text-center text-sm font-semibold text-emte-gray-400 uppercase tracking-wider mb-6">
              Partners
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {partners.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="w-36 h-20 bg-emte-gray-50 rounded-xl flex items-center justify-center p-3 hover:bg-emte-gray-100 transition-colors border border-emte-gray-200"
                >
                  <span className="text-sm font-semibold text-emte-gray-400">
                    {sponsor.name}
                  </span>
                </div>
              ))}
            </div>
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
