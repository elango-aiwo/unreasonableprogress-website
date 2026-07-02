import type { MDXComponents } from "mdx/types";

/** Maps markdown elements in content/articles/*.mdx to the site's type voices — SPEC §4.2. */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: (props) => <p className="mt-6 font-text text-[0.9375rem] leading-relaxed text-g-90 measure" {...props} />,
    blockquote: (props) => (
      <blockquote className="font-voice mt-8 border-l-2 border-ink pl-8 text-quote text-ink measure" {...props} />
    ),
    strong: (props) => <strong className="font-semibold text-ink" {...props} />,
    ...components,
  };
}
