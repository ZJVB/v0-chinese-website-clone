import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/section-title";

export function AboutIntroSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="专注英国本地仓储、履约与"
          highlight="物流支持"
        />

        <div className="mx-auto mt-10 max-w-4xl space-y-6 text-center">
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Cube Cang 致力于为跨境品牌、平台卖家、分销客户及项目型客户提供可靠的英国本地物流支持。我们的服务覆盖仓储、履约、配送、退货处理、增值服务及系统协同等多个环节，帮助客户更高效地进入并服务英国市场。
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            公司成立于 2020 年，经过 6 年发展，现已成长为提供多形态供应链优化服务的本地物流专家。我们拥有 30,000 平方米以上仓储面积，配备 24 小时安保与 CCTV 全覆盖，并由拥有 15 年以上行业经验的资深管理团队负责日常运营。目前团队规模已超过 50 人，能够持续为客户提供更稳定、更专业的英国本地仓储与履约支持。
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="gap-2 rounded-md">
            <Link href="/about">
              了解我们
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
