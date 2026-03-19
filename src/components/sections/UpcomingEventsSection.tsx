"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/ui/EventCard";
import Button from "@/components/ui/Button";
import { events } from "@/data/events";

export default function UpcomingEventsSection() {
  const upcoming = events.filter((e) => e.status === "upcoming").slice(0, 3);

  return (
    <section className="py-24 bg-emte-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Aankomende Evenementen"
            subtitle="Waar je ons binnenkort kunt vinden"
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcoming.map((event, index) => (
            <AnimatedSection key={event.id} delay={index * 0.15}>
              <EventCard {...event} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 text-center">
            <Button variant="outline" href="/evenementen">
              Alle evenementen bekijken
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
