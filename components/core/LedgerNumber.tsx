"use client";

import { cn } from "@/lib/cn";
import { useCountUp } from "@/lib/motion";

interface LedgerNumberProps {
  /** Numeric value to count up to. Omit and use `value` for non-numeric ledger numbers (e.g. "≥70"). */
  target?: number;
  /** Static display value, used when the figure isn't a plain count-up (ranges, ratios, symbols). */
  value?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  accent?: boolean;
  size?: "lg" | "md";
  className?: string;
  /** Set true when this Ledger Number sits on an ink (inverted) ground. */
  onInk?: boolean;
}

/** The Ledger Number — SPEC §4.2 signature typographic device for every evidence stat. */
export function LedgerNumber({
  target,
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  accent = false,
  size = "lg",
  className,
  onInk = false,
}: LedgerNumberProps) {
  const { ref, display } = useCountUp(target ?? 0, { decimals });

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p
        className={cn(
          "font-mono font-medium leading-none tracking-tight",
          size === "lg" ? "text-[clamp(2.5rem,6vw,4.5rem)]" : "text-[clamp(1.75rem,3.5vw,2.5rem)]",
          accent && onInk && "text-accent-on-ink",
          accent && !onInk && "text-accent-ink",
          !accent && onInk && "text-paper",
          !accent && !onInk && "text-ink"
        )}
      >
        {typeof target === "number" ? (
          <span ref={ref}>
            {prefix}
            {display}
            {suffix}
          </span>
        ) : (
          <span>{value}</span>
        )}
      </p>
      <p className="eyebrow">{label}</p>
    </div>
  );
}
