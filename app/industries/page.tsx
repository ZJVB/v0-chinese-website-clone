import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";

import { 
  Shirt, 
  Zap, 
  Smartphone, 
  Sofa, 
  Sparkles, 
  ArrowRight,
  Package,
  RefreshCw,
  Gift,
  Boxes,
  ShieldCheck,
  Thermometer,
  ClipboardList,
  Truck,
  RotateCcw,
  Tag,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "行业解决方案 - Cube海外仓",
  description:
    "针对时尚服饰、新能源电池、消费电子、大件家居、美妆保健品等不同行业特点，提供更匹配的英国本地履约支持。",
};

interface IndustryFeature {
  text: string;
  icon: LucideIcon;
}

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  image: string;
  features: IndustryFeature[];
}

const industries: Industry[] = [
  {
    icon: Shirt,
    title: "时尚服饰与快消品",
    description: "适合高频出货、多 SKU 管理与快速周转场景。提供专业的仓储管理、订单履约和退货处理服务，支持品牌和平台的运营需求。",
    href: "/industries/fashion",
    image: "/images/industry-fashion.jpg",
    features: [
      { text: "多 SKU 产品仓储与库存管理", icon: Boxes },
      { text: "高频订单处理与本地发货", icon: Package },
      { text: "促销活动与旺季履约安排", icon: Tag },
      { text: "退货接收与后续处理", icon: RotateCcw },
    ],
  },
  {
    icon: Zap,
    title: "新能源与电池",
    description: "更重视流程、合规与产品属性管理，适合对执行要求较高的仓储与物流场景。提供专业的电池类产品仓储与配送服务。",
    href: "/industries/energy",
    image: "/images/industry-energy.jpg",
    features: [
      { text: "英国本地仓储与库存管理", icon: Boxes },
      { text: "电池类产品操作流程配合", icon: ShieldCheck },
      { text: "适配产品属性的物流渠道", icon: Truck },
      { text: "售后退货与后续处理", icon: RotateCcw },
    ],
  },
  {
    icon: Smartphone,
    title: "消费电子与高价值商品",
    description: "更关注库存准确、包装保护、追踪可视化与签收体验。提供专业的高价值商品仓储、包装与配送服务。",
    href: "/industries/electronics",
    image: "/images/industry-electronics.jpg",
    features: [
      { text: "高价值商品仓储与库存管理", icon: ShieldCheck },
      { text: "订单处理与包装保护", icon: Package },
      { text: "物流追踪与签收反馈", icon: ClipboardList },
      { text: "退货检测与翻新处理", icon: RefreshCw },
    ],
  },
  {
    icon: Sofa,
    title: "大件家居与器材",
    description: "专业大件家居物流，覆盖家具、家纺、厨具、园艺等品类，提供安全存储与配送服务。",
    href: "/industries/home-garden",
    image: "/images/industry-home.jpg",
    features: [
      { text: "大件家具专业搬运与配送", icon: Truck },
      { text: "易碎品多层包装保护", icon: ShieldCheck },
      { text: "组装配件分拣打包", icon: Package },
      { text: "季节性库存管理", icon: Boxes },
    ],
  },
  {
    icon: Sparkles,
    title: "美妆与保健品",
    description: "专业健康产品物流服务，覆盖保健品、美妆、护肤等品类，确保产品安全与合规存储。",
    href: "/industries/health",
    image: "/images/industry-health.jpg",
    features: [
      { text: "美妆保健品专业仓储", icon: Thermometer },
      { text: "批次管理与效期追踪", icon: ClipboardList },
      { text: "高频小件订单处理", icon: Package },
      { text: "礼盒包装与增值服务", icon: Gift },
    ],
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
            key={industry.title} 
            className={`py-10 lg:py-14 ${index % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className={`flex flex-col lg:flex-row lg:items-center lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-2/5">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={560}
                      height={380}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="mt-6 lg:mt-0 lg:w-3/5">
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {industry.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    {industry.description}
                  </p>
                  
                  {/* Features - 2x2 grid */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {industry.features.map((feature) => (
                      <div 
                        key={feature.text} 
                        className="group flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary/5"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 shrink-0 transition-all duration-300 group-hover:bg-primary">
                          <feature.icon className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-white" />
                        </div>
                        <span className="text-foreground text-sm font-medium transition-colors duration-300 group-hover:text-primary">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline group"
                  >
                    了解更多
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
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
