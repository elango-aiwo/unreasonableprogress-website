"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/motion";

interface RevealProps {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms — for sequences of siblings revealing in order (SPEC §4.5, 60ms stagger). */
  delay?: number;
}

/** Generic scroll-reveal wrapper: opacity 0->1 + translateY 24px->0, native scroll only. */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  ...rest
}: RevealProps & Omit<ComponentPropsWithoutRef<"div">, keyof RevealProps>) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
