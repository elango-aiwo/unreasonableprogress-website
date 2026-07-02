import type { MetadataRoute } from "next";
import { articles } from "@/content/data/articles";

export const dynamic = "force-static";

const BASE_URL = "https://unreasonableprogress.ai";

const staticRoutes = [
  "",
  "/thesis",
  "/health",
  "/wealth",
  "/founder",
  "/practice",
  "/circle",
  "/the-index",
  "/charter",
  "/legal/privacy",
  "/legal/disclaimers",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : route.startsWith("/legal") ? 0.3 : 0.8,
    })),
    ...articles.map((article) => ({
      url: `${BASE_URL}/the-index/${article.slug}`,
      lastModified: article.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
