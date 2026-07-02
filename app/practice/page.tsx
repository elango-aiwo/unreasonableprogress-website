import type { Metadata } from "next";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Reveal } from "@/components/core/Reveal";
import { YearWheel } from "@/components/artifacts/YearWheel";
import { Scorecard } from "@/components/artifacts/Scorecard";
import { FaqAccordion } from "@/components/core/FaqAccordion";
import { practice } from "@/content/copy/practice";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: practice.meta.title,
  description: practice.meta.description,
  ...ogMetadata(practice.meta.title, "THE PRACTICE"),
};

export default function PracticePage() {
  return (
    <div>
      <Section ground="paper">
        <h1 className="text-hero font-display font-extrabold">{practice.hero.heading}</h1>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{practice.tiers.eyebrow}</Eyebrow>
        <div className="mt-8 grid gap-px border border-g-30 bg-g-30 md:grid-cols-3">
          {practice.tiers.items.map((tier) => (
            <Reveal key={tier.index} className="invert-hover flex flex-col gap-4 bg-paper p-8">
              <Eyebrow index={tier.index}>{tier.name}</Eyebrow>
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">{tier.duration}</p>
              <p className="font-text text-[0.9375rem] text-g-70">{tier.included}</p>
              <p className="font-text text-[0.875rem] italic text-g-50">Output: {tier.output}</p>
              {tier.cap ? (
                <p className="mt-auto font-mono text-[0.75rem] uppercase tracking-[0.1em] text-ink">{tier.cap}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
        <p className="mt-8 font-mono text-[0.8125rem] text-g-50">{practice.tiers.footer}</p>
      </Section>

      <Section ground="paper">
        <Eyebrow>{practice.rhythm.eyebrow}</Eyebrow>
        <div className="mt-10">
          <YearWheel items={practice.rhythm.items} />
        </div>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{practice.scorecard.eyebrow}</Eyebrow>
        <div className="mt-8">
          <Scorecard rows={practice.scorecard.rows} watermark={practice.scorecard.watermark} />
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow>{practice.selection.eyebrow}</Eyebrow>
        <ol className="mt-8 flex flex-col">
          {practice.selection.gates.map((gate, i) => (
            <li key={gate.name} className="hairline flex gap-6 py-5">
              <span className="font-mono text-[0.875rem] text-g-50">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="font-display font-semibold text-ink">{gate.name}</span>
                <span className="ml-2 font-text text-[0.9375rem] text-g-70">{gate.detail}</span>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="ink">
        <Eyebrow>{practice.capacity.eyebrow}</Eyebrow>
        <p className="mt-4 max-w-3xl font-mono text-[clamp(0.9375rem,1.6vw,1.25rem)] leading-relaxed text-paper">
          {practice.capacity.equation}
        </p>
      </Section>

      <Section ground="paper">
        <Eyebrow>{practice.faq.eyebrow}</Eyebrow>
        <div className="mt-8">
          <FaqAccordion items={practice.faq.items} />
        </div>
      </Section>
    </div>
  );
}
