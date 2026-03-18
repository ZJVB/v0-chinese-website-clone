import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, TrendingUp, Building2, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: BadgeCheck, value: "HMRC 认可", label: "FHDDS 认证服务商" },
  { icon: TrendingUp, value: "20,000+", label: "日订单处理量" },
  { icon: Building2, value: "30,000㎡+", label: "仓储面积" },
  { icon: ShieldCheck, value: "24/7", label: "安保监控系统" },
  { icon: Users, value: "15年+", label: "团队经验" },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            专业实力，值得信赖
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            依托完善的基础设施与专业团队，为客户提供稳定可靠的英国本地仓储服务
          </p>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 text-center overflow-hidden"
            >
              {/* Decorative background number */}
              <span className="absolute -right-2 -top-4 text-7xl font-black text-gray-100/50 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative z-10">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                  <stat.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <div className="mb-1 text-xl font-bold text-foreground lg:text-2xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* TEMU Feature Section - Full background image */}
        <div className="relative mt-14 overflow-hidden rounded-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/temu-ranking.jpg"
              alt="TEMU 官方认证仓 - 履约排名前列"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 lg:p-12 lg:max-w-xl">
            <div className="mb-3 inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
              TEMU 官方认证仓
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              履约表现持续位居<span className="text-primary">前列</span>
            </h2>
            <p className="mb-6 text-white/80 leading-relaxed">
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
