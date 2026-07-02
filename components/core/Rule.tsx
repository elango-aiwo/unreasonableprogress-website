"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/motion";

interface RuleProps {
  className?: string;
  animate?: boolean;
}

/** Hairline rule; when animate=true it draws in via scaleX on scroll (SPEC §4.5 "Rules draw in via scaleX"). */
export function Rule({ className, animate = false }: RuleProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  if (!animate) {
    return <div className={cn("hairline w-full", className)} />;
  }

  return (
    <div
      ref={ref}
      className={cn("hairline w-full reveal-rule", isVisible && "is-visible", className)}
    />
  );
}
