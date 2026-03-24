import { Store, Globe, Building, Cog } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const businessTypes = [
  {
    icon: Store,
    title: "跨境平台卖家",
    description: "适合需要英国本地仓发、平台履约与稳定订单处理能力的电商卖家。",
  },
  {
    icon: Globe,
    title: "独立站与品牌客户",
    description: "适合希望提升英国本地派送体验、优化消费者履约服务的品牌方。",
  },
  {
    icon: Building,
    title: "零售与分销客户",
    description: "适合有门店补货、批量配送、渠道分拨和预约送货需求的客户。",
  },
  {
    icon: Cog,
    title: "特殊产品与项目客户",
    description: "适合涉及大件、设备、电池类产品或复杂交付需求的业务场景。",
  },
];

export function BusinessTypesSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="适合不同阶段、不同渠道和"
          highlight="不同产品类型的客户"
          subtitle="Cube Cang 的服务并不局限于单一业务模式。我们可根据客户的销售渠道、产品特性、发货结构和英国市场布局需求，提供更匹配的仓储与履约支持。"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-background p-7 text-center shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
