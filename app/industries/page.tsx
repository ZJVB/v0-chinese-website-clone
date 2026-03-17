import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";

import { 
  ArrowRight,
  CheckCircle,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "行业解决方案 - Cube海外仓",
  description:
    "针对时尚服饰、新能源电池、消费电子、大件家居、美妆保健品等不同行业特点，提供更匹配的英国本地履约支持。",
};

interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  services: string[];
  highlights: string[];
}

const industries: Industry[] = [
  {
    id: "fashion",
    title: "时尚服饰与快消品",
    subtitle: "高频出货 | 多SKU管理 | 快速周转",
    description: "适合高频出货、多 SKU 管理与快速周转场景。提供专业的仓储管理、订单履约和退货处理服务，支持品牌和平台的运营需求。",
    image: "/images/industry-fashion.jpg",
    services: [
      "多 SKU 产品仓储与库存管理",
      "高频订单处理与本地发货支持",
      "促销活动与旺季期间的履约安排",
      "退货接收、检查与后续处理",
      "配合平台与品牌需求的包装及增值操作",
    ],
    highlights: ["日处理订单10,000+", "SKU管理50,000+", "退货处理48h内"],
  },
  {
    id: "energy",
    title: "新能源与电池",
    subtitle: "合规存储 | 专业操作 | 安全配送",
    description: "更重视流程、合规与产品属性管理，适合对执行要求较高的仓储与物流场景。提供专业的电池类产品仓储与配送服务。",
    image: "/images/industry-energy.jpg",
    services: [
      "英国本地仓储与库存管理支持",
      "电池类及新能源产品的操作流程配合",
      "适配产品属性的物流渠道安排",
      "售后退货、检查与后续处理支持",
      "与仓储、履约、配送相结合的一体化服务",
    ],
    highlights: ["UN38.3认证配合", "专业操作流程", "合规渠道对接"],
  },
  {
    id: "electronics",
    title: "消费电子与高价值商品",
    subtitle: "库存精准 | 包装保护 | 签收追踪",
    description: "更关注库存准确、包装保护、追踪可视化与签收体验。提供专业的高价值商品仓储、包装与配送服务。",
    image: "/images/industry-electronics.jpg",
    services: [
      "高价值商品仓储与库存管理",
      "订单处理、包装保护与出货支持",
      "更清晰的物流追踪与签收反馈",
      "退货检测、翻新及后续处理支持",
      "适合品牌和平台业务的本地履约安排",
    ],
    highlights: ["库存准确率99.9%", "多层包装保护", "签收实时反馈"],
  },
  {
    id: "home",
    title: "大件家居与器材",
    subtitle: "大件处理 | 专业配送 | 安装支持",
    description: "专业大件家居物流，覆盖家具、家纺、厨具、园艺等品类，提供安全存储与配送服务。",
    image: "/images/industry-home.jpg",
    services: [
      "大件家具专业搬运与配送",
      "易碎品多层包装保护",
      "组装配件分拣打包",
      "季节性库存管理",
      "园艺产品存储方案",
      "白手套送货服务",
    ],
    highlights: ["大件专业处理", "易碎品保护", "预约上门配送"],
  },
  {
    id: "health",
    title: "美妆与保健品",
    subtitle: "温控存储 | 效期管理 | 合规处理",
    description: "专业健康产品物流服务，覆盖保健品、美妆、护肤等品类，确保产品安全与合规存储。",
    image: "/images/industry-health.jpg",
    services: [
      "健康产品专业仓储环境",
      "批次管理与效期追踪",
      "温湿度监控存储",
      "产品合规性文档管理",
      "高频小件订单处理",
      "礼盒包装与增值服务",
    ],
    highlights: ["温湿度监控", "效期精准管理", "无尘包装环境"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="INDUSTRIES"
          title="行业解决方案"
          description="不同产品在仓储、履约、配送和售后上的要求并不相同。Cube海外仓结合不同行业的业务特点，为客户提供更符合实际运营需求的英国本地物流支持。"
          image="/images/banner-industries.jpg"
        />

        {/* Industries sections with alternating layouts */}
        {industries.map((industry, index) => (
          <section 
            key={industry.id} 
            id={industry.id}
            className={`py-12 lg:py-16 ${index % 2 === 1 ? 'bg-muted/30' : 'bg-white'}`}
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className={`flex flex-col lg:flex-row lg:items-start lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-[45%] lg:sticky lg:top-24">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-xl">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={600}
                      height={400}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {industry.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="mt-6 lg:mt-0 lg:w-[55%]">
                  {/* Header */}
                  <div className="mb-6">
                    <p className="text-sm text-primary font-medium mb-2">{industry.subtitle}</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {industry.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  
                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">服务内容</h3>
                    <ul className="space-y-3">
                      {industry.services.map((service) => (
                        <li 
                          key={service} 
                          className="group flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100 cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 hover:shadow-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-foreground transition-colors duration-300 group-hover:text-primary">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <Button asChild className="gap-2 group transition-all duration-300 hover:scale-105">
                    <Link href="/contact">
                      获取行业方案
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-16 lg:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              寻找适合您行业的物流方案？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论您经营哪个品类，我们都能为您提供专业的英国本地仓储与物流支持。立即联系我们，获取定制化的行业解决方案。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">
                  立即咨询
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
