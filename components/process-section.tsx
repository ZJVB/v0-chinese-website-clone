import { UserPlus, ClipboardList, PackageCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "注册开户",
    description: "联系我们的3PL专家团队，讨论您的业务需求并创建您的专属账户。",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "库存对接",
    description:
      "将您的产品发送至我们的仓库，我们负责接收、清点和上架存储。",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "订单履约",
    description:
      "客户下单后，我们的系统自动处理拣货、包装和发货，高效准确。",
  },
  {
    icon: Rocket,
    step: "04",
    title: "业务增长",
    description:
      "借助我们的可扩展仓储方案和实时数据监控，专注于业务扩展和品牌建设。",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
            从注册到成功
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl text-balance">
            我们的合作流程
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            MSL UK 让入驻变得简单。我们的3PL专家将引导您完成账户设置、库存管理和订单履约流程，确保您从第一天起就能高效销售。
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
