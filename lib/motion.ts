"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/** Global reduced-motion check — the hard kill-switch required by SPEC §4.5. */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot);
}

/**
 * IntersectionObserver-driven "reveal on scroll" — native scroll only, no scroll-jacking.
 * Returns a ref to attach and whether the element has entered the viewport (once).
 */
export function useReveal<T extends HTMLElement>(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasIntersected(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: options?.threshold ?? 0.2, rootMargin: options?.rootMargin ?? "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  return { ref, isVisible: reducedMotion || hasIntersected };
}

/** Count-up animation for LedgerNumber / evidence stats — fires once on first viewport entry. */
export function useCountUp(target: number, opts?: { duration?: number; decimals?: number; startAt?: number }) {
  const { ref, isVisible } = useReveal<HTMLSpanElement>();
  const reducedMotion = usePrefersReducedMotion();
  const startAt = opts?.startAt ?? 0;
  const [progress, setProgress] = useState(startAt);

  useEffect(() => {
    if (!isVisible || reducedMotion) return;
    const duration = opts?.duration ?? 1200;
    const start = performance.now();

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(startAt + (target - startAt) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, reducedMotion, target]);

  const decimals = opts?.decimals ?? 0;
  const value = reducedMotion ? target : progress;
  return { ref, display: value.toFixed(decimals) };
}
