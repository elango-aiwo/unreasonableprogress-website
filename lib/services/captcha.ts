/**
 * MOCKED — SPEC §6.10/§8.6 calls for Cloudflare Turnstile (invisible challenge, first-party).
 * No Turnstile site/secret keys exist yet (ratified in docs/DECISIONS.md). This always
 * passes; swap the body for a real siteverify call against CF_TURNSTILE_SECRET_KEY
 * when a key is available — the call site in app/apply/actions.ts does not need to change.
 */
export async function verifyCaptcha(_token?: string): Promise<boolean> {
  return true;
}
