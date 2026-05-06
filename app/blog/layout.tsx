import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `${SITE_NAME} writes about SEO, content marketing, and digital growth. ${SITE_DESCRIPTION}`,
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
