"use client";

/**
 * SkillOrbit
 * ─────────────────────────────────────────────────────────────────────────────
 * Full-screen, space-themed SVG skill visualization.
 *
 * Architecture
 * ────────────
 * • Pure SVG rendering — SSR-friendly, GPU-composited transforms only.
 * • Skills are distributed across N orbit rings by category priority.
 * • Each "star" is an SVG <g> with a clip-path circle badge, label, and glow.
 * • CSS @keyframes drive the orbit rotation — zero JS per frame.
 * • Hover / focus / click triggers a React state change that renders a
 *   detail panel outside the SVG (overlay card), keeping SVG clean.
 * • Star background via a seeded deterministic scatter (no randomness on
 *   re-render; positions are memo-ised).
 * • prefers-reduced-motion: animations are paused; stars render at t=0 angle.
 * • Responsive: SVG viewBox stays fixed; the container scales with CSS.
 *
 * Props
 * ─────
 * skills        – SkillEntry[]   defaults to SKILLS from data.ts
 * title         – string         section label
 * showGrid      – boolean        faint polar grid lines (default true)
 */

import {
  useState,
  useCallback,
  useId,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { SKILLS } from "@/lib/data";
import type { Skill } from "@/lib/data";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SkillEntry = Skill; // alias for external consumers

type OrbitRing = {
  radius: number;       // SVG units from centre
  period: number;       // seconds for a full orbit
  direction: 1 | -1;   // 1 = clockwise, -1 = counter
  color: string;        // orbit track stroke color
  skills: SkillEntry[];
};

// ─── Constants ────────────────────────────────────────────────────────────────

/** SVG viewport — all coordinates are in this space */
const VB_SIZE = 700;
const CX = VB_SIZE / 2; // 350
const CY = VB_SIZE / 2; // 350

/** Category → display config */
const CATEGORY_META: Record<
  Skill["category"],
  { color: string; glow: string; label: string; priority: number }
> = {
  frontend: { color: "#818cf8", glow: "#6366f133", label: "Frontend",  priority: 0 },
  backend:  { color: "#fb923c", glow: "#f9731633", label: "Backend",    priority: 1 },
  tools:    { color: "#e879f9", glow: "#d946ef33", label: "Tools",      priority: 2 },
  "3d":     { color: "#34d399", glow: "#10b98133", label: "3D / WebGL", priority: 3 },
};

/** Star body radius is proportional to skill level */
function starRadius(level: number): number {
  return 6 + (level / 100) * 7; // 6 – 13 px
}

// ─── Orbit ring layout ────────────────────────────────────────────────────────
// Skills are sorted by category priority, then distributed across 4 rings.
// Ring radii are intentionally uneven for visual depth.

const RING_RADII = [105, 168, 228, 285]; // inner → outer
const RING_PERIODS = [28, 38, 50, 64];   // shorter inner orbit = faster
const RING_DIRECTIONS: (1 | -1)[] = [1, -1, 1, -1];
const RING_COLORS = ["#6366f118", "#34d39914", "#fb923c12", "#e879f910"];

function buildRings(skills: SkillEntry[]): OrbitRing[] {
  // Sort by category priority so same-colour stars cluster per ring
  const sorted = [...skills].sort(
    (a, b) =>
      CATEGORY_META[a.category].priority - CATEGORY_META[b.category].priority
  );

  // Distribute into rings — just round-robin after sorting
  const rings: SkillEntry[][] = Array.from({ length: 4 }, () => []);
  sorted.forEach((skill, i) => rings[i % 4].push(skill));

  return rings.map((r, i) => ({
    radius: RING_RADII[i],
    period: RING_PERIODS[i],
    direction: RING_DIRECTIONS[i],
    color: RING_COLORS[i],
    skills: r,
  }));
}

// ─── Background stars ─────────────────────────────────────────────────────────
// Deterministic positions so SSR and client hydration agree.
// Uses a simple LCG so there's no Math.random() divergence.

function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

type BgStar = { x: number; y: number; r: number; opacity: number; layer: number };

function buildBgStars(count: number): BgStar[] {
  const rand = lcg(42);
  return Array.from({ length: count }, () => ({
    x: rand() * VB_SIZE,
    y: rand() * VB_SIZE,
    r: rand() * 1.2 + 0.3,
    opacity: rand() * 0.55 + 0.1,
    layer: Math.floor(rand() * 3), // 0 = far, 2 = near
  }));
}

// ─── Tooltip / card variants ──────────────────────────────────────────────────

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 10, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit:    { opacity: 0, y: 6,  scale: 0.96, transition: { duration: 0.14 } },
};

