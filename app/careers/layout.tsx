import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Open roles and culture at ${SITE_NAME}. Remote-friendly engineering, design, and marketing.`,
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
