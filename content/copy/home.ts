/**
 * HOME `/` — "The Claim" — SPEC §6.1 and §13 (Copy Bank), verbatim/ratified.
 * All body copy for v1 lives in typed dictionaries per SPEC §8.3 — never hardcoded in JSX.
 */

export const home = {
  h1_hero: {
    eyebrow: "A private advisory practice · Twelve clients · Led exclusively by C. Sivasankaran",
    display: ["Add decades.", "Multiply everything."],
    sub: "Unreasonable Progress compounds the two assets a principal cannot delegate: his biology and his judgment-driven wealth — measured, on one scorecard, year over year.",
    ctaPrimary: "Request an invitation →",
    ctaSecondary: "Read the thesis",
    disclaimer: "Illustrative trajectory — target ranges, see methodology",
  },

  h2_epigraph: {
    quote:
      "The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
    attribution: "GEORGE BERNARD SHAW, 1903",
  },

  h3_insight: {
    eyebrow: "The Insight",
    heading: "Longevity is a wealth strategy.",
    body: "Wealth compounds with time. Judgment compounds with time. The only non-renewable input is the principal's healthy time.",
    ledger: { value: "15 YEARS × 20% COMPOUNDING", result: "= 15x", note: "BEFORE A SINGLE DEAL IS DONE" },
    strikeBefore: "Health is a perk.",
    strikeAfter: "Health is the holding period.",
  },

  h4_engines: {
    health: {
      label: "Engine One — Health",
      body: "Reverse biological age by a target range of 5–15 years. 208 biomarkers. The SIIS Framework: Signals → Interpretations → Interventions → Systems.",
      system: "SYSTEM: JOYSPAN™ / AIWO",
      href: "/health",
    },
    wealth: {
      label: "Engine Two — Wealth",
      body: "Engineer a 10x–100x decade trajectory. Six pillars. One Deal Council.",
      system: "SYSTEM: THE SIVA DOCTRINE™",
      href: "/wealth",
    },
    footer: "Sold together. Never unbundled.",
  },

  h5_founder: {
    heading: "The only advisor who has made a billion, lost it, remade himself — and measured it in blood.",
    timeline: [
      "STERLING",
      "DISHNET",
      "AIRCEL $1B+ EXIT",
      "INSOLVENCY",
      "SUPREME COURT",
      "AIWO",
      "BIOLOGICAL AGE REVERSED",
    ],
    link: "The full story, including the hard parts →",
  },

  h6_proof: {
    eyebrow: "Evidence, not adjectives",
    stats: [
      { target: 0.71, decimals: 2, label: "Biological years aged per calendar year — flagship client", accent: true },
      { target: 208, label: "Biomarkers · 16 systems" },
      { target: 12, label: "Clients. Maximum. Published." },
      { value: "≥70/100", label: "Matrix score to proceed" },
    ],
    cta: "View the measurement system →",
  },

  h7_ladder: {
    tiers: [
      {
        index: "01",
        name: "The Unreasonable Immersion",
        body: "7–10 days. 208-marker BioMAP. The Wealth X-Ray. One private day with Siva. Output: your Decade Map.",
        badge: null,
      },
      {
        index: "02",
        name: "The Annual Partnership",
        body: "Twelve months. Principal + spouse + successor. Quarterly sessions. Deal Council. The Circle.",
        badge: "CAP: 12 CLIENTS",
      },
      {
        index: "03",
        name: "The Decade Compact",
        body: "Ten years. Aligned success economics. Succession architecture.",
        badge: "CAP: 5 FAMILIES",
      },
    ],
    footer: "Fees are disclosed upon qualification.",
  },

  h8_voice: {
    pitch:
      "I built and sold Aircel. I have done a hundred deals, lost everything once, and rebuilt. Then I learned the hardest lesson: a dead billionaire compounds nothing. So I reversed my own biological age, and built AIWO to prove it in blood, not in brochures. Now I take twelve clients — no more. I will add healthy decades to your life and multiply your family's wealth ten to a hundred times across those decades, and we will measure both, every quarter, on one page. If you want a consultant, hire McKinsey. If you want unreasonable progress, there is one seat left.",
    attribution: "C. SIVASANKARAN — FOUNDER & SOLE PRINCIPAL",
  },

  h9_gate: {
    heading: "Twelve seats. No exceptions.",
    body: "Every client is accepted personally by the founder — after verification, chemistry, and commitment.",
    cta: "Request an invitation →",
    micro: "Typical response: within 14 days. Not all requests receive one.",
  },
} as const;

export const homeMeta = {
  title: "Unreasonable Progress — Add decades. Multiply everything.",
  description:
    "An invitation-only advisory practice led exclusively by C. Sivasankaran. Two engines — biological-age reversal and 10x–100x wealth architecture — measured on one scorecard. Twelve clients, no exceptions.",
} as const;
