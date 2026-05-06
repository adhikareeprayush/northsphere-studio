"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionArtifacts } from "../Resuable/SectionArtifacts";
import { visual } from "@/lib/visuals";

const tabs = ["All Work", "UI/UX Design", "Digital Marketing", "Branding"];

interface Project {
  id: number;
  title: string;
  company: string;
  year: string;
  image: string;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Helio Banking — Design system & web app",
    company: "Helio Financial",
    year: "2024",
    image: visual.projectA,
    category: "UI/UX Design",
    link: "/contact",
  },
  {
    id: 2,
    title: "Mint Grove — omnichannel launch campaign",
    company: "Mint Grove Retail",
    year: "2024",
    image: visual.projectB,
    category: "Digital Marketing",
    link: "/contact",
  },
  {
    id: 3,
    title: "Orbit Labs — brand refresh & site",
    company: "Orbit Labs",
    year: "2023",
    image: visual.projectC,
    category: "Branding",
    link: "/contact",
  },
  {
    id: 4,
    title: "Signal Desk — analytics dashboard UX",
    company: "Signal Desk Inc.",
    year: "2025",
    image: visual.projectD,
    category: "UI/UX Design",
    link: "/contact",
  },
  {
    id: 5,
    title: "Wavefront — paid social & landing tests",
    company: "Wavefront AI",
    year: "2024",
    image: visual.projectE,
    category: "Digital Marketing",
    link: "/contact",
  },
  {
    id: 6,
    title: "Cinder Studio — identity & motion toolkit",
    company: "Cinder Studio",
    year: "2023",
    image: visual.projectF,
    category: "Branding",
    link: "/contact",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filteredProjects =
    activeTab === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="section-inner relative py-12 md:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-40 max-w-lg rounded-full bg-primary/10 blur-[80px]" />
      <div className="overflow-hidden rounded-3xl border border-stroke bg-surface-dark shadow-lg">
        <div className="relative px-5 pb-10 pt-10 sm:px-8 lg:px-10 lg:pb-12 lg:pt-12">
          <SectionArtifacts subtle />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
            <Image
              src="/black-bg.png"
              alt=""
              fill
              className="object-cover brightness-[0.4]"
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-10">
            <h2 className="mx-auto max-w-3xl text-center font-jakarta text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl">
              Case-shaped engagements—product surfaces, growth loops, and
              launches we&apos;ve led with partners.
            </h2>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {tabs.map((tab) => {
                const count =
                  tab === "All Work"
                    ? projects.length
                    : projects.filter((p) => p.category === tab).length;
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full border px-4 py-2 font-manrope text-xs font-bold tracking-tight sm:px-6 sm:text-sm ${
                      isActive
                        ? "border-accent bg-accent text-white"
                        : "border-white/35 bg-transparent text-white hover:border-white/60"
                    }`}
                  >
                    {tab}{" "}
                    <span className="font-medium opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filteredProjects.map((project) => {
                const external = project.link.startsWith("http");
                return (
                  <Link
                    key={project.id}
                    href={project.link}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] outline-none ring-accent transition-colors hover:border-white/25 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
                  >
                    <div className="relative aspect-[4/3] w-full shrink-0 bg-black/40">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover brightness-[0.85]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-white/55">
                        {project.category}
                      </p>
                      <h3 className="font-jakarta text-lg font-semibold leading-snug text-white">
                        {project.title}
                      </h3>
                      <p className="mt-auto text-sm text-white/65">
                        {project.company} · {project.year}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
