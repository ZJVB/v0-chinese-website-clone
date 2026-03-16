import Link from "next/link";
import Image from "next/image";
import { Shield, Package, Warehouse, Camera, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Shield, value: "HMRC 认可", label: "FHDDS 认证服务商" },
  { icon: Package, value: "20,000+", label: "日订单处理量" },
  { icon: Warehouse, value: "30,000㎡+", label: "仓储面积" },
  { icon: Camera, value: "24/7", label: "安保监控系统" },
  { icon: Clock, value: "15年+", label: "管理经验" },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl bg-card p-5 shadow-[0_1px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 text-center"
            >
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-1 text-lg font-bold text-foreground lg:text-xl">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* TEMU Feature Section - Merged here */}
        <div className="mt-14 grid items-center gap-8 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/service-temu.jpg"
              alt="TEMU 官方认证仓"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              TEMU 官方认证仓
            </div>
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              履约表现持续位居<span className="text-primary">前列</span>
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              作为 TEMU 官方认证仓，Cube海外仓依托标准化作业流程和稳定的订单处理能力，为平台卖家提供更高效、更可靠的英国本地仓配支持。
            </p>
            <Button asChild className="gap-2 rounded-md">
              <Link href="/solutions/temu">
                了解 TEMU 方案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
