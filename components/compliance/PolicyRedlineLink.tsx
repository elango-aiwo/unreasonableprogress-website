import Link from "next/link";

/** SPEC §10 — adjacent to every W4 (Policy & Sovereign Access) mention. */
export function PolicyRedlineLink() {
  return (
    <Link href="/charter" className="link-draw font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-70">
      Read the Red-Line Charter →
    </Link>
  );
}
