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
  CheckCircle,
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
            
            {/* API Architecture Diagram */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/images/technology-api.jpg"
                alt="API 集成架构图"
                width={1400}
                height={700}
                className="w-full h-auto object-cover"
              />
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
