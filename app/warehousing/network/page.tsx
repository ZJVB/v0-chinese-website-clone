import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Warehouse,
  PackageOpen,
  GitBranch,
  Store,
  TrendingUp,
  LucideIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "仓储网络 - Cube海外仓",
  description: "英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。",
};

const features: { text: string; icon: LucideIcon }[] = [
  { text: "英国本地仓储与库存管理", icon: Warehouse },
  { text: "入仓、存储、出库及中转支持", icon: PackageOpen },
  { text: "分仓、调拨与多仓协同安排", icon: GitBranch },
  { text: "电商、零售、FBA 与项目型业务支持", icon: Store },
  { text: "旺季库存缓冲与弹性仓储服务", icon: TrendingUp },
];

export default function NetworkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          tag="WAREHOUSING NETWORK"
          title="仓储网络"
          description="英国本地仓储与库存管理，支持电商、零售、FBA 与项目型业务。提供入仓、存储、出库及中转支持，满足不同业务场景的仓储需求。"
          image="/images/warehousing-network.jpg"
        />

        {/* Main Content Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/warehousing-network.jpg"
                    alt="仓储网络 - 英国本地仓库"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right - Text content */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  专业的仓储管理服务
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Cube海外仓在英国建立了完善的仓储网络，为跨境电商卖家、品牌商和零售企业提供专业的本地仓储服务。从入仓到出库，我们提供全流程的库存管理支持。
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
              需要仓储服务支持？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              无论您是需要长期仓储还是临时库存缓冲，我们都能为您提供灵活的仓储解决方案
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
