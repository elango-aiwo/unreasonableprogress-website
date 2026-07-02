import Link from "next/link";
import { home } from "@/content/copy/home";
import { InfinityMark } from "@/components/brand/InfinityMark";

/** The split-screen structural motif — SPEC §6.1 H4, reused as the "Two Engines" device. */
export function EngineSplit() {
  const { health, wealth } = home.h4_engines;

  return (
    <div className="grid border border-g-30 md:grid-cols-2">
      <Link href={health.href} className="invert-hover flex flex-col gap-6 border-b border-g-30 p-10 md:border-b-0 md:border-r md:p-16">
        <InfinityMark size={18} />
        <p className="eyebrow">{health.label}</p>
        <p className="font-text text-body-lg">{health.body}</p>
        <p className="font-mono text-[0.8125rem] text-g-50">{health.system}</p>
      </Link>

      <Link href={wealth.href} className="ink-ground flex flex-col gap-6 p-10 transition-colors hover:bg-ink-soft md:p-16">
        <InfinityMark size={18} className="text-accent-on-ink" />
        <p className="eyebrow">{wealth.label}</p>
        <p className="font-text text-body-lg text-g-inv-70">{wealth.body}</p>
        <p className="font-mono text-[0.8125rem] text-g-inv-70">{wealth.system}</p>
      </Link>
    </div>
  );
}
