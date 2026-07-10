import type { Metadata } from "next";
import { WorkGallery } from "@/components/sections/WorkGallery";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of projects I've shipped — web apps, 3D experiences, and open-source tools.",
};

export default function WorkPage() {
  return (
    <>
      <div className="pt-32 pb-0">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
            All projects
          </h1>
        </div>
      </div>
      <WorkGallery />
    </>
  );
}
