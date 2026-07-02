/** SPEC §8.5 — sitewide JSON-LD. */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Unreasonable Progress",
  url: "https://unreasonableprogress.com",
  description:
    "An invitation-only advisory practice led exclusively by C. Sivasankaran, compounding a principal's biological age reversal and wealth trajectory on one scorecard.",
  founder: { "@type": "Person", name: "C. Sivasankaran" },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "C. Sivasankaran",
  jobTitle: "Founder & Sole Principal",
  worksFor: { "@type": "Organization", name: "Unreasonable Progress" },
};

export function definedTermJsonLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name,
    description,
  };
}

export function faqPageJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://unreasonableprogress.com${item.path}`,
    })),
  };
}

export function articleJsonLd(input: { title: string; description: string; datePublished: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    url: `https://unreasonableprogress.com/index/${input.slug}`,
  };
}
