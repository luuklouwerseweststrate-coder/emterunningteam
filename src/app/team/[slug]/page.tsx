import { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/team";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import Button from "@/components/ui/Button";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getOtherMembers(currentId: string, count: number) {
  const others = teamMembers.filter((m) => m.id !== currentId);
  const shuffled = [...others].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

type PageParams = { slug: string };

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.id === slug);

  if (!member) {
    return { title: "Teamlid niet gevonden | EMTE Running Team" };
  }

  return {
    title: `${member.name} | EMTE Running Team`,
    description: member.shortBio,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.id === slug);

  if (!member) {
    notFound();
  }

  const otherMembers = getOtherMembers(member.id, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emte-green-dark via-emte-green to-emte-green-light py-24 sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-emte-yellow" />
          <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-emte-yellow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <span className="text-5xl font-bold text-white">
                  {getInitials(member.name)}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {member.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-emte-yellow">
                {member.role}
              </p>

              <blockquote className="mt-8 max-w-2xl">
                <p className="text-xl italic leading-relaxed text-white/90">
                  &ldquo;{member.personalQuote}&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Waarom ik loop */}
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-emte-gray-900">
                Waarom ik loop
              </h2>
              <div className="h-1 w-12 rounded-full bg-emte-yellow" />
              <p className="mt-6 text-lg leading-relaxed text-emte-gray-700">
                {member.whyRunning}
              </p>
            </div>
          </AnimatedSection>

          {/* Stats Row */}
          <AnimatedSection delay={0.1}>
            <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="rounded-2xl bg-emte-gray-50 p-6 text-center">
                <p className="text-3xl font-bold text-emte-green">
                  {member.stats.kmPerWeek}
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  km per week
                </p>
              </div>
              <div className="rounded-2xl bg-emte-gray-50 p-6 text-center">
                <p className="text-3xl font-bold text-emte-green">
                  {member.stats.races}
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  wedstrijden gelopen
                </p>
              </div>
              <div className="rounded-2xl bg-emte-gray-50 p-6 text-center">
                <p className="text-3xl font-bold text-emte-green">
                  {member.stats.prs}
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  persoonlijke records
                </p>
              </div>
              <div className="rounded-2xl bg-emte-yellow/10 border-2 border-emte-yellow/30 p-6 text-center">
                <p className="text-3xl font-bold text-emte-yellow-dark">
                  {(member.stats.beersPerWeek / member.stats.runsPerWeek).toFixed(1)}
                </p>
                <p className="mt-1 text-sm font-medium text-emte-gray-600">
                  Hybride Atleet Score
                </p>
                <p className="mt-0.5 text-xs text-emte-gray-400">
                  bier/week : runs/week
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mijn verhaal */}
          <AnimatedSection delay={0.15}>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-emte-gray-900">
                Mijn verhaal
              </h2>
              <div className="h-1 w-12 rounded-full bg-emte-yellow" />
              <p className="mt-6 text-lg leading-relaxed text-emte-gray-700">
                {member.fullBio}
              </p>
            </div>
          </AnimatedSection>

          {/* Favoriete afstand */}
          <AnimatedSection delay={0.2}>
            <div className="mb-16 rounded-2xl bg-gradient-to-r from-emte-green to-emte-green-light p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-emte-yellow">
                Favoriete afstand
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                {member.favoriteDistance}
              </p>
            </div>
          </AnimatedSection>

          {/* Mooiste prestatie */}
          <AnimatedSection delay={0.25}>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-emte-gray-900">
                Mooiste prestatie
              </h2>
              <div className="h-1 w-12 rounded-full bg-emte-yellow" />
              <p className="mt-6 text-lg leading-relaxed text-emte-gray-700">
                {member.bestAchievement}
              </p>
            </div>
          </AnimatedSection>

          {/* Leukste teammoment */}
          <AnimatedSection delay={0.3}>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-emte-gray-900">
                Leukste teammoment
              </h2>
              <div className="h-1 w-12 rounded-full bg-emte-yellow" />
              <p className="mt-6 text-lg leading-relaxed text-emte-gray-700">
                {member.bestTeamMoment}
              </p>
            </div>
          </AnimatedSection>

          {/* Fun Facts */}
          <AnimatedSection delay={0.35}>
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-emte-gray-900">
                Fun Facts
              </h2>
              <div className="h-1 w-12 rounded-full bg-emte-yellow" />
              <ul className="mt-6 space-y-4">
                {member.funFacts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emte-yellow" />
                    <span className="text-lg text-emte-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Back link */}
          <AnimatedSection delay={0.4}>
            <div className="mb-8 text-center">
              <Button variant="outline" href="/team">
                &larr; Terug naar het team
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* More Team Members */}
      <section className="bg-emte-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionHeading
              title="Meer teamleden"
              subtitle="Ontdek de verhalen van andere lopers in ons team."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.map((other, index) => (
              <AnimatedSection key={other.id} delay={index * 0.1}>
                <TeamCard
                  id={other.id}
                  name={other.name}
                  role={other.role}
                  image={other.image}
                  shortBio={other.shortBio}
                  favoriteDistance={other.favoriteDistance}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
