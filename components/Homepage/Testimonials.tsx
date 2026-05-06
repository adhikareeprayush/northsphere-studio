import Image from "next/image";
import { useState } from "react";

const testimonialsData = [
  {
    quote:
      "Northsphere ran discovery like a product team, not a vendor deck. Our checkout uplift showed within the first sprint after launch.",
    name: "Elena Marchetti",
    position: "VP Product, Helio Financial",
    image: "/Profile.jpg",
  },
  {
    quote:
      "They rewired our analytics narrative—finally one dashboard the exec team actually opens every Monday.",
    name: "Jordan Pike",
    position: "COO, Signal Desk Inc.",
    image: "/Profile.jpg",
  },
  {
    quote:
      "Creative that respects engineering constraints is rare. Their UI kit survived three roadmap pivots without falling apart.",
    name: "Priya Natarajan",
    position: "Engineering Lead, Wavefront AI",
    image: "/Profile.jpg",
  },
  {
    quote:
      "Paid social tests were documented like lab notes. We killed three angles fast and doubled down on what converted.",
    name: "Marcus Webb",
    position: "Growth Director, Mint Grove Retail",
    image: "/Profile.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  const { quote, name, position, image } = testimonialsData[currentIndex];

  return (
    <section className="section-inner py-12 md:py-14">
      <div className="card-surface relative flex flex-col gap-10 overflow-hidden p-8 md:flex-row md:items-stretch md:gap-12 md:p-12 lg:p-14">
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/12 blur-[56px]" />

        <div className="relative z-10 flex flex-1 flex-col gap-8">
          <blockquote className="font-jakarta text-lg font-medium leading-relaxed text-text-heading sm:text-xl md:text-2xl md:leading-snug">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex flex-col gap-6 border-t border-stroke pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={image}
                alt=""
                width={72}
                height={72}
                className="size-14 shrink-0 rounded-full object-cover ring-2 ring-stroke sm:size-[4.5rem]"
              />
              <div>
                <p className="font-jakarta text-lg font-bold text-primary">
                  {name}
                </p>
                <p className="text-sm text-text-body">{position}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-stroke bg-surface-card text-text-heading hover:bg-surface-muted"
              >
                <Image
                  src="/arrow-left-black.svg"
                  alt=""
                  width={22}
                  height={22}
                />
              </button>
              <p className="min-w-[3rem] font-manrope text-sm font-semibold tabular-nums text-text-heading">
                {currentIndex + 1}
                <span className="font-normal text-text-body">
                  /{testimonialsData.length}
                </span>
              </p>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:bg-primary-hover"
              >
                <Image
                  src="/arrow-right.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="brightness-0 invert"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
