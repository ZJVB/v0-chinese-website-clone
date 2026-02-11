import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PartnerSection } from "@/components/partner-section";
import { ServicesSection } from "@/components/services-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ProcessSection } from "@/components/process-section";
import { PrimeBadgeSection } from "@/components/prime-badge-section";
import { NewsSection } from "@/components/news-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PartnerSection />
        <ServicesSection />
        <IntegrationsSection />
        <StatsSection />
        <TestimonialsSection />
        <ProcessSection />
        <PrimeBadgeSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
