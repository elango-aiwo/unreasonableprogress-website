interface LoopDiagramProps {
  stations: readonly string[];
}

/** Test → Treat → Retest, rendered as the closed-loop glyph — SPEC §6.3. */
export function LoopDiagram({ stations }: LoopDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {stations.map((station, i) => (
          <div key={station} className="flex items-center gap-4">
            <div className="flex h-24 w-24 flex-col items-center justify-center border border-g-30 sm:h-32 sm:w-32">
              <p className="font-mono text-[0.75rem] text-g-50">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-[1.125rem] font-semibold text-ink">{station}</p>
            </div>
            {i < stations.length - 1 ? (
              <span aria-hidden="true" className="font-mono text-g-50">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 font-mono text-[0.75rem] text-g-50">
        <span aria-hidden="true">↺</span>
        <span>the loop closes — retest feeds the next test</span>
      </div>
    </div>
  );
}
