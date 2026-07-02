"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, STEP_FIELDS, type ApplicationInput } from "@/lib/apply/schema";
import { submitApplication } from "@/app/apply/actions";
import { StepWho } from "@/components/forms/steps/StepWho";
import { StepQualification } from "@/components/forms/steps/StepQualification";
import { StepCommitment } from "@/components/forms/steps/StepCommitment";
import { StepReview } from "@/components/forms/steps/StepReview";
import { apply } from "@/content/copy/apply";

const TOTAL_STEPS = 4;

const defaultValues: ApplicationInput = {
  applyingAs: "principal",
  name: "",
  role: "",
  organisation: "",
  qualificationClass: "H1",
  verificationConsent: false,
  commitsToCadence: false,
  whatShouldCompound: "",
  contactMethod: "email",
  contactValue: "",
  country: "",
  jurisdiction: "",
  privacyConsent: false,
  disclaimersConsent: false,
  website: "",
};

export function ApplyFlow() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const methods = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues,
    mode: "onBlur",
  });

  const qualificationClass = methods.watch("qualificationClass");
  const isBelowThreshold = step >= 2 && qualificationClass === "below";

  async function goNext() {
    const valid = await methods.trigger(STEP_FIELDS[step]);
    if (!valid) return;
    if (step === 2 && qualificationClass === "below") return; // decline state renders instead
    setStep((s) => (s < TOTAL_STEPS ? ((s + 1) as typeof s) : s));
  }

  function goBack() {
    setStep((s) => (s > 1 ? ((s - 1) as typeof s) : s));
  }

  function onSubmit(data: ApplicationInput) {
    setSubmitError(null);
    startTransition(async () => {
      const result = await submitApplication(data);
      if (result.ok) {
        router.push(`/apply/received?ref=${result.referenceCode}`);
      } else {
        setSubmitError(result.error);
      }
    });
  }

  if (isBelowThreshold) {
    return (
      <div className="flex flex-col gap-6">
        <p className="font-display text-h2 font-bold text-paper">{apply.declineState.heading}</p>
        <p className="font-text text-[0.9375rem] text-g-inv-70">{apply.declineState.body}</p>
        <a href={apply.declineState.href} className="link-draw font-mono text-[0.9375rem] text-paper">
          {apply.declineState.cta}
        </a>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-10" noValidate>
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-g-inv-70">
          Step {step} / {TOTAL_STEPS}
        </p>

        {step === 1 ? <StepWho /> : null}
        {step === 2 ? <StepQualification /> : null}
        {step === 3 ? <StepCommitment /> : null}
        {step === 4 ? <StepReview /> : null}

        {submitError ? (
          <p role="alert" className="flex items-center gap-2 font-mono text-[0.8125rem] text-state-error">
            <span aria-hidden="true">⚠</span> {submitError}
          </p>
        ) : null}

        <div className="flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70"
            >
              ← Back
            </button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={goNext}
              className="bg-paper px-7 py-4 font-mono text-[0.9375rem] uppercase tracking-[0.08em] text-ink tracks-out hover:bg-accent-on-ink"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              disabled={isPending}
              className="bg-paper px-7 py-4 font-mono text-[0.9375rem] uppercase tracking-[0.08em] text-ink tracks-out hover:bg-accent-on-ink disabled:opacity-50"
            >
              {isPending ? "Submitting…" : "Submit"}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
