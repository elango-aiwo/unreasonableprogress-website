import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Rule } from "@/components/core/Rule";
import { Prose } from "@/components/core/Prose";
import { Reveal } from "@/components/core/Reveal";
import { FinancialDisclaimer } from "@/components/compliance/FinancialDisclaimer";
import { TargetRangeNote } from "@/components/compliance/TargetRangeNote";
import { thesis } from "@/content/copy/thesis";
import { definedTermJsonLd } from "@/lib/schema-org";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: thesis.meta.title,
  description: thesis.meta.description,
  ...ogMetadata(thesis.meta.title, "THE THESIS"),
};

export default function ThesisPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(definedTermJsonLd("Principal Compounding", thesis.definition.body)),
        }}
      />

      <Section ground="paper">
        <Eyebrow>{thesis.hero.eyebrow}</Eyebrow>
        <h1 className="mt-4 text-hero font-display font-extrabold">{thesis.hero.heading}</h1>
        <dfn className="mt-10 block max-w-3xl border-l-2 border-ink pl-8 not-italic">
          <p className="font-text text-body-lg text-g-90">
            <strong className="font-display font-bold">{thesis.definition.term}</strong> (n.) — {thesis.definition.body}
          </p>
        </dfn>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{thesis.failures.eyebrow}</Eyebrow>
        <div className="mt-8 grid border border-g-30 sm:grid-cols-2">
          {thesis.failures.items.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 60}
              className="border-b border-g-30 p-8 sm:border-r sm:[&:nth-child(2n)]:border-r-0"
            >
              <p className="font-text text-[0.9375rem] text-g-70">{item}</p>
            </Reveal>
          ))}
          <Reveal delay={180} className="ink-ground p-8">
            <p className="font-display text-h3 font-bold text-paper">{thesis.failures.inversion}</p>
          </Reveal>
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow>{thesis.math.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-h2 font-display font-bold">{thesis.math.heading}</h2>
        <Prose size="lg" className="mt-6">
          {thesis.math.body}
        </Prose>
        <Rule animate className="my-12" />
        <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
          <p className="font-mono text-[clamp(1.5rem,3vw,2.25rem)] text-ink">{thesis.math.ledger.value}</p>
          <p className="font-display text-h2 font-extrabold text-accent-ink">{thesis.math.ledger.result}</p>
          <p className="eyebrow">{thesis.math.ledger.note}</p>
        </div>
      </Section>

      <Section ground="ink">
        <Reveal>
          <p className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-medium leading-tight text-paper measure">
            {thesis.positioning.statement}
            <TargetRangeNote />
          </p>
        </Reveal>
      </Section>

      <Section ground="paper">
        <Eyebrow>{thesis.whitespace.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-h2 font-display font-bold">{thesis.whitespace.heading}</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-mono text-[0.875rem]">
            <thead>
              <tr className="hairline">
                <th scope="col" className="py-3 text-left font-medium text-g-50">
                  Player
                </th>
                <th scope="col" className="py-3 text-left font-medium text-g-50">
                  Ceiling
                </th>
                <th scope="col" className="py-3 text-left font-medium text-g-50">
                  What&rsquo;s missing
                </th>
              </tr>
            </thead>
            <tbody>
              {thesis.whitespace.rows.map((row) => (
                <tr key={row.player} className="hairline">
                  <td className="py-3 pr-6 text-g-90">{row.player}</td>
                  <td className="py-3 pr-6 text-g-90">{row.ceiling}</td>
                  <td className="py-3 text-g-90">{row.missing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-mono text-[0.75rem] text-g-50">{thesis.whitespace.source}</p>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>{thesis.lessons.eyebrow}</Eyebrow>
        <ol className="mt-8 flex flex-col">
          {thesis.lessons.items.map((item, i) => (
            <li key={item} className="hairline flex gap-6 py-5">
              <span className="font-mono text-[0.875rem] text-g-50">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-text text-[0.9375rem] text-g-90">{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="ink">
        <Reveal className="flex flex-col items-start gap-6">
          <p className="font-display text-h2 font-bold text-paper">{thesis.close.body}</p>
          <Link href="/practice" className="link-draw font-mono text-[0.9375rem] text-paper">
            {thesis.close.cta}
          </Link>
        </Reveal>
      </Section>

      <FinancialDisclaimer />
    </div>
  );
}
