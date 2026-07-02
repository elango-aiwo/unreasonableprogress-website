interface SiisStation {
  code: string;
  name: string;
  body: string;
}

interface SiisLoopProps {
  /** Exactly four stations, ordered top → right → bottom → left around the loop. */
  stations: readonly SiisStation[];
}

/** Label anchor points around the circle (viewBox 0 0 800 520). */
const NODES = [
  { x: 400, y: 78, anchor: "middle" },
  { x: 588, y: 266, anchor: "start" },
  { x: 400, y: 462, anchor: "middle" },
  { x: 212, y: 266, anchor: "end" },
] as const;

/** Clockwise arcs between stations, radius 170 around (400, 260). */
const ARCS = [
  "M458 100 A170 170 0 0 1 560 202",
  "M560 318 A170 170 0 0 1 458 420",
  "M342 420 A170 170 0 0 1 240 318",
  "M240 202 A170 170 0 0 1 342 100",
];

/**
 * The SIIS Framework — Engine One's operating loop, SPEC §6.3:
 * Signals → Interpretations → Interventions → Systems, drawn as the
 * closed cycle from the AIWO master diagram, with the four definitions
 * ledgered underneath.
 */
export function SiisLoop({ stations }: SiisLoopProps) {
  return (
    <div className="flex flex-col items-center gap-12">
      <svg
        viewBox="0 0 800 520"
        role="img"
        aria-label="The SIIS Framework cycle: Signals, Interpretations, Interventions, Systems — a closed loop."
        className="w-full max-w-xl"
      >
        <defs>
          <marker id="siis-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-g-50" />
          </marker>
        </defs>

        {ARCS.map((d) => (
          <path key={d} d={d} fill="none" strokeWidth="2" className="stroke-g-50" markerEnd="url(#siis-arrow)" />
        ))}

        {stations.map((station, i) => {
          const node = NODES[i];
          if (!node) return null;
          return (
            <text
              key={station.name}
              x={node.x}
              y={node.y}
              textAnchor={node.anchor}
              className="fill-ink font-mono"
              fontSize="17"
              letterSpacing="1"
            >
              {station.code} – {station.name}
            </text>
          );
        })}

        <text x="400" y="248" textAnchor="middle" className="fill-ink font-display" fontSize="40" fontWeight="700">
          SIIS
        </text>
        <text x="400" y="296" textAnchor="middle" className="fill-ink font-display" fontSize="40" fontWeight="700">
          Framework
        </text>
      </svg>

      <div className="grid w-full grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {stations.map((station) => (
          <div key={station.name} className="text-center">
            <p className="font-mono text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-ink">
              {station.code} – {station.name}
            </p>
            <p className="mt-3 font-text text-[0.9375rem] text-g-70">{station.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
