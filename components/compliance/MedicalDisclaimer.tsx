import { Rule } from "@/components/core/Rule";

/** SPEC §10 — pinned before the footer on /health, /practice, and any page with bio-age claims. */
export function MedicalDisclaimer() {
  return (
    <div className="container-outer py-10">
      <Rule className="mb-6" />
      <p className="font-mono text-[0.8125rem] leading-relaxed text-g-50 measure">
        All protocols are physician-governed. Figures such as 5–15 years are target ranges under
        a published methodology, not medical guarantees or advice. Individual results vary.
        Health data is handled under DPDPA on a single-channel, consent-first basis.
      </p>
    </div>
  );
}
