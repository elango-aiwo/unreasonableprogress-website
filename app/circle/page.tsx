import type { Metadata } from "next";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { CTA } from "@/components/core/CTA";
import { Reveal } from "@/components/core/Reveal";
import { TickCircle } from "@/components/core/TickCircle";
import { circle } from "@/content/copy/circle";
import { seats } from "@/content/data/seats";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: circle.meta.title,
  description: circle.meta.description,
  ...ogMetadata(circle.meta.title, "THE CIRCLE"),
};

export default function CirclePage() {
  return (
    <div>
      <Section ground="ink">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <TickCircle total={seats.circleSummit.total} filled={seats.circleSummit.filled} onInk size={160} />
          <div>
            <h1 className="text-hero font-display font-extrabold text-paper">{circle.hero.heading}</h1>
            <p className="font-voice mt-6 text-quote text-g-inv-70">{circle.hero.proverb}</p>
          </div>
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow>{circle.what.eyebrow}</Eyebrow>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {circle.what.items.map((item) => (
            <Reveal key={item.name}>
              <p className="font-display text-[1.125rem] font-semibold text-ink">{item.name}</p>
              <p className="mt-3 font-text text-[0.9375rem] text-g-70">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{circle.confidentiality.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-h2 font-display font-bold">{circle.confidentiality.heading}</h2>
        <ul className="mt-8 flex flex-col">
          {circle.confidentiality.rules.map((rule) => (
            <li key={rule} className="hairline py-4 font-mono text-[0.9375rem] text-g-90">
              {rule}
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="paper">
        <Eyebrow>{circle.summit.eyebrow}</Eyebrow>
        <p className="mt-4 font-mono text-[1.0625rem] text-ink">{circle.summit.detail}</p>
        <p className="mt-2 font-mono text-[0.8125rem] text-g-50">{circle.summit.dates}</p>
      </Section>

      <Section ground="ink">
        <CTA href="/apply" variant="solid-on-ink">
          Request an invitation →
        </CTA>
      </Section>
    </div>
  );
}
