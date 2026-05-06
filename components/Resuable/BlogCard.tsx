import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type BlogCardProps = {
  minReadingTime: number | null;
  title: string;
  excerpt: string;
  canonicalUrl: string;
  type: "latest" | "popular" | "featured";
};

const typeLabel: Record<BlogCardProps["type"], string> = {
  latest: "Latest",
  popular: "Popular",
  featured: "Featured",
};

const typeBadgeClass: Record<BlogCardProps["type"], string> = {
  /** Explicit forest green so the pill always renders (Tailwind token quirks). */
  latest: "bg-[#14532d] text-white opacity-100 shadow-sm",
  popular: "bg-accent text-white opacity-100 shadow-sm",
  featured: "bg-text-heading text-white opacity-100 shadow-sm",
};

const BlogCard = ({
  minReadingTime,
  title,
  excerpt,
  canonicalUrl,
  type,
}: BlogCardProps) => {
  const isExternal = /^https?:\/\//i.test(canonicalUrl);

  return (
    <Link
      href={canonicalUrl}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={twMerge(
        "card-surface group flex h-full min-h-[340px] flex-col p-6 transition-colors hover:border-primary/35 md:p-8",
        type === "latest" &&
          "border-primary/40 bg-gradient-to-br from-[#14532d]/[0.12] via-surface-card to-surface-card ring-1 ring-[#14532d]/20",
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span
          className={twMerge(
            "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide",
            typeBadgeClass[type],
          )}
        >
          {typeLabel[type]}
        </span>
        <span className="text-xs font-medium text-text-body opacity-100">
          {minReadingTime ? `${minReadingTime} min read` : ""}
        </span>
      </div>
      <h3 className="mb-4 font-jakarta text-xl font-semibold leading-snug tracking-tight text-text-heading group-hover:text-primary">
        {title}
      </h3>
      <p className="mb-8 flex-1 text-sm leading-relaxed text-text-body sm:text-base">
        {excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-stroke pt-5">
        <span className="text-sm font-semibold text-primary">Read article</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14532d] text-white opacity-100 shadow-sm">
          <Image
            src="/arrow-right.svg"
            alt=""
            width={22}
            height={22}
            className="h-5 w-5 brightness-0 invert"
          />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
