"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { 
  CheckCircle, ArrowRight, Monitor, BarChart3, Globe, 
  Smartphone, Database, Settings, Link2, Package, Cpu 
} from "lucide-react";

const wmsFeatures = [
  { icon: Database, title: "实时库存管理", desc: "SKU级别库存追踪，多仓库同步更新" },
  { icon: Package, title: "智能订单处理", desc: "自动订单分配，批量拣货优化" },
  { icon: BarChart3, title: "数据分析报表", desc: "库存周转、订单趋势、绩效报告" },
  { icon: Settings, title: "自动化工作流", desc: "入库、质检、上架自动化流程" },
  { icon: Monitor, title: "可视化看板", desc: "实时运营数据可视化展示" },
  { icon: Cpu, title: "AI智能预测", desc: "销量预测、库存预警智能分析" },
];

const integrations = [
  { name: "电商平台", items: ["Amazon", "eBay", "TEMU", "Shopify", "WooCommerce", "Magento"] },
  { name: "快递服务", items: ["Royal Mail", "DPD", "Evri", "UPS", "FedEx", "DHL"] },
  { name: "ERP系统", items: ["SAP", "Oracle", "NetSuite", "金蝶", "用友", "自定义API"] },
];

const apiFeatures = [
  "RESTful API 标准接口",
  "实时Webhook推送",
  "批量数据同步",
  "自定义字段映射",
  "沙盒测试环境",
  "技术文档完善",
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        <section className="bg-gradient-to-br from-primary/5 to-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">技术驱动</p>
            <h1 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">数字化仓储系统</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              自研WMS仓储管理系统，支持多平台API对接，实现库存实时同步、订单自动处理、数据智能分析。
            </p>
          </div>
        </section>

        {/* WMS Features */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle title="WMS系统功能" highlight="WMS" subtitle="全方位仓储管理解决方案" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {wmsFeatures.map((item) => (
                <Card key={item.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integrations */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle title="平台对接" highlight="对接" subtitle="无缝连接您的销售渠道" />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {integrations.map((group) => (
                <Card key={group.name} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        {group.name === "电商平台" ? <Globe className="h-5 w-5 text-primary" /> :
                         group.name === "快递服务" ? <Package className="h-5 w-5 text-primary" /> :
                         <Link2 className="h-5 w-5 text-primary" />}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{group.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full bg-background px-3 py-1 text-sm text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle title="开放API" highlight="API" subtitle="灵活的系统集成能力" />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {apiFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App */}
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">移动管理</p>
                <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">随时随地掌控仓储</h2>
                <p className="mb-6 text-muted-foreground">
                  通过移动端应用，您可以随时查看库存状态、订单进度、运营报表，实现远程仓储管理。
                </p>
                <ul className="space-y-3">
                  {["实时库存查询", "订单状态追踪", "异常预警推送", "数据报表查看"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative h-80 w-64 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-4 shadow-2xl">
                  <div className="h-full w-full rounded-2xl bg-card/95 p-4">
                    <div className="mb-4 text-center text-sm font-semibold text-foreground">Cube WMS</div>
                    <div className="space-y-3">
                      <div className="h-8 rounded bg-muted" />
                      <div className="h-16 rounded bg-muted" />
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-12 rounded bg-muted" />
                        <div className="h-12 rounded bg-muted" />
                      </div>
                      <div className="h-8 rounded bg-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-foreground">体验数字化仓储</h2>
            <p className="mb-8 text-muted-foreground">预约系统演示，了解如何提升您的仓储效率</p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">预约演示 <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
