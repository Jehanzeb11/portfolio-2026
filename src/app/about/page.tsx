import type { Metadata } from "next";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { ResumePanel } from "@/components/sections/ResumePanel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background, experience, and the technologies I work with.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-0">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">
            About me
          </p>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
            Background &amp; skills
          </h1>
        </div>
      </div>

      <AboutTimeline />
      <ResumePanel />
    </>
  );
}
