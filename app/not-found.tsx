import Link from "next/link";

/** SPEC §5.1 — "Monochrome, one line." */
export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <p className="font-display text-h2 font-bold text-ink">
        This page does not compound.{" "}
        <Link href="/" className="link-draw">
          → Home
        </Link>
      </p>
    </div>
  );
}
