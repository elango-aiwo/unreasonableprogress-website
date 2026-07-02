import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Prose } from "@/components/core/Prose";
import { LedgerNumber } from "@/components/core/LedgerNumber";
import { Reveal } from "@/components/core/Reveal";
import { InfinityMark } from "@/components/brand/InfinityMark";
import { TargetRangeNote } from "@/components/compliance/TargetRangeNote";
import { MedicalDisclaimer } from "@/components/compliance/MedicalDisclaimer";
import { SiisLoop } from "@/components/engines/SiisLoop";
import { SystemStack } from "@/components/artifacts/SystemStack";
import { health } from "@/content/copy/health";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: health.meta.title,
  description: health.meta.description,
  ...ogMetadata(health.meta.title, "ENGINE ONE — HEALTH"),
};

export default function HealthPage() {
  return (
    <div>
      <Section ground="paper">
        <InfinityMark size={18} className="mb-8" />
        <h1 className="text-hero font-display font-extrabold">{health.hero.heading}</h1>
        <Prose size="lg" className="mt-6">
          {health.hero.sub}
          <TargetRangeNote />
        </Prose>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{health.loop.eyebrow}</Eyebrow>
        <div className="mt-10">
          <SiisLoop stations={health.loop.stations} />
        </div>
        <p className="mt-8 text-center font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
          {health.loop.cadence}
        </p>
      </Section>

      <Section ground="paper">
        <Eyebrow>{health.stack.eyebrow}</Eyebrow>
        <div className="mt-8">
          <SystemStack layers={health.stack.layers} />
        </div>
      </Section>

      <Section ground="ink">
        <Reveal className="flex flex-col items-center text-center">
          <LedgerNumber target={health.benchmark.value} decimals={2} label={health.benchmark.label} onInk size="lg" />
          <p className="font-voice mt-8 max-w-2xl text-quote text-paper">{health.benchmark.caption}</p>
        </Reveal>
      </Section>

      <Section ground="paper">
        <Eyebrow>{health.extensions.eyebrow}</Eyebrow>
        <div className="mt-10 grid gap-px border border-g-30 bg-g-30 sm:grid-cols-2 lg:grid-cols-4">
          {health.extensions.items.map((item) => (
            <div key={item.name} className="invert-hover flex flex-col gap-3 bg-paper p-8">
              <p className="font-display text-[1.0625rem] font-semibold">{item.name}</p>
              <p className="font-text text-[0.875rem] text-g-70">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{health.guardrails.eyebrow}</Eyebrow>
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
          {health.guardrails.items.map((item) => (
            <li key={item} className="font-mono text-[0.8125rem] uppercase tracking-[0.06em] text-g-70">
              · {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="ink">
        <div className="flex flex-col items-start gap-6">
          <p className="font-display text-h2 font-bold text-paper">{health.bridge.body}</p>
          <Link href={health.bridge.href} className="link-draw font-mono text-[0.9375rem] text-paper">
            {health.bridge.cta}
          </Link>
        </div>
      </Section>

      <MedicalDisclaimer />
    </div>
  );
}
