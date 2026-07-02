"use client";

import { useFormContext } from "react-hook-form";
import type { ApplicationInput } from "@/lib/apply/schema";

export function StepReview() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ApplicationInput>();

  const values = watch();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 border border-g-inv-30 p-6 font-mono text-[0.8125rem] text-g-inv-70">
        <p>NAME: {values.name || "—"}</p>
        <p>QUALIFICATION: {values.qualificationClass || "—"}</p>
        <p>CONTACT: {values.contactValue || "—"} ({values.contactMethod})</p>
        <p>JURISDICTION: {values.jurisdiction || "—"}</p>
      </div>

      {/* honeypot — hidden from real users, visible to naive bots that fill every field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <label className="flex items-start gap-3 font-text text-[0.875rem] text-g-inv-70">
        <input type="checkbox" className="mt-1" {...register("privacyConsent")} />
        I have read the{" "}
        <a href="/legal/privacy" className="link-draw text-paper">
          Privacy
        </a>{" "}
        policy.
      </label>
      {errors.privacyConsent ? (
        <p role="alert" className="flex items-center gap-2 font-mono text-[0.75rem] text-state-error">
          <span aria-hidden="true">⚠</span> {errors.privacyConsent.message}
        </p>
      ) : null}

      <label className="flex items-start gap-3 font-text text-[0.875rem] text-g-inv-70">
        <input type="checkbox" className="mt-1" {...register("disclaimersConsent")} />
        I have read the{" "}
        <a href="/legal/disclaimers" className="link-draw text-paper">
          Disclaimers
        </a>
        .
      </label>
      {errors.disclaimersConsent ? (
        <p role="alert" className="flex items-center gap-2 font-mono text-[0.75rem] text-state-error">
          <span aria-hidden="true">⚠</span> {errors.disclaimersConsent.message}
        </p>
      ) : null}
    </div>
  );
}
