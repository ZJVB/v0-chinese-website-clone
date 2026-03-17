import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Container,
  Plane,
  PackageSearch,
  Calendar,
  Link2,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "货运与特种物流 - Cube海外仓",
  description: "整柜、拼箱及多种国际运输方式支持，大件、设备、电池类及特殊货物处理。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "整柜、拼箱及多种国际运输方式支持", icon: Container },
  { text: "空运、海运、陆运及铁路运输协调", icon: Plane },
  { text: "大件、设备、电池类及特殊货物处理", icon: PackageSearch },
  { text: "项目物流与分阶段交付安排", icon: Calendar },
  { text: "仓储、中转与末端配送一体衔接", icon: Link2 },
];

export default function FreightPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="FREIGHT & SPECIAL LOGISTICS"
          title="货运与特种物流"
          description="提供整柜、拼箱及多种国际运输方式支持，处理大件、设备、电池类及特殊货物，实现仓储、中转与末端配送一体化衔接。"
          image="/images/warehousing-freight.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Text content */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  专业的货运物流服务
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓提供全方位的货运与特种物流服务，支持多种国际运输方式。无论是大宗货物还是特殊品类，我们都能提供专业的物流解决方案。
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
                    src="/images/warehousing-freight.jpg"
                    alt="货运物流 - 集装箱码头"
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
              需要货运物流支持？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论是国际货运还是特殊货物处理，我们都能为您提供专业的物流解决方案
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
