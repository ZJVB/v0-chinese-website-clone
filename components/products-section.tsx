import { Sparkles, Cpu, Sofa, Shirt, UtensilsCrossed, Wine } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const products = [
  { icon: Sparkles, name: "化妆品" },
  { icon: Cpu, name: "电子产品" },
  { icon: Sofa, name: "家具用品" },
  { icon: Shirt, name: "服饰" },
  { icon: UtensilsCrossed, name: "食品" },
  { icon: Wine, name: "酒水" },
];

export function ProductsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle title="支持" highlight="商品" />

        <div className="mt-12 grid grid-cols-3 gap-5 sm:grid-cols-6">
          {products.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-3 rounded-lg bg-card p-6 shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
