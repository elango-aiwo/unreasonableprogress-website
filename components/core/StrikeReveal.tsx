"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/motion";

interface StrikeRevealProps {
  before: string;
  after: string;
  className?: string;
}

/** SPEC §4.2 — struck-through conventional wisdom, replaced by the ink correction on scroll. */
export function StrikeReveal({ before, after, className }: StrikeRevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={cn("strike-reveal", isVisible && "is-visible", className)}>
      <span className="before font-display text-h2">{before}</span>
      <strong className="after font-display text-h2 font-bold">{after}</strong>
    </div>
  );
}
