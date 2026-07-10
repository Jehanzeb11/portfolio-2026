import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { ResumePanel } from "@/components/sections/ResumePanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jehanzeb · Full Stack Engineer",
  description:
    "Senior frontend engineer crafting performant, accessible web experiences with React, TypeScript and WebGL.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ResumePanel />
    </>
  );
}
