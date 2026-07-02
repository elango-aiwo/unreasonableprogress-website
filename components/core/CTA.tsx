import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CTAProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "solid-on-ink" | "ghost" | "ghost-ink";
  className?: string;
}

/**
 * The site's only interactive call-to-action pattern. "solid" is reserved for
 * "Request an invitation" — the single conversion action per SPEC §1.2/§6.10.
 */
export function CTA({ href, children, variant = "solid", className }: CTAProps) {
  const base =
    "inline-flex items-center gap-3 font-mono text-[0.9375rem] uppercase tracking-[0.08em] px-7 py-4 tracks-out transition-colors";

  const variants = {
    solid: "bg-ink text-paper hover:bg-accent-ink",
    /** Same solid CTA, inverted for use on an ink ground (SPEC §6.1 H9). */
    "solid-on-ink": "bg-paper text-ink hover:bg-accent-on-ink",
    ghost: "border border-g-30 text-ink hover:border-ink",
    "ghost-ink": "border border-g-inv-30 text-paper hover:border-paper",
  } as const;

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
