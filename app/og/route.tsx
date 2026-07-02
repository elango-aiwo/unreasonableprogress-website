import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { INFINITY_PATH, INFINITY_VIEWBOX } from "@/components/brand/infinityPath";

export const runtime = "edge";

/** Dynamic OG images — SPEC §8.5: mono template, Archivo headline on ink. */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Add decades. Multiply everything.";
  const eyebrow = searchParams.get("eyebrow") ?? "UNREASONABLE PROGRESS";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="94" height="44" viewBox={INFINITY_VIEWBOX} fill="#FFFFFF">
            <path d={INFINITY_PATH} />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8A8A8A",
              fontFamily: "monospace",
            }}
          >
            {eyebrow}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#FFFFFF",
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#B8863A", fontFamily: "monospace" }}>
          UNREASONABLEPROGRESS.COM
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
