import type { Metadata } from "next";
import { LegalPage } from "@/components/core/LegalPage";
import { legal } from "@/content/copy/legal";

export const metadata: Metadata = { title: legal.terms.meta.title, description: legal.terms.meta.description };

export default function TermsPage() {
  return <LegalPage heading={legal.terms.heading} sections={legal.terms.sections} />;
}
