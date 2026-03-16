import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ShoppingBag,
  Link2,
  Package,
  PackageCheck,
  Truck,
  MapPin,
  RotateCcw,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "D2C 一件代发 - Cube海外仓",
  description:
    "支持独立站和多平台订单履约，实现英国本地快速发货，提升消费者购物体验。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "多平台订单接入与同步处理", icon: Link2 },
  { text: "SKU 与库存实时管理", icon: Package },
  { text: "拣货、打包、贴单与发运", icon: PackageCheck },
  { text: "多渠道本地配送支持", icon: Truck },
  { text: "物流追踪与异常处理", icon: MapPin },
  { text: "退货接收与售后支持", icon: RotateCcw },
];

export default function D2cPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="D2C 一件代发"
          title="独立站与多平台订单履约"
          description="支持 Shopify、WooCommerce、TikTok Shop 等多平台订单接入，实现英国本地快速发货，提升消费者购物体验。"
          image="/images/banner-d2c.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Text content */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  从订单到交付，一站式履约支持
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  无论是独立站还是多平台销售，Cube海外仓都能为您提供稳定的订单处理与配送支持。我们通过系统对接实现订单自动同步，结合英国本地仓储与配送资源，帮助卖家实现快速、准确的订单履约。
                </p>
                <ul className="space-y-4">
                  {features.map((item) => (
                    <li key={item.text} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right - Image */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/service-d2c.jpg"
                    alt="D2C 一件代发服务 - 仓库打包作业"
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
            <ShoppingBag className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              开启您的英国本地履约之旅
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论您是刚起步的独立站卖家，还是多平台运营的成熟商家，我们都能为您提供专业的一件代发服务支持。
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
