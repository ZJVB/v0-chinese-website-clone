import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Calendar, ArrowRight, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "新闻资讯 - Cube Fulfilment",
  description:
    "了解 Cube Fulfilment 的最新动态、行业洞察和电商物流资讯。",
};

const articles = [
  {
    title: "曼彻斯特物流企业的创新之路",
    date: "2024年12月15日",
    description:
      "Cube Fulfilment 在疫情挑战中积极转型，投资自动化仓储技术，提升作业效率，成为区域物流行业标杆。",
    tag: "企业动态",
    content:
      "面对全球供应链的挑战，我们加速了仓库自动化进程，引入智能分拣系统和实时库存追踪技术，显著提升了日均处理能力和订单准确率。",
  },
  {
    title: "电商卖家如何选择合适的3PL合作伙伴",
    date: "2025年2月20日",
    description:
      "选择第三方物流合作伙伴是电商企业的重要决策。本文从成本、服务、技术等维度为您提供实用的选择指南。",
    tag: "行业洞察",
    content:
      "一个优秀的3PL合作伙伴不仅是物流外包，更是您业务增长的战略助力。我们建议从五个关键维度评估：仓储能力、技术集成、配送网络、客户服务和价格透明度。",
  },
  {
    title: "3PL履约如何转变客户体验",
    date: "2025年6月10日",
    description:
      "高效的3PL履约是无缝客户体验的基石。本文探讨外包物流如何提升配送速度、准确性和客户满意度。",
    tag: "行业洞察",
    content:
      "在电商竞争日益激烈的今天，配送体验已成为影响客户留存的关键因素。专业的3PL履约服务能帮助品牌实现次日达甚至当日达，同时保持极高的订单准确率。",
  },
  {
    title: "Cube Fulfilment 获得 Amazon Prime 配送认证",
    date: "2025年8月5日",
    description:
      "我们正式通过Amazon严格的SLA标准审核，成为Prime认证配送合作伙伴，助力客户产品获得Prime徽章。",
    tag: "企业动态",
    content:
      "经过持续的流程优化和服务升级，Cube Fulfilment 达到了Amazon对配送时效、包装质量和客户满意度的严格要求，帮助更多卖家实现Prime资格。",
  },
  {
    title: "2025年跨境电商物流趋势展望",
    date: "2025年10月18日",
    description:
      "从海外仓布局到智能物流技术，分析2025年跨境电商物流领域的关键趋势和机遇。",
    tag: "行业趋势",
    content:
      "随着全球电商持续增长，海外仓需求激增。同时，AI驱动的需求预测、自动化分拣和绿色包装正成为行业标配。",
  },
  {
    title: "节日旺季备货指南：如何确保物流不掉链",
    date: "2025年11月2日",
    description:
      "Black Friday、圣诞季即将来临，提前做好物流规划是确保旺季销售成功的关键。",
    tag: "运营指南",
    content:
      "旺季期间订单量可能增长3-5倍。我们建议卖家至少提前8周完成备货入仓，并与3PL团队确认产能预留和应急预案。",
  },
];

const testimonials = [
  {
    quote:
      "与Cube合作后，我们的订单处理效率提升了60%，退货率降低了30%。他们的团队专业、响应快速。",
    author: "张伟",
    company: "科技消费品牌",
  },
  {
    quote:
      "Cube帮助我们顺利获得了Amazon Prime徽章，销售额增长了45%。非常满意他们的服务质量。",
    author: "Andy Welch",
    company: "Healthy Ventures Ltd",
  },
  {
    quote:
      "从初创到月均5000单，Cube一直在根据我们的增长灵活调整方案，真正做到了与客户共成长。",
    author: "Rebecca Moffat",
    company: "R M Clinic",
  },
];

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                新闻资讯
              </p>
              <h1 className="mb-4 text-4xl font-black text-primary-foreground lg:text-5xl text-balance">
                行业洞察与最新动态
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
                通过 Cube Fulfilment 的资讯中心，掌握电商物流行业趋势，了解我们的最新发展。
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                客户评价
              </p>
              <h2 className="text-3xl font-bold text-foreground lg:text-4xl">
                听听客户怎么说
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="relative rounded-xl border border-border bg-card p-6"
                >
                  <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/8" />
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={`star-${t.author}-${i}`}
                        className="h-4 w-4 fill-accent text-accent"
                      />
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
                      <p className="text-sm font-semibold text-foreground">
                        {t.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.company}
                      </p>
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
