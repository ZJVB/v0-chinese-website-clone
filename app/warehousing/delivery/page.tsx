import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  MapPin,
  Clock,
  Package,
  Radio,
  Settings,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "全英配送时效 - Cube海外仓",
  description: "英国主要区域本地配送支持，标准配送、次日达及不同服务等级安排。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "英国主要区域本地配送支持", icon: MapPin },
  { text: "标准配送、次日达及不同服务等级安排", icon: Clock },
  { text: "大件、特殊交付及签收要求支持", icon: Package },
  { text: "物流追踪、签收反馈与异常处理", icon: Radio },
  { text: "根据订单结构匹配更合适的配送方案", icon: Settings },
];

export default function DeliveryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="DELIVERY COVERAGE"
          title="全英配送时效"
          description="英国主要区域本地配送支持，提供标准配送、次日达及不同服务等级安排，满足不同业务场景的时效需求。"
          image="/images/warehousing-delivery.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Text content */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  覆盖全英的配送网络
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓与多家英国本地物流服务商建立合作，提供覆盖英国主要区域的配送服务。根据您的业务需求，灵活选择标准配送或加急配送方案。
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
                    src="/images/warehousing-delivery.jpg"
                    alt="全英配送 - 物流车队"
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              需要配送服务支持？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是标准配送还是次日达，我们都能为您提供可靠的英国本地配送服务
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Link href="/warehousing">返回仓储与派送</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
