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
    id: "linkupmil",
    title: "LinkUpMil",
    description: "Full-featured social media platform for web and mobile.",
    longDescription:
      "LinkUpMil is a cross-platform social media application built at Vinspyre. The web frontend uses React.js with Tailwind CSS for a responsive, performant UI, while the mobile app is built with React Native sharing the same design language. Features include user feeds, real-time messaging, and RESTful API integrations.",
    category: "web",
    tech: ["React.js", "React Native", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/projects/linkupmil.jpg",
    featured: true,
    year: 2025,
  },
  {
    id: "hrm-system",
    title: "HRM System",
    description: "Human Resource Management system built with Next.js and Shadcn UI.",
    longDescription:
      "A full-stack Human Resource Management system developed at Vinspyre using Next.js, TypeScript, and Shadcn UI. Covers employee management, attendance tracking, leave requests, and role-based access control with a clean, accessible interface built on Shadcn's component library.",
    category: "web",
    tech: ["Next.js", "TypeScript", "Shadcn UI", "Tailwind CSS", "MongoDB"],
    image: "/projects/hrm.jpg",
    featured: true,
    year: 2025,
  },
  {
    id: "project-management-system",
    title: "Project Management System",
    description: "Full-stack task and milestone tracker for agile teams.",
    longDescription:
      "Built at Arc Inventador using Next.js, TypeScript, and Material UI. Teams can create projects, assign tasks, set milestones, and track progress in real time. Includes role-based permissions and a dashboard with status summaries.",
    category: "web",
    tech: ["Next.js", "TypeScript", "Material UI", "Node.js", "MongoDB"],
    image: "/projects/pms.jpg",
    featured: true,
    year: 2024,
  },
  {
    id: "did-portal",
    title: "DID Portal",
    description: "Digital Identity portal with fast document indexing and search.",
    longDescription:
      "A full-stack Digital Identity (DID) portal developed at Arc Inventador using Next.js, Express.js, and ElasticSearch. Supports high-volume document ingestion, lightning-fast full-text search, and secure identity verification workflows.",
    category: "web",
    tech: ["Next.js", "Express.js", "ElasticSearch", "TypeScript", "MongoDB"],
    image: "/projects/did.jpg",
    featured: false,
    year: 2024,
  },
  {
    id: "cid-portal",
    title: "CID Portal",
    description: "Full-stack portal with advanced search and filtering via ElasticSearch.",
    longDescription:
      "A CID (Central Identity) portal built at Arc Inventador using Next.js, Express.js, and ElasticSearch. Features advanced filtering, faceted search, and a responsive dashboard for managing and querying large document collections.",
    category: "web",
    tech: ["Next.js", "Express.js", "ElasticSearch", "TypeScript", "MongoDB"],
    image: "/projects/cid.jpg",
    featured: false,
    year: 2024,
  },
  {
    id: "famewheels-app",
    title: "Famewheels App",
    description: "Cross-platform mobile app for buying and selling vehicles.",
    longDescription:
      "The Famewheels mobile application built with React Native for iOS and Android at Fame Business Solutions. Lets users browse vehicle listings, post ads, and contact sellers — all within a smooth, native-feeling experience powered by a shared codebase.",
    category: "mobile",
    tech: ["React Native", "JavaScript", "REST API", "AsyncStorage"],
    image: "/projects/famewheels-app.jpg",
    featured: true,
    year: 2023,
  },
  {
    id: "car-inspection",
    title: "Car Inspection Platform",
    description: "Vehicle assessment workflow platform for business users.",
    longDescription:
      "A web platform built at Fame Business Solutions using React.js, Material UI, and Bootstrap. Streamlines the end-to-end car inspection process — from scheduling and checklist completion to report generation — for fleet and dealership clients.",
    category: "web",
    tech: ["React.js", "Material UI", "Bootstrap", "REST API"],
    image: "/projects/car-inspection.jpg",
    featured: false,
    year: 2023,
  },
  {
    id: "famewheels-admin",
    title: "Famewheels Admin Panel",
    description: "Admin dashboard for managing the Famewheels platform.",
    longDescription:
      "Contributed to the Famewheels Admin Panel at Fame Business Solutions using Next.js, TypeScript, and Bootstrap. Improved dashboard performance, refactored key UI sections for usability, and added new management features for listings and users.",
    category: "web",
    tech: ["Next.js", "TypeScript", "Bootstrap", "REST API"],
    image: "/projects/famewheels-admin.jpg",
    featured: false,
    year: 2023,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2025 – Present",
    title: "Full Stack Developer",
    company: "Vinspyre (PVT LTD)",
    description:
      "Developing LinkUpMil, a full-featured social media application using React.js, React Native, and Tailwind CSS for cross-platform web and mobile experiences. Built an HRM (Human Resource Management) system using Next.js, TypeScript, and Shadcn UI. Collaborating in an agile team to deliver scalable UI components and RESTful API integrations.",
    type: "work",
  },
  {
    year: "2024 – 2025",
    title: "Full Stack Developer",
    company: "Arc Inventador",
    description:
      "Built a full-stack Project Management System with Next.js, TypeScript, and Material UI. Developed DID and CID portals using Next.js, Express.js, and ElasticSearch — supporting fast document indexing, advanced search, and filtering.",
    type: "work",
  },
  {
    year: "2023 – 2024",
    title: "Frontend Developer",
    company: "Fame Business Solutions",
    description:
      "Built a car inspection platform with React.js, Material UI, and Bootstrap. Developed the Famewheels mobile app — a cross-platform React Native application for iOS and Android. Contributed to the Famewheels Admin Panel with Next.js, TypeScript, and Bootstrap.",
    type: "work",
  },
  {
    year: "2024 – Present",
    title: "Bachelor of Computer Science",
    company: "Indus University",
    description:
      "Currently pursuing an undergraduate degree in Computer Science.",
    type: "education",
  },
];

