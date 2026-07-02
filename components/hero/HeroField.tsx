"use client";

import { useEffect, useRef } from "react";

/**
 * THE FIELD — the hero's ambient motion, in the spirit of antigravity.google but
 * on our monochrome + Signal-Gold system.
 *
 * A full-bleed field of short "runner" dashes, evenly distributed across the whole
 * hero (grid + jitter → even gaps, no clumping, full coverage). Each dash is
 * oriented along a smooth, slowly-evolving flow field and slides gently back and
 * forth along it, so the whole field breathes and flows while staying evenly
 * spread. Text reads cleanly on top because the dashes are small, low-contrast,
 * and crisply cleared each frame (no trails).
 *
 * Cursor-reactive: dashes near the pointer are pushed out, lengthen, and brighten,
 * and a soft Signal-Gold "signal" glow tracks the cursor. Dependency-free Canvas2D,
 * paused while hidden; the parent swaps in a static mark under reduced motion.
 */

const INK = "10, 10, 10";
const GOLD = "184, 134, 58";
const GOLD_SHARE = 0.17;
const CURSOR_RADIUS = 170;

type Dash = {
  hx: number; // home position
  hy: number;
  phase: number; // oscillation phase along the flow line
  speed: number;
  amp: number; // slide amplitude
  len: number; // half-length of the dash
  baseAlpha: number;
  gold: boolean;
  dx: number; // cursor displacement (spring)
  dy: number;
  vx: number;
  vy: number;
};

/** Smooth, slowly-evolving flow-field angle at a point — curl-like, organic. */
function flowAngle(x: number, y: number, t: number) {
  const nx = x / 260;
  const ny = y / 260;
  return (
    Math.PI *
    (Math.sin(nx + t * 0.05) + Math.cos(ny - t * 0.04) + 0.5 * Math.sin((nx + ny) * 0.7 + t * 0.03))
  );
}

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0,
      height = 0,
      dpr = 1;
    let dashes: Dash[] = [];
    const ptr = { x: 0, y: 0, tx: 0, ty: 0, influence: 0, target: 0 };

    function build() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.max(1, Math.round(width * dpr));
      canvas!.height = Math.max(1, Math.round(height * dpr));
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cell = width < 720 ? 52 : 62;
      const cols = Math.ceil(width / cell) + 1;
      const rows = Math.ceil(height / cell) + 1;
      dashes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const jitter = cell * 0.34;
          dashes.push({
            hx: c * cell + (Math.random() - 0.5) * jitter,
            hy: r * cell + (Math.random() - 0.5) * jitter,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.6,
            amp: cell * (0.22 + Math.random() * 0.22),
            len: 4 + Math.random() * 4,
            baseAlpha: 0.2 + Math.random() * 0.28,
            gold: Math.random() < GOLD_SHARE,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0,
          });
        }
      }
    }
    build();

    const onMove = (e: PointerEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ptr.tx = x;
      ptr.ty = y;
      ptr.target = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height ? 1 : 0;
    };
    const onLeave = () => {
      ptr.target = 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    let raf = 0,
      last = performance.now(),
      intro = 0,
      lastLayout = 0,
      clock = 0;

    function frame(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (document.hidden) {
        raf = requestAnimationFrame(frame);
        return;
      }
      if (now - lastLayout > 500) {
        lastLayout = now;
        const parent = canvas!.parentElement;
        if (parent && (parent.clientWidth !== width || parent.clientHeight !== height)) build();
      }

      clock += dt;
      intro = Math.min(1, intro + dt / 1.1);
      const ease = 1 - Math.pow(1 - intro, 3);

      ptr.x += (ptr.tx - ptr.x) * 0.14;
      ptr.y += (ptr.ty - ptr.y) * 0.14;
      ptr.influence += (ptr.target - ptr.influence) * 0.06;

      ctx!.clearRect(0, 0, width, height);
      ctx!.lineCap = "round";

      for (const d of dashes) {
        const ang = flowAngle(d.hx, d.hy, clock);
        const ux = Math.cos(ang);
        const uy = Math.sin(ang);
        // gentle slide back-and-forth along the flow line → fluid, stays home
        const slide = Math.sin(d.phase + clock * d.speed) * d.amp;
        let x = d.hx + ux * slide;
        let y = d.hy + uy * slide;

        // cursor repulsion + brighten
        let boost = 0;
        if (ptr.influence > 0.01) {
          const ox = x + d.dx - ptr.x;
          const oy = y + d.dy - ptr.y;
          const dist = Math.hypot(ox, oy);
          if (dist < CURSOR_RADIUS && dist > 0.01) {
            const f = (1 - dist / CURSOR_RADIUS) * ptr.influence;
            d.vx += (ox / dist) * f * 34 * dt * 12;
            d.vy += (oy / dist) * f * 34 * dt * 12;
            boost = f;
          }
        }
        d.vx += -d.dx * 0.1;
        d.vy += -d.dy * 0.1;
        d.vx *= 0.8;
        d.vy *= 0.8;
        d.dx += d.vx;
        d.dy += d.vy;
        x += d.dx;
        y += d.dy;

        const half = (d.len + boost * 5) * ease;
        const alpha = Math.min(0.85, (d.baseAlpha + boost * 0.5) * ease);

        ctx!.beginPath();
        ctx!.moveTo(x - ux * half, y - uy * half);
        ctx!.lineTo(x + ux * half, y + uy * half);
        ctx!.strokeStyle = `rgba(${d.gold ? GOLD : INK}, ${alpha})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      }

      // soft Signal-Gold glow tracking the cursor
      if (ptr.influence > 0.02) {
        const rad = 180;
        const g = ctx!.createRadialGradient(ptr.x, ptr.y, 0, ptr.x, ptr.y, rad);
        g.addColorStop(0, `rgba(${GOLD}, ${0.08 * ptr.influence})`);
        g.addColorStop(1, `rgba(${GOLD}, 0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(ptr.x, ptr.y, rad, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="A field of small runners drifting across the hero, reacting to the cursor."
      className="absolute inset-0 h-full w-full"
    />
  );
}
