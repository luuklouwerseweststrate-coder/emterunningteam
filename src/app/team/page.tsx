import { Metadata } from "next";
import Image from "next/image";
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
      <section className="relative overflow-hidden bg-gradient-to-br from-emte-green-dark via-emte-green to-emte-green-light pb-20 pt-44 sm:pt-52">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emte-yellow" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <SectionHeading
              title="Ons Team"
              subtitle="Zes hybride atleten die bewijzen dat je zaterdagavond in de kroeg kunt staan en zondagochtend een PR kunt lopen. Maak kennis met de drinkers, lopers en feestbeesten van het EMTE Running Team."
              centered
              light
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Team groepsfoto */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/team-group.jpeg"
                alt="Het EMTE Running Team — groepsfoto"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-8 py-6">
                <p className="text-lg font-bold text-white">Ons team</p>
                <p className="text-sm text-white/80">Samen sterker, samen sneller — vanuit Westkapelle</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro + Grid Section */}
      <section className="bg-emte-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-emte-gray-700">
                Bij het EMTE Running Team draait alles om de hybride lifestyle:
                zaterdagavond de kroeg platlopen, zondagochtend de dijk oplopen.
                Ieder teamlid brengt unieke kwaliteiten mee — zowel aan de bar
                als op de baan. Of je nou een bierveteraan bent of meer van de
                rode wijn, bij ons vind je altijd een drink- en trainingsmaatje.
                Klik op een teamlid om meer te lezen over hun verhaal.
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
