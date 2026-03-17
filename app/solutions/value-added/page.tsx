import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "增值服务 - Cube海外仓",
  description:
    "贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理服务。",
};

const features = [
  "贴标、换标与重新包装",
  "组合装与套装组装",
  "促销包装与礼品包装",
  "抽检、拍照与资料留存",
  "定制报表与特殊操作",
  "按平台要求个性化处理",
];

export default function ValueAddedPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="增值服务"
          title="个性化仓储增值处理"
          description="提供贴标、换标、重新包装、组合装、套装组装、促销包装、抽检、拍照等个性化处理服务，满足不同平台和客户的特殊需求。"
          image="/images/banner-value-added.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Full width image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12">
              <Image
                src="/images/service-value-added.jpg"
                alt="增值服务 - 贴标换标作业"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text content below */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                灵活的增值服务支持
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cube海外仓提供多种增值服务，帮助卖家满足不同平台和渠道的特殊要求。从简单的贴标换标到复杂的套装组装，我们都能提供专业、高效的处理支持。
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
            <Wrench className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              定制您的增值服务方案
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是标准化操作还是特殊项目需求，我们都能为您提供灵活的增值服务解决方案。
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
