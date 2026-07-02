import { INFINITY_PATH, INFINITY_VIEWBOX } from "@/components/brand/infinityPath";

/**
 * Pre-rendered static fallback for `prefers-reduced-motion: reduce` — SPEC §4.5.
 * The canvas is never mounted in this path; the exact ∞ master mark, set large
 * and low-contrast, stands in as the still "final frame".
 */
export function HeroStatic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <svg
        viewBox={INFINITY_VIEWBOX}
        role="img"
        aria-label="The infinity mark — two joined loops, health and wealth compounding without end."
        className="w-[70%] max-w-[720px]"
        style={{ color: "rgba(10,10,10,0.08)" }}
        fill="currentColor"
      >
        <path d={INFINITY_PATH} />
      </svg>
    </div>
  );
}
