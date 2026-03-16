import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { BusinessTypesSection } from "@/components/business-types-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { WarehouseNetworkSection } from "@/components/warehouse-network-section";
import { SolutionsEntrySection } from "@/components/solutions-entry-section";
import { IndustriesSection } from "@/components/industries-section";
import { TechSection } from "@/components/tech-section";
import { NewsSection } from "@/components/news-section";
import { AboutIntroSection } from "@/components/about-intro-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BusinessTypesSection />
        <AdvantagesSection />
        <WarehouseNetworkSection />
        <SolutionsEntrySection />
        <IndustriesSection />
        <TechSection />
        <NewsSection />
        <AboutIntroSection />
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
