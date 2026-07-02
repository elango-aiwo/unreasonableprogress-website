import { Section } from "@/components/core/Section";

interface LegalSection {
  id?: string;
  name: string;
  body: string;
}

/** Shared template for /legal/* — SPEC §6.11: plain-language, same design system as the brand. */
export function LegalPage({ heading, sections }: { heading: string; sections: readonly LegalSection[] }) {
  return (
    <div>
      <Section ground="paper">
        <h1 className="text-h1 font-display font-bold">{heading}</h1>
      </Section>
      <Section ground="paper" noPad className="pb-24">
        <div className="container-outer flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.name} id={section.id} className="hairline pt-10 scroll-mt-24">
              <h2 className="font-display text-h3 font-semibold text-ink">{section.name}</h2>
              <p className="mt-4 max-w-2xl font-text text-[0.9375rem] leading-relaxed text-g-70">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
