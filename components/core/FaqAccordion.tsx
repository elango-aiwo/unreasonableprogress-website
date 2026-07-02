import { faqPageJsonLd } from "@/lib/schema-org";

interface FaqItem {
  question: string;
  answer: string;
}

/** SPEC §6.6/§8.5 — accordion with FAQPage JSON-LD, self-contained/quotable answers (AEO). */
export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(items)) }} />
      {items.map((item) => (
        <details key={item.question} className="hairline py-6">
          <summary className="cursor-pointer list-none font-display text-[1.0625rem] font-semibold text-ink">
            {item.question}
          </summary>
          <p className="mt-4 max-w-2xl font-text text-[0.9375rem] text-g-70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
