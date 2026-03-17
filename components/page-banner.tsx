import Image from "next/image";

interface PageBannerProps {
  tag: string;
  title: string;
  description: string;
  image: string;
}

export function PageBanner({ tag, title, description, image }: PageBannerProps) {
  return (
    <section className="relative pt-[72px]">
      <div className="relative h-[280px] lg:h-[360px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041653]/85 via-[#041653]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {tag}
              </p>
              <h1 className="mb-4 text-3xl font-black text-white lg:text-5xl text-balance">
                {title}
              </h1>
              <p className="text-base leading-relaxed text-white/80 text-pretty max-w-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
