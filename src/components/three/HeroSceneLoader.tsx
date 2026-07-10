"use client";

/**
 * Lazy-loaded wrapper so Three.js is excluded from the SSR bundle.
 * Use this instead of importing HeroScene directly in server components.
 */
import dynamic from "next/dynamic";

export const HeroSceneLoader = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  { ssr: false }
);
