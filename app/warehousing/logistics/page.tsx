import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Link2,
  Layers,
  Settings2,
  Shuffle,
  TrendingUp,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "物流渠道 - Cube海外仓",
  description: "多家主流英国物流渠道对接，按时效、签收方式和成本结构配置物流方案。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "多家主流英国物流渠道对接", icon: Link2 },
  { text: "轻小件、标准件、大件及特殊订单渠道匹配", icon: Layers },
  { text: "按时效、签收方式和成本结构配置物流方案", icon: Settings2 },
  { text: "多渠道组合发货与资源切换支持", icon: Shuffle },
  { text: "提升履约灵活性与配送稳定性", icon: TrendingUp },
];

export default function LogisticsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="LOGISTICS CHANNELS"
          title="物流渠道"
          description="对接多家主流英国物流渠道，根据产品属性、时效要求和成本结构灵活配置物流方案，提升履约灵活性与配送稳定性。"
          image="/images/warehousing-logistics.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/warehousing-logistics.jpg"
                    alt="物流渠道 - 分拣中心"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right - Text content */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  多元化物流渠道选择
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓与多家英国主流物流服务商建立深度合作，为您提供丰富的物流渠道选择。根据产品特性和业务需求，灵活匹配最优配送方案。
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
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              需要物流渠道支持？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              我们将根据您的业务需求，为您推荐最合适的物流渠道组合方案
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
