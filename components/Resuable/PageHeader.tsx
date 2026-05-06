import Image from "next/image";
import type { PageBannerVariant } from "@/lib/page-banners";
import { PAGE_BANNER_MAP } from "@/lib/page-banners";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  variant?: PageBannerVariant;
};

const PageHeader = ({
  title,
  subtitle,
  description,
  variant = "default",
}: PageHeaderProps) => {
  const cfg = PAGE_BANNER_MAP[variant];

  if (cfg.theme === "light") {
    return (
      <header
        className={`page-shell border-b border-stroke py-10 sm:py-12 md:py-14 ${cfg.lightStripClassName ?? ""}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
              {subtitle}
            </p>
          )}
          <h1 className="mb-4 font-jakarta text-3xl font-bold tracking-tight text-text-heading sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="text-base leading-relaxed text-text-body sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="relative isolate overflow-hidden border-b border-stroke">
      <div className="absolute inset-0">
        {cfg.imageSrc && (
          <Image
            src={cfg.imageSrc}
            alt={cfg.imageAlt}
            fill
            priority
            className="scale-105 object-cover brightness-[0.38] saturate-[0.88]"
            sizes="100vw"
          />
        )}
        <div
          className="absolute inset-0 bg-black/50 pointer-events-none"
          aria-hidden
        />
        <div
          className={`absolute inset-0 pointer-events-none ${cfg.overlayClassName}`}
          aria-hidden
        />
      </div>

      <div className="page-shell relative z-10 py-12 sm:py-14 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          {subtitle && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white opacity-100 banner-text-shadow sm:text-sm">
              {subtitle}
            </p>
          )}
          <h1 className="mb-5 font-jakarta text-3xl font-bold tracking-tight text-white opacity-100 banner-title-shadow sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.08]">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white opacity-100 banner-text-shadow sm:text-lg md:text-xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
