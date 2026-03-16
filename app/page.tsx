import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero 轮播 */}
        <HeroSection />
        
        {/* 2. 公司实力 + TEMU 认证仓 */}
        <StatsSection />
        
        {/* 3. 服务板块 */}
        <ServicesSection />
        
        {/* 4. 优势 + 合作伙伴 + 行业 */}
        <AdvantagesSection />
        
        {/* 5. 联系我们 CTA */}
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
