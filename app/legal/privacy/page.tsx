import type { Metadata } from "next";
import { LegalPage } from "@/components/core/LegalPage";
import { legal } from "@/content/copy/legal";

export const metadata: Metadata = { title: legal.privacy.meta.title, description: legal.privacy.meta.description };

export default function PrivacyPage() {
  return <LegalPage heading={legal.privacy.heading} sections={legal.privacy.sections} />;
}