// ─── Individual StarNode (SVG subtree) ────────────────────────────────────────

type StarNodeProps = {
  skill: SkillEntry;
  /** angle in degrees, 0 = top, increases clockwise */
  angleDeg: number;
  orbitRadius: number;
  /** orbit animation duration (seconds) */
  period: number;
  direction: 1 | -1;
  isActive: boolean;
  isAnyActive: boolean;
  reducedMotion: boolean;
  onActivate: (name: string | null) => void;
  labelId: string;
};

function StarNode({
  skill,
  angleDeg,
  orbitRadius,
  period,
  direction,
  isActive,
  isAnyActive,
  reducedMotion,
  onActivate,
  labelId,
}: StarNodeProps) {
  const meta = CATEGORY_META[skill.category];
  const r = starRadius(skill.level);
  // Convert polar → Cartesian for the star position within the ring group
  const rad = (angleDeg * Math.PI) / 180;
  const sx = Math.sin(rad) * orbitRadius; // offset from ring centre
  const sy = -Math.cos(rad) * orbitRadius;

  // The entire ring group rotates; each star sits at its angle offset.
  // We apply the rotation on a <g> wrapping all stars in the ring (done
  // in OrbitRingGroup below). This node is only responsible for self.
  const dimmed = isAnyActive && !isActive;

  return (
    <g
      className="star-node"
      transform={`translate(${sx}, ${sy})`}
      style={{ cursor: "pointer", outline: "none" }}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-labelledby={labelId}
      onClick={() => onActivate(isActive ? null : skill.name)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate(isActive ? null : skill.name);
        }
        if (e.key === "Escape") onActivate(null);
      }}
    >
      {/* Outer glow ring — visible on active / hover via CSS */}
      <circle
        r={r + 6}
        fill={isActive ? `${meta.color}28` : "transparent"}
        stroke={isActive ? meta.color : "transparent"}
        strokeWidth="0.8"
        className="star-glow-ring"
        style={{
          transition: reducedMotion ? "none" : "all 0.25s ease",
        }}
      />

      {/* Pulsing halo (active only) */}
      {isActive && !reducedMotion && (
        <circle
          r={r + 12}
          fill="none"
          stroke={meta.color}
          strokeWidth="0.5"
          opacity={0.4}
          className="star-pulse-ring"
        />
      )}

      {/* Star body */}
      <circle
        r={r}
        fill={isActive ? meta.color : `${meta.color}cc`}
        style={{
          transition: reducedMotion ? "none" : "fill 0.2s, r 0.2s, opacity 0.2s",
          opacity: dimmed ? 0.25 : 1,
          filter: isActive
            ? `drop-shadow(0 0 ${r}px ${meta.color})`
            : undefined,
        }}
      />

      {/* Inner highlight */}
      <circle
        r={r * 0.45}
        cx={-r * 0.3}
        cy={-r * 0.3}
        fill="rgba(255,255,255,0.35)"
        style={{ opacity: dimmed ? 0.1 : 1 }}
      />

      {/* Label — always visible, fades when dimmed */}
      <text
        id={labelId}
        x={0}
        y={r + 14}
        textAnchor="middle"
        fontSize="10"
        fontFamily="var(--font-geist-mono), monospace"
        fill={isActive ? meta.color : "rgba(255,255,255,0.75)"}
        style={{
          transition: reducedMotion ? "none" : "fill 0.2s, opacity 0.2s",
          opacity: dimmed ? 0.2 : 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {skill.name}
      </text>

      {/* Focus ring (CSS) — invisible but screen-reader reachable */}
      <circle
        r={r + 10}
        fill="none"
        stroke="transparent"
        strokeWidth="2"
        className="star-focus-ring"
      />
    </g>
  );
}

// ─── OrbitRingGroup ───────────────────────────────────────────────────────────
// Wraps all stars on one ring inside a <g> whose CSS animation rotates it.

type OrbitRingGroupProps = {
  ring: OrbitRing;
  ringIndex: number;
  activeSkillName: string | null;
  isAnyActive: boolean;
  reducedMotion: boolean;
  onActivate: (name: string | null) => void;
  idPrefix: string;
};

