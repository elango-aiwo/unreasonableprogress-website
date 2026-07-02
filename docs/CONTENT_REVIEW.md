# Content Review

Items requiring founder ratification before launch, per `SPEC §0` rule 4. Nothing here is a
blocker to reviewing the build — it's a punch list for content sign-off.

## Placeholder / to-be-confirmed content

| Location | Item | Current placeholder |
|---|---|---|
| `content/copy/circle.ts` — `summit.dates` | Unreasonable Circle Summit dates | "Dates to be confirmed" |
| `content/copy/apply.ts` — `declineState.href` | AIWO outbound link for below-threshold applicants | `https://aiwo.com` — confirm canonical AIWO URL |
| `content/copy/charter.ts` — `signature.text` | Charter ratification date | "Version 1.0 · July 2026" — confirm exact ratification date |
| `content/data/seats.ts` | Seats-filled counts (12/5/60 caps) | Illustrative starting values (4, 1, 22) — update to real counts before launch |
| `content/data/articles.ts` | Index seed article dates | All three dated "2026-07-01" as placeholder publish date |
| `content/copy/legal.ts` — disclaimers "Methodology" | Full methodology detail | Summary only; spec calls for a fuller published methodology (Phase 2: `/index/methodology`) |

## Verified against spec, no action needed

- All ratified copy blocks (positioning statement, one-sentence promise, founder pitch, creed
  lines, evidence set) are verbatim from `SPEC §13` Copy Bank.
- Banned-word and target-range framing checks pass via `npm run check:copy` (see
  `scripts/check-banned-words.mjs`).

## Not built in this pass (see docs/DECISIONS.md for why)

- Real backend services (email, encrypted storage, Turnstile, analytics) are mocked.
- Automated Playwright journeys (J1–J4) and Lighthouse CI are not wired — no CI target exists
  yet in this environment.
