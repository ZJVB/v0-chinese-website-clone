import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TEMU 官方认证仓 - Cube海外仓",
  description:
    "Cube海外仓作为 TEMU 官方认证仓，为平台卖家提供标准化仓储、订单履约与本地发货支持，履约表现长期位居前列。",
};

const stats = [
  { value: "99.5%+", label: "订单准确率" },
  { value: "24h", label: "订单处理时效" },
  { value: "Top 3", label: "履约排名" },
  { value: "7x24", label: "系统支持" },
];

export default function TemuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="TEMU 官方认证仓"
          title="履约表现持续位居前列"
          description="依托标准化作业流程、稳定的订单处理能力和英国本地履约资源，Cube海外仓为 TEMU 卖家提供更高效、更可靠的本地仓配支持。"
          image="/images/temu-hero.jpg"
        />

        {/* Stats Section */}
        <section className="relative -mt-12 z-10">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 lg:p-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Official Certification Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Full width image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 mb-12">
              <Image
                src="/images/temu-ranking.jpg"
                alt="TEMU 平台履约排名 - CUBE 位居前列"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text content below */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                TEMU 官方认证，品质有保障
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cube海外仓作为 TEMU 平台官方认证的海外仓服务商，严格按照平台标准执行入仓、存储、履约、发货等全流程操作。我们理解平台业务对时效、流程规范和履约稳定性的要求，帮助卖家更顺畅地开展英国本地业务。
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                {["通过 TEMU 官方审核认证", "履约数据持续位居平台前列", "标准化 SOP 流程管理", "专业团队全程支持"].map((item) => (
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
            <BadgeCheck className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              开启 TEMU 英国本地履约之旅
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论您是刚入驻 TEMU 平台的新卖家，还是希望优化现有物流方案的资深商家，我们都能为您提供专业的本地仓配支持。
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