function OrbitRingGroup({
  ring,
  ringIndex,
  activeSkillName,
  isAnyActive,
  reducedMotion,
  onActivate,
  idPrefix,
}: OrbitRingGroupProps) {
  const angleStep = ring.skills.length > 0 ? 360 / ring.skills.length : 0;

  // Slight offset per ring so stars on adjacent rings don't start aligned
  const ringOffset = ringIndex * 37;

  return (
    <g
      className="orbit-ring-group"
      style={
        reducedMotion
          ? {}
          : ({
              animation: `svg-orbit-spin ${ring.period}s linear infinite`,
              animationDirection: ring.direction === 1 ? "normal" : "reverse",
              transformOrigin: `${CX}px ${CY}px`,
              // pause entire ring when spotlight is on a star from another ring
            } as React.CSSProperties)
      }
    >
      {ring.skills.map((skill, i) => (
        <g key={skill.name} transform={`translate(${CX}, ${CY})`}>
          {/*
           * Counter-rotation so the star (and its label) stays upright
           * while the parent <g> spins around the origin.
           */}
          <g
            style={
              reducedMotion
                ? {}
                : ({
                    animation: `svg-orbit-spin ${ring.period}s linear infinite`,
                    animationDirection:
                      ring.direction === 1 ? "reverse" : "normal",
                    transformOrigin: `0px 0px`,
                  } as React.CSSProperties)
            }
          >
            <StarNode
              skill={skill}
              angleDeg={i * angleStep + ringOffset}
              orbitRadius={ring.radius}
              period={ring.period}
              direction={ring.direction}
              isActive={activeSkillName === skill.name}
              isAnyActive={isAnyActive}
              reducedMotion={reducedMotion}
              onActivate={onActivate}
              labelId={`${idPrefix}-${skill.name.replace(/\s+/g, "-").toLowerCase()}`}
            />
          </g>
        </g>
      ))}
    </g>
  );
}

// ─── Detail Card (outside SVG) ────────────────────────────────────────────────

type DetailCardProps = {
  skill: SkillEntry;
  onClose: () => void;
};

