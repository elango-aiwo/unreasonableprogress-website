/** LEGAL `/legal/*` — SPEC §6.11. Plain-language, same design system. */

export const legal = {
  privacy: {
    meta: { title: "Privacy", description: "How Unreasonable Progress collects, uses, and protects information — DPDPA-aligned, plain language." },
    heading: "Privacy",
    sections: [
      {
        name: "What we collect",
        body: "On /apply, we collect the information you provide directly: name, role, organisation, qualification class, contact details, jurisdiction, and your written response. We do not collect data through advertising trackers or third-party pixels anywhere on this site.",
      },
      {
        name: "Single-channel principle",
        body: "Health data generated through an engagement is handled by AIWO's clinical systems on a single channel, with consent obtained before every draw. It is never shared without the principal's instruction.",
      },
      {
        name: "Retention",
        body: "Records of declined applications (below the net-worth threshold) are auto-purged after 30 days. Records of qualified applications are retained for the duration of any resulting engagement and as required by law.",
      },
      {
        name: "No advertising trackers",
        body: "This site runs cookieless, proxied analytics with no advertising pixels and no consent banner is required as a result. For a UHNW audience, not being surveilled is itself a feature.",
      },
    ],
  },

  disclaimers: {
    meta: { title: "Disclaimers", description: "Medical and financial disclaimers, and the methodology note for target-range figures used across this site." },
    heading: "Disclaimers",
    sections: [
      {
        name: "Medical",
        body: "All health protocols are physician-governed. Figures such as 5–15 years of biological age reversal are target ranges under a published methodology, not medical guarantees or advice. Individual results vary. This site does not provide medical advice.",
      },
      {
        name: "Financial",
        body: "Wealth figures including 10x–100x are aspirational planning target ranges, not assured returns or investment advice. The practice is advisory only; clients execute through their own bankers and counsel. Past outcomes do not predict future results.",
      },
      {
        id: "methodology",
        name: "Methodology",
        body: "Target ranges cited across this site (biological age reversal, wealth multiples, the flagship 0.71 benchmark) are derived from the founder's own tracked cohort and clinical partners' published protocols. Full methodology is available to qualified applicants upon request.",
      },
      {
        name: "Forward-looking statements",
        body: "Statements about future capacity, pricing power, or the practice's roadmap are forward-looking and subject to change without notice.",
      },
    ],
  },

  terms: {
    meta: { title: "Terms of Use", description: "Terms governing use of the Unreasonable Progress website." },
    heading: "Terms of Use",
    sections: [
      { name: "Use of this site", body: "This site is provided for informational purposes to prospective principal clients and their advisors. It does not constitute an offer, solicitation, or engagement." },
      { name: "No public pricing", body: "Fees are disclosed only upon qualification and are agreed individually in writing." },
      { name: "Intellectual property", body: "Principal Compounding™, JoySpan™, and The Siva Doctrine™ are marks of Unreasonable Progress. Content on this site may not be reproduced without permission." },
      { name: "Governing law", body: "These terms are governed by the laws of India, without regard to conflict-of-law principles." },
    ],
  },
} as const;
