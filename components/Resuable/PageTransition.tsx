import { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

/** Renders children without route transitions — avoids slide/fade motion between pages. */
const PageTransition = ({ children }: PageTransitionProps) => {
  return children;
};

export default PageTransition;
