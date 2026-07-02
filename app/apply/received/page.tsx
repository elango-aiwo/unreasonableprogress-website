import type { Metadata } from "next";
import { Suspense } from "react";
import { Section } from "@/components/core/Section";
import { ReceivedRef } from "@/components/forms/ReceivedRef";
import { apply } from "@/content/copy/apply";

export const metadata: Metadata = {
  title: "Received",
  description: "Your request has been received. Every request is read personally.",
  robots: { index: false, follow: false },
};

export default function ReceivedPage() {
  return (
    <Section ground="ink">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-h1 font-display font-bold text-paper">{apply.received.heading}</h1>
        <p className="mt-6 font-text text-[0.9375rem] text-g-inv-70">{apply.received.body}</p>
        <Suspense>
          <ReceivedRef />
        </Suspense>
      </div>
    </Section>
  );
}
