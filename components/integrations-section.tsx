import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const marketplaces = [
  "Amazon",
  "eBay",
  "Shopify",
  "TikTok Shop",
  "WooCommerce",
  "Etsy",
  "Magento",
  "BigCommerce",
  "OnBuy",
  "Wayfair",
];

const couriers = [
  "Royal Mail",
  "DPD",
  "Hermes/Evri",
  "DHL",
  "FedEx",
  "UPS",
  "Yodel",
  "Amazon Logistics",
  "TNT",
  "Parcelforce",
];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            全球平台集成
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            多渠道销售，可扩展电商履约
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            MSL UK 的仓库管理系统与所有主要电商平台集成，包括 Amazon、eBay、
            Shopify、TikTok Shop 等。我们的3PL专家确保您的库存、订单和电商履约中心运营在多个销售渠道中顺畅运行。
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/40 p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                电商平台集成
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {marketplaces.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-accent" />
              <h3 className="text-xl font-semibold text-foreground">
                快递物流集成
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {couriers.map((courier) => (
                <span
                  key={courier}
                  className="rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  {courier}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="gap-2 px-8">
            <a href="#contact">
              获取报价
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
