import type { Metadata } from "next";

/**
 * Per-page OG/Twitter metadata pointing at the dynamic /og template — SPEC §8.5.
 * Gives every page its own share card (title + section eyebrow) instead of
 * falling back to the root layout's generic image.
 */
export function ogMetadata(title: string, eyebrow: string): Pick<Metadata, "openGraph" | "twitter"> {
  const url = `/og?title=${encodeURIComponent(title)}&eyebrow=${encodeURIComponent(eyebrow)}`;
  return {
    openGraph: {
      type: "website",
      siteName: "Unreasonable Progress",
      title,
      images: [{ url, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: [url] },
  };
}
