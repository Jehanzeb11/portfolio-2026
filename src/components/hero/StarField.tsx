"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;      // 0-1 normalised
  y: number;
  r: number;
  baseOpacity: number;
  twinkleSpeed: number; // radians/sec — drives sine opacity
  twinklePhase: number; // initial phase offset
  layer: number;        // 0=far, 1=mid, 2=near (parallax depth)
};

type Props = {
  count?: number;
  reducedMotion?: boolean;
};

/**
 * StarField
 * ──────────────────────────────────────────────────────────────────────────
 * Canvas-based deep-space background with:
 *  • 3 parallax depth layers (far/mid/near) responding to mouse
 *  • Per-star sine-wave twinkling at different speeds
 *  • Nebula colour wash — some stars are tinted blue/purple/pink
 *  • A subtle radial nebula cloud baked into the canvas gradient
 */
export function StarField({ count = 280, reducedMotion = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: 0, y: 0 });
  const rafRef    = useRef<number>(0);
  const timeRef   = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── Build star catalogue ── */
    const stars: Star[] = Array.from({ length: count }, () => {
      const layer = Math.floor(Math.random() * 3);
      return {
        x: Math.random(),
        y: Math.random(),
        // Near stars are bigger
        r: layer === 2
          ? Math.random() * 1.6 + 0.8
          : layer === 1
            ? Math.random() * 1.1 + 0.4
            : Math.random() * 0.7 + 0.2,
        baseOpacity: layer === 2
          ? Math.random() * 0.5 + 0.45
          : layer === 1
            ? Math.random() * 0.4 + 0.25
            : Math.random() * 0.3 + 0.1,
        twinkleSpeed: Math.random() * 1.2 + 0.4,
        twinklePhase: Math.random() * Math.PI * 2,
        layer,
      };
    });

    /* Tinted "coloured" stars — 15% of stars */
    const TINTS = [
      "rgba(150,180,255,",    // cold blue
      "rgba(200,160,255,",    // violet
      "rgba(255,200,220,",    // pink
      "rgba(150,255,220,",    // teal
    ];
    const tintedIndices = new Set<number>();
    const tintedColors  = new Map<number, string>();
    while (tintedIndices.size < Math.floor(count * 0.15)) {
      const i = Math.floor(Math.random() * count);
      tintedIndices.add(i);
      tintedColors.set(i, TINTS[Math.floor(Math.random() * TINTS.length)]);
    }

    let W = 0, H = 0;
    let lastT = 0;

    function resize() {
      if (!canvas) return;
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    /* ── Nebula gradient (painted once per resize into an offscreen canvas) ── */
    function makeNebulaGradient() {
      // Deep space base
      const bg = ctx!.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.75);
      bg.addColorStop(0,    "rgba(30, 20, 80, 0.0)");   // transparent centre
      bg.addColorStop(0.35, "rgba(20, 10, 60, 0.0)");
      bg.addColorStop(1,    "rgba(0,   0, 10, 0.0)");
      return bg;
    }

    function draw(t: number) {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      if (!reducedMotion) timeRef.current += dt;

      if (!ctx || W === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      /* Dark space fill */
      ctx.fillStyle = "#00000000";
      ctx.clearRect(0, 0, W, H);

      /* Parallax offsets per layer */
      const mx = reducedMotion ? 0 : mouseRef.current.x;
      const my = reducedMotion ? 0 : mouseRef.current.y;
      const layerShift = [
        { dx: mx * 6,  dy: my * 6  },  // far   — subtle
        { dx: mx * 14, dy: my * 14 },  // mid
        { dx: mx * 24, dy: my * 24 },  // near  — most movement
      ];

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const shift = layerShift[s.layer];

        let px = s.x * W + shift.dx;
        let py = s.y * H + shift.dy;
        // wrap around edges
        px = ((px % W) + W) % W;
        py = ((py % H) + H) % H;

        /* Twinkling: sine wave on opacity */
        const twinkle = reducedMotion
          ? 1
          : 0.7 + 0.3 * Math.sin(timeRef.current * s.twinkleSpeed + s.twinklePhase);
        const opacity = s.baseOpacity * twinkle;

        const tintBase = tintedColors.get(i);
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fillStyle = tintBase
          ? `${tintBase}${opacity.toFixed(2)})`
          : `rgba(255,255,255,${opacity.toFixed(2)})`;
        ctx.fill();

        /* Soft bloom on near-layer bright stars */
        if (s.layer === 2 && opacity > 0.6) {
          ctx.beginPath();
          ctx.arc(px, py, s.r * 2.5, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(px, py, 0, px, py, s.r * 2.5);
          const col = tintBase ?? "rgba(255,255,255,";
          grd.addColorStop(0,   `${col}${(opacity * 0.25).toFixed(2)})`);
          grd.addColorStop(1,   `${col}0)`);
          ctx.fillStyle = grd;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [count, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
