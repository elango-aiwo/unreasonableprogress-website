/** CHARTER `/charter` — The Red-Line Charter — SPEC §6.9. */

export const charter = {
  meta: {
    title: "The Red-Line Charter",
    description: "The lines Unreasonable Progress does not cross — health, wealth, policy, and equity red lines, published and versioned.",
  },

  hero: { heading: "The lines we do not cross." },

  sections: [
    {
      name: "Health red lines",
      rules: [
        "All medical decisions are physician-governed.",
        "No outcome guarantees — trajectory proof, year over year.",
        "DPDPA-compliant, single-channel data; consent before every draw.",
      ],
    },
    {
      name: "Wealth red lines",
      rules: [
        "No assured returns; advisory only.",
        "Clients execute through their own bankers and counsel.",
        "Chinese walls between client deal files.",
        "A standing conflict-of-interest register across all clients.",
      ],
    },
    {
      name: "Policy red lines",
      rules: [
        "Registered, disclosed advocacy only.",
        "Strict anti-bribery compliance: PCA, FCPA, UK Bribery Act.",
        "No political funding intermediation.",
        "Grey mandates are declined.",
      ],
    },
    {
      name: "Equity & carry red lines",
      rules: [
        "Independent valuation.",
        "Written consent.",
        "Disclosed in every engagement letter.",
      ],
    },
  ],

  signature: { text: "Ratified by the founder · Version 1.0 · July 2026" },

  concern: { body: "Report a concern", email: "compliance@unreasonableprogress.com" },
} as const;
