import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageBanner } from "@/components/page-banner";
import {
  ArrowRight,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "关于我们 - Cube海外仓",
  description:
    "Cube海外仓是专注于为跨境电商卖家提供卓越英国本土仓储物流服务的专业伙伴。总部位于英国曼彻斯特，拥有超过30,000平方米的仓储设施。",
};

const stats = [
  { num: "30,000+", label: "平方米", desc: "仓储设施面积" },
  { num: "20,000+", label: "件/日", desc: "订单处理能力" },
  { num: "99.9%", label: "准确率", desc: "库存管理精度" },
];

const timeline = [
  { year: "2020", title: "公司成立", desc: "公司正式成立，开启专注于跨境电商仓储物流的业务。" },
  { year: "2021", title: "初步扩展", desc: "仓储面积扩增至 5,000 平方米，提升仓储能力与服务水平。" },
  { year: "2023", title: "效率提升", desc: "日处理订单量突破 3,000 单，运营效率显著提升。" },
  { year: "2024", title: "业务多元化", desc: "仓库扩展至 10,000 平方米；成功开通 TikTok 对接及代发项目；年底日订单量突破 10,000 单。" },
  { year: "2025", title: "官方认证", desc: "获得 TEMU 官方认证，成为 TEMU 海外仓合作伙伴。" },
  { year: "2026", title: "持续壮大", desc: "仓库规模进一步扩大至 20,000 平方米，持续强化仓储与物流服务能力。" },
];

const values = [
  { icon: Target, title: "专业", desc: "深耕英国仓储物流，提供专业解决方案" },
  { icon: Zap, title: "高效", desc: "先进WMS系统与自动化技术保障效率" },
  { icon: Heart, title: "可靠", desc: "以客户需求为核心，值得信赖的合作伙伴" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageBanner
          tag="关于 CUBE 海外仓"
          title="您的英国仓储物流专家"
          description="专注于为跨境电商卖家提供卓越英国本土仓储物流服务的专业伙伴"
          image="/images/warehouse-operations.jpg"
        />

        {/* Company Introduction */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              {/* Left - Image */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/about-warehouse.jpg"
                    alt="Cube海外仓仓储中心"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Right - Content */}
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">公司简介</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Cube 海外仓
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cube 海外仓是专注于为跨境电商卖家提供卓越英国本土仓储物流服务的专业伙伴。总部位于英国曼彻斯特，我们拥有超过 30,000 平方米的仓储设施，覆盖曼彻斯特、伯明翰等关键物流枢纽。
                  </p>
                  <p>
                    我们提供全面整合的物流解决方案，包括海外仓一件代发、亚马逊 FBA 中转、B2B 配送、高效退货处理以及专业的商品翻新服务。凭借先进的仓储管理系统（WMS）和自动化技术，Cube 海外仓能够实现日均处理超过 2 万件订单的高效运营。
                  </p>
                  <p>
                    作为 TEMU 官方认证的海外仓，我们始终坚持以客户需求为核心，致力于提供专业、高效、可靠的物流服务，赋能中国品牌成功出海。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-muted/20 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">发展历程</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                稳步前行，持续成长
              </h2>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 lg:-translate-x-1/2" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className={`relative flex flex-col lg:flex-row lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                      <div className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <span className="text-2xl font-black text-primary">{item.year}</span>
                        <h3 className="text-lg font-bold text-foreground mt-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md lg:-translate-x-1/2" />
                    
                    {/* Empty space for alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">实力数据</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                专业实力，值得信赖
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((s) => (
                <div 
                  key={s.num} 
                  className="group bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <p className="text-4xl lg:text-5xl font-black text-primary">{s.num}</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{s.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-muted/20 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">核心价值</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                赋能中国品牌成功出海
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                我们始终坚持以客户需求为核心，致力于提供专业、高效、可靠的物流服务
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((item) => (
                <div 
                  key={item.title} 
                  className="group bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              准备好开始合作了吗？
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              联系我们，了解 Cube 海外仓如何助力您的跨境电商业务
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
                <Link href="/solutions">查看解决方案</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
