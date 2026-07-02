"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { primaryNav } from "@/content/data/nav";
import { Logo } from "@/components/brand/Logo";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      openButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={openButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-label="Open menu"
        className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-ink"
      >
        Menu
      </button>

      {open && mounted
        ? createPortal(
        <div role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-50 ink-ground flex flex-col">
          <div className="container-outer flex items-center justify-between py-6">
            <Link href="/" aria-label="Unreasonable Progress — home" className="flex items-center" onClick={() => setOpen(false)}>
              <Logo size={15} onInk />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-paper"
            >
              Close
            </button>
          </div>

          <nav className="container-outer flex flex-1 flex-col justify-center gap-6 pb-24">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-[clamp(2rem,9vw,3rem)] font-semibold text-paper tracks-out"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-fit border border-g-inv-30 px-7 py-4 font-mono text-[0.9375rem] uppercase tracking-[0.08em] text-paper"
            >
              Request an invitation →
            </Link>
          </nav>
        </div>,
            document.body
          )
        : null}
    </div>
  );
}
