import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ProseProps {
  as?: ElementType;
  size?: "body" | "lg";
  className?: string;
  children: ReactNode;
}

export function Prose({ as: Tag = "p", size = "body", className, children }: ProseProps) {
  return (
    <Tag
      className={cn(
        "measure",
        size === "lg" ? "text-body-lg" : "text-body",
        "text-g-70",
        className
      )}
    >
      {children}
    </Tag>
  );
}
