"use client";

import { useFormContext } from "react-hook-form";
import type { ApplicationInput } from "@/lib/apply/schema";
import { apply } from "@/content/copy/apply";

export function StepQualification() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationInput>();

  return (
    <div className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">
          Qualification class
        </legend>
        {apply.qualificationOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-3 font-text text-[0.9375rem] text-paper">
            <input type="radio" value={option.value} {...register("qualificationClass")} />
            {option.label}
          </label>
        ))}
      </fieldset>

      <label className="flex items-start gap-3 font-text text-[0.875rem] text-g-inv-70">
        <input type="checkbox" className="mt-1" {...register("verificationConsent")} />
        I understand qualification includes verification.
      </label>
      {errors.verificationConsent ? (
        <p role="alert" className="flex items-center gap-2 font-mono text-[0.75rem] text-state-error">
          <span aria-hidden="true">⚠</span> {errors.verificationConsent.message}
        </p>
      ) : null}
    </div>
  );
}
