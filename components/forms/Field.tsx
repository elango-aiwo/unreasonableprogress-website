import type { ReactNode } from "react";

interface FieldShellProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  hint?: string;
}

/** Shared label/error shell for /apply inputs — error states are icon + text, never color-alone (SPEC §8.7). */
export function FieldShell({ label, htmlFor, error, children, hint }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">
        {label}
      </label>
      {children}
      {hint ? <p className="font-mono text-[0.75rem] text-g-inv-70">{hint}</p> : null}
      {error ? (
        <p role="alert" className="flex items-center gap-2 font-mono text-[0.75rem] text-state-error">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "border border-g-inv-30 bg-transparent px-4 py-3 font-text text-[0.9375rem] text-paper placeholder:text-g-inv-70 focus-visible:border-paper";

export const applyInputClass = inputClass;
