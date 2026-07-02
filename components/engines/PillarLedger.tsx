import { PolicyRedlineLink } from "@/components/compliance/PolicyRedlineLink";

interface Pillar {
  code: string;
  name: string;
  body: string;
  badge: string | null;
  redline?: boolean;
}

/** Six-pillar accordion — SPEC §6.4, native <details> for zero-JS keyboard accessibility. */
export function PillarLedger({ pillars }: { pillars: readonly Pillar[] }) {
  return (
    <div className="flex flex-col">
      {pillars.map((pillar) => (
        <details key={pillar.code} className="hairline group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[0.8125rem] text-g-50">{pillar.code}</span>
              <span className="font-display text-h3 font-semibold text-ink">{pillar.name}</span>
            </span>
            <span className="flex items-center gap-4">
              {pillar.badge ? (
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-accent-ink">
                  {pillar.badge}
                </span>
              ) : null}
              <span aria-hidden="true" className="font-mono text-g-50 transition-transform group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <div className="mt-4 max-w-2xl pl-0 sm:pl-[4.5rem]">
            <p className="font-text text-[0.9375rem] text-g-70">{pillar.body}</p>
            {pillar.redline ? (
              <div className="mt-3">
                <PolicyRedlineLink />
              </div>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
