import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Prose } from "@/components/core/Prose";
import { FinancialDisclaimer } from "@/components/compliance/FinancialDisclaimer";
import { TargetRangeNote } from "@/components/compliance/TargetRangeNote";
import { InfinityMark } from "@/components/brand/InfinityMark";
import { PillarLedger } from "@/components/engines/PillarLedger";
import { Matrix100 } from "@/components/artifacts/Matrix100";
import { wealth } from "@/content/copy/wealth";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: wealth.meta.title,
  description: wealth.meta.description,
  ...ogMetadata(wealth.meta.title, "ENGINE TWO — WEALTH"),
};

export default function WealthPage() {
  return (
    <div>
      <Section ground="ink">
        <InfinityMark size={18} className="mb-8 text-accent-on-ink" />
        <h1 className="text-hero font-display font-extrabold text-paper">{wealth.hero.heading}</h1>
        <Prose size="lg" className="mt-6 text-g-inv-70">
          {wealth.hero.sub}
          <TargetRangeNote />
        </Prose>
        <p className="mt-6 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">
          {wealth.hero.mono}
        </p>
      </Section>

      <Section ground="paper">
        <Eyebrow>{wealth.pillars.eyebrow}</Eyebrow>
        <div className="mt-8">
          <PillarLedger pillars={wealth.pillars.items} />
        </div>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{wealth.formula.eyebrow}</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[0.9375rem] uppercase tracking-[0.06em] text-g-70">
          {wealth.formula.strip.map((word, i) => (
            <span key={word}>
              {word}
              {i < wealth.formula.strip.length - 1 ? <span className="text-g-30"> · </span> : null}
            </span>
          ))}
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow>{wealth.matrix.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-h2 font-display font-bold">{wealth.matrix.heading}</h2>
        <div className="mt-10">
          <Matrix100 criteria={wealth.matrix.criteria} legend={wealth.matrix.legend} />
        </div>
      </Section>

      <FinancialDisclaimer />

      <Section ground="ink">
        <div className="flex flex-col items-start gap-6">
          <p className="font-display text-h2 font-bold text-paper">{wealth.bridge.body}</p>
          <Link href={wealth.bridge.href} className="link-draw font-mono text-[0.9375rem] text-paper">
            {wealth.bridge.cta}
          </Link>
        </div>
      </Section>
    </div>
  );
}
