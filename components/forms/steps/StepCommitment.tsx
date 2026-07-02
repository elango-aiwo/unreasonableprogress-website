"use client";

import { useFormContext } from "react-hook-form";
import type { ApplicationInput } from "@/lib/apply/schema";
import { FieldShell, applyInputClass } from "@/components/forms/Field";

export function StepCommitment() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationInput>();

  return (
    <div className="flex flex-col gap-8">
      <label className="flex items-start gap-3 font-text text-[0.875rem] text-g-inv-70">
        <input type="checkbox" className="mt-1" {...register("commitsToCadence")} />
        The principal commits to the Test → Treat → Retest cadence and quarterly sessions.
      </label>
      {errors.commitsToCadence ? (
        <p role="alert" className="flex items-center gap-2 font-mono text-[0.75rem] text-state-error">
          <span aria-hidden="true">⚠</span> {errors.commitsToCadence.message}
        </p>
      ) : null}

      <FieldShell label="What should compound first? (optional)" htmlFor="whatShouldCompound" hint="500 characters maximum" error={errors.whatShouldCompound?.message}>
        <textarea id="whatShouldCompound" rows={4} maxLength={500} className={applyInputClass} {...register("whatShouldCompound")} />
      </FieldShell>

      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">
          Preferred contact
        </legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 font-text text-[0.9375rem] text-paper">
            <input type="radio" value="email" {...register("contactMethod")} defaultChecked />
            Email
          </label>
          <label className="flex items-center gap-2 font-text text-[0.9375rem] text-paper">
            <input type="radio" value="phone" {...register("contactMethod")} />
            Phone
          </label>
        </div>
      </fieldset>

      <FieldShell label="Contact detail" htmlFor="contactValue" error={errors.contactValue?.message}>
        <input id="contactValue" className={applyInputClass} {...register("contactValue")} />
      </FieldShell>

      <div className="grid gap-6 sm:grid-cols-2">
        <FieldShell label="Country" htmlFor="country" error={errors.country?.message}>
          <input id="country" className={applyInputClass} {...register("country")} />
        </FieldShell>
        <FieldShell label="Jurisdiction" htmlFor="jurisdiction" error={errors.jurisdiction?.message}>
          <input id="jurisdiction" className={applyInputClass} {...register("jurisdiction")} />
        </FieldShell>
      </div>
    </div>
  );
}
