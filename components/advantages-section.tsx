import Image from "next/image";
import { Warehouse, Layers, Truck, Monitor, Users, Building } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const advantages = [
  {
    icon: Warehouse,
    title: "英国本地仓储与履约能力",
  },
  {
    icon: Layers,
    title: "多渠道、多场景解决方案",
  },
  {
    icon: Truck,
    title: "多物流渠道灵活配置",
  },
  {
    icon: Monitor,
    title: "系统化运营支持",
  },
  {
    icon: Building,
    title: "支持多行业",
  },
  {
    icon: Users,
    title: "适用多类型客户",
  },
];

const platforms = [
  { name: "Shopify", logo: "/images/logos/shopify.svg" },
  { name: "TikTok Shop", logo: "/images/logos/tiktok.svg" },
  { name: "Amazon", logo: "/images/logos/amazon.svg" },
  { name: "eBay", logo: "/images/logos/ebay.svg" },
  { name: "TEMU", logo: "/images/logos/temu.svg" },
  { name: "WooCommerce", logo: "/images/logos/woocommerce.svg" },
  { name: "ERP", logo: "/images/logos/erp.svg" },
  { name: "OMS", logo: "/images/logos/oms.svg" },
  { name: "API", logo: "/images/logos/api.svg" },
];

const logistics = [
  { name: "Royal Mail", logo: "/images/logos/royalmail.svg" },
  { name: "DPD", logo: "/images/logos/dpd.svg" },
  { name: "Evri", logo: "/images/logos/evri.svg" },
  { name: "FedEx", logo: "/images/logos/fedex.svg" },
  { name: "UPS", logo: "/images/logos/ups.svg" },
];

const industries = [
  { title: "时尚服饰与快消品", image: "/images/industry-fashion.jpg" },
  { title: "新能源与电池", image: "/images/industry-energy.jpg" },
  { title: "消费电子与高价值商品", image: "/images/industry-electronics.jpg" },
  { title: "大件家居与器材", image: "/images/industry-furniture.jpg" },
  { title: "美妆与保健品", image: "/images/industry-beauty.jpg" },
];

export function AdvantagesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="为什么选择"
          highlight="Cube海外仓"
          subtitle="依托英国本地仓储资源、成熟的履约体系及灵活的物流配置能力，Cube海外仓可为不同业务模式下的客户提供更稳定、更高效的本地供应链支持。"
        />

        {/* Advantages Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-4 rounded-xl bg-card p-5 shadow-[0_1px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            系统对接支持的平台
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex h-12 items-center justify-center rounded-lg bg-muted/50 px-5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                {platform.name}
              </div>
            ))}
          </div>
        </div>

        {/* Logistics Partners */}
        <div className="mt-12">
          <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            合作物流渠道
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {logistics.map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 items-center justify-center rounded-lg bg-muted/50 px-6 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mt-16">
          <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            覆盖多个重点行业场景
          </h3>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Cube海外仓可根据不同行业的产品特点与履约需求，提供更匹配的英国本地仓储与物流支持。
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <h4 className="text-sm font-semibold text-white">
                    {industry.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
