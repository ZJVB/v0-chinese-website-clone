import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Building2,
  Boxes,
  Store,
  ClipboardCheck,
  CalendarClock,
  MessageSquareWarning,
  Settings2,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "B2B 零售分销 - Cube海外仓",
  description:
    "适用于整箱、整托、门店补货及批量订单配送场景，支持预约送货与签收回单管理。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "整箱、整托及批量订单出货", icon: Boxes },
  { text: "零售渠道分拨与门店补货", icon: Store },
  { text: "预约送货与签收回单管理", icon: ClipboardCheck },
  { text: "分阶段交付与项目型配送", icon: CalendarClock },
  { text: "异常反馈与交付协调服务", icon: MessageSquareWarning },
  { text: "定制化物流方案支持", icon: Settings2 },
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
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/banner-b2b.jpg"
                    alt="B2B 零售分销 - 批量配送作业"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right - Text content */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  专业的 B2B 物流解决方案
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓为品牌商、经销商和零售企业提供专业的 B2B 物流服务。从批量出货到门店配送，我们提供完整的分销物流支持，确保货物准时、准确送达。
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
