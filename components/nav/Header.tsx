"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { primaryNav } from "@/content/data/nav";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/nav/MobileMenu";

/** Radically shallow nav — SPEC §5.2 / reference pattern A6. Sticky, minimal, one CTA. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-paper/95 backdrop-blur-sm transition-shadow",
        scrolled && "nav-scrolled"
      )}
    >
      <div className="container-outer flex h-20 items-center justify-between">
        <Link href="/" aria-label="Unreasonable Progress — home" className="flex items-center">
          <Logo size={16} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-draw font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-70"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="border border-g-30 px-5 py-3 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink tracks-out hover:border-ink"
          >
            Request an invitation →
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
