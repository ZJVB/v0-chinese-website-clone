import Link from "next/link";
import { ArrowRight, Monitor, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const techFeatures = [
  {
    icon: Monitor,
    title: "WMS 仓储订单管理系统",
    description: "支持 SKU 管理、库存查看、订单状态追踪、入库出库管理及报表输出。",
    href: "/technology/wms",
  },
  {
    icon: Link2,
    title: "全平台 API 集成",
    description: "支持订单同步、库存联动、物流状态回传，减少人工导入导出与重复操作。",
    href: "/technology/api",
  },
];

export function TechSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="让库存、订单与物流状态"
          highlight="更透明"
          subtitle="Cube Cang 可通过 WMS 仓储订单管理系统及 API 对接能力，帮助客户提升库存可视化、订单管理效率和物流信息同步能力。对于多平台运营、SKU 较多或希望减少人工操作的客户来说，系统支持是提升整体履约效率的重要一环。"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {techFeatures.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-5 rounded-lg bg-card p-8 shadow-[0_1px_19px_0_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="gap-2 rounded-md">
            <Link href="/technology">
              了解技术支持
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
