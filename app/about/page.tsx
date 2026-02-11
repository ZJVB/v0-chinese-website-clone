import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Shield,
  Users,
  TrendingUp,
  Award,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "关于我们 - Cube Fulfilment",
  description:
    "了解 Cube Fulfilment 的故事、使命和团队。我们致力于为电商企业提供高效可靠的仓储物流服务。",
};

const values = [
  {
    icon: Shield,
    title: "可靠安全",
    description:
      "我们视每一件货品如自有资产，严格的安全管理体系确保您的库存万无一失。",
  },
  {
    icon: Target,
    title: "精准高效",
    description:
      "从接单到发货，每一环节精益求精，确保订单准确率和配送时效达到行业领先水平。",
  },
  {
    icon: TrendingUp,
    title: "持续创新",
    description:
      "持续投入技术升级与流程优化，运用智能仓储管理系统助力客户业务增长。",
  },
  {
    icon: Heart,
    title: "客户至上",
    description:
      "深入了解每位客户的业务需求，提供量身定制的物流方案和专属客户经理服务。",
  },
];

const milestones = [
  { year: "成立", text: "Cube Distribution Service Ltd 在曼彻斯特成立" },
  { year: "扩展", text: "仓储面积扩大至80,000平方英尺" },
  { year: "认证", text: "获得Amazon Prime配送合作伙伴资质" },
  { year: "增长", text: "年度订单履约量突破312,000件" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
          <div className="absolute inset-0">
            <Image
              src="/images/warehouse-operations.jpg"
              alt="Cube Fulfilment 仓库"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                关于 Cube Fulfilment
              </p>
              <h1 className="mb-4 text-4xl font-black text-primary-foreground lg:text-5xl text-balance">
                您值得信赖的电商物流合作伙伴
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
                Cube Fulfilment（注册名：Cube Distribution Service Ltd）总部位于英国曼彻斯特，
                是一家专注于电商仓储与第三方物流（3PL）的专业服务商，致力于为各类规模的在线零售商提供高效、可靠的一站式物流解决方案。
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                  我们的故事
                </p>
                <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl text-balance">
                  从创业初心到行业标杆
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cube Fulfilment 诞生于对电商物流行业的深刻洞察。我们的创始团队发现，
                    许多中小型电商企业在快速增长过程中，常常因物流管理复杂、成本高昂而受限。
                  </p>
                  <p>
                    因此，我们创建了 Cube Fulfilment，旨在为电商卖家提供大型企业级别的仓储物流服务，
                    同时保持灵活性和个性化的客户体验。从初创品牌到成熟企业，我们量身定制最适合的物流方案。
                  </p>
                  <p>
                    如今，我们拥有超过80,000平方英尺的现代化仓储设施，年度处理订单超过312,000件，
                    已成为英国领先的电商履约服务提供商之一。
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((m) => (
                  <div
                    key={m.year}
                    className="rounded-xl border border-border bg-muted/50 p-5"
                  >
                    <p className="mb-2 text-lg font-bold text-primary">
                      {m.year}
                    </p>
                    <p className="text-sm text-muted-foreground">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                核心价值
              </p>
              <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
                驱动我们前行的力量
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Why Choose Us */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                为什么选择我们
              </p>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl text-balance">
                Cube Fulfilment 的独特优势
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Award,
                  title: "Amazon Prime 认证伙伴",
                  desc: "达到Amazon严格的物流配送标准，助力您的产品获得Prime徽章，提升销量和客户信任度。",
                },
                {
                  icon: Users,
                  title: "专属客户经理",
                  desc: "每位客户配备专属客户经理，深入了解您的业务，提供个性化服务和及时响应。",
                },
                {
                  icon: TrendingUp,
                  title: "可扩展的灵活方案",
                  desc: "无论您是每日10单还是10,000单，我们的仓储方案都能灵活适应您的业务规模变化。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-muted/30 p-8 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="gap-2">
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
