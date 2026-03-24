import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  RotateCcw,
  MapPin,
  PackageSearch,
  GitBranch,
  PackagePlus,
  RefreshCw,
  HeadphonesIcon,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "退货与售后支持 - Cube海外仓",
  description:
    "提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "英国本地退件接收与登记", icon: MapPin },
  { text: "开箱检查与状态判断", icon: PackageSearch },
  { text: "分类处理与后续安排", icon: GitBranch },
  { text: "重新上架或退回支持", icon: PackagePlus },
  { text: "逆向履约与库存恢复", icon: RefreshCw },
  { text: "售后流程协同与异常处理", icon: HeadphonesIcon },
];

export default function ReturnsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="退货与售后支持"
          title="高效处理退货，优化售后体验"
          description="提供退件接收、检查、分类处理与后续履约支持，帮助客户优化退货流程，降低退货处理成本，提升库存周转效率。"
          image="/images/banner-returns.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Text content */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  完善的退货处理流程
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓提供专业的退货处理服务，从退件接收、开箱检查到分类处理，帮助卖家高效管理退货商品。通过规范化的处理流程，最大限度降低退货损失，提升库存价值回收率。
                </p>
                <ul className="space-y-3">
                  {features.map((item) => (
                    <li 
                      key={item.text} 
                      className="group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:shadow-md hover:translate-x-2"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <item.icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <span className="text-foreground font-medium transition-colors duration-300 group-hover:text-primary">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right - Image */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/service-returns.jpg"
                    alt="退货处理 - 检查与分类"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <RotateCcw className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              优化您的退货处理流程
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是电商平台退货还是品牌售后，我们都能为您提供专业的退货处理与逆向物流支持。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Link href="/solutions">查看全部方案</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
