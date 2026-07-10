"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/data";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium capitalize text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            {project.category}
          </span>
          <span className="text-sm text-zinc-500">{project.year}</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
      </motion.div>

      {/* Media placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20"
      >
        <span className="font-mono text-7xl text-indigo-300/30">
          {project.title[0]}
        </span>
      </motion.div>

      {/* Body */}
      <div className="grid gap-12 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
            Overview
          </h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Links
            </h3>
            <div className="flex flex-col gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-500 underline-offset-4 hover:underline"
                >
                  Live site ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-500 underline-offset-4 hover:underline"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </motion.aside>
      </div>
    </article>
  );
}
