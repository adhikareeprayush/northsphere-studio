import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Homepage/Footer";
import PageHeader from "@/components/Resuable/PageHeader";
import {
  blogPosts,
  formatBlogDate,
  getPostBySlug,
} from "@/content/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Clock, ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: "" }],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const metaLine = `${formatBlogDate(post.publishedAt)} · ${post.minReadingTime} min read`;

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="blog"
        subtitle={metaLine}
        title={post.title}
        description={post.excerpt}
      />

      <main className="page-shell pb-16 pt-6 md:pb-20 md:pt-8">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 font-manrope text-sm font-semibold text-primary hover:underline md:mb-8"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 opacity-100" aria-hidden />
          Back to blog
        </Link>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-stroke shadow-lg">
          <div className="relative aspect-[21/9] min-h-[200px] w-full sm:min-h-[260px] md:aspect-[2.4/1]">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-100"
              aria-hidden
            />
          </div>
        </div>

        <article className="relative z-10 mx-auto -mt-10 max-w-3xl rounded-2xl border border-stroke bg-surface-card px-6 py-8 shadow-xl sm:-mt-14 sm:px-10 sm:py-10 md:px-12 md:py-12">
          <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-stroke pb-8">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-manrope text-xs font-bold uppercase tracking-wider text-primary">
              {SITE_NAME}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-text-body opacity-100">
              <Clock className="h-4 w-4 text-primary" strokeWidth={2} aria-hidden />
              {post.minReadingTime} min read
            </span>
            <time
              dateTime={post.publishedAt}
              className="text-sm font-medium text-text-body opacity-100"
            >
              {formatBlogDate(post.publishedAt)}
            </time>
          </div>

          <div className="font-jakarta leading-[1.9] text-text-body">
            {post.paragraphs.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg font-medium leading-relaxed text-text-heading sm:text-xl"
                    : "mt-8 text-base sm:text-[17px]"
                }
              >
                {para}
              </p>
            ))}
          </div>

          <div className="surface-green mt-12 rounded-2xl p-6 sm:mt-14 sm:p-8">
            <p className="font-semibold text-lg opacity-100">Ready to grow?</p>
            <p className="mt-2 text-sm opacity-100 sm:text-base">
              Tell us about your goals—we&apos;ll suggest a practical roadmap and
              timeline.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-manrope text-sm font-bold text-primary no-underline opacity-100 hover:bg-white/95 sm:text-base"
            >
              Contact us
            </Link>
          </div>
        </article>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-3xl border-t border-stroke pt-12 md:mt-20 md:pt-14">
            <h2 className="mb-6 font-jakarta text-xl font-bold text-text-heading md:text-2xl">
              Continue reading
            </h2>
            <ul className="flex flex-col gap-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex items-start justify-between gap-4 rounded-xl border border-stroke bg-surface-muted/40 p-4 transition-colors hover:border-primary/35 hover:bg-surface-card"
                  >
                    <div>
                      <p className="font-jakarta text-base font-semibold text-text-heading group-hover:text-primary md:text-lg">
                        {r.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm text-text-body">
                        {r.excerpt}
                      </p>
                    </div>
                    <span className="shrink-0 font-manrope text-sm font-bold text-primary">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
