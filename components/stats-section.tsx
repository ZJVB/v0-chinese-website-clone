import { Shield, Package, Warehouse, Camera, Clock } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const stats = [
  {
    icon: Shield,
    value: "HMRC 认可",
    label: "FHDDS 海外仓服务商",
  },
  {
    icon: Package,
    value: "20,000+",
    label: "日订单处理量",
  },
  {
    icon: Warehouse,
    value: "30,000㎡+",
    label: "仓储面积",
  },
  {
    icon: Camera,
    value: "24/7 安保系统",
    label: "CCTV 全覆盖",
  },
  {
    icon: Clock,
    value: "15年+",
    label: "管理经验",
  },
];

export function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="稳定合规的"
          highlight="英国本地履约能力"
          subtitle="依托成熟的运营体系、稳定的仓储资源和合规资质，Cube海外仓持续为客户提供更高效、更可靠的英国本地仓储与履约支持。"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl bg-white p-6 shadow-[0_1px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 text-center"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="mb-1 text-xl font-bold text-foreground lg:text-2xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
