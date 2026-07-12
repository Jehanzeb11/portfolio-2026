"use client";

/**
 * AnimatedHero
 * ──────────────────────────────────────────────────────────────────────────────
 * Full-screen hero with floating tech icons drifting freely across the whole
 * section — no rings, no centre point, no orbit tracks.
 *
 * Each icon follows a smooth sinusoidal Lissajous-style path driven by
 * requestAnimationFrame so it feels organic and never repeats the same path.
 * Motion (framer-motion) handles hover tilt, tooltip, and spotlight states.
 *
 * Layout: left text column + icons float across the ENTIRE section background
 * (including behind the text, at lower opacity so they don't obscure it).
 */

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useId,
  useMemo,
} from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
} from "motion/react";
import type { Variants } from "motion/react";
import Link from "next/link";
import { StarField } from "./StarField";
import { TECH_ICONS, type TechIcon } from "./tech-icons";

// ─── Types ────────────────────────────────────────────────────────────────────

type Cta = { label: string; href: string };

export type AnimatedHeroProps = {
  icons?: TechIcon[];
  title?: string;
  subtitle?: string;
  ctaPrimary?: Cta;
  ctaSecondary?: Cta;
  showStars?: boolean;
};

// ─── Floating path maths ──────────────────────────────────────────────────────
// Each icon gets a unique set of Lissajous parameters so every path is
// different. The icon drifts smoothly and never snaps.
//
// position(t) = centre + A·sin(ωt + φ)
// where A, ω, φ differ per axis and per icon.

type FloatParams = {
  /** base position, 0–100 (percentage of container) */
  cx: number;
  cy: number;
  /** amplitude of drift in px */
  ax: number;
  ay: number;
  /** angular velocity (radians / second) */
  wx: number;
  wy: number;
  /** initial phase offset */
  px: number;
  py: number;
  /** icon size in px */
  size: number;
  /** 0–1, icons near text column are more transparent */
  opacity: number;
};

/** Seeded pseudo-random (LCG) — deterministic between SSR and client */
function lcg(seed: number) {
  let s = seed | 0;
  return () => {
    s = Math.imul(1664525, s) + 1013904223 | 0;
    return (s >>> 0) / 0xffffffff;
  };
}

function buildFloatParams(count: number): FloatParams[] {
  const rand = lcg(0xdeadbeef);
  return Array.from({ length: count }, (_, i) => {
    // spread icons all over — avoid extreme edges
    const cx = 8 + rand() * 84;
    const cy = 8 + rand() * 84;
    return {
      cx,
      cy,
      ax: 28 + rand() * 48,   // drift ±28–76 px horizontally
      ay: 22 + rand() * 40,   // drift ±22–62 px vertically
      // Different speeds so icons never synchronise
      wx: 0.18 + rand() * 0.28,
      wy: 0.14 + rand() * 0.24,
      px: rand() * Math.PI * 2,
      py: rand() * Math.PI * 2,
      size: 40 + Math.floor(rand() * 20), // 40–60 px
      // Icons that start in the left 40% of screen are more ghostly
      // so they don't fight with the text
      opacity: cx < 42 ? 0.18 + rand() * 0.18 : 0.55 + rand() * 0.35,
    };
  });
}

// ─── Motion variants ──────────────────────────────────────────────────────────

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tooltipV: Variants = {
  hidden:  { opacity: 0, y: 8,  scale: 0.88 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.18, ease: "easeOut" } },
  exit:    { opacity: 0, y: 5,  scale: 0.92, transition: { duration: 0.12 } },
};

// ─── FloatingIcon ─────────────────────────────────────────────────────────────

type FloatingIconProps = {
  icon: TechIcon;
  params: FloatParams;
  containerW: number;
  containerH: number;
  isSpotlit: boolean;
  isAnySpotlit: boolean;
  reducedMotion: boolean;
  onSpotlight: (id: string | null) => void;
  tooltipId: string;
  /** elapsed time in seconds, updated every frame */
  timeRef: React.RefObject<number>;
};

