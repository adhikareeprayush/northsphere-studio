import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/Resuable/PageHeader";
import Footer from "@/components/Homepage/Footer";
import BlogCard from "@/components/Resuable/BlogCard";
import { blogPosts, formatBlogDate } from "@/content/blog";
export default function BlogIndexPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="blog"
        subtitle="Insights"
        title="Blog"
        description="Notes on SEO, content, product launches, and growth—from how we lead engagements end-to-end."
      />

      <main className="page-shell pb-12 pt-8 md:pb-14 md:pt-10">
        <div className="mb-10 flex flex-col gap-6 border-b border-stroke pb-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-text-body sm:text-base">
            No fluff: technical SEO, realistic timelines, and tools we rely on.
            Browse articles below or jump to{" "}
            <Link href="/services" className="font-semibold text-primary underline-offset-2 hover:underline">
              services
            </Link>
            .
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center rounded-full border border-stroke bg-surface-card px-5 py-2.5 text-sm font-semibold text-text-heading shadow-sm hover:border-primary hover:text-primary"
          >
            Suggest a topic
          </Link>
        </div>

        {featured && (
          <section className="mb-12 md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
              Latest
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="card-surface group flex flex-col overflow-hidden transition-shadow hover:shadow-md md:flex-row"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 md:aspect-auto md:w-[42%] md:min-h-[260px]">
                <Image
                  src={featured.coverImage}
                  alt=""
                  fill
                  className="object-cover brightness-[0.85]"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
                <p className="text-xs text-text-body">
                  {formatBlogDate(featured.publishedAt)} ·{" "}
                  {featured.minReadingTime} min read
                </p>
                <h2 className="mt-3 font-jakarta text-2xl font-bold tracking-tight text-text-heading group-hover:text-primary md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-text-body md:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-primary">
                  Read article →
                </span>
              </div>
            </Link>
          </section>
        )}

        <section>
          <h2 className="mb-6 font-jakarta text-lg font-semibold text-text-heading md:text-xl">
            More articles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map((post) => (
              <BlogCard
                key={post.slug}
                minReadingTime={post.minReadingTime}
                title={post.title}
                excerpt={post.excerpt}
                canonicalUrl={`/blog/${post.slug}`}
                type={post.type}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
