import { Truck, PackageCheck, Container, Plane } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const deliveryOptions = [
  {
    icon: Truck,
    title: "本地快递服务",
    description: "合作DPD、Royal Mail、UPS等，实现高效配送",
  },
  {
    icon: PackageCheck,
    title: "次日达 & 标准配送",
    description: "提供灵活配送方案，满足客户不同需求",
  },
  {
    icon: Container,
    title: "Pallet大件货物配送",
    description: "支持托盘配送，适用于B2B批发或大件商品运输",
  },
  {
    icon: Plane,
    title: "跨境转运",
    description: "可将货物从英国海外仓直接转运至欧洲其他国家",
  },
];

export function DeliverySection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="英国 & 欧洲"
          highlight="本地配送"
          subtitle="覆盖广泛，快速送达"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryOptions.map((option) => (
            <div
              key={option.title}
              className="flex flex-col items-center rounded-lg bg-background p-7 text-center shadow-[0_1px_19px_0_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <option.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {option.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
