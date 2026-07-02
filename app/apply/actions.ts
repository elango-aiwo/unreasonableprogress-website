"use server";

import { applicationSchema } from "@/lib/apply/schema";
import { storeApplication } from "@/lib/services/store";
import { sendApplicationNotification } from "@/lib/services/mail";
import { verifyCaptcha } from "@/lib/services/captcha";

export type SubmitResult = { ok: true; referenceCode: string } | { ok: false; error: string };

/**
 * SPEC §6.10 rules: no third-party scripts on this route; server-side Zod validation;
 * mocked encrypted append-only store + mocked notification (see docs/DECISIONS.md).
 */
export async function submitApplication(input: unknown): Promise<SubmitResult> {
  const parsed = applicationSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Some fields need attention. Please review and resubmit." };
  }

  if (parsed.data.website) {
    // honeypot tripped — behave as if it succeeded, do nothing further
    return { ok: true, referenceCode: "UP-000000" };
  }

  const captchaOk = await verifyCaptcha();
  if (!captchaOk) {
    return { ok: false, error: "Verification failed. Please try again." };
  }

  const { id } = await storeApplication(parsed.data);
  await sendApplicationNotification({ ...parsed.data, id });

  return { ok: true, referenceCode: id };
}
