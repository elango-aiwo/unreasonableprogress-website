/** Manifest for the 3 seed Index articles — SPEC §6.8. Body content lives in content/articles/*.mdx. */
export const articles = [
  {
    slug: "why-longevity-is-a-wealth-strategy",
    title: "Why longevity is a wealth strategy",
    date: "2026-07-01",
    abstract: "Wealth compounds with time. Judgment compounds with time. The only non-renewable input is the principal's healthy time.",
    readingTime: "4 min",
  },
  {
    slug: "the-100-matrix-explained",
    title: "The /100 Matrix, explained",
    date: "2026-07-01",
    abstract: "Ten questions, scored on every prospective client and every material transaction. We decline more than we accept.",
    readingTime: "5 min",
  },
  {
    slug: "owning-the-comeback",
    title: "Owning the comeback: a note on diligence",
    date: "2026-07-01",
    abstract: "Every billionaire will run diligence in week one. Here is why we put the fall in the same ink as the victories.",
    readingTime: "3 min",
  },
] as const;

export type Article = (typeof articles)[number];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
