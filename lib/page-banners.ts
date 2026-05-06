/** Visual theme for page hero / PageHeader banners. */

import { visual } from "@/lib/visuals";

export type PageBannerVariant =
  | "default"
  | "about"
  | "services"
  | "projects"
  | "contact"
  | "careers"
  | "blog"
  | "legal";

export type PageBannerTheme = "dark" | "light";

export type PageBannerConfig = {
  theme: PageBannerTheme;
  /** Background image under overlay (dark theme only). */
  imageSrc: string | null;
  imageAlt: string;
  /** Overlay on top of scrim + image (dark). */
  overlayClassName: string;
  /** Header strip classes for light theme. */
  lightStripClassName?: string;
};

export const PAGE_BANNER_MAP: Record<PageBannerVariant, PageBannerConfig> = {
  default: {
    theme: "dark",
    imageSrc: visual.abstractDark,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-br from-surface-dark/92 via-primary/[0.82] to-[#041804]",
  },
  about: {
    theme: "dark",
    imageSrc: visual.workspace,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-r from-black/82 via-black/55 to-primary/[0.78]",
  },
  services: {
    theme: "dark",
    imageSrc: visual.dashboardUi,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-br from-surface-dark/88 via-primary/[0.72] to-[#052805]",
  },
  projects: {
    theme: "dark",
    imageSrc: visual.heroMesh,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-tl from-black/88 via-surface-dark/[0.82] to-primary/[0.7]",
  },
  contact: {
    theme: "dark",
    imageSrc: visual.glassAbstract,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-r from-black/80 via-primary/[0.68] to-primary/[0.85]",
  },
  careers: {
    theme: "dark",
    imageSrc: visual.teamEnergy,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-br from-primary/[0.82] via-surface-dark/[0.88] to-black/[0.82]",
  },
  blog: {
    theme: "dark",
    imageSrc: visual.blogCover,
    imageAlt: "",
    overlayClassName:
      "bg-gradient-to-b from-black/90 via-surface-dark/[0.88] to-primary/[0.82]",
  },
  legal: {
    theme: "light",
    imageSrc: null,
    imageAlt: "",
    overlayClassName: "",
    lightStripClassName:
      "border-b border-stroke bg-surface-muted bg-[linear-gradient(180deg,#f6f8f4_0%,#e8ece6_100%)]",
  },
};
