"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

const EASE_SETTLE = (t: number) => 1 - Math.pow(1 - t, 3); // approximates cubic-bezier(0.16,1,0.3,1)

/**
 * The Dual Counter — SPEC §4.5: AGE 58 -> 49 (down) and 1.0x -> 12.4x (up), 2.4s,
 * firing once the hero settles. Values are illustrative and labeled as such.
 */
export function DualCounter() {
  const reducedMotion = usePrefersReducedMotion();
  const [age, setAge] = useState(reducedMotion ? 49 : 58);
  const [multiple, setMultiple] = useState(reducedMotion ? 12.4 : 1.0);

  useEffect(() => {
    if (reducedMotion) return;
    const duration = 2400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = EASE_SETTLE(t);
      setAge(58 - (58 - 49) * eased);
      setMultiple(1.0 + (12.4 - 1.0) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  return (
    <div className="flex flex-wrap items-end gap-10">
      <div>
        <p className="font-mono text-[clamp(2rem,4.5vw,3rem)] leading-none text-ink">
          {age.toFixed(0)}
        </p>
        <p className="eyebrow mt-2">Biological age · target trajectory</p>
      </div>
      <div>
        <p className="font-mono text-[clamp(2rem,4.5vw,3rem)] leading-none text-accent-ink">
          {multiple.toFixed(1)}x
        </p>
        <p className="eyebrow mt-2">Enterprise value multiple · target trajectory</p>
      </div>
    </div>
  );
}
