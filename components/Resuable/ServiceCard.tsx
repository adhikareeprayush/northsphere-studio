"use client";
import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
};

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <article className="flex h-full min-h-[280px] flex-col rounded-2xl border border-stroke bg-surface-card p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="mb-4 font-jakarta text-2xl font-bold text-text-heading">
        {title}
      </h3>
      <p className="leading-relaxed text-text-body">{description}</p>
    </article>
  );
};

export default ServiceCard;
