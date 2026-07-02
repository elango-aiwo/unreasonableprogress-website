import type { Metadata, Viewport } from "next";
import { archivo, instrumentSans, plexMono, newsreader, montserrat } from "@/lib/fonts";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";
import { organizationJsonLd, personJsonLd } from "@/lib/schema-org";
import "@/styles/tokens.css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://unreasonableprogress.com"),
  title: {
    default: "Unreasonable Progress — Add decades. Multiply everything.",
    template: "%s — Unreasonable Progress",
  },
  description:
    "An invitation-only advisory practice led exclusively by C. Sivasankaran. Two engines — biological-age reversal and 10x–100x wealth architecture — measured on one scorecard. Twelve clients, no exceptions.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Unreasonable Progress",
    images: [{ url: "/og?title=Add%20decades.%20Multiply%20everything." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og?title=Add%20decades.%20Multiply%20everything."],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrumentSans.variable} ${plexMono.variable} ${newsreader.variable} ${montserrat.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationJsonLd, personJsonLd]) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
