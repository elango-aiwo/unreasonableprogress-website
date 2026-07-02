/** CIRCLE `/circle` — SPEC §6.7. */

export const circle = {
  meta: {
    title: "The Unreasonable Circle",
    description: "A curated network without exposed members — matchmaking, JV architecture, and the annual Unreasonable Circle Summit.",
  },

  hero: {
    heading: "The chariot is pulled together.",
    proverb: "“Oor koodi ther iluththaal” — together we pull the chariot.",
  },

  what: {
    eyebrow: "What the Circle Is",
    items: [
      { name: "Curated matchmaking", body: "High-trust introductions inside and beyond the twelve-client circle." },
      { name: "JV architecture", body: "Market-entry alliances, technology licensing, capital partnerships." },
      { name: "The Unreasonable Circle Summit", body: "An annual, invite-only gathering — 60 seats, Chennai / Dubai." },
    ],
  },

  confidentiality: {
    eyebrow: "Confidentiality as Architecture",
    heading: "The rules are the product.",
    rules: [
      "NDAs, both directions",
      "A standing conflict register",
      "Maximum two clients per industry",
      "An expulsion clause",
    ],
  },

  summit: {
    eyebrow: "The Summit",
    detail: "60 seats · Chennai / Dubai",
    dates: "Dates to be confirmed",
  },
} as const;
