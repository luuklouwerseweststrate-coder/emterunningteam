import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedTeamSection from "@/components/sections/FeaturedTeamSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import SponsorsPreviewSection from "@/components/sections/SponsorsPreviewSection";
import MissionSection from "@/components/sections/MissionSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <FeaturedTeamSection />
      <UpcomingEventsSection />
      <MissionSection />
      <SponsorsPreviewSection />
      <CTASection />
    </>
  );
}
