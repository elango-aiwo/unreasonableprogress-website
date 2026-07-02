import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/core/Section";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Reveal } from "@/components/core/Reveal";
import { articles } from "@/content/data/articles";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: "The Index & Letters",
  description: "The Unreasonable Progress Index — evidence, published. Letters and doctrine notes from the founder.",
  ...ogMetadata("The Index & Letters", "THE INDEX"),
};

export default function IndexHubPage() {
  return (
    <div>
      <Section ground="paper">
        <Eyebrow>Evidence, Published</Eyebrow>
        <h1 className="mt-4 text-hero font-display font-extrabold">The Index &amp; Letters</h1>
        <p className="mt-6 max-w-2xl font-text text-body-lg text-g-70">
          The Unreasonable Progress Index is the annual, anonymised report on the health-wealth
          compounding of the cohort. First edition to be published as the founding cohort matures.
          The Index is published here — no newsletter, no gate.
        </p>
      </Section>

      <Section ground="paper-warm">
        <Eyebrow>Letters &amp; Doctrine Notes</Eyebrow>
        <div className="mt-10 grid gap-px border border-g-30 bg-g-30 md:grid-cols-3">
          {articles.map((article) => (
            <Reveal key={article.slug} className="invert-hover flex flex-col gap-4 bg-paper p-8">
              <Link href={`/index/${article.slug}`} className="flex flex-1 flex-col gap-4">
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
                  {article.date} · {article.readingTime}
                </p>
                <p className="font-display text-[1.125rem] font-semibold">{article.title}</p>
                <p className="font-text text-[0.875rem] text-g-70">{article.abstract}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
