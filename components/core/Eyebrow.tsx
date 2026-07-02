import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  /** Only pass an index when it encodes a genuine sequence (SPEC §4.2 — "numbering must encode real order, not decoration"). */
  index?: string;
  className?: string;
}

export function Eyebrow({ children, index, className }: EyebrowProps) {
  return (
    <p className={cn("eyebrow", className)}>
      {children}
      {index ? <span className="opacity-60"> / {index}</span> : null}
    </p>
  );
}
