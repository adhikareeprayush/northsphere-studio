import type { Metadata } from "next";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import ProjectsCatalog from "@/components/Projects/ProjectsCatalog";
import Footer from "@/components/Homepage/Footer";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { visual } from "@/lib/visuals";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected product and campaign work from ${SITE_NAME}—SaaS, commerce, and brand systems.`,
};

const projects = [
  {
    title: "Helio — progressive web banking",
    description:
      "Role-based flows, accessible components, and telemetry-ready navigation for a multi-region launch.",
    image: visual.projectA,
    category: "Product",
    link: "/contact",
  },
  {
    title: "Mint Grove — seasonal commerce surge",
    description:
      "Composable storefront experiments with cohort-specific merchandising and lifecycle email hooks.",
    image: visual.projectB,
    category: "Commerce",
    link: "/contact",
  },
  {
    title: "Orbit Labs — brand & documentation hub",
    description:
      "Modular identity toolkit paired with a docs site engineers actually maintain.",
    image: visual.projectC,
    category: "Brand",
    link: "/contact",
  },
  {
    title: "Signal Desk — executive analytics layer",
    description:
      "Narrowed KPI narratives and drill-down patterns tailored for weekly leadership reviews.",
    image: visual.projectD,
    category: "Data UX",
    link: "/contact",
  },
  {
    title: "Wavefront — growth experimentation lane",
    description:
      "Rapid landing matrix with shared design tokens and statistically framed readouts.",
    image: visual.projectE,
    category: "Growth",
    link: "/contact",
  },
  {
    title: "Atlas Field — ops & workflow platform",
    description:
      "Approvals, audit trails, and role-aware tasking for distributed ops teams under strict SLAs.",
    image: visual.projectF,
    category: "Platform",
    link: "/contact",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="projects"
        subtitle="Case studies"
        title="Work that shipped under pressure"
        description="Representative engagements—names adjusted where NDAs apply. Ask us for deeper references on a call."
      />

      <div className="page-shell py-10 md:py-12">
        <ProjectsCatalog projects={projects} />

        <AnimatedSection delay={0.3} className="mt-12 text-center md:mt-14">
          <div className="surface-green rounded-3xl px-8 py-10 md:px-12 md:py-14">
            <h2 className="mb-4 font-jakarta text-2xl font-bold md:text-4xl lg:text-5xl">
              Need something adjacent?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base md:text-xl">
              Bring a messy roadmap—we&apos;ll help sequence design, build, and
              proof.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 font-bold text-primary no-underline transition-colors hover:bg-white/95"
            >
              Start a thread
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
