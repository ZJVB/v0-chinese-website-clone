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
  Package,
  Truck,
  BarChart3,
  Clock,
  ShieldCheck,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "TEMU 官方认证仓 - Cube海外仓",
  description:
    "Cube海外仓作为 TEMU 官方认证仓，为平台卖家提供标准化仓储、订单履约与本地发货支持，履约表现长期位居前列。",
};

const features = [
  {
    icon: Package,
    title: "标准化入仓管理",
    description: "规范化收货流程，支持批量入库与单件入库，实时库存同步",
  },
  {
    icon: Clock,
    title: "高效订单处理",
    description: "日均处理能力强，订单响应快速，确保履约时效",
  },
  {
    icon: Truck,
    title: "本地发货网络",
    description: "覆盖英国全境的配送网络，多渠道派送选择",
  },
  {
    icon: BarChart3,
    title: "履约数据透明",
    description: "实时数据看板，库存、订单、发货状态一目了然",
  },
  {
    icon: ShieldCheck,
    title: "平台标准合规",
    description: "严格遵循 TEMU 平台操作规范，确保合规运营",
  },
  {
    icon: Boxes,
    title: "旺季保障能力",
    description: "弹性仓储与人员配置，应对大促与旺季订单高峰",
  },
];

const services = [
  {
    title: "仓储管理",
    items: ["商品入库与上架", "库存盘点与管理", "库位优化与调整", "效期与批次管理"],
    image: "/images/temu-warehouse.jpg",
  },
  {
    title: "订单履约",
    items: ["订单接收与处理", "拣货与复核", "打包与贴标", "扫描与出库"],
    image: "/images/temu-packing.jpg",
  },
  {
    title: "配送发货",
    items: ["多渠道派送对接", "运单生成与打印", "包裹交接与追踪", "异常件处理"],
    image: "/images/temu-shipping.jpg",
  },
];

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
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-temu.jpg"
                    alt="TEMU 官方认证仓"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 shadow-lg">
                    <BadgeCheck className="h-5 w-5 text-white" />
                    <span className="text-sm font-semibold text-white">官方认证仓</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  TEMU 官方认证，品质有保障
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cube海外仓作为 TEMU 平台官方认证的海外仓服务商，严格按照平台标准执行入仓、存储、履约、发货等全流程操作。我们理解平台业务对时效、流程规范和履约稳定性的要求，帮助卖家更顺畅地开展英国本地业务。
                </p>
                <ul className="space-y-3">
                  {["通过 TEMU 官方审核认证", "履约数据持续位居平台前列", "标准化 SOP 流程管理", "专业团队全程支持"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-[#f8fafc] py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                核心服务能力
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                从入仓到发货，全链路标准化服务支持
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-[0_1px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                服务流程
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                覆盖仓储、履约、配送全环节的一站式服务
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={service.title} className="group">
                  <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#051851] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
            <BadgeCheck className="mx-auto h-12 w-12 text-primary mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              开启 TEMU 英国本地履约之旅
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              无论您是刚入驻 TEMU 平台的新卖家，还是希望优化现有物流方案的资深商家，我们都能为您提供专业的本地仓配支持。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  立即咨询
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10">
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
