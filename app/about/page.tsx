import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Shield,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
  Globe,
  Zap,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "关于我们 - Cube Fulfilment",
  description:
    "了解 Cube Fulfilment 的故事、使命和团队。深耕英国十年，为500+跨境卖家提供仓储代发、FBA中转及定制化供应链服务。",
};

const timeline = [
  { year: "2018", desc: "创立于曼彻斯特，专注中英跨境卖家仓储代发服务" },
  { year: "2020", desc: "启用8千平米智能仓，库存管理精度突破99.5%" },
  { year: "2021", desc: "中英双语客服体系上线，响应速度进入30秒时代" },
  { year: "2022", desc: "上线欧盟逆向物流网络，英德法退换时效缩短至48小时" },
  { year: "2023", desc: "获ISO9001认证，Shopify/Amazon全平台API直连" },
  { year: "2025", desc: "成为Temu官方认证仓，自动化分拣产能提升至15万SKU/日" },
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
  { num: "10 年", sub: "专注于海外仓", desc: "专注跨境物流十年，整合海空运干线、智能报关及海外仓配，服务覆盖全欧洲" },
  { num: "500+", sub: "员工", desc: "超百人专业团队，仓库/运营/客服等多线协同，累计服务1000+客户" },
  { num: "24 小时", sub: "客服服务", desc: "7x24小时全时客服，中英双语电话/在线/邮件30秒极速响应" },
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
              alt="Cube Fulfilment 仓库"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    关于 CUBE
                  </p>
                  <h1 className="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
                    关于 Cube Fulfilment
                  </h1>
                  <p className="text-base leading-relaxed text-white/75 text-pretty max-w-xl">
                    深耕英国十年，为500+跨境卖家提供仓储代发、FBA中转及定制化供应链服务。自有WMS系统实现库存精度99.9%，自动化分拣日均处理10万SKU
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
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">服务</span>
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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-[40px]">
                关于 CUBE
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                公司总部位于英国，业务范围涵盖：货运代理，项目物流，联运服务，卡车物流，仓储及配送服务。始终坚持以"通过多元化的网络和资源，致力为客户提供一体化的优质物流解决方案"为企业宗旨，以"专业、诚信、合规化"为立业之本。并形成一套以了解、体验、建议、合作、售后及回访为一体的完整服务体系。
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">企业</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">发展</span>
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
