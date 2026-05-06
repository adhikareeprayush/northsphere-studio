import Image from "next/image";
import { SectionArtifacts } from "../Resuable/SectionArtifacts";
import { visual } from "@/lib/visuals";

const HowWeWork = () => {
  return (
    <section className="section-inner relative flex flex-col gap-10 py-12 md:gap-12 md:py-14">
      <SectionArtifacts subtle />
      <div className="relative z-10 grid grid-cols-1 items-end gap-8 md:grid-cols-2 md:gap-12">
        <h2 className="font-jakarta text-2xl font-semibold tracking-tight text-text-heading sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Systems, craft, and measurable delivery
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-text-body md:justify-self-end">
          We embed with product and marketing leads—prototypes fast, document
          decisions, and keep momentum through QA, launch, and iteration.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">
        <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-stroke bg-primary p-8 shadow-sm lg:col-span-2 lg:min-h-[380px] lg:p-10">
          <Image
            src="/bg.png"
            alt=""
            width={600}
            height={500}
            className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] max-w-none rotate-45 object-cover opacity-25"
          />
          <div className="relative z-10">
            <p className="font-jakarta text-6xl font-bold leading-none text-white sm:text-7xl md:text-8xl">
              48<span className="text-white/90">+</span>
            </p>
            <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-white sm:text-base">
              Milestones shipped—design systems, APIs, and campaigns in-market.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-2">
            {["Research", "Design", "Build", "Grow"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/35 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-stroke shadow-sm lg:col-span-3 lg:min-h-[380px]">
          <Image
            className="absolute inset-0 h-full w-full object-cover brightness-[0.55]"
            src={visual.workspace}
            alt=""
            width={1600}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-surface-dark/40" />
          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            <div className="pointer-events-none absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-card bg-accent shadow-md">
              <Image
                src="/play.svg"
                alt=""
                width={28}
                height={28}
                className="ml-0.5 h-7 w-7"
              />
            </div>
            <h3 className="font-jakarta text-2xl font-semibold tracking-[0.18em] text-white banner-title-shadow sm:text-3xl md:text-4xl">
              HOW WE WORK
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
