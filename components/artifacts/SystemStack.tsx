interface Layer {
  layer: string;
  component: string;
  sees: string;
}

/** The AIWO/JoySpan system stack — SPEC §6.3, "hover a layer, right column shows what the client sees." */
export function SystemStack({ layers }: { layers: readonly Layer[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="hairline">
            <th scope="col" className="py-3 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              Layer
            </th>
            <th scope="col" className="py-3 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              Component
            </th>
            <th scope="col" className="py-3 text-left font-mono text-[0.75rem] uppercase tracking-[0.08em] text-g-50">
              What the client sees
            </th>
          </tr>
        </thead>
        <tbody>
          {layers.map((row) => (
            <tr key={row.layer} className="hairline group transition-colors hover:bg-paper-warm">
              <td className="py-4 pr-6 align-top font-mono text-[0.8125rem] text-g-50">{row.layer}</td>
              <td className="py-4 pr-6 align-top font-display font-semibold text-ink">{row.component}</td>
              <td className="py-4 align-top text-[0.9375rem] text-g-70">{row.sees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
