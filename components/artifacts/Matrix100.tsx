"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

interface Matrix100Props {
  criteria: readonly string[];
  legend: readonly { range: string; verdict: string }[];
}

function verdictFor(score: number): { label: string; tone: "proceed" | "redesign" | "decline" } {
  if (score >= 70) return { label: "Proceed", tone: "proceed" };
  if (score >= 50) return { label: "Redesign", tone: "redesign" };
  return { label: "Decline", tone: "decline" };
}

/** The /100 Matrix — SPEC §6.4, interactive demo slider scoring a hypothetical deal. */
export function Matrix100({ criteria, legend }: Matrix100Props) {
  const [score, setScore] = useState(72);
  const sliderId = useId();
  const verdict = verdictFor(score);

  return (
    <div className="border border-g-30 p-8">
      <ol className="grid gap-2 sm:grid-cols-2">
        {criteria.map((item, i) => (
          <li key={item} className="flex gap-3 py-1 font-text text-[0.875rem] text-g-70">
            <span className="font-mono text-[0.75rem] text-g-50">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ol>

      <div className="hairline my-8" />

      <label htmlFor={sliderId} className="eyebrow">
        Demo — score a hypothetical deal
      </label>
      <div className="mt-4 flex items-center gap-6">
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="h-1 flex-1 accent-ink"
          aria-describedby={`${sliderId}-verdict`}
        />
        <span className="font-mono text-[1.5rem] text-ink">{score}</span>
      </div>

      <p
        id={`${sliderId}-verdict`}
        className={cn(
          "mt-4 font-mono text-[0.9375rem] uppercase tracking-[0.08em]",
          verdict.tone === "proceed" && "text-ink",
          verdict.tone === "redesign" && "text-g-70",
          verdict.tone === "decline" && "text-g-50"
        )}
      >
        Verdict: {verdict.label}
      </p>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.75rem] text-g-50">
        {legend.map((row) => (
          <span key={row.range}>
            {row.range} → {row.verdict.toUpperCase()}
          </span>
        ))}
      </div>

      <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-g-50">Illustrative demo</p>
    </div>
  );
}
