import type { Metadata } from "next";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Prose } from "@/components/core/Prose";
import { CTA } from "@/components/core/CTA";
import { Reveal } from "@/components/core/Reveal";
import { FounderArc } from "@/components/founder/FounderArc";
import { founder } from "@/content/copy/founder";
import { ogMetadata } from "@/lib/og";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: founder.meta.title,
  description: founder.meta.description,
  ...ogMetadata(founder.meta.title, "THE FOUNDER"),
};

export default function FounderPage() {
  return (
    <div>
      <Section ground="ink" noPad className="section-pad">
        <div className="container-outer">
          <div className="aspect-[16/10] w-full bg-ink-soft">
            <FounderArc />
          </div>
          <h1 className="mt-10 text-hero font-display font-extrabold uppercase leading-[0.98] text-paper">
            {founder.hero.overlay}
          </h1>
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow>{founder.timeline.eyebrow}</Eyebrow>
        <ol className="mt-8 flex flex-col">
          {founder.timeline.items.map((item) => (
            <li
              key={item.year}
              className={cn(
                "hairline flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-8",
                item.emphasis && "bg-paper-warm px-4 -mx-4"
              )}
            >
              <span className="w-full shrink-0 font-mono text-[0.9375rem] uppercase tracking-[0.04em] text-ink sm:w-56">
                {item.year}
              </span>
              <span className="font-text text-[0.9375rem] text-g-70">{item.event}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="ink">
        <Reveal className="measure">
          <p className="font-voice text-quote text-paper">&ldquo;{founder.hardParts.quote}&rdquo;</p>
          <p className="mt-8 font-text text-[0.9375rem] text-g-inv-70">{founder.hardParts.body}</p>
        </Reveal>
      </Section>

      <Section ground="paper">
        <Eyebrow>{founder.whyOnly.eyebrow}</Eyebrow>
        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          {founder.whyOnly.items.map((item) => (
            <div key={item.name}>
              <p className="font-display text-[1.125rem] font-semibold text-ink">{item.name}</p>
              <Prose className="mt-3">{item.body}</Prose>
            </div>
          ))}
        </div>
      </Section>

      <Section ground="paper-warm">
        <div className="flex flex-col gap-8">
          {founder.creed.lines.map((line) => (
            <p key={line} className="font-voice text-quote text-ink">
              &ldquo;{line}&rdquo;
            </p>
          ))}
        </div>
      </Section>

      <Section ground="ink">
        <div className="flex flex-col items-start gap-6">
          <p className="font-display text-h2 font-bold text-paper">
            Every request is read personally. Not all requests receive an invitation.
          </p>
          <CTA href="/apply" variant="solid-on-ink">
            Request an invitation →
          </CTA>
        </div>
      </Section>
    </div>
  );
}
