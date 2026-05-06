/**
 * Non-interactive decorative layers — partial orbs / mesh (not full-section fills).
 */
export function SectionArtifacts({
  subtle = false,
}: {
  subtle?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className={`artifact-orb artifact-float absolute -right-[12%] top-[8%] h-[min(42vw,260px)] w-[min(42vw,260px)] rounded-full bg-primary/18 blur-[64px] ${subtle ? "opacity-60" : ""}`}
      />
      <div
        className={`artifact-orb artifact-float-delayed absolute -left-[8%] bottom-[12%] h-[180px] w-[180px] rounded-full bg-accent/20 blur-[52px] ${subtle ? "opacity-60" : ""}`}
      />
      <div className="artifact-grid absolute inset-0 opacity-[0.04]" />
    </div>
  );
}
