import type { ApplicationInput } from "@/lib/apply/schema";

/**
 * MOCKED — SPEC §8.1 calls for Resend/SES notification to a single practice inbox.
 * No email provider credentials exist yet (ratified in docs/DECISIONS.md). Swap the
 * body of `sendApplicationNotification` for a real Resend/SES call when ready —
 * the call site in app/apply/actions.ts does not need to change.
 */
export async function sendApplicationNotification(input: ApplicationInput & { id: string }): Promise<{ ok: true }> {
  console.log(`[mock:mail] would notify practice inbox of application ${input.id} (${input.qualificationClass})`);
  return { ok: true };
}
