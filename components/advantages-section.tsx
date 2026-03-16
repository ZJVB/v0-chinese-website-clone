import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const platforms = [
  "Shopify", "TikTok Shop", "Amazon", "eBay", "TEMU", "WooCommerce", "ERP/OMS", "API"
];

const logistics = [
  "Royal Mail", "DPD", "Evri", "FedEx", "UPS", "DHL"
];

const industries = [
  { title: "时尚服饰", image: "/images/industry-fashion.jpg", href: "/industries/fashion" },
  { title: "新能源电池", image: "/images/industry-energy.jpg", href: "/industries/energy" },
  { title: "消费电子", image: "/images/industry-electronics.jpg", href: "/industries/electronics" },
  { title: "家居用品", image: "/images/industry-furniture.jpg", href: "/industries/home-garden" },
  { title: "美妆健康", image: "/images/industry-beauty.jpg", href: "/industries/health" },
];

export function AdvantagesSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="为什么选择"
          highlight="Cube海外仓"
          subtitle="依托本地仓储资源、成熟履约体系及灵活物流配置，为客户提供稳定高效的英国本地供应链支持。"
        />

        {/* Partners Section */}
        <div className="mt-12 rounded-2xl bg-[#f8fafc] p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              系统对接平台
            </h3>
            <div className="flex flex-wrap gap-2">
              {platforms.map((name) => (
                <span
                  key={name}
                  className="rounded-md bg-white px-3 py-1.5 text-sm text-muted-foreground shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              合作物流渠道
            </h3>
            <div className="flex flex-wrap gap-2">
              {logistics.map((name) => (
                <span
                  key={name}
                  className="rounded-md bg-white px-3 py-1.5 text-sm text-muted-foreground shadow-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Industries */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            覆盖多个重点行业
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:from-black/80" />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-white">
                    {industry.title}
                  </h4>
                  <ArrowRight className="h-4 w-4 text-white/60 transition-all group-hover:text-white group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
