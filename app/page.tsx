import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { TemuSection } from "@/components/temu-section";
import { ServicesSection } from "@/components/services-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1: Hero - 3 Banner Carousel */}
        <HeroSection />
        
        {/* Section 2: Company Stats */}
        <StatsSection />
        
        {/* Section 3: TEMU Official Certification */}
        <TemuSection />
        
        {/* Section 4: Our Services */}
        <ServicesSection />
        
        {/* Section 5: Why Choose Us */}
        <AdvantagesSection />
        
        {/* Section 6: Contact CTA */}
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
