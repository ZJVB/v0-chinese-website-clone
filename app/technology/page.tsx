import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";

import { 
  ArrowRight,
  Database, 
  Package, 
  BarChart3, 
  Settings, 
  Monitor, 
  Globe,
  Link2,
  Smartphone,
  CheckCircle,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "技术支持 - Cube海外仓",
  description: "自研WMS仓储管理系统，支持多平台API对接，实现库存实时同步、订单自动处理、数据智能分析。",
};

const wmsFeatures = [
  { icon: Database, title: "实时库存管理", desc: "SKU级别库存追踪，多仓库同步更新，支持批次管理与效期预警" },
  { icon: Package, title: "智能订单处理", desc: "自动订单分配与波次拣货，支持多订单合并处理，提升拣货效率" },
  { icon: BarChart3, title: "数据分析报表", desc: "库存周转率、订单趋势、绩效报告等多维度数据分析" },
  { icon: Settings, title: "自动化工作流", desc: "入库质检、上架、出库全流程自动化，减少人工干预" },
  { icon: Monitor, title: "可视化看板", desc: "实时运营数据大屏展示，关键指标一目了然" },
];

const integrations = [
  { 
    name: "电商平台", 
    icon: Globe,
    items: ["Amazon", "eBay", "TEMU", "Shopify", "WooCommerce", "Magento", "TikTok Shop"] 
  },
  { 
    name: "快递服务", 
    icon: Package,
    items: ["Royal Mail", "DPD", "Evri", "UPS", "FedEx", "DHL", "Yodel"] 
  },
  { 
    name: "ERP系统", 
    icon: Link2,
    items: ["SAP", "Oracle", "NetSuite", "金蝶", "用友", "自定义API"] 
  },
];

const apiFeatures = [
  { icon: Zap, text: "RESTful API 标准接口" },
  { icon: Clock, text: "实时 Webhook 推送" },
  { icon: Database, text: "批量数据同步" },
  { icon: Settings, text: "自定义字段映射" },
  { icon: Shield, text: "沙盒测试环境" },
  { icon: Monitor, text: "完善技术文档" },
];

const mobileFeatures = [
  "实时库存查询与盘点",
  "订单状态追踪与更新",
  "异常预警即时推送",
  "数据报表随时查看",
];

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="技术驱动"
          title="数字化仓储管理系统"
          description="自研WMS仓储管理系统，支持多平台API对接，实现库存实时同步、订单自动处理、数据智能分析，为您的仓储运营提供强大技术支撑。"
          image="/images/technology-wms.jpg"
        />

        {/* WMS Features Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">核心系统</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">WMS 仓储管理系统</h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/technology-wms.jpg"
                    alt="WMS 仓储管理系统"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right - Content */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  自主研发的仓储管理系统，覆盖入库、存储、拣货、打包、发货全流程，支持多仓库、多货主管理，实现仓储作业的数字化与智能化。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {wmsFeatures.map((item) => (
                    <div 
                      key={item.title} 
                      className="group flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <item.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform & API Integrations */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-muted/20 border-t border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">开放集成</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                全平台 API 无缝对接
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                提供标准化 RESTful API 接口，支持主流电商平台、快递服务商和 ERP 系统对接，实现订单自动同步、物流信息实时更新、库存数据多端一致。
              </p>
            </div>
            
            {/* Platform Cards */}
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              {integrations.map((group) => (
                <div 
                  key={group.name} 
                  className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                      <group.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{group.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span 
                        key={item} 
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* API Features Grid */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-foreground mb-6 text-center">API 集成能力</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {apiFeatures.map((item) => (
                  <div 
                    key={item.text} 
                    className="group flex flex-col items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <item.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <span className="text-foreground text-sm font-medium text-center transition-colors duration-300 group-hover:text-primary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-muted/20 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">移动管理</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">移动端随时管理</h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Mock Phone */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="relative w-64 h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="h-8 bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Cube WMS</span>
                      </div>
                      {/* App content */}
                      <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">今日订单</p>
                            <p className="text-2xl font-bold text-foreground">1,234</p>
                          </div>
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Package className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-muted/50 rounded-xl p-3">
                            <p className="text-xs text-muted-foreground">待处理</p>
                            <p className="text-lg font-bold text-foreground">89</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-3">
                            <p className="text-xs text-muted-foreground">已发货</p>
                            <p className="text-lg font-bold text-primary">1,145</p>
                          </div>
                        </div>
                        <div className="bg-muted/30 rounded-xl p-3">
                          <p className="text-xs text-muted-foreground mb-2">库存预警</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-foreground">SKU-A001</span>
                              <span className="text-primary">低于安全库存</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-foreground">SKU-B023</span>
                              <span className="text-primary">即将过期</span>
                            </div>
                          </div>
                        </div>
                        <div className="h-8 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-medium">查看详情</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                </div>
              </div>
              {/* Right - Content */}
              <div className="mt-12 lg:mt-0 lg:w-1/2">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  通过移动端应用，随时随地查看库存状态、订单进度和运营报表。异常情况实时推送，让您不错过任何重要信息。
                </p>
                <ul className="space-y-3">
                  {mobileFeatures.map((item) => (
                    <li 
                      key={item} 
                      className="group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:shadow-md hover:translate-x-2"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <Smartphone className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <span className="text-foreground font-medium transition-colors duration-300 group-hover:text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <CheckCircle className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              体验数字化仓储管理
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              预约系统演示，了解 Cube WMS 如何帮助您提升仓储运营效率、降��运营成本、优化库存管理。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">
                  预约演示
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Link href="/solutions">查看解决方案</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
