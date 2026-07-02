# Decisions Log

Deviations from `UNREASONABLE_PROGRESS_Website_Master_Spec.md`, and notable engineering
choices made while executing it. Per SPEC §0 rule 6, the spec wins on conflicts unless
explicitly ratified here by the founder/user.

## Ratified deviations (user-approved during planning)

1. **Accent color — "Signal Gold" (`#B8863A`)**. The spec locks pure black/white (§4.1).
   The user asked for a monochrome base + one signature accent. Added `--accent`,
   `--accent-ink`, `--accent-soft`, `--accent-on-ink` tokens in `styles/tokens.css`,
   used only for: primary CTA fill, Dual Counter numerals, one of the two hero curves
   (wealth line), and accent Ledger Numbers. Everything else remains strict grayscale.
2. **Backend services mocked.** `/apply` form validation and UI are fully real; email
   notify, encrypted storage, Turnstile bot-protection, and analytics are built behind
   `lib/services/*` interfaces with mock implementations (console-log / in-memory).
   No external credentials exist yet. Swapping in real Resend/Postgres/Turnstile keys
   is a config change, documented in `docs/cms-map.md`.
3. **Scope**: full spec (all routes, phased per §11), reviewed via preview after each
   phase rather than blind end-to-end generation.

## Engineering choices (not spec conflicts, just implementation detail)

- **Next.js 16.2** installed (spec asks for "15+"; 16 satisfies this and was the
  current stable release at build time — App Router, React 19, same architecture).
- **npm**, not pnpm — pnpm is not installed in this environment; npm is a drop-in
  equivalent for this project's purposes.
- **Fonts via `next/font/google`** (`lib/fonts.ts`) rather than manually downloaded and
  subsetted files — this self-hosts and subsets automatically at build time with metric
  fallbacks, satisfying the spec's self-hosting requirement (§8.2) without manual font
  file management.
- **ESLint flat config** uses `eslint-config-next/core-web-vitals` directly (the
  installed `eslint-config-next` version ships native flat-config exports) instead of
  the older `FlatCompat` + `.eslintrc`-string-extends pattern, which caused a circular
  JSON error with this eslint-config-next/eslint version pairing.
- **`lib/motion.ts` reduced-motion handling** uses `useSyncExternalStore` for
  `prefers-reduced-motion` (not `useState` + `useEffect`) to avoid hydration mismatches
  and satisfy the `react-hooks/set-state-in-effect` lint rule — this is the
  React-recommended pattern for subscribing to a browser media query.
- **`scripts/check-banned-words.mjs`** (SPEC §9 rule 2 CI check) uses a negation-aware heuristic:
  compliance copy legitimately says "no guarantee(s)" / "not assured", and FAQ entries pose the
  skeptical question ("Is X a guarantee?") then negate it in the adjacent answer field. The
  script only fails on an *affirmative* claim, and separately warns (non-blocking) when a
  target-range figure appears in a copy file with no literal "target range" text nearby — this
  is expected on pages where the `<TargetRangeNote/>` component carries the framing instead of
  repeating the phrase in every string (verified manually: `/thesis`, `/wealth`, `/health` all
  attach the component).
- **Working directory note**: the project root (`UP Website Reference/`) sits inside
  `Downloads/`, which contains an unrelated stray `package.json` (a Remotion video
  project) and the user's home directory has a stray `package-lock.json`. Turbopack's
  workspace-root auto-detection picked these up as ambiguous monorepo boundaries;
  fixed via explicit `turbopack.root` in `next.config.ts`. These stray files belong to
  other projects and were left untouched.
