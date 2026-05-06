import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/Resuable/PageHeader";
import Footer from "@/components/Homepage/Footer";
import { SectionArtifacts } from "@/components/Resuable/SectionArtifacts";
import { visual } from "@/lib/visuals";

const milestones = [
  {
    year: "2018",
    title: "Studio formed",
    body: "Started as a small product design practice focused on shipping usable interfaces.",
  },
  {
    year: "2020",
    title: "Engineering bench",
    body: "Added full-stack delivery—design systems, APIs, and observability from day one.",
  },
  {
    year: "2023",
    title: "Growth partnerships",
    body: "Paired lifecycle marketing with product work so launches had measurable funnels.",
  },
  {
    year: "2026",
    title: "Remote-first collective",
    body: "Distributed team across time zones with shared rituals and async-first documentation.",
  },
];

const principles = [
  {
    title: "Clarity over noise",
    body: "We write decisions down, prototype early, and cut scope that does not move a KPI.",
  },
  {
    title: "Accessible by default",
    body: "Contrast, focus order, and semantics are part of the first review—not a late audit.",
  },
  {
    title: "Long-term ownership",
    body: "Handoffs include runbooks, owners, and rollback paths so your team can operate without us.",
  },
  {
    title: "Honest timelines",
    body: "We model risk explicitly and reserve buffer for integration realities, not wishful thinking.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-page">
      <PageHeader
        variant="about"
        subtitle="About"
        title="A studio for serious product work"
        description="Northsphere Studio combines strategy, interface craft, and engineering discipline—so launches feel inevitable, not improvised."
      />

      <main className="page-shell space-y-16 py-10 md:space-y-20 md:py-14">
        {/* Intro + portrait */}
        <section className="relative overflow-hidden rounded-3xl border border-stroke bg-surface-card">
          <SectionArtifacts subtle />
          <div className="relative z-10 grid gap-10 p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:p-14">
            <div className="flex flex-col justify-center gap-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Who we are
              </p>
              <h2 className="font-jakarta text-3xl font-bold tracking-tight text-text-heading md:text-4xl">
                Small team. High standards. No theatre.
              </h2>
              <p className="text-base leading-relaxed text-text-body md:text-lg">
                We work with product leads, founders, and marketing owners who need
                interfaces that survive real traffic, and roadmaps that survive
                scrutiny. Most engagements blend UX, front-end, and light backend
                work—with experiments you can read in analytics.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-primary px-6 py-3 font-manrope text-sm font-bold text-white hover:bg-primary-hover"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex rounded-full border border-stroke bg-surface-page px-6 py-3 font-manrope text-sm font-bold text-text-heading hover:border-primary hover:text-primary"
                >
                  Capabilities
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-stroke md:min-h-[360px]">
              <Image
                src={visual.workspace}
                alt=""
                fill
                className="object-cover brightness-[0.92]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/55 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-jakarta text-sm font-medium text-white banner-text-shadow md:text-base">
                Workshop-style collaboration: async notes, shared Figma, and a
                single source of truth for scope.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="surface-green rounded-3xl px-8 py-10 md:px-12 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {[
              { n: "40+", l: "Shipped initiatives" },
              { n: "12", l: "Countries & time zones" },
              { n: "8yr", l: "Average seniority" },
              { n: "24h", l: "First response SLA" },
            ].map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <p className="font-jakarta text-4xl font-bold text-white md:text-5xl">
                  {s.n}
                </p>
                <p className="mt-2 text-sm text-white/95">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Principles
            </p>
            <h2 className="mt-3 font-jakarta text-3xl font-bold text-text-heading md:text-4xl">
              How we decide when trade-offs appear
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-stroke bg-surface-card p-8 shadow-sm"
              >
                <h3 className="font-jakarta text-xl font-bold text-text-heading">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-body md:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="rounded-3xl border border-stroke bg-surface-muted/80 p-8 md:p-12">
          <h2 className="text-center font-jakarta text-3xl font-bold text-text-heading md:text-4xl">
            Milestones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-body">
            Not a vanity timeline—just how the practice evolved as clients asked
            for deeper technical partnership.
          </p>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.year}>
                <span className="font-jakarta text-sm font-bold text-primary">
                  {m.year}
                </span>
                <h3 className="mt-2 font-jakarta text-lg font-bold text-text-heading">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {m.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Mission strip */}
        <section className="surface-green overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-10 md:grid-cols-2 md:items-center md:gap-14 md:p-14">
            <div>
              <h2 className="font-jakarta text-2xl font-bold text-white md:text-3xl">
                Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white md:text-lg">
                Help teams ship digital products that stay maintainable, measurable,
                and honest about what they can prove in market—then iterate with
                evidence.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20">
              <Image
                src={visual.dashboardUi}
                alt=""
                fill
                className="object-cover brightness-[0.55]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-primary/35" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="surface-green rounded-3xl px-8 py-12 text-center md:px-16 md:py-16">
          <h2 className="font-jakarta text-3xl font-bold text-white md:text-4xl">
            Work with us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white md:text-lg">
            Share a brief, a deck, or a messy backlog—we&apos;ll respond with a
            sensible next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-8 py-4 font-manrope font-bold text-primary hover:bg-white/95"
            >
              Contact
            </Link>
            <Link
              href="/careers"
              className="inline-flex rounded-full border-2 border-white px-8 py-4 font-manrope font-bold text-white hover:bg-white/10"
            >
              Careers
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
