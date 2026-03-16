import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Globe,
  Zap,
  Search,
  ArrowRight,
  Award,
  Users,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "关于我们 - Cube Cang 英国海外仓",
  description:
    "了解 Cube Cang 的故事、使命和团队。深耕英国仓储物流，为跨境电商卖家提供专业海外仓、FBA中转及定制化供应链服务。",
};

const timeline = [
  { year: "2015", desc: "公司成立于英国曼彻斯特，开始为中国卖家提供仓储服务" },
  { year: "2017", desc: "仓储面积扩展至5000平方米，上线自研WMS系统1.0版本" },
  { year: "2019", desc: "成为Amazon SPN认证服务商，FBA中转业务全面启动" },
  { year: "2021", desc: "英国仓网络扩展至3个城市，日均处理订单突破5万单" },
  { year: "2023", desc: "成为TEMU官方认证海外仓，自动化分拣系统上线" },
  { year: "2024", desc: "仓储总面积超过50,000平方米，服务客户超过800家" },
];

const culture = [
  {
    icon: Globe,
    title1: "全球视野",
    title2: "本土深耕",
    desc: "以曼彻斯特为原点构建跨文化供应链枢纽，ISO9001质量管理体系叠加欧盟VAT合规专家团队，让中国制造入欧零偏差",
  },
  {
    icon: Zap,
    title1: "极速基因",
    title2: "数字动脉",
    desc: "从智能WMS系统迭代到15万SKU/日分拣效能，全员KPI与订单履行速度强关联，客户旺季增速200%即是我们的人效勋章",
  },
  {
    icon: Search,
    title1: "问题洁癖",
    title2: "体验执念",
    desc: "设立伦敦-深圳双总部质检委员会，48小时退货每单必溯源码因，客户服务部可直接调用CEO紧急响应通道",
  },
];

const stats = [
  { num: "50,000+", sub: "平方米仓储", desc: "英国多仓布局，覆盖曼彻斯特、伯明翰等核心物流枢纽" },
  { num: "800+", sub: "合作客户", desc: "服务电商卖家涵盖时尚、3C、家居、健康等多个行业" },
  { num: "99.9%", sub: "库存准确率", desc: "自研WMS系统实现SKU级实时追踪，精准库存管理" },
];

const certifications = [
  "TEMU官方认证海外仓",
  "Amazon SPN认证服务商",
  "ISO9001质量管理认证",
  "英国海关AEO授权",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero - banner style */}
        <section className="relative pt-[72px]">
          <div className="relative h-[320px] lg:h-[400px]">
            <Image
              src="/images/warehouse-operations.jpg"
              alt="Cube Cang 仓库"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    关于 CUBE CANG
                  </p>
                  <h1 className="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
                    您的英国仓储物流专家
                  </h1>
                  <p className="text-base leading-relaxed text-white/75 text-pretty max-w-xl">
                    深耕英国仓储物流多年，为跨境电商卖家提供一站式海外仓解决方案，助力品牌出海、货通全球。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">
                专业
              </h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">实力</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((s) => (
                <div key={s.num} className="rounded-lg bg-background p-8 text-center">
                  <p className="text-4xl font-black text-primary">{s.num}</p>
                  <p className="mt-2 text-base font-semibold text-foreground">{s.sub}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About intro */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                  关于 Cube Cang
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cube Cang（酷博仓）是一家专注于为跨境电商卖家提供英国本土仓储物流服务的企业。公司总部位于英国曼彻斯特，拥有超过50,000平方米的仓储空间，覆盖曼彻斯特、伯明翰等核心物流枢纽。
                  </p>
                  <p>
                    我们的业务范围涵盖：海外仓一件代发、FBA中转、B2B批发配送、退货处理、商品翻新等全链路服务。通过自研WMS系统和自动化分拣设备，实现日均处理10万+订单的高效产能。
                  </p>
                  <p>
                    作为TEMU官方认证海外仓和Amazon SPN认证服务商，我们始终坚持以客户需求为中心，提供专业、高效、可靠的物流解决方案，助力中国品牌成功出海。
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                    <Award className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">发展</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">历程</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="relative border-l-2 border-primary/30 pl-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className={`relative pb-10 ${i === timeline.length - 1 ? "pb-0" : ""}`}>
                    <div className="absolute -left-[calc(2rem+5px)] top-0 flex h-3 w-3 items-center justify-center rounded-full bg-primary" />
                    <p className="text-xl font-black text-primary">{item.year}</p>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">企业</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">文化</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {culture.map((c) => (
                <div
                  key={c.title1}
                  className="rounded-lg bg-card p-8 shadow-[0_1px_12px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {c.title1}
                    <span className="text-primary"> & </span>
                    {c.title2}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">核心</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">价值</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Shield, title: "专业可靠", desc: "多年行业经验，专业团队保障" },
                { icon: Zap, title: "高效敏捷", desc: "自动化系统，快速响应需求" },
                { icon: Users, title: "客户至上", desc: "24小时服务，全程跟踪支持" },
                { icon: Clock, title: "准时交付", desc: "严格时效管理，承诺必达" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="gap-2 rounded-md">
                <Link href="/contact">
                  与我们取得联系
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
