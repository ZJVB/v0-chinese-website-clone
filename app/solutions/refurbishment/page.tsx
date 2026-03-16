import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "检测翻新与二次销售 - Cube海外仓",
  description:
    "外观与功能检测、清洁整理与重新包装、配件补齐与分类分级，支持产品再流通。",
};

const features = [
  "外观与功能检测",
  "清洁整理与重新包装",
  "配件补齐与分类分级",
  "翻新处理与再流通支持",
  "质量评估与定价建议",
  "与退货流程无缝衔接",
];

export default function RefurbishmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="检测翻新与二次销售"
          title="最大化退货商品价值"
          description="提供外观与功能检测、清洁整理与重新包装、配件补齐与分类分级服务，支持产品再流通，最大化退货商品的价值回收。"
          image="/images/banner-refurbishment.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Full width image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12">
              <Image
                src="/images/service-refurbishment.jpg"
                alt="产品检测翻新 - 质量检查"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text content below */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                专业的产品翻新服务
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cube海外仓提供专业的产品检测与翻新服务，帮助卖家将退货商品转化为可再销售的库存。通过标准化的检测、清洁、包装流程，让退货商品重新获得市场价值。
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <RefreshCw className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              开启产品价值回收之旅
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是消费电子、家居用品还是服装配饰，我们都能为您提供专业的检测翻新服务。
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
