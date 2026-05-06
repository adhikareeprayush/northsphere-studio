import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; ignored (no scroll animations). */
  delay?: number;
};

const AnimatedSection = ({
  children,
  className = "",
}: AnimatedSectionProps) => {
  return <div className={twMerge("w-full", className)}>{children}</div>;
};

export default AnimatedSection;
