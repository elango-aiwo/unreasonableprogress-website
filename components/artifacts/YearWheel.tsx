interface RhythmItem {
  cadence: string;
  detail: string;
}

/** The rhythm of engagement as a year-wheel line graphic — SPEC §6.6. */
export function YearWheel({ items }: { items: readonly RhythmItem[] }) {
  const radius = 120;
  const center = 150;

  return (
    <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
      <svg viewBox="0 0 300 300" width={240} height={240} className="shrink-0" aria-hidden="true">
        <circle cx={center} cy={center} r={radius} fill="none" stroke="var(--g-30)" strokeWidth="1" />
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const x = center + Math.cos(angle) * radius;
          const y = center + Math.sin(angle) * radius;
          return (
            <g key={item.cadence}>
              <line x1={center} y1={center} x2={x} y2={y} stroke="var(--g-30)" strokeWidth="1" />
              <circle cx={x} cy={y} r="4" fill="var(--ink)" />
            </g>
          );
        })}
        <circle cx={center} cy={center} r="2" fill="var(--ink)" />
      </svg>

      <ol className="flex flex-1 flex-col gap-6">
        {items.map((item) => (
          <li key={item.cadence} className="hairline pb-6">
            <p className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink">{item.cadence}</p>
            <p className="mt-2 font-text text-[0.9375rem] text-g-70">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
