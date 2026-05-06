"use client";
import Faqs from "@/components/Homepage/Faqs";
import Hero from "@/components/Homepage/Hero";
import HowWeWork from "@/components/Homepage/HowWeWork";
import Projects from "@/components/Homepage/Projects";
import Testimonials from "@/components/Homepage/Testimonials";
import Blog from "@/components/Homepage/Blog";
import Banner from "@/components/Homepage/Banner";
import Footer from "@/components/Homepage/Footer";
import AnimatedSection from "@/components/Resuable/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-page text-text-body">
      <Hero />
      <AnimatedSection className="relative border-y border-stroke bg-surface-muted">
        <HowWeWork />
      </AnimatedSection>
      <AnimatedSection className="bg-surface-page">
        <Projects />
      </AnimatedSection>
      <AnimatedSection className="border-y border-stroke bg-surface-card">
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection className="relative bg-surface-muted">
        <Faqs />
      </AnimatedSection>
      <AnimatedSection className="border-y border-stroke bg-surface-card">
        <Blog />
      </AnimatedSection>
      <AnimatedSection className="flex min-h-[min(42vh,380px)] flex-col justify-center bg-surface-page py-10 md:min-h-[min(40vh,420px)] md:py-12">
        <Banner />
      </AnimatedSection>
      <Footer />
    </div>
  );
}
