import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { IndustriesSection } from "@/components/industries-section";
import { AdvantagesSection } from "@/components/advantages-section";
import { ContactCtaSection } from "@/components/contact-cta-section";
import { SectionDivider } from "@/components/section-divider";
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
        
        {/* 分割线 */}
        <SectionDivider />
        
        {/* 3. 服务板块 */}
        <ServicesSection />
        
        {/* 分割线 */}
        <SectionDivider />
        
        {/* 4. 行业覆盖 */}
        <IndustriesSection />
        
        {/* 分割线 */}
        <SectionDivider />
        
        {/* 5. 优势 + 合作伙伴 */}
        <AdvantagesSection />
        
        {/* 分割线 */}
        <SectionDivider />
        
        {/* 6. 联系我们 CTA */}
        <ContactCtaSection />
      </main>
      <Footer />
    </>
  );
}
