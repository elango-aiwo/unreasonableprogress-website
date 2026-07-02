import { Archivo, Instrument_Sans, IBM_Plex_Mono, Newsreader, Montserrat } from "next/font/google";

/**
 * The three-voice type system — SPEC §4.2. Loaded via next/font/google, which self-hosts
 * and subsets automatically at build time (no runtime Google requests, no manual font files).
 */

export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

/**
 * The exact logo typeface — Montserrat ExtraBold (800), identified from the master
 * brand artwork (FICPYN+Montserrat-ExtraBold). Used ONLY for the wordmark logotype
 * so the logo reproduces the artwork exactly; the rest of the site keeps Archivo.
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-montserrat",
  display: "swap",
});
