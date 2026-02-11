import {
  Warehouse,
  Package,
  Truck,
  BarChart3,
  Ship,
  Camera,
  Globe,
  Box,
  Headphones,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Warehouse,
    title: "托盘仓储",
    description: "安全、可扩展的散货存储解决方案，包括高效的托盘存储选项。",
  },
  {
    icon: Package,
    title: "电商仓储履约",
    description:
      "MSL 提供端到端的电商履约解决方案，简化在线业务的存储、包装和配送。",
  },
  {
    icon: Truck,
    title: "运输配送",
    description: "可靠的国内和国际配送选项，支持高效的陆运和货运服务。",
  },
  {
    icon: BarChart3,
    title: "智能销售方案",
    description: "提升电商业绩的工具和策略，为增长量身定制的智能销售解决方案。",
  },
  {
    icon: Ship,
    title: "国际货运代理",
    description:
      "全球运输和清关的端到端物流，可靠的货运代理解决方案确保准时交付。",
  },
  {
    icon: Camera,
    title: "产品摄影",
    description:
      "高品质的视觉效果，提升您的在线列表和转化率。专业产品摄影清晰展现每个细节。",
  },
  {
    icon: Globe,
    title: "国际客户3PL服务",
    description:
      "帮助国际客户更智能地运营。我们专注于为国际客户提供可靠、可扩展的3PL解决方案。",
  },
  {
    icon: Box,
    title: "智能包装",
    description: "创新、环保且经济高效的智能包装解决方案，提升您的运输流程。",
  },
  {
    icon: Headphones,
    title: "客户支持外包",
    description:
      "我们已经在管理您的库存和完整的履约流程，为什么不进一步简化您的运营？",
  },
  {
    icon: Rocket,
    title: "初创企业支持",
    description:
      "MSL致力于帮助新企业茁壮成长，提供灵活的、适合增长的解决方案。",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            我们为您采购
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            我们的电商仓储与3PL服务
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            除了端到端的订单履约，我们还提供托盘存储、国内和国际运输、智能包装和产品摄影。MSL的仓储解决方案旨在简化您的电商运营并支持可扩展增长。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
