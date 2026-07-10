"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import type { Project } from "@/lib/data";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
    >
      {/* Image placeholder */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-600/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-4xl text-indigo-300/40">
            {project.title[0]}
          </span>
        </div>
        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-3 bg-indigo-600/80 backdrop-blur-sm"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Live ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              GitHub ↗
            </a>
          )}
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium capitalize text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            {project.category}
          </span>
          <span className="text-xs text-zinc-400">{project.year}</span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
          <Link
            href={`/work/${project.id}`}
            className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
