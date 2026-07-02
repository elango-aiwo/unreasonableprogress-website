# CMS / Service Map

This v1 has no CMS and no live backend — see `docs/DECISIONS.md`. This file documents where
content lives today and exactly what to change when real services are ready.

## Content (git-audited, no CMS in v1)

All page copy lives in typed dictionaries under `content/copy/*.ts`, data under
`content/data/*.ts`, and long-form articles under `content/articles/*.mdx` (registered in
`content/data/articles.ts`). A future Sanity (or similar) migration would map:

| Today | Sanity-equivalent document type |
|---|---|
| `content/copy/*.ts` exports | one document type per page, fields matching the export shape |
| `content/data/seats.ts` | a single `siteSettings` singleton document |
| `content/data/articles.ts` + `content/articles/*.mdx` | an `article` document type with a portable-text/MDX body field |

## Mocked services — swap points

| Service | File | What to do when a real key exists |
|---|---|---|
| Email notification | `lib/services/mail.ts` | Replace the body of `sendApplicationNotification` with a Resend/SES call. No call-site changes needed. |
| Application storage | `lib/services/store.ts` | Replace the in-memory array with an insert into encrypted Postgres/Neon/Vercel KV, per SPEC §8.6 (field-level encryption, append-only, rate-limited). |
| Bot protection | `lib/services/captcha.ts` | Replace `verifyCaptcha` with a real Cloudflare Turnstile siteverify call against `CF_TURNSTILE_SECRET_KEY`; render the Turnstile widget in `components/forms/steps/StepReview.tsx`. |
| Analytics | not yet wired | Add Plausible (proxied, cookieless) per SPEC §8.1 once a domain is registered with Plausible. |
