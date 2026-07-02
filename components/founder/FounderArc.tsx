import { cn } from "@/lib/cn";
import { INFINITY_PATH } from "@/components/brand/infinityPath";

interface FounderArcProps {
  className?: string;
}

/**
 * The founder arc — the hero image of the /founder page, drawn from the
 * headline itself: one gold ledger line that is made, lost, remade, and
 * finally measured as a pulse in blood, resolving into the ∞ mark.
 */
export function FounderArc({ className }: FounderArcProps) {
  const gold = "var(--accent-on-ink)";
  const grid = "rgba(255,255,255,0.07)";
  const separator = "rgba(255,255,255,0.14)";
  const label = "rgba(255,255,255,0.55)";

  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="One line: made a billion, lost it, remade himself — then measured as a heartbeat, in blood."
      className={cn("block h-full w-full", className)}
    >
      {/* ledger grid */}
      {[200, 420, 640, 860].map((y) => (
        <line key={y} x1="60" y1={y} x2="1540" y2={y} stroke={grid} strokeWidth="1" />
      ))}
      {/* chapter separators */}
      {[460, 800, 1140].map((x) => (
        <line
          key={x}
          x1={x}
          y1="140"
          x2={x}
          y2="860"
          stroke={separator}
          strokeWidth="1"
          strokeDasharray="1 7"
        />
      ))}

      {/* the one line: rise — crash — rise — pulse */}
      <path
        d="M80 840
           C 220 820, 330 240, 420 180
           C 500 120, 620 620, 700 845
           C 760 880, 780 870, 800 840
           C 900 780, 980 460, 1100 330
           L 1150 330
           L 1170 330 L 1185 360 L 1205 250 L 1225 400 L 1245 330
           L 1300 330
           L 1320 345 L 1340 270 L 1360 380 L 1380 330
           L 1424 328"
        fill="none"
        stroke={gold}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* origin */}
      <circle cx="80" cy="840" r="5" fill={gold} />
      {/* resolution: the mark */}
      <g transform="translate(1438 297) scale(0.082)">
        <path d={INFINITY_PATH} fill={gold} />
      </g>

      {/* peak annotation */}
      <text
        x="420"
        y="140"
        textAnchor="middle"
        className="font-mono"
        fontSize="24"
        letterSpacing="2"
        fill={gold}
      >
        $1B+
      </text>

      {/* chapter labels — the headline, verbatim */}
      <text x="260" y="932" textAnchor="middle" className="font-mono" fontSize="24" letterSpacing="2.5" fill={label}>
        MADE A BILLION.
      </text>
      <text x="630" y="932" textAnchor="middle" className="font-mono" fontSize="24" letterSpacing="2.5" fill={label}>
        LOST IT.
      </text>
      <text x="970" y="932" textAnchor="middle" className="font-mono" fontSize="24" letterSpacing="2.5" fill={label}>
        REMADE HIMSELF.
      </text>
      <text x="1330" y="932" textAnchor="middle" className="font-mono" fontSize="24" letterSpacing="2.5" fill={label}>
        MEASURED IT IN BLOOD.
      </text>
    </svg>
  );
}
