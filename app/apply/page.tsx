import type { Metadata } from "next";
import { Section } from "@/components/core/Section";
import { ApplyFlow } from "@/components/forms/ApplyFlow";
import { apply } from "@/content/copy/apply";

export const metadata: Metadata = {
  title: apply.meta.title,
  description: apply.meta.description,
  robots: { index: false, follow: false },
};

export default function ApplyPage() {
  return (
    <Section ground="ink">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-h1 font-display font-bold text-paper">{apply.heading}</h1>
        <p className="mt-4 font-text text-[0.9375rem] text-g-inv-70">{apply.intro}</p>
        <div className="mt-12">
          <ApplyFlow />
        </div>
      </div>
    </Section>
  );
}
