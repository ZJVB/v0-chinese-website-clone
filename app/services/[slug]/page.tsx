import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import {
  Warehouse,
  Package,
  Ship,
  Plane,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  details: string[];
  whyChoose: { title: string; desc: string }[];
  image: string;
}

const servicesData: Record<string, ServiceData> = {
  "uk-warehouse": {
    icon: Warehouse,
    title: "英国海外仓",
    subtitle: "本土化仓储服务，多区布点辐射全英",
    image: "/images/hero-warehouse.jpg",
    description:
      "Cube Fulfilment 在曼彻斯特、利物浦、伦敦三地自有仓储设施，配备先进的WMS仓储管理系统。无论是短期周转还是长期存储，都能提供灵活且安全的仓储解决方案，覆盖全英30+核心城市配送。",
    features: [
      "10,000+ 平方米仓储面积",
      "24/7 安防监控系统",
      "温湿度可控存储环境",
      "灵活的短期/长期存储选项",
      "WMS系统实时库存追踪",
      "支持大件 & 托盘存储",
      "增值服务：贴标、换标、定制包装",
      "退货翻新闭环处理",
    ],
    details: [
      "我们在曼彻斯特、利物浦和伦敦拥有自营仓库，三仓联动辐射伯明翰、爱丁堡等30+城市。依托智能分仓系统，实现欧洲48小时极速达。",
      "所有货位均有唯一编码，通过WMS仓储管理系统实时追踪每件货品的存储位置和数量，库存精度达99.9%。",
      "我们提供全方位增值服务：贴标换标、定制包装、退货翻新，形成存储-处理-再销售闭环，帮助卖家降低运营成本。",
    ],
    whyChoose: [
      { title: "三仓联动", desc: "曼城、利物浦、伦敦多点布局，灵活调配库存。" },
      { title: "智能管理", desc: "WMS系统实时追踪，库存精度99.9%。" },
      { title: "增值服务", desc: "贴标、换标、定制包装、退货翻新一站完成。" },
    ],
  },
  "consolidation": {
    icon: Package,
    title: "国际集运物流",
    subtitle: "资源整合中转，全球揽收统一归集",
    image: "/images/warehouse-operations.jpg",
    description:
      "Cube国际集运物流服务整合全球揽收资源，为跨境电商卖家提供高效的中转集运方案。通过统一归集、分拣合仓、智能分拨，大幅降低国际运输成本，缩短整体物流时效。",
    features: [
      "全球多点揽收网络",
      "中英双语全程对接",
      "统一归集、合仓分拨",
      "成本优化的拼箱方案",
      "海关清关一站式服务",
      "实时物流追踪",
    ],
    details: [
      "我们在中国设有集货点，可协调多个供应商的货物统一归集发运至英国仓库，为卖家节省大量国际运输成本。",
      "支持多供应商分散发货、Cube统一收货质检、合仓打包发往英国海外仓，全程可视化追踪。",
      "专业清关团队处理进口手续，确保货物顺利通关，VAT智能申报，合规安全。",
    ],
    whyChoose: [
      { title: "成本优化", desc: "合仓拼箱大幅降低单件国际运输成本。" },
      { title: "一站服务", desc: "揽收、质检、清关、入仓全链条管理。" },
      { title: "时效可控", desc: "标准化流程确保运输时效稳定可预期。" },
    ],
  },
  "sea-freight": {
    icon: Ship,
    title: "国际海运",
    subtitle: "大宗运输主力，整柜拼箱灵活适配",
    image: "/images/hero-warehouse.jpg",
    description:
      "Cube国际海运服务涵盖整柜（FCL）和拼箱（LCL）两种模式，提供从起运港到目的港的全程物流管理。与全球主要船公司合作，确保舱位充足、运价优势明显。",
    features: [
      "整柜FCL / 拼箱LCL灵活选择",
      "全球主要港口覆盖",
      "优势舱位与运价保障",
      "进出口报关清关服务",
      "货物保险安排",
      "目的港提货 & 末端配送",
    ],
    details: [
      "与马士基、中远等全球顶级船公司建立长期战略合作，锁定优质舱位资源，旺季不涨价、不甩柜。",
      "支持中国主要港口（深圳、上海、宁波等）到英国利物浦、费利克斯托等港口的稳定航线服务。",
      "提供港到仓一站式服务：海运+清关+英国本地配送至Cube海外仓，无缝衔接入库上架。",
    ],
    whyChoose: [
      { title: "运价优势", desc: "长约锁价，批量运输成本显著低于空运。" },
      { title: "舱位保障", desc: "与头部船东合作，旺季舱位有保障。" },
      { title: "全程管控", desc: "港到仓一站式服务，物流全程透明可控。" },
    ],
  },
  "air-freight": {
    icon: Plane,
    title: "国际空运",
    subtitle: "高效时效保障，优先舱位极速通关",
    image: "/images/warehouse-operations.jpg",
    description:
      "Cube国际空运服务为时效敏感型货物提供极速运输通道。与多家航空公司合作，确保优先舱位和通关效率，适用于高价值商品、紧急补货和季节性旺季备货。",
    features: [
      "中国各大机场直飞航线",
      "优先舱位保障",
      "3-5天门到仓时效",
      "高价值商品安全运输",
      "空运清关一站式服务",
      "机场提货 & 末端配送",
    ],
    details: [
      "覆盖深圳、广州、上海、北京等主要机场出发的航线，直达伦敦希思罗、曼彻斯特等英国主要机场。",
      "针对旺季备货、新品首发、紧急补货等场景，提供3-5天门到仓极速通道，确保卖家不错过任何销售窗口。",
      "配套空运清关服务，专业报关团队处理进口手续，货物落地后直接配送至Cube海外仓上架。",
    ],
    whyChoose: [
      { title: "极速时效", desc: "3-5天门到仓，抢占市场先机。" },
      { title: "安全保障", desc: "全程温控监控，高价值商品安全无忧。" },
      { title: "灵活适配", desc: "小批量高频次，灵活应对市场变化。" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "服务未找到 - Cube Fulfilment" };
  return {
    title: `${service.title} - Cube Fulfilment`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative pt-20">
          <div className="relative h-[320px] lg:h-[400px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/80 via-[#041653]/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
                <Link
                  href="/services"
                  className="mb-5 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  返回全部服务
                </Link>
                <div className="flex items-start gap-5">
                  <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="mb-2 text-3xl font-black text-white lg:text-5xl">
                      {service.title}
                    </h1>
                    <p className="text-lg text-white/70">{service.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description + Features */}
        <section className="bg-card py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  服务概述
                </h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.details.map((d, i) => (
                    <p
                      key={`detail-${i}`}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {d}
                    </p>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    服务特点
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionTitle
              title={`为什么选择我们的`}
              highlight={service.title}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {service.whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg bg-card p-7 text-center shadow-[0_1px_19px_0_rgba(0,0,0,0.06)]"
                >
                  <h3 className="mb-2 text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
              {"对" + service.title + "服务感兴趣？"}
            </h2>
            <p className="mb-8 text-muted-foreground">
              联系我们了解详细方案和定价
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  联系我们
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">查看其他服务</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
