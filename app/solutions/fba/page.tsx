import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "FBA 备货与转运服务 - Cube海外仓",
  description:
    "支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存。",
};

const features = [
  "英国本地 FBA 备货仓支持",
  "临时仓储与库存缓冲",
  "FNSKU 贴标与换标服务",
  "分批补货与转运安排",
  "退件回收与后续处理",
  "库存管理与数据同步",
];

export default function FbaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="FBA 备货与转运"
          title="灵活管理您的 FBA 库存"
          description="支持英国本地前置仓备货、中转、分批补货与退件处理，帮助卖家更灵活地管理 FBA 库存，降低仓储成本，提高补货效率。"
          image="/images/banner-fba.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/fba-warehouse.jpg"
                    alt="Amazon FBA 备货转运 - FNSKU 贴标作业"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right - Text content */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  一站式 FBA 前置仓服务
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓为亚马逊卖家提供英国本地 FBA 前置仓服务。通过本地备货、分批补货和灵活转运，帮助卖家优化库存周转，降低长期仓储费用，提高 FBA 补货效率。
                </p>
                <ul className="space-y-3">
                  {features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <Package className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              优化您的 FBA 库存管理
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是新品备货、分批补货还是退件处理，我们都能为您提供专业的 FBA 前置仓服务支持。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
