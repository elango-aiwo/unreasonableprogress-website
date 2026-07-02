import { Rule } from "@/components/core/Rule";

/** SPEC §10 — placed on /wealth, /practice, /thesis. */
export function FinancialDisclaimer() {
  return (
    <div className="container-outer py-10">
      <Rule className="mb-6" />
      <p className="font-mono text-[0.8125rem] leading-relaxed text-g-50 measure">
        Wealth figures including 10x–100x are aspirational planning target ranges, not assured
        returns or investment advice. The practice is advisory only; clients execute through
        their own bankers and counsel. Past outcomes do not predict future results.
      </p>
    </div>
  );
}
