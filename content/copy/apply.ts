/** APPLY `/apply` — SPEC §6.10, the only conversion on the site. */

export const apply = {
  meta: {
    title: "Request an Invitation",
    description: "The practice's only conversion action — a qualification flow, reviewed by a human, answered slowly.",
  },

  heading: "Request an invitation.",
  intro: "High-friction by design. The form's austerity is the brand.",

  qualificationOptions: [
    { value: "B1", label: "B1 — $1B+ / unicorn founder" },
    { value: "F1", label: "F1 — family enterprise ₹10,000 cr+" },
    { value: "H1", label: "H1 — net worth ₹1,000 cr+" },
    { value: "below", label: "Below these thresholds" },
  ] as const,

  declineState: {
    heading: "The practice is built for a specific altitude.",
    body: "AIWO's programs remain open to all.",
    cta: "Visit AIWO →",
    href: "https://aiwo.com",
  },

  received: {
    heading: "Received.",
    body: "Every request is read by the practice, and answered slowly and personally. Typical response: within 14 days. Not all requests receive an invitation.",
  },
} as const;
