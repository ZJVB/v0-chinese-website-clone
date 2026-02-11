import Link from "next/link";
import { UserPlus, ClipboardList, PackageCheck, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "注册开户",
    description: "联系我们的团队，讨论您的业务需求并创建专属账户。",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "库存对接",
    description: "将产品发送至仓库，我们负责接收、清点和上架存储。",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "订单履约",
    description: "客户下单后，系统自动处理拣货、包装和发货。",
  },
  {
    icon: Rocket,
    step: "04",
    title: "业务增长",
    description: "借助可扩展方案和实时监控，专注业务扩展。",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            合作流程
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            简单四步，开始合作
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                    <step.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/contact">
              立即开始合作
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
