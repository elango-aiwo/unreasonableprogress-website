import { cn } from "@/lib/cn";
import { InfinityMark } from "@/components/brand/InfinityMark";

export { InfinityMark } from "@/components/brand/InfinityMark";

interface LogoProps {
  /** Cap height of the wordmark in px (the ∞ scales to match). */
  size?: number;
  /** On a dark ground, render the whole logo in full white; otherwise full black. */
  onInk?: boolean;
  className?: string;
}

/**
 * Shared wordmark type styling — the EXACT logo typeface, Montserrat ExtraBold,
 * lowercase, as identified from the master artwork. Never re-cased or restyled.
 */
const wordmarkStyle = (size: number): React.CSSProperties => ({
  fontFamily: "var(--font-montserrat)",
  fontWeight: 800,
  fontSize: size,
  lineHeight: 0.95,
  letterSpacing: "0",
  textTransform: "lowercase",
});

/**
 * Primary horizontal lockup — "unreasonable progress" on one line with the ∞
 * trailing, in full black (or full white on ink). For the header / inline use.
 */
export function Logo({ size = 16, onInk = false, className }: LogoProps) {
  const color = onInk ? "#FFFFFF" : "#000000";
  return (
    <span
      className={cn("inline-flex items-center", className)}
      style={{ color, gap: size * 0.34 }}
    >
      <span className="font-display" style={wordmarkStyle(size)}>
        unreasonable progress
      </span>
      <InfinityMark size={size * 0.82} tone="current" />
    </span>
  );
}

/**
 * Stacked lockup — the exact artwork layout: "unreasonable" over "progress ∞".
 * For the footer, splash, OG, and large brand moments.
 */
export function LogoStacked({ size = 34, onInk = false, className }: LogoProps) {
  const color = onInk ? "#FFFFFF" : "#000000";
  return (
    <span className={cn("inline-flex flex-col", className)} style={{ color }}>
      <span className="font-display" style={wordmarkStyle(size)}>
        unreasonable
      </span>
      <span className="inline-flex items-center" style={{ gap: size * 0.28 }}>
        <span className="font-display" style={wordmarkStyle(size)}>
          progress
        </span>
        <InfinityMark size={size * 0.62} tone="current" />
      </span>
    </span>
  );
}
