"use client";

import { useSearchParams } from "next/navigation";

/** Reads ?ref= on the client so the received page stays statically exportable. */
export function ReceivedRef() {
  const ref = useSearchParams().get("ref");
  if (!ref) return null;
  return (
    <p className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">Reference: {ref}</p>
  );
}
