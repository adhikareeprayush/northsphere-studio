"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/Resuable/ProductCard";
import AnimatedSection from "@/components/Resuable/AnimatedSection";

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
};

type Props = {
  projects: ProjectItem[];
};

export default function ProjectsCatalog({ projects }: Props) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category))).sort(
      (a, b) => a.localeCompare(b),
    );
    return ["All", ...unique] as const;
  }, [projects]);

  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <AnimatedSection>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-jakarta text-sm font-semibold text-text-heading">
          Filter by focus
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 font-manrope text-xs font-bold transition-colors sm:text-sm ${
                  isActive
                    ? "bg-primary text-white opacity-100 shadow-sm"
                    : "border border-stroke bg-surface-card text-text-heading hover:border-primary/40 hover:bg-surface-muted"
                }`}
              >
                {cat}
                <span
                  className={`ml-1.5 tabular-nums ${isActive ? "text-white opacity-100" : "opacity-70"}`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {filtered.map((product, index) => (
          <Link
            href={product.link}
            key={product.title}
            className="block transition-opacity duration-200"
          >
            <ProductCard
              title={product.title}
              description={product.description}
              image={product.image}
              category={product.category}
              index={index}
            />
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-jakarta text-text-body">
          Nothing in this category yet—try another filter or{" "}
          <Link href="/contact" className="font-semibold text-primary underline">
            tell us what you need
          </Link>
          .
        </p>
      )}
    </AnimatedSection>
  );
}
