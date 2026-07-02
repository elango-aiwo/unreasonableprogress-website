import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// STATIC_EXPORT=1 produces a fully static site in out/ (see scripts/build-static.mjs).
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  ...(isStaticExport
    ? { output: "export" as const, images: { unoptimized: true } }
    : { images: { formats: ["image/avif" as const, "image/webp" as const] } }),
  turbopack: {
    root: process.cwd(),
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
