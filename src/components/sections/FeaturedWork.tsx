"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

const featured = PROJECTS.filter((p) => p.featured);

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28" aria-label="Featured work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="mb-1 font-mono text-xs uppercase tracking-widest text-indigo-500">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Featured projects
          </h2>
        </div>
        <Link
          href="/work"
          className="text-sm font-medium text-indigo-500 underline-offset-4 hover:underline"
        >
          View all →
        </Link>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
