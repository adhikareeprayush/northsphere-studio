"use client";
import Link from "next/link";
import { useState } from "react";

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      question: "What services does your agency offer?",
      answer:
        "We offer a comprehensive range of digital marketing services including SEO optimization, content marketing, social media management, paid advertising, email marketing, web design, and analytics consulting. Our tailored approach ensures each strategy aligns with your business goals and target audience.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results timeline varies depending on your industry and specific goals. Generally, SEO efforts show meaningful results within 3-6 months, while paid advertising can generate immediate traffic. We provide regular reports and insights so you can track progress every step of the way.",
    },
    {
      question: "Can you work with businesses of all sizes?",
      answer:
        "Absolutely! We work with startups, small businesses, and established enterprises. Our flexible service packages and customizable strategies allow us to scale our approach to meet the unique needs and budget of any organization, regardless of size.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success through clear KPIs tailored to your business objectives such as conversion rates, ROI, website traffic, lead generation, and engagement metrics. We provide detailed monthly reports and dashboards so you can see exactly how our strategies are impacting your bottom line.",
    },
  ];

  return (
    <section className="section-inner py-12 md:py-14">
      <div className="card-surface grid grid-cols-1 gap-12 p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-14">
        <div className="flex flex-col gap-8">
          <h2 className="font-jakarta text-3xl font-semibold tracking-tight text-text-heading sm:text-4xl md:text-5xl md:leading-tight">
            Frequently asked questions
          </h2>
          <p className="max-w-md text-base leading-relaxed text-text-body">
            Straight answers about how we work, what we deliver, and how we
            report progress—before you get on a call.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-8 py-4 font-jakarta text-base font-bold text-primary hover:bg-surface-muted"
            >
              Ask us anything
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline sm:text-base"
            >
              Browse services
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const open = expandedIndex === index;
            return (
              <div
                key={faq.question}
                className="border-t border-stroke first:border-t-0"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setExpandedIndex(open ? -1 : index)}
                >
                  <span className="font-jakarta text-base font-semibold leading-snug text-text-heading sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-2xl leading-none text-text-body">
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open && (
                  <p className="pb-5 text-sm leading-relaxed text-text-body sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
