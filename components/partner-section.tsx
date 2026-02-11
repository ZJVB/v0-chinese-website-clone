import {
  ShoppingBag,
  Shirt,
  Home,
  Cpu,
  Car,
  Heart,
  Paintbrush,
  Utensils,
  Dumbbell,
} from "lucide-react";

const categories = [
  { icon: ShoppingBag, label: "美妆个护" },
  { icon: Home, label: "家居装饰" },
  { icon: Cpu, label: "电子产品" },
  { icon: Car, label: "汽车配件" },
  { icon: Shirt, label: "服装鞋帽" },
  { icon: Heart, label: "健康保健" },
  { icon: Paintbrush, label: "艺术工艺" },
  { icon: Utensils, label: "食品饮料" },
  { icon: Dumbbell, label: "运动户外" },
];

export function PartnerSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            3PL 合作伙伴
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            与您业务共同成长的电商仓储合作伙伴
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            从美妆个护、家居装饰到电子产品和汽车配件，MSL UK
            为各类产品提供专业的仓储和运营支持。我们的3PL专家确保每个订单都得到精准处理，让您专注于业务增长。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center gap-3 rounded-xl bg-muted p-4 transition-all hover:bg-primary hover:shadow-lg"
            >
              <cat.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
              <span className="text-center text-sm font-medium text-foreground transition-colors group-hover:text-primary-foreground">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
