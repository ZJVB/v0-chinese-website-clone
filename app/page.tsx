import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { PlatformsSection } from "@/components/platforms-section";
import { ProcessSection } from "@/components/process-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AdvantagesSection />
        <PlatformsSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
