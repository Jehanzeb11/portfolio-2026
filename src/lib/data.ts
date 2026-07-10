// ─── Types ────────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "web" | "mobile" | "3d" | "tool";
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
};

export type TimelineItem = {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education";
};

export type Skill = {
  name: string;
  level: number; // 0–100, used as star radius multiplier
  category: "frontend" | "backend" | "tools" | "3d";
  description: string; // shown in tooltip / spotlight
  href?: string;       // optional link to related content / docs
};

// ─── Sample data ──────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: "nova-dashboard",
    title: "Nova Dashboard",
    description: "Real-time analytics platform with 3D data visualizations.",
    longDescription:
      "Nova is a full-stack analytics dashboard built with Next.js and Three.js. It ingests streaming event data, renders interactive 3D bar charts and globe heatmaps, and supports multi-tenant workspaces with role-based access control.",
    category: "web",
    tech: ["Next.js", "TypeScript", "Three.js", "PostgreSQL", "tRPC"],
    image: "/projects/nova.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    id: "motion-kit",
    title: "Motion Kit",
    description: "Open-source animation primitives for React.",
    longDescription:
      "A composable set of React hooks and components that wrap the Web Animations API and Motion (framer-motion). Provides spring physics, gesture recognition, and scroll-linked animations with zero-config TypeScript types.",
    category: "tool",
    tech: ["React", "TypeScript", "Motion", "Rollup", "Vitest"],
    image: "/projects/motion-kit.jpg",
    githubUrl: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    id: "terrain-explorer",
    title: "Terrain Explorer",
    description: "Procedurally generated 3D landscapes in the browser.",
    longDescription:
      "A WebGL experiment using Three.js and simplex noise to generate infinite, interactive terrains. Features day/night cycle, fly camera, and exportable heightmaps.",
    category: "3d",
    tech: ["Three.js", "WebGL", "GLSL", "Vite"],
    image: "/projects/terrain.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2023,
  },
  {
    id: "pulse-ios",
    title: "Pulse",
    description: "Habit-tracking iOS app with streak animations.",
    longDescription:
      "Pulse is a SwiftUI habit tracker featuring confetti burst animations, iCloud sync, and widget support. Reached top 50 in Health & Fitness on the App Store.",
    category: "mobile",
    tech: ["Swift", "SwiftUI", "CloudKit", "WidgetKit"],
    image: "/projects/pulse.jpg",
    liveUrl: "https://example.com",
    featured: false,
    year: 2023,
  },
  {
    id: "codex-search",
    title: "Codex Search",
    description: "Semantic code search powered by embeddings.",
    longDescription:
      "Indexes your codebase with OpenAI embeddings stored in pgvector, then serves a VS Code extension and web UI for natural-language code search with snippet preview.",
    category: "tool",
    tech: ["Python", "FastAPI", "pgvector", "OpenAI", "VS Code API"],
    image: "/projects/codex.jpg",
    githubUrl: "https://github.com",
    featured: false,
    year: 2024,
  },
  {
    id: "storefront-3d",
    title: "Storefront 3D",
    description: "E-commerce product configurator with real-time 3D preview.",
    longDescription:
      "Shopify storefront that lets customers customise product colour, material, and engravings on a live Three.js model before checkout. Integrates with Shopify Storefront API.",
    category: "3d",
    tech: ["Next.js", "Three.js", "R3F", "Shopify", "Tailwind"],
    image: "/projects/storefront.jpg",
    liveUrl: "https://example.com",
    featured: false,
    year: 2023,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 – Present",
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    description:
      "Leading the design-system migration to React 19 and building interactive data visualisation tools used by 50k+ customers.",
    type: "work",
  },
  {
    year: "2022 – 2024",
    title: "Frontend Engineer",
    company: "Startup XYZ",
    description:
      "Shipped a real-time collaboration canvas from zero to Series A. Owned performance — cut LCP by 40% and TTI by 55%.",
    type: "work",
  },
  {
    year: "2020 – 2022",
    title: "Junior Developer",
    company: "Agency ABC",
    description:
      "Built marketing sites and internal tools for clients across fintech and healthcare verticals.",
    type: "work",
  },
  {
    year: "2016 – 2020",
    title: "BSc Computer Science",
    company: "University of Example",
    description:
      "Graduated with First Class Honours. Dissertation: procedural terrain generation with GPU-accelerated noise functions.",
    type: "education",
  },
];

export const SKILLS: Skill[] = [
  // ── Frontend ────────────────────────────────────────────────────────────────
  {
    name: "React / Next.js",
    level: 95,
    category: "frontend",
    description: "Building production SPAs and SSR apps; deep expertise in App Router, RSC, and the React 19 model.",
    href: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    level: 92,
    category: "frontend",
    description: "Strict typing across full-stack codebases; generics, conditional types, and type-safe APIs.",
    href: "https://typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    description: "Utility-first styling at scale; design-system tokens, responsive variants, and v4 CSS layers.",
    href: "https://tailwindcss.com",
  },
  {
    name: "Motion / Animation",
    level: 85,
    category: "frontend",
    description: "Spring physics, scroll-linked animations, view transitions, and gesture-driven micro-interactions.",
    href: "https://motion.dev",
  },
  // ── 3D / Graphics ────────────────────────────────────────────────────────────
  {
    name: "Three.js / WebGL",
    level: 80,
    category: "3d",
    description: "3D scenes, custom shaders, post-processing pipelines, and React Three Fiber integrations.",
    href: "https://threejs.org",
  },
  {
    name: "GLSL Shaders",
    level: 60,
    category: "3d",
    description: "Vertex & fragment shaders for procedural noise, SDF rendering, and GPU particle systems.",
  },
  // ── Backend ──────────────────────────────────────────────────────────────────
  {
    name: "Node.js",
    level: 78,
    category: "backend",
    description: "REST & tRPC APIs, WebSocket servers, worker threads, and streaming edge functions.",
    href: "https://nodejs.org",
  },
  {
    name: "PostgreSQL",
    level: 72,
    category: "backend",
    description: "Schema design, query optimisation, full-text search, and pgvector for embeddings.",
    href: "https://postgresql.org",
  },
  // ── Tools / Infra ────────────────────────────────────────────────────────────
  {
    name: "Docker / CI/CD",
    level: 70,
    category: "tools",
    description: "Containerised deployments, GitHub Actions pipelines, and automated release workflows.",
  },
  {
    name: "Testing",
    level: 75,
    category: "tools",
    description: "Vitest, Testing Library, Playwright e2e, and MSW for API mocking.",
  },
];
