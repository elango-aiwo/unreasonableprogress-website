import { cn } from "@/lib/cn";
import { INFINITY_PATH, INFINITY_VIEWBOX } from "@/components/brand/infinityPath";

type Tone = "current" | "black" | "white" | "gold";

interface InfinityMarkProps {
  /** Rendered height in px; width derives from the artwork's aspect ratio. */
  size?: number;
  /** Fill source. "current" inherits text colour; others force an exact value. */
  tone?: Tone;
  /** When set, the mark is an image with this label; otherwise it is decorative. */
  title?: string;
  className?: string;
}

const [, , VB_W = 1474, VB_H = 687] = INFINITY_VIEWBOX.split(" ").map(Number);
const ASPECT = VB_W / VB_H;

function fill(tone: Tone): string {
  switch (tone) {
    case "black":
      return "#000000";
    case "white":
      return "#FFFFFF";
    case "gold":
      return "var(--accent)";
    default:
      return "currentColor";
  }
}

/**
 * The Unreasonable Progress master mark — the infinity ∞.
 *
 * This is the EXACT artwork, vectorized from the master brand PDF (not a
 * re-drawing): the ribbon crossing with its angular cut terminals is preserved.
 * A single filled path, recolourable to full black / full white via `tone`.
 */
export function InfinityMark({ size = 24, tone = "current", title, className }: InfinityMarkProps) {
  const decorative = !title;
  return (
    <svg
      viewBox={INFINITY_VIEWBOX}
      height={size}
      width={size * ASPECT}
      fill={fill(tone)}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={title}
      className={cn("shrink-0", className)}
    >
      {title ? <title>{title}</title> : null}
      <path d={INFINITY_PATH} />
    </svg>
  );
}
