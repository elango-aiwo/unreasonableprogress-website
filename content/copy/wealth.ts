/** WEALTH `/wealth` — Engine Two: The Siva Doctrine™ — SPEC §6.4. */

export const wealth = {
  meta: {
    title: "Wealth — Engine Two: The Siva Doctrine",
    description:
      "Judgment, codified. Six pillars, one Deal Council, AI mandatory in every engagement — engineering a 10x–100x decade trajectory.",
  },

  hero: {
    heading: "Judgment, codified.",
    sub: "Engineer a 10x–100x decade trajectory — six pillars, one Deal Council, AI mandatory.",
    mono: "SIX PILLARS · ONE DEAL COUNCIL · AI MANDATORY",
  },

  pillars: {
    eyebrow: "The Six Pillars",
    items: [
      {
        code: "W1",
        name: "Deals & Investment Structuring",
        body: "Enter early, disrupt on price, exit at premium — the Sterling→Dishnet→Aircel→Barista pattern. A standing Deal Council: Siva reviews every material transaction before you sign.",
        badge: null,
      },
      {
        code: "W2",
        name: "AI Imposition at Scale",
        body: "Function-by-function 4x–10x multiplier map. Revenue-per-employee as the north metric. No client may skip this pillar.",
        badge: "MANDATORY",
      },
      {
        code: "W3",
        name: "Partnership Architecture",
        body: "Curated matchmaking, JV design, and the annual Unreasonable Circle summit.",
        badge: null,
      },
      {
        code: "W4",
        name: "Policy & Sovereign Access",
        body: "Registered, disclosed advocacy: regulatory strategy and access. Access and judgment — never influence-buying.",
        badge: null,
        redline: true,
      },
      {
        code: "W5",
        name: "Succession & Legacy",
        body: "Transition, not markets, destroys family wealth. The 100-year family charter.",
        badge: null,
      },
      {
        code: "W6",
        name: "Special Situations & Resilience",
        body: "Distress, restructuring, comeback design. Lived expertise no firm can hire.",
        badge: "THE 2 A.M. LINE",
      },
    ],
  },

  formula: {
    eyebrow: "Why These Six",
    strip: ["Offence", "Engine", "Network", "Runway", "Continuity", "Insurance"],
  },

  matrix: {
    eyebrow: "The /100 Matrix",
    heading: "Published to every client. We decline more than we accept.",
    legend: [
      { range: "≥ 70", verdict: "Proceed" },
      { range: "50–69", verdict: "Redesign" },
      { range: "< 50", verdict: "Decline" },
    ],
    criteria: [
      "Does it compound the client's decade map (not the quarter)?",
      "Is the upside ≥10x the realistic alternative?",
      "Can AI multiply the outcome?",
      "Is it backed by data or a designed experiment?",
      "Can we move fast while fully compliant?",
      "Does it protect or improve the principal's health and JoySpan?",
      "Is it safe, ethical, and reputation-positive for both sides?",
      "Does it produce measurable value?",
      "Is it the best use of the principal's ROM?",
      "Does it strengthen the Circle?",
    ],
  },

  bridge: {
    body: "No unreasonable wealth with a reasonable body.",
    cta: "Engine One →",
    href: "/health",
  },
} as const;
