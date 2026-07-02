# Unreasonable Progress™ — Website

Built against `UNREASONABLE_PROGRESS_Website_Master_Spec.md` (the project's source-of-truth
spec). See `docs/DECISIONS.md` for ratified deviations, `docs/CONTENT_REVIEW.md` for content
awaiting founder sign-off, and `docs/cms-map.md` for what's mocked and how to wire it up live.

## Stack

Next.js (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · React Hook Form + Zod ·
MDX for long-form articles. No external services are wired live yet — see `docs/cms-map.md`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The `/styleguide` route (noindex) renders every design token and
core primitive for visual review.

## Common tasks

**Edit page copy.** All copy lives in typed dictionaries under `content/copy/*.ts` — never in
JSX. Edit the relevant file (e.g. `content/copy/home.ts`) and the page picks it up automatically.

**Update the seats-filled count.** Edit `content/data/seats.ts` — a single edit updates the
homepage gate, the ladder tier badges, and the Circle page's tick-circle glyph everywhere it's
used.

**Publish an Index article.** Add an entry to `content/data/articles.ts` (slug, title, date,
abstract, reading time), write the body in a new `content/articles/<slug>.mdx` file, then add the
slug/import mapping in `app/index/[slug]/page.tsx`'s `BODIES` map.

**Check the Copy Constitution.** `npm run check:copy` scans `content/copy/*.ts` and
`content/articles/*.mdx` for banned words (SPEC §9) and flags target-range figures that may be
missing their `<TargetRangeNote/>` framing.

**Type-check and lint.**

```bash
npx tsc --noEmit
npm run lint
```

**Production build.**

```bash
npm run build
npm run start
```

## Project structure

```
app/            routes (App Router) — one folder per SPEC §5 page, plus og/sitemap/robots/manifest
components/     core primitives, hero animation, artifacts, engines, nav, forms, compliance
content/        typed copy dictionaries, data (seats/nav/articles), MDX article bodies
lib/            motion hooks, schema-org JSON-LD, mocked services, apply-flow Zod schema
styles/         design tokens (styles/tokens.css) — the single source of truth for the palette,
                type scale, spacing, and motion durations
docs/           DECISIONS.md, CONTENT_REVIEW.md, cms-map.md
scripts/        check-banned-words.mjs (Copy Constitution CI check)
```

## Design system

Strict monochrome base (paper/ink/grayscale ramp) plus one ratified accent color ("Signal
Gold", `--accent` in `styles/tokens.css`) — see `docs/DECISIONS.md` for why. Four type voices
(Archivo display, Instrument Sans text, IBM Plex Mono for all numbers/evidence, Newsreader
italic for the founder's voice only) loaded via `next/font/google` in `lib/fonts.ts`.

## Motion / animation system

One signature moment (`components/hero/CompoundingCanvas.tsx` — the two-curve hero, vanilla
Canvas2D), everything else is scroll-triggered settlement via `lib/motion.ts`'s
`useReveal`/`useCountUp` hooks (native `IntersectionObserver`, no scroll-jacking). A global
`prefers-reduced-motion` check (`usePrefersReducedMotion`, via `useSyncExternalStore`) turns
every animation into its instant end-state and swaps the hero canvas for a static SVG
(`components/hero/HeroStatic.tsx`).

## Compliance components

`components/compliance/` — `MedicalDisclaimer`, `FinancialDisclaimer`, `TargetRangeNote`,
`PolicyRedlineLink` — placed per SPEC §10. Do not remove or relocate without re-checking the
spec section they satisfy.
