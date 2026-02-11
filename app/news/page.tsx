import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calendar, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "新闻资讯 - Cube Fulfilment",
  description: "了解 Cube Fulfilment 的最新动态、行业洞察和电商物流资讯。",
};

const articles = [
  {
    title: "曼彻斯特物流企业的创新之路",
    date: "2024年12月15日",
    description: "Cube Fulfilment 在疫情挑战中积极转型，投资自动化仓储技术，提升作业效率，成为区域物流行业标杆。",
    tag: "企业动态",
    content: "面对全球供应链的挑战，我们加速了仓库自动化进程，引入智能分拣系统和实时库存追踪技术，显著提升了日均处理能力和订单准确率。",
  },
  {
    title: "电商卖家如何选择合适的3PL合作伙伴",
    date: "2025年2月20日",
    description: "选择第三方物流合作伙伴是电商企业的重要决策。本文从成本、服务、技术等维度为您提供实用的选择指南。",
    tag: "行业洞察",
    content: "一个优秀的3PL合作伙伴不仅是物流外包，更是您业务增长的战略助力。我们建议从五个关键维度评估。",
  },
  {
    title: "3PL履约如何转变客户体验",
    date: "2025年6月10日",
    description: "高效的3PL履约是无缝客户体验的基石。本文探讨外包物流如何提升配送速度、准确性和客户满意度。",
    tag: "行业洞察",
    content: "在电商竞争日益激烈的今天，配送体验已成为影响客户留存的关键因素。",
  },
  {
    title: "Cube Fulfilment 成为 Temu 官方认证仓",
    date: "2025年8月5日",
    description: "我们正式通过Temu官方认证，自动化分拣产能提升至15万SKU/日，助力更多卖家高效运营。",
    tag: "企业动态",
    content: "经过持续的流程优化和服务升级，Cube Fulfilment 达到了Temu对配送时效、包装质量和客户满意度的严格要求。",
  },
  {
    title: "2025年跨境电商物流趋势展望",
    date: "2025年10月18日",
    description: "从海外仓布局到智能物流技术，分析2025年跨境电商物流领域的关键趋势和机遇。",
    tag: "行业趋势",
    content: "随着全球电商持续增长，海外仓需求激增。AI驱动的需求预测、自动化分拣和绿色包装正成为行业标配。",
  },
  {
    title: "节日旺季备货指南：如何确保物流不掉链",
    date: "2025年11月2日",
    description: "Black Friday、圣诞季即将来临，提前做好物流规划是确保旺季销售成功的关键。",
    tag: "运营指南",
    content: "旺季期间订单量可能增长3-5倍。我们建议卖家至少提前8周完成备货入仓。",
  },
];

const testimonials = [
  {
    quote: "Shipboxs works great, very easy and cheap. the UPS label is a great deal and I would go with it all the time.",
    author: "Lauren",
    company: "Amazon Personal Seller",
  },
  {
    quote: "与Cube合作后，我们的订单处理效率提升了60%，退货率降低了30%。他们的团队专业、响应快速。",
    author: "张伟",
    company: "科技消费品牌",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="pt-[72px] bg-card">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground lg:text-[40px]">新闻</h1>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">资讯</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 mx-auto max-w-xl text-muted-foreground leading-relaxed">
                通过 Cube Fulfilment 的资讯中心，掌握电商物流行业趋势，了解我们的最新发展
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group overflow-hidden rounded-lg bg-card shadow-[0_1px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                >
                  <div className="bg-primary/5 px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </div>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {article.description}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground/80">
                      {article.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground lg:text-[40px]">为什么选择</h2>
              <div className="relative mx-auto mt-1 inline-block">
                <span className="text-3xl font-bold text-foreground lg:text-[40px]">CUBE</span>
                <span className="absolute bottom-0 left-0 h-[40%] w-full bg-primary/20 animate-underline -z-10" />
              </div>
              <p className="mt-4 text-muted-foreground">
                听听我们的客户怎么说!
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              {testimonials.map((t) => (
                <div key={t.author} className="relative rounded-lg bg-background p-6 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
                  <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={`star-${t.author}-${i}`} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-sm leading-relaxed text-foreground">
                    {`"${t.quote}"`}
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.author}</p>
                      <p className="text-xs text-muted-foreground">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
