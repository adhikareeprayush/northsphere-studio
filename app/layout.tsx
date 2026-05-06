import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Resuable/Nav";
import PageTransition from "@/components/Resuable/PageTransition";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital product studio",
    "web development",
    "mobile apps",
    "UI UX design",
    "digital marketing",
    "Northsphere Studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased bg-surface-page text-text-body">
        <div className="background-noise"></div>
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
