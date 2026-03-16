import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "B2B 零售分销 - Cube海外仓",
  description:
    "适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理。",
};

const features = [
  "整箱、整托及批量订单出货",
  "零售渠道分拨与门店补货",
  "预约送货与签收回单管理",
  "分阶段交付与项目型配送",
  "异常反馈与交付协调服务",
  "定制化物流方案支持",
];

export default function B2bPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="B2B 零售分销"
          title="批量配送与零售分拨"
          description="适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理，为零售渠道提供稳定可靠的分销物流支持。"
          image="/images/banner-b2b.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Full width image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12">
              <Image
                src="/images/banner-b2b.jpg"
                alt="B2B 零售分销 - 批量配送作业"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text content below */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                专业的 B2B 物流解决方案
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cube海外仓为品牌商、经销商和零售企业提供专业的 B2B 物流服务。从批量出货到门店配送，我们提供完整的分销物流支持，确保货物准时、准确送达。
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
            <Building2 className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              开启您的 B2B 物流合作
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是零售门店补货、批发分销还是项目型配送，我们都能为您提供专业的 B2B 物流解决方案。
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
