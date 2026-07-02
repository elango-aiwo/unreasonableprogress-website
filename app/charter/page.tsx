import type { Metadata } from "next";
import { Section } from "@/components/core/Section";
import { charter } from "@/content/copy/charter";
import { ogMetadata } from "@/lib/og";

export const metadata: Metadata = {
  title: charter.meta.title,
  description: charter.meta.description,
  ...ogMetadata(charter.meta.title, "THE CHARTER"),
};

export default function CharterPage() {
  return (
    <div>
      <Section ground="paper">
        <h1 className="text-hero font-display font-extrabold">{charter.hero.heading}</h1>
      </Section>

      {charter.sections.map((section) => (
        <Section key={section.name} ground="paper-warm">
          <h2 className="font-mono text-[0.9375rem] uppercase tracking-[0.08em] text-ink">{section.name}</h2>
          <ul className="mt-6 flex flex-col">
            {section.rules.map((rule) => (
              <li key={rule} className="hairline py-4 font-text text-[0.9375rem] text-g-90">
                {rule}
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section ground="ink">
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">
          {charter.signature.text}
        </p>
        <p className="mt-8 font-text text-[0.9375rem] text-paper">
          {charter.concern.body}:{" "}
          <a href={`mailto:${charter.concern.email}`} className="link-draw">
            {charter.concern.email}
          </a>
        </p>
      </Section>
    </div>
  );
}
