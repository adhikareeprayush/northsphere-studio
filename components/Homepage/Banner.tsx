import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="section-inner flex w-full flex-col justify-center">
      <div className="relative isolate flex min-h-[220px] w-full flex-col justify-center overflow-hidden rounded-2xl border border-stroke shadow-md sm:min-h-[260px] sm:rounded-3xl md:min-h-[280px]">
        <div className="absolute inset-0 bg-primary" aria-hidden />
        <Image
          src="/bg.svg"
          alt=""
          width={480}
          height={480}
          className="pointer-events-none absolute -left-24 bottom-0 h-[130%] w-auto opacity-[0.14]"
        />
        <Image
          src="/black-bg.png"
          alt=""
          fill
          className="pointer-events-none object-cover brightness-[0.45]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-primary/[0.93] to-primary"
          aria-hidden
        />
        <div
          className="artifact-float pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center gap-8 px-6 py-10 sm:flex-row sm:gap-10 sm:px-10 sm:py-12 md:px-12">
          <div className="max-w-xl text-center sm:flex-1 sm:text-left">
            <h2 className="font-jakarta text-2xl font-semibold leading-tight tracking-tight text-white opacity-100 banner-title-shadow sm:text-3xl md:text-4xl">
              Ready to plan your next release?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white opacity-100 banner-text-shadow sm:text-base md:text-lg">
              Tell us what you&apos;re building—we&apos;ll reply with clear next
              steps.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-3 font-manrope text-sm font-bold text-primary shadow-lg hover:bg-white/95 sm:px-10 sm:text-base"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
