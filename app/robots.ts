import type { MetadataRoute } from "next";

/** SPEC §8.5 — allow all; /apply is noindex via its own page metadata, not disallowed here. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://unreasonableprogress.com/sitemap.xml",
  };
}
