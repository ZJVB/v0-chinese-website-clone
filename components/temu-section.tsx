import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TemuSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/service-temu.jpg"
              alt="TEMU 官方认证仓履约数据"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-foreground sm:text-3xl lg:text-[36px] lg:leading-[1.2]">
              TEMU 官方认证仓，
              <span className="text-primary">履约表现持续位居前列</span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Cube海外仓作为 TEMU 官方认证仓，履约数据持续保持前列表现，为平台卖家提供更高效、更稳定的英国本地仓配支持。
            </p>
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-md px-8"
            >
              <Link href="/solutions/temu">
                了解 TEMU 仓方案
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
