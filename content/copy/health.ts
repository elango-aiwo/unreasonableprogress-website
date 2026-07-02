/** HEALTH `/health` — Engine One — SPEC §6.3. */

export const health = {
  meta: {
    title: "Health — Engine One",
    description:
      "The body is the balance sheet. JoySpan / AIWO at principal grade: 208 biomarkers, the SIIS Framework, and the 0.71 benchmark.",
  },

  hero: {
    heading: "The body is the balance sheet.",
    sub: "Reverse biological age by a target range of 5–15 years — clinician-governed, measured every quarter.",
  },

  loop: {
    eyebrow: "The SIIS Framework",
    stations: [
      { code: "S", name: "Signals", body: "Measure before symptoms appear." },
      { code: "I", name: "Interpretations", body: "Understand what the data means." },
      { code: "I", name: "Interventions", body: "Act on what matters." },
      { code: "S", name: "Systems", body: "Sustain gains, optimize forever." },
    ],
    cadence: "ONE FLAGSHIP 208-MARKER DRAW + THREE QUARTERLY RETESTS / YEAR",
  },

  stack: {
    eyebrow: "The System Stack",
    layers: [
      { layer: "Why / outcome", component: "JoySpan™", sees: "A single JoySpan Score + organ ages, tracked year over year" },
      { layer: "How you live", component: "LongeVis Matrix — 11+1 pillars", sees: "One prioritised, livable plan" },
      { layer: "What we measure", component: "BioMAP — 208 biomarkers, 16 systems", sees: "7 panels → organ ages → one plan" },
      { layer: "90-day method", component: "SIIS Framework — Signals · Interpretations · Interventions · Systems", sees: "Quarterly visible progress" },
      { layer: "Daily wrapper", component: "LifeOS app + concierge physicians", sees: "Nudges, masterclasses, readiness" },
      { layer: "Immersion", component: "AIWO Retreats / 7-day Healthcation", sees: "The reset weeks" },
    ],
  },

  benchmark: {
    value: 0.71,
    label: "Bio-years aged per calendar year — flagship client",
    caption:
      "Siva's flagship client ages 0.71 biological years per calendar year. The founder has publicly staked a diamond on beating it.",
  },

  extensions: {
    eyebrow: "Principal-Grade Extensions",
    items: [
      { name: "Family coverage", body: "Spouse + successor included in every Annual Partnership." },
      { name: "Global escort protocol", body: "Draws, imaging and specialist reviews arranged wherever the client is." },
      { name: "Key-Person Vitality Letter", body: "An annual, privacy-controlled report the client may share with his board or insurers — key-person risk is a balance-sheet item." },
      { name: "The Joy Protocol", body: "A quarterly structured audit of purpose, relationships, adventure and contribution." },
    ],
  },

  guardrails: {
    eyebrow: "Guardrails",
    items: [
      "Physician-governed",
      "Single-channel data",
      "Consent before every draw",
      "No outcome guarantees — trajectory proof",
    ],
  },

  bridge: {
    body: "A longer life is the holding period.",
    cta: "Engine Two →",
    href: "/wealth",
  },
} as const;
