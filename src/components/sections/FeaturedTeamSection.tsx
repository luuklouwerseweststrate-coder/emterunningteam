"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import Button from "@/components/ui/Button";
import { teamMembers } from "@/data/team";

export default function FeaturedTeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Ons Team"
            subtitle="Zes hybride atleten uit Westkapelle — zaterdag in de kroeg, zondag op de dijk"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} delay={index * 0.1}>
              <TeamCard {...member} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
