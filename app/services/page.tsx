import type { Metadata } from "next";
import Link from "next/link";
import { Users, Workflow, Headphones } from "lucide-react";
import PageHeader from "@/components/Resuable/PageHeader";
import ServiceCard from "@/components/Resuable/ServiceCard";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Web and mobile engineering, UI/UX, DevOps, STEM programs, and growth campaigns from ${SITE_NAME}.`,
};

/** Six core offerings shown on the services grid. */
const services = [
  {
    title: "Web Development",
    description:
      "Responsive websites and web apps with React, Next.js, and Node.js—fast, secure, and built to scale with your roadmap.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps for iOS and Android—from discovery through store submission and analytics instrumentation.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Research-backed interfaces: flows, systems, and prototypes tested with real users so shipping feels inevitable.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, paid media, and content tied to measurable outcomes—not dashboards that look busy but move nothing.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "AWS, Azure, or GCP migrations, IaC, scaling, and observability—production posture without slowing delivery.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    title: "E-Commerce Development",
    description:
      "Composable storefronts, payments, inventory, and lifecycle hooks—optimized for conversion and operations.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const whyChoose = [
  {
    title: "Expert team",
    body: "Senior designers and engineers who've shipped under real constraints—not slide decks.",
    Icon: Users,
  },
  {
    title: "Proven process",
    body: "Weekly demos, tight feedback loops, and docs your team can inherit after handoff.",
    Icon: Workflow,
  },
  {
    title: "Long-term support",
    body: "Roadmap pairing, fixes, and iteration blocks when you need capacity without a full hire.",
    Icon: Headphones,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="services"
        subtitle="Our Services"
        title="Comprehensive Digital Solutions"
        description="We offer a focused set of services to design, build, launch, and grow digital products—with clarity at every step."
      />

      <div className="page-shell py-10 md:py-12">
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-20">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 font-jakarta text-3xl font-bold text-text-heading md:text-4xl">
                  Why choose us?
                </h2>
                <div className="space-y-6">
                  {whyChoose.map(({ title, body, Icon }) => (
                    <div key={title} className="flex gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md ring-2 ring-primary/25"
                        aria-hidden
                      >
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="mb-1 font-jakarta text-lg font-semibold text-text-heading">
                          {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-text-body">
                          {body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-green-diagonal rounded-2xl p-8">
                <h3 className="font-jakarta mb-4 text-2xl font-bold">
                  Ready to get started?
                </h3>
                <p className="mb-6">
                  Tell us what you&apos;re building—we&apos;ll reply with
                  timeline, approach, and a sane commercial outline.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-8 py-3 font-bold text-primary no-underline transition-all hover:bg-white/95"
                >
                  Schedule a consultation
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
