interface TickCircleProps {
  total: number;
  filled: number;
  size?: number;
  onInk?: boolean;
  className?: string;
}

/**
 * The hairline-circle glyph — SPEC §4.4: "the Circle / the cap of 12 — rendered as 12 tick
 * marks on a circle, seats filled = solid ticks." Also reused for the 60-seat summit glyph.
 */
export function TickCircle({ total, filled, size = 160, onInk = false, className }: TickCircleProps) {
  const radius = size / 2 - 10;
  const center = size / 2;
  const stroke = onInk ? "#B8B8B8" : "#8A8A8A";
  const solid = onInk ? "#FFFFFF" : "#0A0A0A";

  const ticks = Array.from({ length: total }, (_, i) => {
    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
    const outer = radius;
    const inner = radius - 10;
    const x1 = center + Math.cos(angle) * outer;
    const y1 = center + Math.sin(angle) * outer;
    const x2 = center + Math.cos(angle) * inner;
    const y2 = center + Math.sin(angle) * inner;
    return { x1, y1, x2, y2, isFilled: i < filled };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      role="img"
      aria-label={`${filled} of ${total} seats filled`}
      className={className}
    >
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke={t.isFilled ? solid : stroke}
          strokeWidth={t.isFilled ? 2 : 1.5}
        />
      ))}
    </svg>
  );
}