export const SKILLS: Skill[] = [
  // ── Frontend ────────────────────────────────────────────────────────────────
  {
    name: "React.js",
    level: 95,
    category: "frontend",
    description: "Building production SPAs and component-driven UIs. Deep expertise in hooks, context, and performance optimisation.",
    href: "https://react.dev",
  },
  {
    name: "Next.js",
    level: 92,
    category: "frontend",
    description: "Full-stack apps with App Router, SSR, SSG, and API routes. Used across multiple production projects.",
    href: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "frontend",
    description: "Strict typing across full-stack codebases — interfaces, generics, and type-safe API contracts.",
    href: "https://typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    description: "Utility-first styling at scale. Used with Shadcn UI and NativeWind across web and mobile.",
    href: "https://tailwindcss.com",
  },
  {
    name: "React Native",
    level: 82,
    category: "frontend",
    description: "Cross-platform iOS and Android apps. Built the Famewheels app and LinkUpMil mobile client.",
    href: "https://reactnative.dev",
  },
  {
    name: "JavaScript",
    level: 93,
    category: "frontend",
    description: "ES6+ — async/await, destructuring, modules, closures, and event-driven patterns.",
  },
  {
    name: "Material UI",
    level: 80,
    category: "frontend",
    description: "Component library used across project management and inspection platforms.",
    href: "https://mui.com",
  },
  {
    name: "HTML5 / CSS3",
    level: 92,
    category: "frontend",
    description: "Semantic markup, accessibility, animations, and responsive layouts.",
  },
  // ── Backend ──────────────────────────────────────────────────────────────────
  {
    name: "Node.js",
    level: 82,
    category: "backend",
    description: "REST API servers with Express.js. Used in production MERN stack applications.",
    href: "https://nodejs.org",
  },
  {
    name: "Express.js",
    level: 80,
    category: "backend",
    description: "RESTful API development, middleware, and authentication flows.",
    href: "https://expressjs.com",
  },
  {
    name: "MongoDB",
    level: 80,
    category: "backend",
    description: "Document database for MERN stack apps — schema design, aggregation, and indexing.",
    href: "https://mongodb.com",
  },
  {
    name: "ElasticSearch",
    level: 72,
    category: "backend",
    description: "Full-text search and document indexing used in DID and CID portals at Arc Inventador.",
    href: "https://elastic.co",
  },
  {
    name: "MySQL",
    level: 78,
    category: "backend",
    description: "Relational database design, table relationships, and performant querying for structured data workloads.",
  },
  {
    name: "SQL",
    level: 80,
    category: "backend",
    description: "Complex queries, join operations, aggregations, indexing, and relational schema modeling.",
  },
  {
    name: "NestJS",
    level: 78,
    category: "backend",
    description: "Enterprise-grade scalable server architectures with TypeScript and modular dependency injection.",
    href: "https://nestjs.com",
  },
  {
    name: "C#",
    level: 75,
    category: "backend",
    description: "Strongly typed, object-oriented language for backend systems, web APIs, and enterprise solutions.",
    href: "https://learn.microsoft.com/dotnet/csharp/",
  },
  {
    name: ".NET",
    level: 75,
    category: "backend",
    description: "Modern cross-platform framework for building high-performance cloud applications and Web APIs.",
    href: "https://dotnet.microsoft.com",
  },
  {
    name: "GraphQL",
    level: 77,
    category: "backend",
    description: "Declarative query language, schemas, resolvers, and efficient client-tailored data fetching.",
    href: "https://graphql.org",
  },
  {
    name: "Python",
    level: 75,
    category: "backend",
    description: "Scripting, backend service development, and data automation.",
    href: "https://python.org",
  },
  {
    name: "Java",
    level: 74,
    category: "backend",
    description: "Object-oriented programming, strong typing, and backend service fundamentals.",
    href: "https://java.com",
  },
  {
    name: "PHP",
    level: 72,
    category: "backend",
    description: "Server-side web scripting and legacy/LAMP stack service development.",
    href: "https://php.net",
  },
  // ── Tools / Infra ────────────────────────────────────────────────────────────
  {
    name: "Docker",
    level: 76,
    category: "tools",
    description: "Containerization, container workflows, and environment parity.",
    href: "https://docker.com",
  },
  {
    name: "Git / GitHub",
    level: 88,
    category: "tools",
    description: "Version control, branching strategies, pull requests, and collaborative workflows.",
    href: "https://github.com",
  },
  {
    name: "Shadcn UI",
    level: 82,
    category: "tools",
    description: "Accessible component library built on Radix UI. Used for the HRM system at Vinspyre.",
    href: "https://ui.shadcn.com",
  },
  {
    name: "Bootstrap",
    level: 78,
    category: "tools",
    description: "Responsive grid and component system used across admin panels and web platforms.",
    href: "https://getbootstrap.com",
  },
];
