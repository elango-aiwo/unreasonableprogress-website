import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Ground = "paper" | "paper-warm" | "ink";

interface SectionProps {
  ground?: Ground;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  id?: string;
  noPad?: boolean;
}

const groundClass: Record<Ground, string> = {
  paper: "bg-paper text-g-90",
  "paper-warm": "bg-paper-warm text-g-90",
  ink: "ink-ground",
};

/** The one structural primitive every page section is built from — see SPEC §4.3/§4.1 rule 1 (paper/ink rhythm). */
export function Section({
  ground = "paper",
  as: Tag = "section",
  className,
  containerClassName,
  children,
  id,
  noPad = false,
}: SectionProps) {
  return (
    <Tag id={id} className={cn(groundClass[ground], !noPad && "section-pad", className)}>
      <div className={cn("container-outer", containerClassName)}>{children}</div>
    </Tag>
  );
}
