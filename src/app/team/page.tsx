import { Metadata } from "next";
import { teamMembers } from "@/data/team";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";

export const metadata: Metadata = {
  title: "Ons Team | EMTE Running Team",
  description:
    "Maak kennis met de lopers van het EMTE Running Team. Van marathonlopers tot trailrunners — ontdek wie wij zijn.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emte-green-dark via-emte-green to-emte-green-light py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emte-yellow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <SectionHeading
              title="Ons Team"
              subtitle="De gezichten achter de kilometers langs de Westkapelse kust. Maak kennis met de hardlopers, coaches en vrijwilligers die het EMTE Running Team vormen — van de vuurtoren tot de finish."
              centered
              light
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Intro + Grid Section */}
      <section className="bg-emte-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-emte-gray-700">
                Bij het EMTE Running Team in Westkapelle draait alles om samen
                beter worden — met de Zeeuwse kust als ons thuiscircuit. Ieder
                teamlid brengt unieke kwaliteiten mee, van jarenlange ervaring
                tot aanstekelijk enthousiasme. Of je nu een doorgewinterde
                marathonloper bent of net je eerste kilometers over de Walcherse
                dijk loopt, bij ons vind je altijd een trainingsmaatje. Nuchter
                maar gedreven, zo zijn we hier in Zeeland. Klik op een teamlid
                om meer te lezen over hun verhaal.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.08}>
                <TeamCard
                  id={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  shortBio={member.shortBio}
                  favoriteDistance={member.favoriteDistance}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
