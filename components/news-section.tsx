import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "曼彻斯特公司如何战胜新冠疫情",
    date: "2023年4月19日",
    description:
      "MSL (UK) Ltd 在挑战中生存并蓬勃发展 -- 这家物流和仓储公司正在迈向自动化。刊登于《曼彻斯特晚报》。",
  },
  {
    title: "EFCL UK 打造无缝客户支持体验",
    date: "2025年11月12日",
    description:
      "EFCL UK 为依赖可靠履约的电商品牌提供快速、透明和主动的客户支持。从多渠道沟通到定制化协助，确保您的订单和声誉始终得到保障。",
  },
  {
    title: "3PL履约如何转变客户体验",
    date: "2025年10月23日",
    description:
      "高效的3PL履约是无缝客户体验的基石。本文探讨了外包物流如何提升配送速度、准确性和客户满意度。",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            查看我们的新闻
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            最新电商履约洞察与文章
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            通过 MSL UK
            的博客掌握行业趋势。了解如何优化您的电商履约流程，发现智能配送解决方案，获取3PL团队的专家建议。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="bg-primary/5 p-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground leading-snug">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  阅读更多
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
