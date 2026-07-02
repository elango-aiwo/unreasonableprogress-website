import Link from "next/link";

/** SPEC §10 — inline footnote marker attached to every target-range figure (§9 Copy Constitution rule 1). */
export function TargetRangeNote() {
  return (
    <Link
      href="/legal/disclaimers#methodology"
      className="link-draw font-mono text-[0.75em] align-super text-g-50"
      aria-label="Target range — see methodology"
    >
      †
    </Link>
  );
}
