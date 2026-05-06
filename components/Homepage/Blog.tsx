import Link from "next/link";
import BlogCard from "../Resuable/BlogCard";

const Blog = () => {
  return (
    <section className="section-inner flex flex-col gap-10 py-12 md:gap-12 md:py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end md:gap-12 lg:gap-16">
        <h2 className="font-jakarta text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Growth content—SEO, campaigns, and product storytelling
        </h2>
        <div className="flex flex-col gap-6 md:max-w-xl md:justify-self-end">
          <p className="text-base leading-relaxed text-text-body">
            Practical articles from our team on search, content, and channels we
            use for clients—not generic filler.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-8 py-4 font-jakarta text-base font-bold text-primary hover:bg-surface-muted"
          >
            See services
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <BlogCard
          minReadingTime={5}
          title="Boost Your SEO Rankings with These Proven Strategies"
          excerpt="Discover effective SEO strategies to enhance your website's visibility and drive organic traffic."
          canonicalUrl="/blog/boost-seo-rankings-proven-strategies"
          type="latest"
        />
        <BlogCard
          minReadingTime={7}
          title="The Ultimate Guide to Content Marketing in 2026"
          excerpt="Explore the latest trends and techniques in content marketing for modern teams."
          canonicalUrl="/blog/ultimate-guide-content-marketing-2026"
          type="popular"
        />
        <BlogCard
          minReadingTime={6}
          title="Top 10 Digital Marketing Tools You Need to Know"
          excerpt="Stay ahead with a practical stack for analytics, automation, and creative collaboration."
          canonicalUrl="/blog/top-digital-marketing-tools"
          type="featured"
        />
      </div>
    </section>
  );
};

export default Blog;
