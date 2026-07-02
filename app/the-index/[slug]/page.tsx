import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/core/Section";
import { articles, getArticle } from "@/content/data/articles";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema-org";
import { ogMetadata } from "@/lib/og";

import WhyLongevity from "@/content/articles/why-longevity-is-a-wealth-strategy.mdx";
import Matrix100Article from "@/content/articles/the-100-matrix-explained.mdx";
import OwningTheComeback from "@/content/articles/owning-the-comeback.mdx";

const BODIES: Record<string, React.ComponentType> = {
  "why-longevity-is-a-wealth-strategy": WhyLongevity,
  "the-100-matrix-explained": Matrix100Article,
  "owning-the-comeback": OwningTheComeback,
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.abstract,
    ...ogMetadata(article.title, "THE INDEX"),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  const Body = BODIES[slug];
  if (!article || !Body) notFound();

  const index = articles.findIndex((a) => a.slug === slug);
  const prev = articles[index - 1];
  const next = articles[index + 1];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleJsonLd({ title: article.title, description: article.abstract, datePublished: article.date, slug: article.slug }),
            breadcrumbJsonLd([
              { name: "The Index & Letters", path: "/the-index" },
              { name: article.title, path: `/the-index/${article.slug}` },
            ]),
          ]),
        }}
      />

      <Section ground="paper">
        <Link href="/the-index" className="link-draw font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-50">
          ← The Index &amp; Letters
        </Link>
        <p className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-50">
          {article.date} · {article.readingTime}
        </p>
        <h1 className="mt-4 text-h1 font-display font-bold measure">{article.title}</h1>

        <article className="mt-4">
          <Body />
        </article>

        <nav className="hairline mt-16 flex justify-between pt-8 font-mono text-[0.8125rem] uppercase tracking-[0.06em]">
          {prev ? (
            <Link href={`/the-index/${prev.slug}`} className="link-draw">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/the-index/${next.slug}`} className="link-draw">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </Section>
    </div>
  );
}
