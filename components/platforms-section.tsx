import Link from "next/link";

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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-1 text-3xl font-bold text-foreground lg:text-[40px]">
            多平台无缝对接
          </h2>
          <div className="relative mx-auto mt-1 inline-block">
            <span className="text-3xl font-bold text-foreground lg:text-[40px]">
              一键管理全渠道订单
            </span>
            <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
            Cube支持多平台、多渠道订单管理，确保所有订单数据在一个系统内高效整合：集成Amazon、eBay、Shopify、Temu、TikTok等平台，实现库存和订单信息实时同步
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {platforms.map((platform) => (
            <Link
              key={platform}
              href="/integrations"
              className="flex h-16 items-center justify-center rounded-lg bg-card px-8 shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
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