function FloatingIcon({
  icon,
  params,
  containerW,
  containerH,
  isSpotlit,
  isAnySpotlit,
  reducedMotion,
  onSpotlight,
  tooltipId,
  timeRef,
}: FloatingIconProps) {
  const [hovered, setHovered] = useState(false);
  const showTooltip = hovered || isSpotlit;

  // Live x/y motion values updated by the RAF loop in the parent
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Track current pixel position so tooltip can flip above/below
  const posRef = useRef({ x: 0, y: 0 });

  const updatePos = useCallback(() => {
    if (reducedMotion) return;
    const t = timeRef.current;
    const nx = (params.cx / 100) * containerW + Math.sin(t * params.wx + params.px) * params.ax;
    const ny = (params.cy / 100) * containerH + Math.sin(t * params.wy + params.py) * params.ay;
    x.set(nx);
    y.set(ny);
    posRef.current = { x: nx, y: ny };
  }, [reducedMotion, params, containerW, containerH, x, y, timeRef]);

  useEffect(() => {
    if (reducedMotion) {
      const sx = (params.cx / 100) * containerW;
      const sy = (params.cy / 100) * containerH;
      x.set(sx);
      y.set(sy);
      posRef.current = { x: sx, y: sy };
      return;
    }
    const handler = () => updatePos();
    window.addEventListener("hero-tick", handler);
    return () => window.removeEventListener("hero-tick", handler);
  }, [reducedMotion, updatePos, params, containerW, containerH, x, y]);

  const dimmed = isAnySpotlit && !isSpotlit;

  // Show tooltip below if icon is in the top 30% of the container
  const tooltipAbove = posRef.current.y > containerH * 0.30;

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: params.size,
        height: params.size,
        zIndex: isSpotlit ? 30 : hovered ? 20 : 10,
        pointerEvents: "auto",
      }}
      animate={
        dimmed
          ? { opacity: 0.08, scale: 0.8 }
          : hovered || isSpotlit
            ? { opacity: 1, scale: 1 }          // always full opacity on interaction
            : { opacity: params.opacity, scale: 1 }
      }
      transition={{ duration: 0.25 }}
    >
      <motion.button
        className="relative h-full w-full cursor-pointer"
        /* Tilt + scale on hover/focus — applies to ALL icons */
        whileHover={reducedMotion ? {} : { scale: 1.35, rotateY: 18, rotateX: -10 }}
        whileFocus={reducedMotion ? {} : { scale: 1.35, rotateY: 18, rotateX: -10 }}
        transition={{ type: "spring", stiffness: 440, damping: 22 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={()   => setHovered(false)}
        onFocus={()      => setHovered(true)}
        onBlur={()       => setHovered(false)}
        onClick={()      => onSpotlight(isSpotlit ? null : icon.id)}
        onKeyDown={(e)   => { if (e.key === "Escape") onSpotlight(null); }}
        aria-pressed={isSpotlit}
        aria-label={`${icon.label}: ${icon.description}`}
        aria-describedby={showTooltip ? tooltipId : undefined}
        style={{
          filter: isSpotlit
            ? `drop-shadow(0 0 12px ${icon.color}) drop-shadow(0 0 28px ${icon.color}88)`
            : hovered
              ? `drop-shadow(0 0 10px ${icon.color}cc)`
              : `drop-shadow(0 2px 6px rgba(0,0,0,0.5))`,
        }}
      >
        {/* Hover glow ring — visible on ALL icons when hovered */}
        {(hovered || isSpotlit) && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1.18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              boxShadow: `0 0 0 2px ${icon.color}88, 0 0 20px ${icon.color}44`,
              borderRadius: "16px",
            }}
            aria-hidden="true"
          />
        )}

        {/* Icon badge */}
        <span
          className="block h-full w-full overflow-hidden rounded-2xl"
          style={{
            boxShadow: isSpotlit
              ? `0 0 0 2px ${icon.color}, 0 8px 32px rgba(0,0,0,0.6)`
              : hovered
                ? `0 0 0 1.5px ${icon.color}66, 0 8px 24px rgba(0,0,0,0.5)`
                : `0 4px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)`,
            transition: reducedMotion ? "none" : "box-shadow 0.2s ease",
          }}
        >
          <icon.Icon />
        </span>

        {/* Tooltip — flips above/below based on icon position */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              id={tooltipId}
              role="tooltip"
              variants={tooltipV}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap"
              style={
                tooltipAbove
                  ? { bottom: "calc(100% + 12px)" }
                  : { top: "calc(100% + 12px)" }
              }
            >
              {/* Caret above tooltip when tooltip is below icon */}
              {!tooltipAbove && (
                <div
                  className="mx-auto mb-0 h-0 w-0"
                  style={{
                    borderLeft:   "5px solid transparent",
                    borderRight:  "5px solid transparent",
                    borderBottom: "5px solid rgba(24,24,27,0.97)",
                  }}
                  aria-hidden="true"
                />
              )}

              <div
                className="rounded-xl border bg-zinc-900/97 px-3 py-2 text-center shadow-2xl backdrop-blur-md"
                style={{
                  minWidth: 132,
                  borderColor: `${icon.color}50`,
                  boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 20px ${icon.color}22`,
                }}
              >
                <p className="text-xs font-bold" style={{ color: icon.color }}>
                  {icon.label}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-zinc-400">
                  {icon.description}
                </p>
              </div>

              {/* Caret below tooltip when tooltip is above icon */}
              {tooltipAbove && (
                <div
                  className="mx-auto mt-0 h-0 w-0"
                  style={{
                    borderLeft:  "5px solid transparent",
                    borderRight: "5px solid transparent",
                    borderTop:   "5px solid rgba(24,24,27,0.97)",
                  }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

// ─── AnimatedHero ─────────────────────────────────────────────────────────────


export function AnimatedHero({
  icons = TECH_ICONS,
  title = "Jehanzeb Siddiqui",
  subtitle = "Full Stack Developer with 3+ years of experience building scalable web and mobile applications using the MERN stack. Open to remote opportunities.",
  ctaPrimary   = { label: "View my work",  href: "/work"    },
  ctaSecondary = { label: "Get in touch",  href: "/contact" },
  showStars = true,
}: AnimatedHeroProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [spotlitId, setSpotlitId]   = useState<string | null>(null);
  const baseId      = useId();

  // Container size — needed to convert % positions → px
  const containerRef = useRef<HTMLElement>(null);
  const [dims, setDims] = useState({ w: 1200, h: 700 });
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setDims({ w: el.offsetWidth, h: el.offsetHeight });
    });
    ro.observe(el);
    setDims({ w: el.offsetWidth, h: el.offsetHeight });
    return () => ro.disconnect();
  }, []);

  // Shared time ref updated by a single RAF loop
  const timeRef = useRef<number>(0);
  useEffect(() => {
    if (reducedMotion) return;
    let last = 0;
    let raf: number;
    function tick(t: number) {
      timeRef.current += Math.min((t - last) / 500, 0.05);
      last = t;
      window.dispatchEvent(new Event("hero-tick"));
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  // Deterministic float params (stable across renders)
  const floatParams = useMemo(() => buildFloatParams(icons.length), [icons.length]);

  // Spotlight — Esc dismisses
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setSpotlitId(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const handleSpotlight = useCallback((id: string | null) => setSpotlitId(id), []);
  const spotlitIcon = icons.find((ic) => ic.id === spotlitId) ?? null;

  return (
    <section
      ref={containerRef}
      className="animated-hero relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050510 0%, #080618 30%, #0c0a24 60%, #050510 100%)",
      }}
      aria-label="Introduction"
    >
      {/* ── Star field ── */}
      {showStars && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <StarField count={320} reducedMotion={reducedMotion} />
        </div>
      )}

      {/* ── Nebula layers ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Left glow — behind the text */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 55% 65% at 20% 55%, rgba(99,102,241,0.14) 0%, transparent 70%)",
        }} />
        {/* Right glow — behind the icons */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 75% 45%, rgba(79,70,229,0.16) 0%, transparent 65%)",
        }} />
        {/* Top-right accent */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 35% 30% at 90% 10%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }} />
        {/* Bottom-left accent */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 40% 35% at 10% 90%, rgba(168,85,247,0.09) 0%, transparent 70%)",
        }} />
        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 45%, rgba(0,0,0,0.5) 100%)",
        }} />
      </div>

      {/* ── Floating icons (full section, behind text at left) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {icons.map((icon, i) => (
          <FloatingIcon
            key={icon.id}
            icon={icon}
            params={floatParams[i]}
            containerW={dims.w}
            containerH={dims.h}
            isSpotlit={spotlitId === icon.id}
            isAnySpotlit={spotlitId !== null}
            reducedMotion={reducedMotion}
            onSpotlight={handleSpotlight}
            tooltipId={`${baseId}-tt-${icon.id}`}
            timeRef={timeRef}
          />
        ))}
      </div>

      {/* ── Spotlit name banner ── */}
      <AnimatePresence>
        {spotlitIcon && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            className="absolute left-1/2 top-6 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-zinc-900/90 px-5 py-2 text-sm backdrop-blur-sm"
            style={{ borderColor: `${spotlitIcon.color}44` }}
          >
            <span className="font-semibold" style={{ color: spotlitIcon.color }}>
              {spotlitIcon.label}
            </span>
            <span className="ml-2 text-xs text-zinc-500">· Esc to dismiss</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero text content ── */}
      <div className="relative z-20 mx-auto max-w-full px-6 py-32 lg:py-0 lg:pl-16 flex justify-center text-center" style={{ pointerEvents: "none" }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex max-w-6xl flex-col items-center justify-center gap-3"
          style={{ pointerEvents: "auto" }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-sm text-center uppercase tracking-[0.22em] text-indigo-400"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mb-5 text-center text-6xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl xl:text-8xl"
            style={{ textShadow: "0 0 80px rgba(99,102,241,0.35)" }}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-lg text-lg text-center leading-relaxed text-zinc-400"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href={ctaPrimary.href}
              className="rounded-full bg-indigo-600 px-9 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/50 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {ctaPrimary.label}
            </Link>
            <Link
              href={ctaSecondary.href}
              className="rounded-full border border-white/15 px-9 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-indigo-400/60 hover:bg-indigo-950/40 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {ctaSecondary.label}
            </Link>
          </motion.div>

          {/* ── Social / contact links ── */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {/* Phone */}
            <a
              href="tel:+923452077512"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="Phone number"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.2 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +92-345-2077512
            </a>

            {/* Email */}
            <a
              href="mailto:jehanzebsiddiqui20@gmail.com"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="Email address"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              jehanzebsiddiqui20@gmail.com
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Jehanzeb11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="GitHub profile"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              github.com/Jehanzeb11
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jehanzeb-siddiqui-b02b38266"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            {/* Portfolio */}
            <a
              href="https://jehanzeb.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              aria-label="Portfolio website"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              jehanzeb.netlify.app
            </a>
          </motion.div>
{/* 
          <motion.p variants={fadeUp} className="mt-6 text-xs text-white/20">
            Hover any icon · Click to spotlight · Esc to dismiss
          </motion.p> */}
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 9, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-1.5 w-0.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
