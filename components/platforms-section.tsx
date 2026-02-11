import Link from "next/link";
import { SectionTitle } from "@/components/section-title";

const platforms = [
  "Amazon",
  "eBay",
  "Shopify",
  "Temu",
  "TikTok",
  "WooCommerce",
  "Etsy",
  "OnBuy",
];

export function PlatformsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="多平台无缝对接"
          highlight="一键管理全渠道订单"
          subtitle="Cube支持多平台、多渠道订单管理，确保所有订单数据在一个系统内高效整合：集成Amazon、eBay、Shopify、Temu、TikTok等平台，实现库存和订单信息实时同步"
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 lg:gap-8">
          {platforms.map((platform) => (
            <Link
              key={platform}
              href="/integrations"
              className="flex h-16 items-center justify-center rounded-lg bg-card px-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold text-foreground/70">
                {platform}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
