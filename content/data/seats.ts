/**
 * Single-value seats state — SPEC §8.3: "single-value edit updates H9/H7/apply gate."
 * Edit these numbers when the founder ratifies a change in filled capacity.
 */
export const seats = {
  annualPartnership: { total: 12, filled: 4 },
  decadeCompact: { total: 5, filled: 1 },
  circleSummit: { total: 60, filled: 22 },
} as const;
