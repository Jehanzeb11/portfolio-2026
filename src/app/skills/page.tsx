import type { Metadata } from "next";
import { SkillOrbit } from "@/components/skills/SkillOrbit";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "An interactive orbit visualization of my technical skills — React, TypeScript, Three.js, Node.js, and more.",
};

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col pt-20">
      {/* Header */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">
          Skills
        </p>
        <h1 className="mb-3 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
          Tech constellation
        </h1>
        <p className="max-w-xl text-base text-zinc-500 dark:text-zinc-400">
          Each star represents a skill. Orbit radius reflects category; star
          size reflects proficiency. Click any star to inspect.
        </p>
      </div>

      {/* Full-width orbit */}
      <div className="mx-auto w-full max-w-6xl flex-1 px-6 pb-16">
        <SkillOrbit />
      </div>
    </div>
  );
}
