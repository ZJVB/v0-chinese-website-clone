import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ShoppingCart,
  Truck,
  ArrowRight,
  Monitor,
  BarChart3,
  RefreshCw,
  Package,
  ScanLine,
  Weight,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "信息化 - Cube Fulfilment",
  description:
    "Cube Fulfilment 全链路智能仓配，为跨境卖家提供极速稳定的供应链支持。",
};

const services = [
  { title: "英国海外仓", desc: "本土化仓储服务", icon: Package },
  { title: "国际集运物流", desc: "资源整合中转", icon: Truck },
  { title: "国际海运", desc: "大宗运输主力", icon: ShoppingCart },
  { title: "国际空运", desc: "高效时效保障", icon: BarChart3 },
];

const process = [
  { title: "扫描箱号收货", icon: ScanLine },
  { title: "建议货位上架", icon: Package },
  { title: "多维度管理缓存", icon: Monitor },
  { title: "包裹打包贴标", icon: Tag },
  { title: "按渠道扫描出库", icon: ScanLine },
  { title: "灵活的拣货方式", icon: RefreshCw },
];

const devices = [
  "扫码枪",
  "快手秤",
  "红外扫描仪",
  "PDA扫描仪",
  "贴标机",
  "称重分拣机",
];

const advantages = [
  { title: "货运代理", desc: "为企业和组织提供多样化的物流服务。我们帮助客户整合和安排货物运输，并提供运输、仓储、海运或空运以及海关管理等支持" },
  { title: "项目物流", desc: "具有自营的冷藏库，主要专注于运输医药类产品，以确保温度控制的精准性和运输的可靠安全性" },
  { title: "联运服务", desc: "多式联运服务整合陆运、海运、空运资源，提供一站式跨境物流解决方案" },
  { title: "卡车物流", desc: "自有车队与合作车队联动，覆盖英国全境及欧洲主要城市的陆运服务" },
  { title: "仓储及配送服务", desc: "大型现代化仓储设施配合智能管理系统，提供存储、分拣、包装、配送一体化服务" },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative pt-[72px]">
          <div className="relative h-[320px] lg:h-[400px]">
            <Image
              src="/images/hero-warehouse.jpg"
              alt="智能仓配中心"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    全链路智能仓配
                  </p>
                  <h1 className="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
                    为跨境卖家提供极速稳定的供应链支持
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUBE supply chain services */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">CUBE</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">跨境供应链</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                深耕英国海外仓+国际集运/海运/空运全链路，HMRC合规资质，VAT智能申报，日均处理10万件跨境包裹，48小时覆盖欧盟主流平台
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.title} className="rounded-lg bg-background p-6 text-center shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work process */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">工作流程</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">可视化</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 text-muted-foreground">仓储操作全流程扫描，降本增效低差错</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((p, i) => (
                <div key={p.title} className="flex items-center gap-4 rounded-lg bg-card p-5 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="font-semibold text-foreground">{p.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business advantages */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">业务</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">介绍</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                Temu官方认证，15万SKU日处理能力，99.98%分拣准确率，欧盟本土退货48小时重上架
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((a) => (
                <div key={a.title} className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  <h3 className="mb-2 text-base font-bold text-foreground">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart devices */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">智能硬核仓配</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">中枢</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                英国仓配备扫码枪、快手秤及PDA扫描仪等，实现入库-分拣-出库全程数字化追踪
              </p>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {devices.map((d) => (
                <div key={d} className="flex flex-col items-center rounded-lg bg-card p-5 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Weight className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground text-center">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              想了解我们如何对接您的销售渠道？
            </h2>
            <p className="mb-8 text-muted-foreground">
              我们的技术团队将为您演示系统集成方案
            </p>
            <Button asChild size="lg" className="gap-2 rounded-md">
              <Link href="/contact">
                联系我们
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
