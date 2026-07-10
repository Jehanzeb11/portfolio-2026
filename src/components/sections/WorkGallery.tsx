"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";
import type { Project } from "@/lib/data";

const CATEGORIES: Array<"all" | Project["category"]> = [
  "all",
  "web",
  "3d",
  "tool",
  "mobile",
];

export function WorkGallery() {
  const [active, setActive] = useState<"all" | Project["category"]>("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16" aria-label="All projects">
      {/* Filter tabs */}
      <div
        className="mb-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`relative rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 ${
              active === cat
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {active === cat && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-indigo-600"
                style={{ zIndex: -1 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
