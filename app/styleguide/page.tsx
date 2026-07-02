import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Rule } from "@/components/core/Rule";
import { LedgerNumber } from "@/components/core/LedgerNumber";
import { Prose } from "@/components/core/Prose";
import { CTA } from "@/components/core/CTA";
import { TickCircle } from "@/components/core/TickCircle";
import { Logo, LogoStacked, InfinityMark } from "@/components/brand/Logo";
import { Reveal } from "@/components/core/Reveal";
import { MedicalDisclaimer } from "@/components/compliance/MedicalDisclaimer";
import { FinancialDisclaimer } from "@/components/compliance/FinancialDisclaimer";
import { TargetRangeNote } from "@/components/compliance/TargetRangeNote";
import { PolicyRedlineLink } from "@/components/compliance/PolicyRedlineLink";

export const metadata = { title: "Styleguide", robots: { index: false } };

const swatches = [
  { name: "--paper", var: "var(--paper)", border: true },
  { name: "--paper-warm", var: "var(--paper-warm)", border: true },
  { name: "--ink", var: "var(--ink)" },
  { name: "--ink-soft", var: "var(--ink-soft)" },
  { name: "--g-90", var: "var(--g-90)" },
  { name: "--g-70", var: "var(--g-70)" },
  { name: "--g-50", var: "var(--g-50)" },
  { name: "--g-30", var: "var(--g-30)" },
  { name: "--g-15", var: "var(--g-15)" },
  { name: "--accent", var: "var(--accent)" },
  { name: "--accent-ink", var: "var(--accent-ink)" },
  { name: "--accent-soft", var: "var(--accent-soft)", border: true },
  { name: "--accent-on-ink", var: "var(--accent-on-ink)" },
  { name: "--state-error", var: "var(--state-error)" },
];

export default function StyleguidePage() {
  return (
    <div>
      <Section ground="paper">
        <Eyebrow>Dev route · not indexed</Eyebrow>
        <h1 className="mt-4 text-h1 font-display font-bold">Styleguide</h1>
        <Prose size="lg" className="mt-4">
          Every token and primitive from SPEC §4, plus the ratified accent-color deviation
          (docs/DECISIONS.md), rendered for visual review at each build phase.
        </Prose>
      </Section>

      <Section ground="paper">
        <Eyebrow index="00">Brand identity — the infinity mark</Eyebrow>
        <Prose size="lg" className="mt-4">
          The master mark is the infinity ∞ — one unbroken stroke, two lobes: the two assets
          a principal cannot delegate, compounding without end. It is the primary symbol
          everywhere (logo, favicon, avatar, loading mark, dividers). The two-curve mark below
          is now demoted to a thesis-only diagram.
        </Prose>

        <div className="mt-10 grid gap-px bg-g-30 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-3 bg-paper p-10">
            <Logo size={18} />
            <p className="font-mono text-[0.75rem] text-g-50">Logo — primary horizontal lockup</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-ink p-10">
            <Logo size={18} onInk />
            <p className="font-mono text-[0.75rem] text-g-inv-70">Logo onInk — full white</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-paper p-10">
            <LogoStacked size={40} />
            <p className="font-mono text-[0.75rem] text-g-50">LogoStacked — exact artwork layout</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 bg-ink p-10">
            <LogoStacked size={40} onInk />
            <p className="font-mono text-[0.75rem] text-g-inv-70">LogoStacked onInk</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <InfinityMark size={44} tone="black" />
            <p className="font-mono text-[0.75rem] text-g-50">Mark · full black</p>
          </div>
          <div className="flex flex-col items-center gap-3 bg-ink p-4">
            <InfinityMark size={44} tone="white" />
            <p className="font-mono text-[0.75rem] text-g-inv-70">Mark · full white</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <InfinityMark size={44} tone="gold" />
            <p className="font-mono text-[0.75rem] text-g-50">Mark · gold (accent use)</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink">Do</p>
            <ul className="mt-3 flex flex-col gap-2 text-[0.9375rem] text-g-70">
              <li>— Keep clear-space of one loop-height on all sides.</li>
              <li>— Wordmark stays lowercase Montserrat ExtraBold (the exact logo font).</li>
              <li>— Full black on light grounds, full white on dark.</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink">Don&apos;t</p>
            <ul className="mt-3 flex flex-col gap-2 text-[0.9375rem] text-g-70">
              <li>— Re-case, condense, or outline the wordmark.</li>
              <li>— Recolour the mark outside the system.</li>
              <li>— Stretch, rotate, or add effects to the ∞.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow index="01">Color</Eyebrow>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div
                className="aspect-square w-full"
                style={{ background: s.var, border: s.border ? "1px solid var(--g-30)" : "none" }}
              />
              <p className="font-mono text-[0.75rem] text-g-70">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow index="02">Typography — three voices</Eyebrow>
        <div className="mt-8 flex flex-col gap-8">
          <p className="font-display text-h1 font-bold">The Claim — Archivo</p>
          <p className="font-text text-body-lg">The Argument — Instrument Sans, for body and UI.</p>
          <p className="font-mono text-mono-base">
            THE MEASUREMENT — IBM PLEX MONO · 208 BIOMARKERS · 0.71
          </p>
          <p className="font-voice text-quote">
            &ldquo;The Founder — Newsreader italic, sparing, quotations only.&rdquo;
          </p>
        </div>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow index="03">Core primitives</Eyebrow>
        <Rule animate className="my-8" />
        <div className="grid gap-10 sm:grid-cols-3">
          <LedgerNumber target={208} label="Biomarkers · 16 systems" />
          <LedgerNumber target={0.71} decimals={2} label="Bio-years / calendar year" accent />
          <LedgerNumber value="≥70/100" label="Matrix score to proceed" />
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <CTA href="/apply" variant="solid">
            Request an invitation →
          </CTA>
          <CTA href="/thesis" variant="ghost">
            Read the thesis
          </CTA>
          <TickCircle total={12} filled={4} size={80} />
          <InfinityMark size={28} />
        </div>
      </Section>

      <Section ground="ink">
        <Eyebrow index="04">Ground inversion + reveal</Eyebrow>
        <Reveal>
          <p className="font-display text-h2 mt-6">This section is ink ground.</p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Immersion", "Annual Partnership", "Decade Compact"].map((label) => (
            <div key={label} className="invert-hover border border-g-30 p-6">
              <p className="font-mono text-[0.8125rem] uppercase tracking-[0.08em]">{label}</p>
              <p className="mt-2 text-g-70">Hover to see the signature ground-inversion.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section ground="paper">
        <Eyebrow index="05">Compliance components</Eyebrow>
        <Prose className="mt-4">
          Target range example: 5–15 years<TargetRangeNote /> · <PolicyRedlineLink />
        </Prose>
      </Section>
      <MedicalDisclaimer />
      <FinancialDisclaimer />
    </div>
  );
}
