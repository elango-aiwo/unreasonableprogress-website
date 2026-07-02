import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Rule } from "@/components/core/Rule";
import { LedgerNumber } from "@/components/core/LedgerNumber";
import { Prose } from "@/components/core/Prose";
import { CTA } from "@/components/core/CTA";
import { TickCircle } from "@/components/core/TickCircle";
import { Reveal } from "@/components/core/Reveal";
import { StrikeReveal } from "@/components/core/StrikeReveal";
import { DualCounter } from "@/components/hero/DualCounter";
import { EngineSplit } from "@/components/engines/EngineSplit";
import { home, homeMeta } from "@/content/copy/home";
import { seats } from "@/content/data/seats";

export const metadata: Metadata = {
  title: homeMeta.title,
  description: homeMeta.description,
};

export default function HomePage() {
  return (
    <div>
      {/* H1 — Hero: The Two Curves */}
      <Section ground="paper" noPad className="relative overflow-hidden pb-24 pt-20 md:pt-28">
        <div className="relative">
          <Eyebrow>{home.h1_hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-hero font-display font-extrabold">
            {home.h1_hero.display[0]}
            <br />
            {home.h1_hero.display[1]}
          </h1>
          <Prose size="lg" className="mt-8">
            {home.h1_hero.sub}
          </Prose>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <CTA href="/apply" variant="solid">
              {home.h1_hero.ctaPrimary}
            </CTA>
            <CTA href="/thesis" variant="ghost">
              {home.h1_hero.ctaSecondary}
            </CTA>
          </div>
          <div className="mt-16">
            <DualCounter />
            <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-g-50">
              {home.h1_hero.disclaimer}
            </p>
          </div>
        </div>
      </Section>

      {/* H2 — The Shaw epigraph */}
      <Section ground="ink">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-voice text-quote text-paper">&ldquo;{home.h2_epigraph.quote}&rdquo;</p>
          <p className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-g-inv-70">
            {home.h2_epigraph.attribution}
          </p>
        </Reveal>
      </Section>

      {/* H3 — The Insight */}
      <Section ground="paper">
        <Eyebrow>{home.h3_insight.eyebrow}</Eyebrow>
        <Reveal>
          <h2 className="mt-4 text-h2 font-display font-bold">{home.h3_insight.heading}</h2>
        </Reveal>
        <Prose size="lg" className="mt-6">
          {home.h3_insight.body}
        </Prose>

        <div className="mt-12">
          <StrikeReveal before={home.h3_insight.strikeBefore} after={home.h3_insight.strikeAfter} />
        </div>

        <Rule animate className="my-12" />

        <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
          <div>
            <p className="font-mono text-[clamp(1.5rem,3vw,2.25rem)] text-ink">{home.h3_insight.ledger.value}</p>
          </div>
          <p className="font-display text-h2 font-extrabold text-accent-ink">{home.h3_insight.ledger.result}</p>
          <p className="eyebrow">{home.h3_insight.ledger.note}</p>
        </div>
      </Section>

      {/* H4 — Two Engines */}
      <Section ground="paper" noPad className="section-pad">
        <div className="container-outer">
          <Reveal>
            <EngineSplit />
          </Reveal>
          <p className="mt-8 text-center font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-g-50">
            {home.h4_engines.footer}
          </p>
        </div>
      </Section>

      {/* H5 — The Founder strip */}
      <Section ground="ink">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal className="relative aspect-[4/5] w-full overflow-hidden bg-ink-soft">
            <Image
              src="/founder/siva-portrait.png"
              alt="C. Sivasankaran — founder and sole principal"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top grayscale"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-h2 font-display font-bold text-paper">{home.h5_founder.heading}</h2>
            <p className="mt-8 font-mono text-[0.8125rem] leading-relaxed text-g-inv-70">
              {home.h5_founder.timeline.join(" → ")}
            </p>
            <a href="/founder" className="link-draw mt-8 inline-block font-mono text-[0.9375rem] text-paper">
              {home.h5_founder.link}
            </a>
          </Reveal>
        </div>
      </Section>

      {/* H6 — Proof / The Benchmark */}
      <Section ground="paper">
        <Eyebrow>{home.h6_proof.eyebrow}</Eyebrow>
        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {home.h6_proof.stats.map((stat) => (
            <LedgerNumber
              key={stat.label}
              target={"target" in stat ? stat.target : undefined}
              value={"value" in stat ? stat.value : undefined}
              decimals={"decimals" in stat ? stat.decimals : undefined}
              accent={"accent" in stat ? stat.accent : undefined}
              label={stat.label}
              size="md"
            />
          ))}
        </div>
        <a href="/practice" className="link-draw mt-10 inline-block font-mono text-[0.9375rem] text-ink">
          {home.h6_proof.cta}
        </a>
      </Section>

      {/* H7 — The Ladder */}
      <Section ground="paper-warm">
        <div className="grid gap-6 md:grid-cols-3">
          {home.h7_ladder.tiers.map((tier) => (
            <Reveal key={tier.index} as="div" className="invert-hover flex flex-col gap-4 border border-g-30 bg-paper p-8">
              <Eyebrow index={tier.index}>{tier.name}</Eyebrow>
              <p className="font-text text-[0.9375rem] text-g-70">{tier.body}</p>
              {tier.badge ? (
                <p className="mt-auto font-mono text-[0.75rem] uppercase tracking-[0.1em] text-g-50">{tier.badge}</p>
              ) : null}
            </Reveal>
          ))}
        </div>
        <p className="mt-10 font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-g-50">
          {home.h7_ladder.footer}
        </p>
      </Section>

      {/* H8 — The Voice */}
      <Section ground="ink">
        <Reveal className="mx-auto max-w-3xl">
          <p className="font-voice text-quote text-paper">&ldquo;{home.h8_voice.pitch}&rdquo;</p>
          <p className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.14em] text-g-inv-70">
            {home.h8_voice.attribution}
          </p>
        </Reveal>
      </Section>

      {/* H9 — The Gate */}
      <Section ground="ink">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <h2 className="text-hero font-display font-extrabold text-paper">{home.h9_gate.heading}</h2>
            <Prose className="mt-6 text-g-inv-70">{home.h9_gate.body}</Prose>
            <CTA href="/apply" variant="solid-on-ink" className="mt-10">
              {home.h9_gate.cta}
            </CTA>
            <p className="mt-6 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-g-inv-70">
              {home.h9_gate.micro}
            </p>
          </Reveal>
          <TickCircle
            total={seats.annualPartnership.total}
            filled={seats.annualPartnership.filled}
            onInk
            size={180}
            className="justify-self-center"
          />
        </div>
      </Section>
    </div>
  );
}
