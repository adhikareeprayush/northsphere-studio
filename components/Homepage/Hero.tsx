"use client";
import Image from "next/image";
import Button from "../Resuable/Button";
import Link from "next/link";
import { SectionArtifacts } from "../Resuable/SectionArtifacts";
import { visual } from "@/lib/visuals";

const whatsappNumber = "9779700045699";
const whatsappMessage =
  "Hello, I'd like to talk about a project with Northsphere Studio.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const trustMarks = [
  "Ledgerlane SaaS",
  "Nova Retail",
  "PulseMed Devices",
  "Drift Mobility",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-stroke bg-surface-card">
      <SectionArtifacts />
      <div className="section-inner relative z-10 grid grid-cols-1 gap-10 py-10 md:gap-12 md:py-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-14">
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <div className="flex flex-col gap-5">
            <h1 className="font-jakarta text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1] xl:text-6xl">
              Sculpt digital products people trust.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-text-body">
              Northsphere Studio designs and ships refined interfaces, resilient
              web apps, and campaigns measured against outcomes—not vanity
              metrics.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              type="button"
              label="Schedule Call"
              icon={
                <Image
                  src="/arrow-right.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              }
              iconPosition="right"
              variant="primary"
              onClick={() => window.open(whatsappUrl, "_blank")}
            />
            <Link
              href="/products"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline sm:text-base"
            >
              View selected work
            </Link>
          </div>
          <div className="flex flex-col gap-4 border-t border-stroke pt-8 sm:flex-row sm:items-start sm:gap-8">
            <p className="text-sm font-medium text-text-body sm:max-w-[9rem] sm:pt-1">
              Teams we collaborate with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {trustMarks.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-stroke bg-surface-muted px-3.5 py-1.5 text-xs font-semibold tracking-tight text-text-heading sm:text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative flex w-full max-w-[520px] flex-col gap-4">
            <div className="artifact-float pointer-events-none absolute -right-12 top-4 hidden h-32 w-32 rounded-full bg-primary/25 blur-3xl sm:block" />
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative h-[200px] w-full overflow-hidden rounded-2xl border border-stroke sm:h-[240px] sm:w-[55%]">
                <Image
                  src={visual.heroMesh}
                  alt=""
                  fill
                  className="object-cover brightness-[0.95]"
                  priority
                  sizes="(max-width: 640px) 100vw, 280px"
                />
                <div className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-surface-card bg-primary shadow-md sm:h-16 sm:w-16">
                  <Image
                    src="/trending-up.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 brightness-0 invert"
                  />
                </div>
              </div>
              <div className="card-surface relative flex w-full flex-col justify-between gap-6 overflow-hidden p-6 sm:h-[240px] sm:w-[45%]">
                <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
                <div>
                  <p className="font-jakarta text-5xl font-bold text-primary sm:text-6xl">
                    40+
                  </p>
                  <p className="mt-2 text-sm leading-snug text-text-body">
                    Launch cycles and retainers across SaaS, commerce, and public
                    interfaces.
                  </p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
                  <div className="h-full w-[72%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-stroke bg-primary">
              <Image
                src="/bg.svg"
                alt=""
                width={320}
                height={450}
                className="pointer-events-none absolute -left-8 bottom-0 w-[200px] opacity-35 sm:w-[260px]"
              />
              <div className="relative z-10 flex min-h-[160px] flex-col justify-center gap-3 px-6 py-8 sm:min-h-[180px] sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-white">
                  Strategy → ship
                </p>
                <h2 className="max-w-sm font-jakarta text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Experiments you can read in analytics—not slideware alone.
                </h2>
              </div>
              <div className="absolute bottom-0 right-4 flex items-end gap-1.5 pb-4">
                <div className="h-10 w-7 rounded-t bg-accent/50 sm:h-12 sm:w-9" />
                <div className="h-14 w-7 rounded-t bg-accent/75 sm:h-16 sm:w-9" />
                <div className="h-[4.5rem] w-7 rounded-t bg-accent sm:h-20 sm:w-9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
