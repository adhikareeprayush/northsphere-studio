import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { SITE_NAME } from "@/lib/site";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Sitemap",
  description: `Browse every page on the ${SITE_NAME} website, including articles and legal policies.`,
};

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/gdpr", label: "GDPR" },
];

export default function HtmlSitemapPage() {
  return (
    <div className="bg-surface-page min-h-screen">
      <PageHeader
        variant="legal"
        subtitle="Site map"
        title="Find every page"
        description="Quick links to our services, projects, insights, and policies. For crawlers, see /sitemap.xml."
      />

      <div className="page-shell max-w-4xl py-10 md:py-12 mx-auto">
        <AnimatedSection>
          <section className="mb-12">
            <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
              Main pages
            </h2>
            <ul className="flex flex-col gap-2">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#EA5F38] font-jakarta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
              Blog
            </h2>
            <ul className="flex flex-col gap-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-600 hover:text-[#EA5F38] font-jakarta"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-jakarta font-bold text-2xl text-black mb-4">
              Legal
            </h2>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#EA5F38] font-jakarta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
