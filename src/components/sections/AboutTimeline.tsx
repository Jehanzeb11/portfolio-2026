"use client";

import { motion } from "motion/react";
import { TIMELINE } from "@/lib/data";
import { SkillOrbit } from "@/components/skills/SkillOrbit";

// ─── Timeline entry ───────────────────────────────────────────────────────────
function TimelineEntry({
  item,
  index,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative pl-8"
    >
      {/* dot */}
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${item.type === "work"
            ? "border-indigo-500 bg-indigo-500"
            : "border-zinc-400 bg-transparent"
          }`}
      />
      {/* connector line — hidden on last child */}
      <span className="absolute left-[5px] top-4 h-full w-px bg-zinc-200 dark:bg-zinc-700" />

      <p className="mb-0.5 font-mono text-xs text-indigo-500">{item.year}</p>
      <h3 className="font-semibold text-zinc-900 dark:text-white">
        {item.title}
      </h3>
      <p className="mb-1 text-sm text-zinc-500">{item.company}</p>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>
    </motion.div>
  );
}

// ─── AboutTimeline ────────────────────────────────────────────────────────────
export function AboutTimeline() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* ── Top grid: bio + timeline ── */}
      <div className="grid gap-20 lg:grid-cols-2">
        {/* Left — bio */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">
              About
            </p>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              Who I am
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos; am FullStack Developer with 3+ years of experience building scalable web and mobile application susing the MERN
              stack(MongoDB,Express.js,React.js,Node.js). Proficient in TypeScript, Next.js, ReactNative, and ElasticSearch. Proven track record delivering full-stack portals, projectmanagementsystems, and socialmedia platforms in fast-paced production environments. Open to remote and On-site opportunities.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <TimelineEntry key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Right — label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">
            Skills
          </p>
          <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Tech I use
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Click any star to learn more. Orbit speed reflects recency of use;
            star size reflects proficiency level.
          </p>
        </motion.div>
      </div>

      {/* ── Full-width orbit visualization ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-16"
      >
        <SkillOrbit />
      </motion.div>
    </div>
  );
}
