import Link from "next/link";
import { ArrowRight, Warehouse, GitBranch, Truck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

const features = [
  { icon: Warehouse, label: "本地仓储支持" },
  { icon: GitBranch, label: "分仓与中转能力" },
  { icon: Truck, label: "多渠道派送配置" },
  { icon: ShoppingCart, label: "电商与零售场景兼容" },
];

export function WarehouseNetworkSection() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <SectionTitle
              title="以英国本地仓储与配送资源，支撑"
              highlight="更高效的订单履约"
              center={false}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Cube Cang 通过英国本地仓储、中转、分拨与配送资源，为客户提供从入仓到出货、从库存管理到末端派送的一体化支持。对于需要兼顾多平台订单、FBA 补货、零售分销和项目型交付的客户，本地物流网络是提高履约效率的重要基础。
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="gap-2 rounded-md">
                <Link href="/warehousing">
                  查看仓储与派送能力
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Warehouse className="mx-auto h-16 w-16 text-muted-foreground/30" />
                  <p className="mt-4 text-sm text-muted-foreground">英国仓储网络示意</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
