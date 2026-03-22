import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import StoryWorldSection from "@/components/StoryWorldSection";
import InteractiveFeaturesSection from "@/components/InteractiveFeaturesSection";
import WhyFamiliesSection from "@/components/WhyFamiliesSection";
import SafetySection from "@/components/SafetySection";
import FAQSection from "@/components/FAQSection";
import ItinerarySection from "@/components/ItinerarySection";
import UniqueSection from "@/components/UniqueSection";
import BrochureSection from "@/components/BrochureSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsSection />
        <StoryWorldSection />
        <InteractiveFeaturesSection />
        <WhyFamiliesSection />
        <UniqueSection />
        <SafetySection />
        <FAQSection />
        <ItinerarySection />
        <BrochureSection />
        <FinalCTASection />
      </main>
      <footer className="bg-[#0A1628] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Minecraft Wave Dome at Aulani, A Disney Resort & Spa.
            All rights reserved. Disney, Aulani, and Minecraft are trademarks of their respective owners.
          </p>
        </div>
      </footer>
    </>
  );
}
