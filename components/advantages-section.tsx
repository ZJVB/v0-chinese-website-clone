import { Warehouse, Layers, Truck, Monitor } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const advantages = [
  {
    icon: Warehouse,
    title: "英国本地仓储与履约能力",
    description: "围绕英国本地库存、订单处理和配送需求，提供更贴近市场的执行支持。",
  },
  {
    icon: Layers,
    title: "多渠道、多场景解决方案",
    description: "可同时支持 D2C、FBA、B2B 分销、退货处理及增值服务等多种业务模式。",
  },
  {
    icon: Truck,
    title: "多物流渠道灵活配置",
    description: "根据产品属性、时效要求、签收需求和成本结构选择更合适的配送渠道。",
  },
  {
    icon: Monitor,
    title: "系统化运营支持",
    description: "通过 WMS 和 API 对接提升订单、库存和物流状态的可视化与管理效率。",
  },
];

export function AdvantagesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="为什么越来越多客户选择 Cube Cang 作为"
          highlight="英国本地物流合作伙伴"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-card p-7 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
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

        <div className="mx-auto mt-12 max-w-4xl rounded-lg bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)]">
          <p className="text-center text-muted-foreground leading-relaxed">
            我们理解，不同客户在进入英国市场或扩大本地业务时，面对的问题并不相同。有些客户更关注时效，有些客户更关注库存灵活性，也有些客户更关注退货处理和系统协同。Cube Cang 希望通过更灵活的服务组合与更贴近业务实际的执行方式，帮助客户在不同阶段建立更稳定的本地物流能力。
          </p>
        </div>
      </div>
    </section>
  );
}
