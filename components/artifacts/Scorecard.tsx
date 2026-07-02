interface ScorecardRow {
  engine: string;
  metric: string;
  cadence: string;
}

/** Deterministic illustrative sparkline points, seeded by row index — no client Math.random (avoids hydration drift). */
function sparklinePoints(seed: number): string {
  const values = Array.from({ length: 8 }, (_, i) => {
    const wave = Math.sin(seed * 1.7 + i * 0.9) * 10 + i * 2.2;
    return 20 - wave * 0.6;
  });
  return values.map((v, i) => `${i * 10},${Math.max(2, Math.min(28, v)).toFixed(1)}`).join(" ");
}

/** The Unreasonable Scorecard artifact — SPEC §6.6, illustrative trend sparklines, watermarked. */
export function Scorecard({ rows, watermark }: { rows: readonly ScorecardRow[]; watermark: string }) {
  return (
    <div className="relative overflow-x-auto border border-g-30">
      <table className="w-full min-w-[680px] border-collapse">
        <thead>
          <tr className="hairline">
            <th scope="col" className="p-4 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              Engine
            </th>
            <th scope="col" className="p-4 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              Metric
            </th>
            <th scope="col" className="p-4 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              Cadence
            </th>
            <th scope="col" className="p-4 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              Trend
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.metric} className="hairline">
              <td className="p-4 align-top font-mono text-[0.8125rem] text-g-50">{row.engine}</td>
              <td className="p-4 align-top text-[0.9375rem] text-g-90">{row.metric}</td>
              <td className="p-4 align-top font-mono text-[0.8125rem] text-g-70">{row.cadence}</td>
              <td className="p-4 align-top">
                <svg viewBox="0 0 70 30" width="70" height="30" aria-hidden="true">
                  <polyline points={sparklinePoints(i)} fill="none" stroke="var(--ink)" strokeWidth="1" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="p-4 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-g-50">{watermark}</p>
    </div>
  );
}