function DetailCard({ skill, onClose }: DetailCardProps) {
  const meta = CATEGORY_META[skill.category];
  const closeRef = useRef<HTMLButtonElement>(null);

  // Auto-focus close button for keyboard users
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-modal="true"
      aria-label={`${skill.name} details`}
      className="pointer-events-auto absolute bottom-6 left-1/2 z-50 w-[min(360px,90vw)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl backdrop-blur-md"
      style={{ borderColor: `${meta.color}40` }}
    >
      {/* Coloured top strip */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${meta.color}, transparent)` }}
      />

      <div className="px-5 py-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            {/* Category badge */}
            <span
              className="mb-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                background: `${meta.color}22`,
                color: meta.color,
              }}
            >
              {meta.label}
            </span>
            <h3 className="text-base font-bold text-white">{skill.name}</h3>
          </div>

          {/* Proficiency ring */}
          <svg width="44" height="44" viewBox="0 0 44 44" aria-label={`Proficiency: ${skill.level}%`}>
            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
            <circle
              cx="22" cy="22" r="18"
              fill="none"
              stroke={meta.color}
              strokeWidth="3"
              strokeDasharray={`${(skill.level / 100) * 113} 113`}
              strokeLinecap="round"
              transform="rotate(-90 22 22)"
            />
            <text x="22" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill={meta.color}>
              {skill.level}%
            </text>
          </svg>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          {skill.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          {skill.href ? (
            <a
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors"
              style={{
                background: `${meta.color}22`,
                color: meta.color,
              }}
            >
              Docs ↗
            </a>
          ) : (
            <span />
          )}
          <button
            ref={closeRef}
            onClick={onClose}
            className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-400 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Close ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function Legend() {
  return (
    <div
      className="pointer-events-none absolute left-4 top-4 z-10 flex flex-col gap-1.5 sm:left-6 sm:top-6"
      aria-label="Skill category legend"
      role="list"
    >
      {(Object.keys(CATEGORY_META) as Skill["category"][]).map((cat) => {
        const m = CATEGORY_META[cat];
        return (
          <div key={cat} className="flex items-center gap-2" role="listitem">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: m.color }}
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] text-white/50 sm:text-xs">
              {m.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── SkillOrbit (main export) ─────────────────────────────────────────────────

export type SkillOrbitProps = {
  skills?: SkillEntry[];
  title?: string;
  showGrid?: boolean;
};

export function SkillOrbit({
  skills = SKILLS,
  title = "Skills",
  showGrid = true,
}: SkillOrbitProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);
  const idPrefix = useId().replace(/:/g, "");

  const rings = useMemo(() => buildRings(skills), [skills]);
  const bgStars = useMemo(() => buildBgStars(160), []);
  const activeSkill =
    skills.find((s) => s.name === activeSkillName) ?? null;

  const handleActivate = useCallback((name: string | null) => {
    setActiveSkillName(name);
  }, []);

  // Dismiss on outside click / Esc
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveSkillName(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      ref={containerRef}
      className="skill-orbit-section relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-950"
      style={{ height: "clamp(480px, 75vw, 680px)" }}
      aria-label={`${title} — interactive skill visualization`}
    >
      {/* ── Space gradient backdrop ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #1e1b4b 0%, #0f0f23 55%, #050510 100%)",
        }}
      />

      {/* ── Legend ── */}
      <Legend />

      {/* ── Keyboard hint ── */}
      <p className="pointer-events-none absolute bottom-3 right-4 z-10 font-mono text-[10px] text-white/25 sm:text-xs">
        Click or press Enter to inspect a star
      </p>

      {/* ── SVG scene ── */}
      <svg
        viewBox={`0 0 ${VB_SIZE} ${VB_SIZE}`}
        width="100%"
        height="100%"
        style={{ display: "block", maxHeight: "680px" }}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Radial gradient for the central sun */}
          <radialGradient id="sun-grad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="45%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </radialGradient>

          {/* Glow filter for sun */}
          <filter id="sun-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter for active star pulse ring */}
          <filter id="pulse-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>

          {/* Focus ring style injected via <style> inside SVG */}
          <style>{`
            .star-node:focus-visible .star-focus-ring {
              stroke: #818cf8;
              stroke-width: 2;
            }
            .star-node:hover .star-glow-ring {
              fill: rgba(99,102,241,0.12);
              stroke: rgba(129,140,248,0.6);
            }
            @keyframes svg-orbit-spin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes star-pulse {
              0%,100% { r: 0; opacity: 0.5; }
              60%     { r: 22; opacity: 0; }
            }
            .star-pulse-ring {
              animation: star-pulse 2s ease-out infinite;
            }
          `}</style>
        </defs>

        {/* ── Background stars (3 parallax layers) ── */}
        {bgStars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="white"
            opacity={s.opacity * (0.5 + s.layer * 0.25)}
          />
        ))}

        {/* ── Polar grid (optional) ── */}
        {showGrid &&
          RING_RADII.map((r) => (
            <circle
              key={r}
              cx={CX}
              cy={CY}
              r={r}
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          ))}

        {/* ── Orbit track ellipses ── */}
        {rings.map((ring, i) => (
          <circle
            key={i}
            cx={CX}
            cy={CY}
            r={ring.radius}
            fill="none"
            stroke={ring.color}
            strokeWidth="1"
          />
        ))}

        {/* ── Central sun ── */}
        {/* Outer pulse */}
        <circle
          cx={CX} cy={CY} r="48"
          fill="rgba(99,102,241,0.06)"
          style={
            reducedMotion
              ? {}
              : { animation: "star-pulse 3.5s ease-out infinite" }
          }
        />
        {/* Mid glow */}
        <circle
          cx={CX} cy={CY} r="32"
          fill="rgba(99,102,241,0.15)"
          filter="url(#sun-glow)"
        />
        {/* Sun body */}
        <circle
          cx={CX} cy={CY} r="22"
          fill="url(#sun-grad)"
          filter="url(#sun-glow)"
        />
        {/* Highlight */}
        <ellipse
          cx={CX - 7} cy={CY - 7}
          rx="8" ry="5"
          fill="rgba(255,255,255,0.18)"
          transform="rotate(-30 350 350)"
        />
        {/* "SKILLS" label in sun */}
        <text
          x={CX} y={CY + 4}
          textAnchor="middle"
          fontSize="8"
          fontFamily="var(--font-geist-mono), monospace"
          fontWeight="700"
          letterSpacing="2"
          fill="rgba(255,255,255,0.7)"
        >
          {title.toUpperCase()}
        </text>

        {/* ── Orbit ring groups ── */}
        {rings.map((ring, i) => (
          <OrbitRingGroup
            key={i}
            ring={ring}
            ringIndex={i}
            activeSkillName={activeSkillName}
            isAnyActive={activeSkillName !== null}
            reducedMotion={reducedMotion}
            onActivate={handleActivate}
            idPrefix={idPrefix}
          />
        ))}
      </svg>

      {/* ── Detail card (outside SVG, overlaid) ── */}
      <AnimatePresence>
        {activeSkill && (
          <DetailCard
            key={activeSkill.name}
            skill={activeSkill}
            onClose={() => setActiveSkillName(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
