import { z } from "zod";

/** Shared client/server schema for the 4-step application — SPEC §6.10, §8.1. */
export const applicationSchema = z
  .object({
    // Step 1 — Who is applying
    applyingAs: z.enum(["principal", "on_behalf"]),
    name: z.string().trim().min(2, "Enter a name."),
    role: z.string().trim().optional(),
    organisation: z.string().trim().optional(),

    // Step 2 — Qualification class
    qualificationClass: z.enum(["B1", "F1", "H1", "below"]),
    verificationConsent: z.boolean(),

    // Step 3 — Commitment & intent
    commitsToCadence: z.boolean(),
    whatShouldCompound: z.string().trim().max(500, "500 characters maximum.").optional(),
    contactMethod: z.enum(["email", "phone"]),
    contactValue: z.string().trim().min(1, "Enter a contact detail."),
    country: z.string().trim().min(1, "Select a country."),
    jurisdiction: z.string().trim().min(1, "Enter a jurisdiction."),

    // Step 4 — Review & submit
    privacyConsent: z.boolean(),
    disclaimersConsent: z.boolean(),
    // honeypot — must stay empty; bots that fill every field trip this
    website: z.string().max(0, "").optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.applyingAs === "on_behalf" && !data.role) {
      ctx.addIssue({ code: "custom", path: ["role"], message: "Role is required when applying on behalf of a principal." });
    }
    if (data.qualificationClass !== "below" && !data.verificationConsent) {
      ctx.addIssue({ code: "custom", path: ["verificationConsent"], message: "Verification consent is required to proceed." });
    }
    if (data.qualificationClass !== "below" && !data.commitsToCadence) {
      ctx.addIssue({ code: "custom", path: ["commitsToCadence"], message: "This commitment is required to proceed." });
    }
    if (data.qualificationClass !== "below" && data.contactMethod === "email" && !data.contactValue.includes("@")) {
      ctx.addIssue({ code: "custom", path: ["contactValue"], message: "Enter a valid email." });
    }
    if (
      data.qualificationClass !== "below" &&
      data.contactMethod === "phone" &&
      !/^\+?[\d\s().-]{7,20}$/.test(data.contactValue)
    ) {
      ctx.addIssue({ code: "custom", path: ["contactValue"], message: "Enter a valid phone number, including country code." });
    }
    if (data.qualificationClass !== "below" && !data.privacyConsent) {
      ctx.addIssue({ code: "custom", path: ["privacyConsent"], message: "Required to submit." });
    }
    if (data.qualificationClass !== "below" && !data.disclaimersConsent) {
      ctx.addIssue({ code: "custom", path: ["disclaimersConsent"], message: "Required to submit." });
    }
  });

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const STEP_FIELDS = {
  1: ["applyingAs", "name", "role", "organisation"],
  2: ["qualificationClass", "verificationConsent"],
  3: ["commitsToCadence", "whatShouldCompound", "contactMethod", "contactValue", "country", "jurisdiction"],
  4: ["privacyConsent", "disclaimersConsent"],
} as const;
