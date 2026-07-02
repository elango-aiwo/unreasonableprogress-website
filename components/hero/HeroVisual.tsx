"use client";

import { usePrefersReducedMotion } from "@/lib/motion";
import { HeroField } from "@/components/hero/HeroField";
import { HeroStatic } from "@/components/hero/HeroStatic";

/** Picks the live field or the static mark — the reduced-motion path never mounts the canvas. */
export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <HeroStatic /> : <HeroField />;
}
