import { visual } from "@/lib/visuals";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minReadingTime: number;
  type: "latest" | "popular" | "featured";
  publishedAt: string;
  /** Cover shown on article page (remote URL). */
  coverImage: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "boost-seo-rankings-proven-strategies",
    title: "Boost Your SEO Rankings with These Proven Strategies",
    excerpt:
      "Discover effective SEO strategies to enhance your website's visibility and drive organic traffic.",
    minReadingTime: 5,
    type: "latest",
    publishedAt: "2026-03-12",
    coverImage: visual.blogCover,
    paragraphs: [
      "Search visibility still comes down to clear structure, fast pages, and content that matches real intent. At Northsphere Studio we start with technical health—Core Web Vitals, crawlability, and structured data—before layering on content and authority.",
      "Practical wins include tightening title tags and meta descriptions for every important URL, mapping pages to one primary keyword cluster, and building internal links from high-traffic hubs to supporting articles. Refresh outdated posts instead of only publishing new ones; Google rewards depth and freshness on topics you already rank for.",
      "Off-site, earn mentions from reputable partners and industry publications rather than chasing bulk links. Combine measurement in Search Console with analytics so you iterate on what actually moves impressions and conversions—not vanity rankings alone.",
    ],
  },
  {
    slug: "ultimate-guide-content-marketing-2026",
    title: "The Ultimate Guide to Content Marketing in 2026",
    excerpt:
      "Explore the latest trends and techniques in content marketing for modern teams.",
    minReadingTime: 7,
    type: "popular",
    publishedAt: "2026-02-04",
    coverImage: visual.workspace,
    paragraphs: [
      "Content marketing in 2026 blends narrative, product education, and distribution across search, social, and email. We plan editorial calendars around customer journeys: awareness pieces that rank, consideration assets that compare options, and decision content that removes friction.",
      "Short-form video and documented case studies continue to outperform generic blog churn. Repurpose one strong interview or project story into clips, carousels, and newsletter sections so each production hour goes further.",
      "Measure engagement alongside pipeline: time on page, assisted conversions, and repeat visits tell you whether the story resonates. Iterate monthly; retire pages that no longer serve a clear intent.",
    ],
  },
  {
    slug: "top-digital-marketing-tools",
    title: "Top 10 Digital Marketing Tools You Need to Know",
    excerpt:
      "Stay ahead with a practical stack for analytics, automation, and creative collaboration.",
    minReadingTime: 6,
    type: "featured",
    publishedAt: "2026-01-18",
    coverImage: visual.dashboardUi,
    paragraphs: [
      "The right stack depends on your team size and channels, but a few categories are non-negotiable: analytics, CRM or customer data, email automation, SEO research, and creative production.",
      "We typically combine Search Console and analytics for measurement, a lightweight CRM for leads, and collaborative design tools for rapid iteration. For ads and social, native platform insights plus a single reporting dashboard reduce thrash.",
      "Avoid tool sprawl—master a short list, integrate where possible, and review quarterly whether each subscription still earns its place against outcomes you care about.",
    ],
  },
];

export function formatBlogDate(isoDate: string) {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
