import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Warehouse,
  Package,
  Truck,
  Ship,
  Camera,
  Box,
  Globe,
  Headphones,
  BarChart3,
  Rocket,
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
}

const servicesData: Record<string, ServiceData> = {
  "pallet-storage": {
    icon: Warehouse,
    title: "托盘仓储",
    subtitle: "安全、灵活、可扩展的仓储解决方案",
    description:
      "Cube Fulfilment 提供超过80,000平方英尺的现代化仓储设施，配备先进的安防监控系统、温湿度控制和消防设施。无论您需要短期存储还是长期仓储，我们都能为您提供灵活的托盘存储方案。",
    features: [
      "80,000+ 平方英尺仓储面积",
      "24/7 安防监控系统",
      "温湿度可控存储环境",
      "灵活的短期/长期存储选项",
      "实时库存管理系统",
      "定期库存盘点报告",
    ],
    details: [
      "我们的仓库位于曼彻斯特交通便利地段，便于货物的接收和发送。仓库采用高位货架设计，最大化利用垂直空间，为您节省存储成本。",
      "所有托盘位均有唯一编码，通过WMS仓储管理系统实时追踪每件货品的存储位置和数量，确保库存数据100%准确。",
      "我们还提供增值服务，包括货品质检、贴标、重新包装等，满足您的多样化需求。",
    ],
    whyChoose: [
      { title: "成本透明", desc: "按托盘位计费，无隐藏费用，预算可控。" },
      { title: "灵活扩展", desc: "业务增长时可随时增加存储空间，无需长期合约束缚。" },
      { title: "安全保障", desc: "全方位安防系统和保险覆盖，您的货品安全无忧。" },
    ],
  },
  "ecommerce-fulfilment": {
    icon: Package,
    title: "电商履约",
    subtitle: "从下单到送达的全流程管理",
    description:
      "我们的电商履约服务覆盖订单处理的每一个环节：接收、存储、拣货、包装、发货和退货处理。通过与主流电商平台的深度集成，实现订单自动化处理，大幅提升效率和准确率。",
    features: [
      "与Amazon、eBay、Shopify等平台自动对接",
      "当日拣货、次日发货保障",
      "99.9% 订单准确率",
      "品牌化包装定制服务",
      "退货处理与质检",
      "实时订单追踪和数据报告",
    ],
    details: [
      "订单从您的销售渠道自动流入我们的WMS系统后，系统会智能分配最优拣货路径，确保最快速度完成拣货。",
      "我们的质控团队对每一件出库商品进行检查，确保产品品质和包装完整性达到最高标准。",
      "支持多渠道统一履约，无论客户从哪个平台下单，都能获得一致的优质配送体验。",
    ],
    whyChoose: [
      { title: "效率提升", desc: "自动化流程让订单处理速度提升3倍以上。" },
      { title: "成本降低", desc: "规模化运营带来的物流成本优势直接传递给您。" },
      { title: "体验升级", desc: "快速、准确的配送提升客户满意度和复购率。" },
    ],
  },
  "transport-delivery": {
    icon: Truck,
    title: "运输配送",
    subtitle: "覆盖英国全境及国际市场的配送网络",
    description:
      "Cube Fulfilment 与Royal Mail、DPD、DHL、FedEx等主流快递公司建立了深度合作关系，为您提供多层次的配送选择，从标准快递到次日达、当日达，满足不同时效和成本需求。",
    features: [
      "英国全境次日达服务",
      "国际配送覆盖200+国家",
      "多家快递商比价选优",
      "实时物流追踪",
      "大件货物和托盘配送",
      "预约配送和签收服务",
    ],
    details: [
      "通过与多家物流承运商的合作，我们能够根据包裹的大小、重量、目的地和时效要求，自动选择最优配送方案。",
      "我们的系统支持实时追踪，您和您的客户都可以随时查看包裹的配送状态，减少客户咨询量。",
      "针对大件商品和B2B订单，我们提供专业的托盘配送和预约卸货服务。",
    ],
    whyChoose: [
      { title: "价格优势", desc: "批量发货折扣，配送成本远低于自行发货。" },
      { title: "时效保障", desc: "严格的SLA标准确保配送时效达标率超过98%。" },
      { title: "全程可视", desc: "从出库到签收，全程物流追踪透明可查。" },
    ],
  },
  "freight-forwarding": {
    icon: Ship,
    title: "国际货运代理",
    subtitle: "全球供应链的可靠合作伙伴",
    description:
      "我们的货运代理服务涵盖海运、空运和陆运，提供从起运地到目的地的全程物流管理，包括报关清关、保险和合规服务，简化您的国际贸易流程。",
    features: [
      "海运、空运、陆运全模式覆盖",
      "进出口报关清关服务",
      "货物保险安排",
      "集装箱整柜和拼箱服务",
      "贸易合规咨询",
      "供应链可视化管理",
    ],
    details: [
      "无论您是从中国进口产品到英国，还是将英国商品出口到全球市场，我们都能提供专业的货运解决方案。",
      "我们与全球各大港口和航空公司保持紧密合作，确保获得最优的运价和舱位保障。",
      "我们的清关团队熟悉各国海关法规，确保您的货物顺利通关，避免不必要的延误和罚款。",
    ],
    whyChoose: [
      { title: "一站式服务", desc: "从工厂到仓库的全链条管理，省时省心。" },
      { title: "专业团队", desc: "经验丰富的货运专家为您优化运输方案。" },
      { title: "风险管控", desc: "完善的保险和合规服务降低贸易风险。" },
    ],
  },
  "product-photography": {
    icon: Camera,
    title: "产品摄影",
    subtitle: "专业视觉，提升品牌价值",
    description:
      "高质量的产品图片是电商成功的关键。我们的摄影团队提供专业的产品拍摄服务，包括白底图、场景图、360度展示图和视频拍摄，帮助您的产品在竞争中脱颖而出。",
    features: [
      "专业摄影棚和灯光设备",
      "白底商品主图拍摄",
      "场景化生活方式摄影",
      "360度旋转产品展示",
      "图片后期精修处理",
      "符合各平台上传规范",
    ],
    details: [
      "我们的摄影工作室位于仓库内部，可以直接从库存中取出产品进行拍摄，无需额外运输，高效便捷。",
      "所有照片均按照Amazon、eBay等平台的图片规范进行拍摄和处理，确保上传后展示效果最佳。",
      "我们还提供A+内容图片设计和品牌形象包装服务，帮助您打造一致的品牌视觉体验。",
    ],
    whyChoose: [
      { title: "一体化优势", desc: "仓库内直接拍摄，产品无需额外运输。" },
      { title: "平台规范", desc: "熟悉各大平台图片要求，一次拍摄多平台使用。" },
      { title: "提升转化", desc: "专业图片可使产品转化率提升30%以上。" },
    ],
  },
  "smart-packaging": {
    icon: Box,
    title: "智能包装",
    subtitle: "品牌化、环保、高效的包装方案",
    description:
      "好的包装不仅保护产品，更是品牌体验的延伸。我们提供从标准快递包装到高端品牌定制包装的全方位方案，同时注重环保材料的使用，助力您的可持续发展目标。",
    features: [
      "品牌定制包装盒和袋",
      "环保可回收材料选项",
      "防震防损专业填充",
      "礼品包装和贺卡服务",
      "尺寸优化降低运费",
      "季节性和促销活动特殊包装",
    ],
    details: [
      "我们的包装工程团队会根据您产品的特性和品牌调性，设计最合适的包装方案，在保护性、美观度和成本之间找到最佳平衡。",
      "通过精准的尺寸匹配，我们帮助您减少不必要的包装材料和空间浪费，降低运费成本。",
      "我们持续引进环保包装材料和可降解填充物，支持您的绿色商业理念。",
    ],
    whyChoose: [
      { title: "品牌提升", desc: "定制包装让开箱体验成为品牌传播的触点。" },
      { title: "成本优化", desc: "尺寸优化和批量采购降低包装和运输成本。" },
      { title: "环保可持续", desc: "丰富的环保材料选择，践行绿色商业。" },
    ],
  },
  "smart-sales": {
    icon: BarChart3,
    title: "智能销售方案",
    subtitle: "数据驱动的电商增长策略",
    description:
      "我们不仅是物流服务商，更是您的电商增长伙伴。通过数据分析、市场洞察和定价策略优化，帮助您提升销量和利润率。",
    features: [
      "销售数据分析和趋势预测",
      "竞争对手定价监测",
      "库存周转优化建议",
      "促销活动策划支持",
      "多渠道销售策略",
      "季节性备货规划",
    ],
    details: [
      "我们的数据分析团队通过对您的销售数据、库存周转率和市场趋势的深入分析，为您提供可执行的增长建议。",
      "通过智能补货建议，帮助您避免断货和滞销，优化库存结构，提升资金利用效率。",
      "我们还提供竞品分析和市场洞察报告，帮助您把握市场机会，及时调整销售策略。",
    ],
    whyChoose: [
      { title: "数据洞察", desc: "基于真实数据的决策建议，而非猜测。" },
      { title: "增长导向", desc: "一切建议以提升您的销量和利润为目标。" },
      { title: "持续优化", desc: "定期复盘和策略调整，确保持续改进。" },
    ],
  },
  "international-3pl": {
    icon: Globe,
    title: "国际客户3PL服务",
    subtitle: "您在英国的本地物流团队",
    description:
      "对于希望进入英国市场或已在英国开展业务的国际客户，我们提供从入关、仓储到配送的全链条3PL服务，成为您在英国的本地物流伙伴。",
    features: [
      "英国本地收货和质检",
      "进口清关协助",
      "多语言客户支持",
      "本地退货处理",
      "英国合规咨询",
      "灵活的合约条款",
    ],
    details: [
      "我们理解国际客户在进入新市场时面临的物流挑战，因此提供一站式的本地化服务，让您无需在英国设立办公室即可高效运营。",
      "我们的团队提供中英双语服务，确保沟通无障碍。从海关清关到最终配送，每一个环节都有专人跟进。",
      "我们还可以代理您在英国的退货处理和客户售后服务，真正实现远程管理、本地运营。",
    ],
    whyChoose: [
      { title: "本地化服务", desc: "英国本地团队，了解当地市场和法规。" },
      { title: "双语支持", desc: "中英双语服务团队，沟通零障碍。" },
      { title: "轻资产运营", desc: "无需在英国建立自有仓库和团队。" },
    ],
  },
  "customer-support": {
    icon: Headphones,
    title: "客户支持外包",
    subtitle: "专业的客户服务延伸",
    description:
      "我们已经在管理您的库存和履约流程，可以进一步承接客户咨询和售后服务，为您的客户提供无缝的购物体验。",
    features: [
      "多渠道客户咨询处理",
      "订单状态查询和更新",
      "退换货流程管理",
      "客户评价和反馈管理",
      "常见问题解答支持",
      "服务质量定期报告",
    ],
    details: [
      "我们的客服团队经过专业培训，熟悉电商平台的客户服务规范，能够以品牌的名义为您的客户提供高质量服务。",
      "通过将物流和客服集成，客户的配送问题可以第一时间在仓库端解决，大大缩短响应时间。",
      "我们定期向您提供客户服务报告，包括常见问题汇总、客户满意度数据和改进建议。",
    ],
    whyChoose: [
      { title: "无缝衔接", desc: "物流+客服一体化，问题解决更快速。" },
      { title: "品牌一致", desc: "以您的品牌形象提供服务，客户感知无差别。" },
      { title: "成本节省", desc: "无需自建客服团队，按需付费更灵活。" },
    ],
  },
  "startup-support": {
    icon: Rocket,
    title: "初创企业支持",
    subtitle: "与创业者共同成长",
    description:
      "Cube Fulfilment 深知初创企业的资源有限和快速变化的需求。我们提供灵活的、无长期合约束缚的物流方案，帮助您从零起步，专注于产品和品牌建设。",
    features: [
      "无最低订单量要求",
      "灵活的月度计费模式",
      "免费入仓和系统对接",
      "专属客户经理指导",
      "随业务增长灵活扩展",
      "创业资源和经验分享",
    ],
    details: [
      "我们相信今天的初创企业就是明天的领先品牌。因此，我们为初创客户提供特别的支持计划，帮助您在起步阶段减轻运营压力。",
      "无需签订长期合约，按月计费、按单收费，让您的现金流保持灵活。随着业务增长，我们的方案会同步升级。",
      "每位初创客户都会配备专属客户经理，不仅帮助您解决物流问题，还会分享电商运营的实战经验和行业资源。",
    ],
    whyChoose: [
      { title: "零门槛", desc: "无最低量要求，一单起发，降低启动风险。" },
      { title: "灵活付费", desc: "按需付费，无长期合约，保持财务灵活。" },
      { title: "成长伙伴", desc: "不只是物流商，更是您的创业同行者。" },
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
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/services"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              返回全部服务
            </Link>
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h1 className="mb-2 text-3xl font-black text-primary-foreground lg:text-5xl">
                  {service.title}
                </h1>
                <p className="text-lg text-primary-foreground/70">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
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
                <div className="rounded-xl border border-border bg-muted/30 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    服务特点
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold text-foreground lg:text-3xl">
              为什么选择我们的{service.title}服务
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {service.whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6 text-center"
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
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground lg:text-3xl">
              对{service.title}服务感兴趣？
            </h2>
            <p className="mb-8 text-primary-foreground/70">
              联系我们了解详细方案和定价
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
              >
                <Link href="/contact">
                  联系我们
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
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
