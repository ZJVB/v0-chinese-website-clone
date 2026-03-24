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
  ShieldCheck,
  TrendingUp,
  ClipboardList,
  Users,
  LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TEMU 官方认证仓 - Cube海外仓",
  description:
    "Cube海外仓作为 TEMU 官方认证仓，为平台卖家提供标准化仓储、订单履约与本地发货支持，履约表现长期位居前列。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "通过 TEMU 官方审核认证", icon: ShieldCheck },
  { text: "履约数据持续位居平台前列", icon: TrendingUp },
  { text: "标准化 SOP 流程管理", icon: ClipboardList },
  { text: "专业团队全程支持", icon: Users },
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
          image="/images/hero-temu.jpg"
        />

        {/* Official Certification Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {/* Image with text overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/images/temu-ranking.jpg"
                alt="TEMU 平台履约排名 - CUBE 位居前列"
                width={1400}
                height={900}
                className="w-full h-auto object-cover"
              />
              {/* Text overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  TEMU 官方认证，品质有保障
                </h2>
                <p className="text-white/80 leading-relaxed max-w-3xl">
                  Cube海外仓作为 TEMU 平台官方认证的海外仓服务商，严格按照平台标准执行入仓、存储、履约、发货等全流程操作。我们理解平台业务对时效、流程规范和履约稳定性的要求，帮助卖家更顺畅地开展英国本地业务。
                </p>
              </div>
            </div>
            
            {/* Service features - 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {features.map((item) => (
                <div 
                  key={item.text} 
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 cursor-pointer transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <item.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="text-foreground font-semibold text-lg transition-colors duration-300 group-hover:text-primary">{item.text}</span>
                </div>
              ))}
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
