import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import {
  Warehouse,
  Package,
  Ship,
  Plane,
  ArrowRight,
  CheckCircle,
  RotateCcw,
  Tag,
  Gift,
  ShoppingCart,
  RefreshCw,
  Truck,
  ScanLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "服务项目 - Cube Fulfilment",
  description:
    "Cube Fulfilment 提供智能仓储与精准分拣系统，跨境卖家的零风险履约解决方案。",
};

const coreServices = [
  { icon: Warehouse, title: "英国海外仓", slug: "uk-warehouse", desc: "本土化仓储服务，多区布点辐射全英" },
  { icon: Package, title: "国际集运物流", slug: "consolidation", desc: "资源整合中转，全球揽收统一归集" },
  { icon: Ship, title: "国际海运", slug: "sea-freight", desc: "大宗运输主力，整柜拼箱灵活适配" },
  { icon: Plane, title: "国际空运", slug: "air-freight", desc: "高效时效保障，优先舱位极速通关" },
];

const fulfillmentFeatures = [
  { icon: ScanLine, title: "订单自动同步", desc: "减少人工干预，提高履约效率", detail: "实时订单更新，自动同步客户下单信息，确保精准履约" },
  { icon: Package, title: "智能拣选 & 精准配货", desc: "确保订单准确无误", detail: "AI驱动拣货优化，系统智能分配最优拣选路径" },
  { icon: Gift, title: "品牌定制包装", desc: "提升客户体验，增强品牌影响力", detail: "个性化外包装，提供品牌专属包装、LOGO贴标" },
];

const returnServices = [
  { icon: RotateCcw, title: "本地退货地址", desc: "帮助商家提供英国退货地址，减少退货时间和成本" },
  { icon: CheckCircle, title: "退货检测 & 质检", desc: "支持二次质检，将可售产品重新入库，减少损失" },
  { icon: Tag, title: "换标 & 重新包装", desc: "重新贴标、换包装后再次入库，确保符合销售平台要求" },
  { icon: RefreshCw, title: "残次品处理", desc: "提供销毁或转售渠道，优化库存管理" },
  { icon: ShoppingCart, title: "FBA仓储补货", desc: "快速补货至亚马逊FBA仓库，确保库存充足" },
  { icon: Tag, title: "FBA退货换标", desc: "更换FBA标签，避免亚马逊违规，减少损失" },
  { icon: Truck, title: "FBM（自发货）支持", desc: "灵活切换FBA/FBM模式，提高库存管理灵活性" },
  { icon: Package, title: "多平台订单处理", desc: "支持eBay、Shopify、TikTok等多渠道订单履行" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative pt-20">
          <div className="relative h-[320px] lg:h-[400px]">
            <Image
              src="/images/warehouse-operations.jpg"
              alt="Cube 仓储服务"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    智能仓储与精准分拣系统
                  </p>
                  <h1 className="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
                    {"跨境卖家的\"零风险\"履约解决方案"}
                  </h1>
                  <p className="text-base leading-relaxed text-white/70 max-w-lg text-pretty">
                    AI驱动的智能分拣系统，自动化优化拣货路径，支持多SKU订单高效处理，条码双重校验确保0错漏。订单处理效率提升30%，精准配货率达99.8%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core 4 services */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col items-center rounded-lg bg-background p-7 text-center shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ecommerce fulfilment detail */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle
              title="英国本土多仓布局，高效覆盖"
              highlight="全欧市场"
              subtitle="扎根英国核心物流节点（利物浦、曼彻斯特、伦敦），三仓联动辐射伯明翰、爱丁堡等30+城市，依托智能分仓系统实现欧洲48小时极速达"
            />
          </div>
        </section>

        {/* Fulfillment features */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              WHY CHOOSE US
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {fulfillmentFeatures.map((f) => (
                <div key={f.title} className="rounded-lg bg-background p-8 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{f.desc}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Return & FBA services */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle
              title="退换货 & FBA/FBM"
              highlight="转运服务"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {returnServices.map((s) => (
                <div key={s.title} className="rounded-lg bg-card p-5 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="mb-1 text-sm font-bold text-foreground">{s.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              需要定制化的物流方案？
            </h2>
            <p className="mb-8 text-muted-foreground">
              联系我们的专家团队，获取适合您业务的个性化物流解决方案
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
