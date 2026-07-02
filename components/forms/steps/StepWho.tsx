"use client";

import { useFormContext } from "react-hook-form";
import type { ApplicationInput } from "@/lib/apply/schema";
import { FieldShell, applyInputClass } from "@/components/forms/Field";

export function StepWho() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ApplicationInput>();
  const applyingAs = watch("applyingAs");

  return (
    <div className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-3">
        <legend className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">
          Applying as
        </legend>
        <label className="flex items-center gap-3 font-text text-[0.9375rem] text-paper">
          <input type="radio" value="principal" {...register("applyingAs")} defaultChecked />
          The principal
        </label>
        <label className="flex items-center gap-3 font-text text-[0.9375rem] text-paper">
          <input type="radio" value="on_behalf" {...register("applyingAs")} />
          On behalf of a principal
        </label>
      </fieldset>

      <FieldShell label="Name" htmlFor="name" error={errors.name?.message}>
        <input id="name" className={applyInputClass} {...register("name")} />
      </FieldShell>

      {applyingAs === "on_behalf" ? (
        <FieldShell label="Your role" htmlFor="role" error={errors.role?.message}>
          <input id="role" className={applyInputClass} {...register("role")} />
        </FieldShell>
      ) : null}

      <FieldShell label="Organisation (optional)" htmlFor="organisation">
        <input id="organisation" className={applyInputClass} {...register("organisation")} />
      </FieldShell>
    </div>
  );
}
