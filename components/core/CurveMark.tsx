import { cn } from "@/lib/cn";

interface CurveMarkProps {
  size?: number;
  onInk?: boolean;
  className?: string;
}

/**
 * The two-curve mark — SPEC §4.6, "the one memorable thing": a life curving down,
 * a balance sheet compounding up, born from one origin. Used beside the wordmark,
 * as section dividers, and as the loading mark.
 */
export function CurveMark({ size = 28, onInk = false, className }: CurveMarkProps) {
  const inkColor = onInk ? "#FFFFFF" : "#0A0A0A";

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <circle cx="8" cy="20" r="1.6" fill={inkColor} />
      {/* descending — health / biological age */}
      <path
        d="M8 20 C 16 20, 18 30, 32 33"
        fill="none"
        stroke={inkColor}
        strokeWidth="1.4"
      />
      {/* ascending — wealth / enterprise value */}
      <path
        d="M8 20 C 16 20, 18 8, 32 5"
        fill="none"
        stroke="#B8863A"
        strokeWidth="1.4"
      />
    </svg>
  );
}
