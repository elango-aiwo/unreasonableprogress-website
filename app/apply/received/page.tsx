import type { Metadata } from "next";
import { Section } from "@/components/core/Section";
import { apply } from "@/content/copy/apply";

export const metadata: Metadata = {
  title: "Received",
  description: "Your request has been received. Every request is read personally.",
  robots: { index: false, follow: false },
};

export default async function ReceivedPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <Section ground="ink">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-h1 font-display font-bold text-paper">{apply.received.heading}</h1>
        <p className="mt-6 font-text text-[0.9375rem] text-g-inv-70">{apply.received.body}</p>
        {ref ? (
          <p className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-g-inv-70">Reference: {ref}</p>
        ) : null}
      </div>
    </Section>
  );
}
