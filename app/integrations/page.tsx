import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "平台集成 - Cube Fulfilment",
  description:
    "Cube Fulfilment 与 Amazon、eBay、Shopify 等主流电商平台无缝集成，提供多渠道库存管理和订单履约。",
};

const marketplaces = [
  {
    name: "Amazon",
    desc: "全球最大电商平台，支持FBA和自发货模式。",
  },
  { name: "eBay", desc: "全球知名拍卖和零售平台，覆盖190个市场。" },
  {
    name: "Shopify",
    desc: "领先的独立站建站平台，适合品牌直营。",
  },
  {
    name: "TikTok Shop",
    desc: "新兴社交电商平台，触达年轻消费群体。",
  },
  {
    name: "WooCommerce",
    desc: "基于WordPress的开源电商解决方案。",
  },
  { name: "Etsy", desc: "手工艺品和创意商品的全球交易平台。" },
  {
    name: "Magento",
    desc: "企业级电商平台，适合大型零售商。",
  },
  {
    name: "BigCommerce",
    desc: "功能丰富的SaaS电商平台。",
  },
  { name: "OnBuy", desc: "英国本土快速增长的电商市场。" },
  {
    name: "Wayfair",
    desc: "家居和生活用品专业电商平台。",
  },
];

const couriers = [
  { name: "Royal Mail", desc: "英国皇家邮政，覆盖全英及国际邮路。" },
  { name: "DPD", desc: "欧洲领先包裹快递，时效快、追踪精准。" },
  { name: "Evri (Hermes)", desc: "英国最大独立快递网络之一。" },
  { name: "DHL", desc: "全球物流巨头，国际快递首选。" },
  { name: "FedEx", desc: "全球快递服务，覆盖220+国家和地区。" },
  { name: "UPS", desc: "全球综合物流服务提供商。" },
  { name: "Yodel", desc: "英国本土快递，擅长最后一公里配送。" },
  {
    name: "Amazon Logistics",
    desc: "Amazon自有物流，支持Prime配送。",
  },
  { name: "TNT", desc: "国际快递与货运服务。" },
  { name: "Parcelforce", desc: "Royal Mail旗下的包裹快递服务。" },
];

const features = [
  {
    icon: Monitor,
    title: "实时库存同步",
    desc: "所有渠道的库存数据实时更新，避免超卖和缺货。",
  },
  {
    icon: RefreshCw,
    title: "自动订单处理",
    desc: "订单自动流转至仓库，无需人工干预，减少出错。",
  },
  {
    icon: BarChart3,
    title: "数据分析报告",
    desc: "详细的销售和库存数据报告，助力经营决策。",
  },
  {
    icon: Package,
    title: "多渠道统一管理",
    desc: "一个后台管理所有销售渠道的订单和库存。",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                平台集成
              </p>
              <h1 className="mb-4 text-4xl font-black text-accent-foreground lg:text-5xl text-balance">
                多渠道无缝对接
              </h1>
              <p className="text-lg leading-relaxed text-accent-foreground/80 text-pretty">
                Cube Fulfilment 的智能仓储管理系统与所有主流电商平台和物流渠道深度集成，
                确保您的库存、订单在多个销售渠道中实时同步、高效运转。
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-muted/30 p-6"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1.5 font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplaces */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                电商平台集成
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {marketplaces.map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1.5 font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Couriers */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 flex items-center gap-3">
              <Truck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
                快递物流集成
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {couriers.map((c) => (
                <div
                  key={c.name}
                  className="rounded-xl border border-border bg-muted/30 p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-1.5 font-semibold text-foreground">
                    {c.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-accent-foreground lg:text-3xl">
              想了解我们如何对接您的销售渠道？
            </h2>
            <p className="mb-8 text-accent-foreground/70">
              我们的技术团队将为您演示系统集成方案
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
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
