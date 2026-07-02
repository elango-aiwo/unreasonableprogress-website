/** PRACTICE `/practice` — SPEC §6.6, the gatekeeper's page. */

export const practice = {
  meta: {
    title: "The Practice",
    description:
      "Twelve clients. One founder. One scorecard. Structure, cadence, measurement, selection — how the practice works.",
  },

  hero: { heading: "Twelve clients. One founder. One scorecard." },

  tiers: {
    eyebrow: "The Three Tiers",
    items: [
      {
        index: "01",
        name: "The Unreasonable Immersion",
        duration: "7–10 days",
        included: "Full BioMAP 208 draw + Healthcation reset + the Wealth X-Ray + one private day with Siva.",
        output: "The client's Decade Map — health trajectory + wealth trajectory on one page.",
        cap: null,
      },
      {
        index: "02",
        name: "The Annual Partnership",
        duration: "12 months",
        included: "Full JoySpan program (principal + spouse + successor) + quarterly private sessions + standing Deal Council access + AI Multiplication Audit + Circle membership.",
        output: "The Unreasonable Scorecard, reviewed quarterly.",
        cap: "CAP 12",
      },
      {
        index: "03",
        name: "The Decade Compact",
        duration: "10 years",
        included: "Everything in the Annual Partnership plus success economics and succession architecture (W5) for the family.",
        output: "The 100-year family charter.",
        cap: "CAP 5 FAMILIES",
      },
    ],
    footer:
      "Fees are disclosed upon qualification. Success economics are agreed in writing with independent valuation.",
  },

  rhythm: {
    eyebrow: "The Rhythm",
    items: [
      { cadence: "Quarterly", detail: "Principal session · biomarker retest · scorecard review · one Deal Council" },
      { cadence: "Annually", detail: "Flagship 208-marker draw · Decade Map refresh · Circle summit · Vitality Letter" },
      { cadence: "Always-on", detail: "LifeOS app · concierge · the 2 a.m. line" },
    ],
  },

  scorecard: {
    eyebrow: "The Unreasonable Scorecard",
    rows: [
      { engine: "Health", metric: "Biological age Δ vs chronological", cadence: "Annual (trend quarterly)" },
      { engine: "Health", metric: "JoySpan Score; organ ages; VO₂max, ApoB, HbA1c, hs-CRP trends", cadence: "Quarterly" },
      { engine: "Wealth", metric: "Net worth / enterprise value multiple vs baseline", cadence: "Annual" },
      { engine: "Wealth", metric: "Revenue-per-employee (AI pillar)", cadence: "Quarterly" },
      { engine: "Wealth", metric: "Deals reviewed / executed / avoided", cadence: "Quarterly" },
      { engine: "Wealth", metric: "ROM — principal hours freed", cadence: "Quarterly" },
      { engine: "Joint", metric: "Successor readiness index (W5)", cadence: "Annual" },
    ],
    watermark: "Illustrative",
  },

  selection: {
    eyebrow: "Selection",
    gates: [
      { name: "Net-worth gate", detail: "Verified ₹1,000 cr+ / ₹10,000 cr+ / $1B+." },
      { name: "Chemistry gate", detail: "Siva personally accepts every client. No delegation." },
      { name: "Commitment gate", detail: "The principal commits to the full SIIS cadence — Signals → Interpretations → Interventions → Systems — and quarterly sessions." },
      { name: "Integrity gate", detail: "Clean-enough reputation for us to stand beside publicly." },
      { name: "/100 gate", detail: "The client scores ≥70 on the Client Selection Matrix." },
    ],
  },

  capacity: {
    eyebrow: "Capacity Mathematics",
    equation: "12 CLIENTS × 4 SESSIONS × 2 DAYS ≈ 96 FOUNDER-DAYS/YR — THIS IS WHY THE CAP EXISTS.",
  },

  faq: {
    eyebrow: "Questions Billionaires Actually Ask",
    items: [
      {
        question: "Why only twelve?",
        answer:
          "Twelve clients × four deep sessions × two days of preparation and delivery is roughly 96 founder-days a year on clients. The cap is capacity mathematics, not marketing — the moment the founder's calendar breaks, the product breaks.",
      },
      {
        question: "What about Siva's litigation history?",
        answer:
          "It is presented plainly, in the same ink as the victories, on the Founder page — including the bankruptcy, the IBC proceedings, and the Supreme Court landmark. We provide a full disclosure pack at qualification and invite the hard questions first.",
      },
      {
        question: "Is 5–15 years a guarantee?",
        answer:
          "No. It is a clinician-governed target range under a published methodology, not a medical guarantee or advice. Individual results vary.",
      },
      {
        question: "Is 10x–100x assured?",
        answer:
          "No. The practice is advisory only; there are no assured returns. Clients execute through their own bankers and counsel.",
      },
      { question: "Who sees my data?", answer: "Health data is handled under DPDPA on a single-channel, consent-first basis. It is never shared without the principal's instruction." },
      { question: "Can my CEO attend instead of me?", answer: "No. The principal, or no engagement." },
      {
        question: "What happens to a Decade Compact if something happens to Siva?",
        answer:
          "The Siva Doctrine is codified into playbooks and matrices, and contracts are structured to survive — key-person risk is managed, not ignored.",
      },
    ],
  },
} as const;
