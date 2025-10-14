import { HeroGeometric } from "../../components/ui/shadcn-io/shape-landing-hero";
import { FeaturedSection } from "./FeaturedSection";
import { InnovationSection } from "./InnovationSection";
import { PlatformSkills } from "./PlatformSkills";

export function HomePage() {
  return (
    <div className="bg-[#0A0A23] antialiased">
      <HeroGeometric
        badge="AI Powered"
        title1="Empowering Your"
        title2="AI Journey"
        description="Harness the power of AI to build innovative, scalable, and intelligent solutions tailored to your business needs."
      />
      <FeaturedSection />
      <InnovationSection />
      <PlatformSkills />
    </div>
  );
}
