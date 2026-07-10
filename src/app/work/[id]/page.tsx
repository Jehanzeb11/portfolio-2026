import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <div className="pt-28 pb-4">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/work"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-indigo-500"
          >
            ← Back to all work
          </Link>
        </div>
      </div>
      <ProjectDetail project={project} />
    </>
  );
}
