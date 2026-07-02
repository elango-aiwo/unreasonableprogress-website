import type { Metadata } from "next";
import { LegalPage } from "@/components/core/LegalPage";
import { legal } from "@/content/copy/legal";

export const metadata: Metadata = { title: legal.disclaimers.meta.title, description: legal.disclaimers.meta.description };

export default function DisclaimersPage() {
  return <LegalPage heading={legal.disclaimers.heading} sections={legal.disclaimers.sections} />;
}
