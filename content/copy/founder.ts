/** FOUNDER `/founder` — the owned narrative — SPEC §6.5. */

export const founder = {
  meta: {
    title: "C. Sivasankaran — Founder",
    description:
      "Made a billion. Lost it. Remade himself. Measured it in blood. The owned narrative of C. Sivasankaran, founder and sole principal of Unreasonable Progress.",
  },

  hero: {
    overlay: "Made a billion. Lost it. Remade himself. Measured it in blood.",
  },

  timeline: {
    eyebrow: "The Ledger of a Life",
    items: [
      { year: "Sterling", event: "Founded and built.", emphasis: false },
      { year: "Dishnet", event: "Price-disruption entry.", emphasis: false },
      { year: "Aircel", event: "Built and sold in a $1B+ exit.", emphasis: false },
      { year: "Barista → Lavazza", event: "Entry, build, exit.", emphasis: false },
      { year: "The Fall", event: "Bankruptcy, IBC proceedings, a Supreme Court landmark.", emphasis: true },
      { year: "AIWO", event: "Founded — the comeback, systemised.", emphasis: false },
      { year: "Today", event: "Own biological age reversed. The diamond stake, publicly made.", emphasis: false },
    ],
  },

  hardParts: {
    quote: "I have made billions, lost billions, and rebuilt. Your consultants have read about cycles; I have survived them.",
    body: "Every client's office will run its checks. We provide a full disclosure pack at qualification. Ask us the hard questions first.",
  },

  whyOnly: {
    eyebrow: "Why Only Siva",
    items: [
      { name: "Deals lived", body: "Not advised — lived, across four decades and multiple cycles." },
      { name: "Distress survived", body: "The W6 scar tissue no consulting firm can hire." },
      { name: "Biology reversed", body: "The only advisor measured in blood, not brochures." },
    ],
  },

  creed: {
    lines: [
      "You cannot treat what you don't test.",
      "A dead billionaire compounds nothing.",
      "10x, not 10%.",
    ],
  },
} as const;
