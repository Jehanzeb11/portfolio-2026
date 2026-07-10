/**
 * SVG tech icons — inline, zero external requests.
 * All icons are 32×32 viewBox, fill their container.
 */

export type TechIcon = {
  id: string;
  label: string;
  description: string;
  color: string;
  Icon: () => React.ReactElement;
};

// ─────────────────────────────────────────────────────────────────────────────
// Icon components
// ─────────────────────────────────────────────────────────────────────────────

function IconJS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#F7DF1E" />
      <path d="M9.5 25.3c.6 1 1.4 1.7 2.9 1.7 1.6 0 2.6-.8 2.6-1.9 0-1.3-.9-1.7-2.5-2.5l-.8-.4c-2.6-1.1-4.2-2.5-4.2-5.4 0-2.7 2-4.7 5.2-4.7 2.2 0 3.8.8 5 2.9l-2.7 1.7c-.6-1.1-1.3-1.6-2.3-1.6-1 0-1.7.7-1.7 1.6 0 1.1.7 1.5 2.2 2.2l.8.4c3 1.3 4.7 2.6 4.7 5.6 0 3.2-2.5 5-5.8 5-3.2 0-5.3-1.6-6.3-3.6l2.9-1.9ZM20.5 24.9c.5.8 1 1.5 2 1.5.9 0 1.5-.4 1.5-1.8v-9.7h3.3v9.8c0 3-1.7 4.3-4.2 4.3-2.3 0-3.7-1.2-4.4-2.6l1.8-1.5Z" fill="#222" />
    </svg>
  );
}

function IconJava() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#EA2D2E" />
      <path d="M12.4 20.5s-1 .6.7.8c2 .2 3 .2 5.2-.2 0 0 .6.4 1.4.7-4.9 2.1-11.1-.1-7.3-1.3ZM11.7 18s-1.1.8.6 1c2.2.2 4 .2 7-.4 0 0 .4.4 1.1.6-6.2 1.8-13.1.2-8.7-1.2Z" fill="white" />
      <path d="M17.5 13.4c1.3 1.5-.3 2.8-.3 2.8s3.2-1.6 1.7-3.6c-1.4-1.9-2.5-2.8 3.3-6-3.7 3.2-5.6 5-4.7 6.8Z" fill="white" />
      <path d="M22.8 22.4s.8.6-.8 1.1c-2.9.9-12 1.1-14.6.1-1-.4.8-.9.8-.9s-1.2-.8-2 .5c-1 2 22.8 1.7 16.6-.8ZM12.9 15.7s-3.5.8-1.3 1.1c.9.1 2.7.1 4.4-.1 1.4-.1 2.8-.5 2.8-.5s-.5.2-.8.4c-3.3.9-9.7.5-7.9-.4 1.6-.8 2.8-.5 2.8-.5ZM21.3 19.8c3.4-1.8 1.8-3.5.7-3.3-.3.1-.4.2-.4.2s.1-.2.3-.3c2.4-1.6 4.2 2.5-1 3.7 0 0 .3-.3.4-.3Z" fill="white" />
      <path d="M18.9 5s2 2-1.9 5.1c-3.2 2.5-.7 3.9 0 5.5-1.8-1.6-3.1-3-2.2-4.3 1.3-2 4.8-2.9 4.1-6.3Z" fill="white" />
    </svg>
  );
}

function IconHTML() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#E34C26" />
      <path d="M7 5l1.8 20 7.2 2 7.2-2L25 5H7Z" fill="#E34C26" />
      <path d="M16 25.4V7H7l1.7 18.4L16 27.5v-2.1Z" fill="#EF652A" />
      <path d="M16 13.4h4.8l-.4 4-4.4 1.2V22l5.4-1.5.7-8.5H16v1.4Z" fill="#fff" />
      <path d="M16 13.4H11.2l.4-3.2h4.4V13.4ZM16 18.6l-4.4-1.2-.3-3.2H9.8l.5 5.8L16 22v-3.4Z" fill="#EBEBEB" />
    </svg>
  );
}

function IconCSS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#264DE4" />
      <path d="M7 5l1.8 20 7.2 2 7.2-2L25 5H7Z" fill="#264DE4" />
      <path d="M16 25.4V7H7l1.7 18.4L16 27.5v-2.1Z" fill="#2965F1" />
      <path d="M16 13.4h4.8l-.3 3.5-4.5 1.3V22l5.4-1.5.7-8.5H16v1.4Z" fill="#fff" />
      <path d="M16 13.4H11.2l.3-3.2h4.5V13.4ZM16 18.2l-4.2-1.1-.3-3.1H9.9l.5 5.7L16 22v-3.8Z" fill="#EBEBEB" />
    </svg>
  );
}

function IconTS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <path d="M18.2 23.8v2.7c.5.2 1 .4 1.7.5.6.1 1.3.2 2 .2.7 0 1.4-.1 2-.3.6-.2 1.1-.5 1.5-.9.4-.4.7-.9.9-1.5.2-.6.3-1.4.3-2.3 0-.6-.1-1.2-.3-1.7-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.7-1.3-.9-.5-.3-1.1-.5-1.7-.7-.5-.2-1-.4-1.3-.6-.4-.2-.7-.4-.9-.6-.2-.2-.4-.5-.5-.7-.1-.3-.2-.6-.2-.9 0-.3.1-.6.2-.9.1-.3.3-.5.6-.7.2-.2.5-.3.9-.4.3-.1.7-.1 1.1-.1.3 0 .7 0 1 .1.4.1.7.2 1 .3.3.2.7.4.9.7V13c-.4-.2-.9-.3-1.4-.4-.5-.1-1.1-.1-1.7-.1-.7 0-1.4.1-2 .3-.6.2-1.1.5-1.5.9-.4.4-.7.9-1 1.5-.2.6-.3 1.3-.3 2 0 1 .3 1.9.8 2.6.5.7 1.3 1.3 2.5 1.7.5.2 1 .4 1.4.6.4.2.7.4 1 .6.2.2.4.5.5.7.1.3.2.6.2.9 0 .4-.1.7-.2 1-.1.3-.3.5-.6.7-.3.2-.6.3-.9.4-.4.1-.8.1-1.2.1-.9 0-1.8-.2-2.6-.7ZM13 15.1H17v-2.3H7v2.3h3.9V27H13V15.1Z" fill="#fff" />
    </svg>
  );
}

function IconReact() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#20232A" />
      <ellipse cx="16" cy="16" rx="2.5" ry="2.5" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.3" fill="none" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.3" fill="none" transform="rotate(120 16 16)" />
    </svg>
  );
}

function IconReactNative() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1A1A2E" />
      {/* Phone outline */}
      <rect x="11" y="5" width="10" height="18" rx="2" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
      <line x1="11" y1="9" x2="21" y2="9" stroke="#61DAFB" strokeWidth="0.8" />
      <line x1="11" y1="20" x2="21" y2="20" stroke="#61DAFB" strokeWidth="0.8" />
      {/* React atom small inside screen */}
      <ellipse cx="16" cy="14.5" rx="3.5" ry="1.4" stroke="#61DAFB" strokeWidth="0.8" fill="none" />
      <ellipse cx="16" cy="14.5" rx="3.5" ry="1.4" stroke="#61DAFB" strokeWidth="0.8" fill="none" transform="rotate(60 16 14.5)" />
      <circle cx="16" cy="14.5" r="1" fill="#61DAFB" />
    </svg>
  );
}

function IconMongoDB() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#13AA52" />
      <path d="M16 4c0 0-6.5 6.2-6.5 13.5 0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5C22.5 10.2 16 4 16 4Z" fill="#fff" />
      <path d="M16.8 23.5v4.5h-1.6v-4.5c-3.2-.4-5.7-3.1-5.7-6.5 0-6.5 5.5-12.3 6.5-13 1 .7 6.5 6.5 6.5 13 0 3.4-2.5 6.1-5.7 6.5Z" fill="#B8F0DA" opacity="0.4" />
    </svg>
  );
}

function IconSQL() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#00758F" />
      <ellipse cx="16" cy="10" rx="8" ry="3.5" fill="#F29111" />
      <path d="M8 10v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5" fill="none" stroke="#F29111" strokeWidth="1.2" />
      <path d="M8 15v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5" fill="none" stroke="#F29111" strokeWidth="1.2" />
      <ellipse cx="16" cy="10" rx="8" ry="3.5" fill="none" stroke="#F29111" strokeWidth="1.2" />
    </svg>
  );
}

function IconPHP() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#6181B6" />
      <ellipse cx="16" cy="16" rx="13" ry="6.5" fill="#8892BF" />
      <path d="M8 14h2.5c1.5 0 2.5.6 2.5 2s-1 2-2.5 2H9.5L9 20H8l1-6Zm1.5 3h.8c.8 0 1.2-.3 1.2-.9s-.4-.9-1.2-.9h-.5l-.3 1.8ZM14 14h1l-.5 3h.2l2-3h1.2l-.9 6h-1l.5-3h-.2l-2 3h-1.2l.9-6ZM19 14h2.5c1.5 0 2.5.6 2.5 2s-1 2-2.5 2H20l-.5 2h-1l1-6Zm1.5 3h.8c.8 0 1.2-.3 1.2-.9s-.4-.9-1.2-.9h-.5l-.3 1.8Z" fill="white" />
    </svg>
  );
}

function IconPython() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1E415E" />
      <path d="M16 5c-4.2 0-3.9 1.8-3.9 1.8V9h7.9v1H9.6S6 9.6 6 13.9c0 4.3 2.8 4.1 2.8 4.1h1.7v-2s-.1-2.8 2.8-2.8h5.7s2.7.1 2.7-2.7V8.2S22.3 5 16 5Zm-2.3 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Z" fill="url(#py1)" />
      <path d="M16 27c4.2 0 3.9-1.8 3.9-1.8V23h-7.9v-1h10.4S26 22.4 26 18.1c0-4.3-2.8-4.1-2.8-4.1H21.5v2s.1 2.8-2.8 2.8h-5.7s-2.7-.1-2.7 2.7v3.3S9.7 27 16 27Zm2.3-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Z" fill="url(#py2)" />
      <defs>
        <linearGradient id="py1" x1="6" y1="5" x2="26" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A9FD4" /><stop offset="1" stopColor="#306998" />
        </linearGradient>
        <linearGradient id="py2" x1="6" y1="16" x2="26" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD43B" /><stop offset="1" stopColor="#FFE873" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconGit() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#F05032" />
      <path d="M27.4 14.6l-10-10a1.4 1.4 0 00-2 0L13.2 6.8 15.5 9a1.7 1.7 0 012.1 2.2l2.2 2.2a1.7 1.7 0 11-1 1l-2-2v5.3a1.7 1.7 0 11-1.5 0v-5.4a1.7 1.7 0 01-.9-2.2L12 7.8 4.6 15.2a1.4 1.4 0 000 2l10 10a1.4 1.4 0 002 0l10.8-10.8a1.4 1.4 0 000-1.8Z" fill="#fff" />
    </svg>
  );
}

function IconNodeJS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1A1A1A" />
      <path d="M16 5 L27 11.5 V24.5 L16 31 L5 24.5 V11.5 Z" fill="none" stroke="#539E43" strokeWidth="1.2" />
      <path d="M10.5 21.2c.3.5.8.9 1.7.9.9 0 1.4-.5 1.4-1.1 0-.7-.5-1-1.4-1.4l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.2 0 2.1.4 2.8 1.6l-1.5.9c-.3-.6-.7-.9-1.3-.9-.5 0-.9.3-.9.9 0 .6.4.8 1.2 1.2l.5.2c1.7.7 2.6 1.5 2.6 3.1 0 1.8-1.4 2.8-3.2 2.8-1.8 0-2.9-.9-3.5-2l1.5-1ZM17.5 20.1c.3.4.6.8 1.1.8.5 0 .8-.2.8-1V14h1.8v5.9c0 1.7-.9 2.4-2.4 2.4-1.3 0-2-.7-2.4-1.5l1.1-.7Z" fill="#539E43" />
    </svg>
  );
}

function IconDocker() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1D63ED" />
      <path d="M17.5 13h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 0h2v2h-2v-2Zm-3 3h2v2H8.5v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Z" fill="#fff" />
      <path d="M27 16.8c-.5-.3-1.6-.4-2.5-.2-.1-.9-.7-1.7-1.7-2.2l-.6-.3-.3.6c-.4.7-.5 1.8-.1 2.5-.2.1-.6.3-1.1.3H5.2c-.2 1.2.1 2.8 1 3.9.9 1.1 2.2 1.6 4 1.6 3.7 0 6.4-1.7 7.7-4.8.8 0 2.6.1 3.5-1.7.1-.1.1-.3.2-.4l-.6-.3Z" fill="#fff" />
    </svg>
  );
}

function IconTailwind() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#0F172A" />
      <path d="M16 9c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.2 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.3 10.2 18.2 9 16 9ZM11 16c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.2 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C14.3 17.2 13.2 16 11 16Z" fill="#38BDF8" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#24292E" />
      <path d="M16 5a11 11 0 00-3.5 21.4c.6.1.8-.2.8-.5v-1.7c-3.1.7-3.7-1.5-3.7-1.5-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.2 1.1-2.9-.1-.3-.5-1.4.1-3 0 0 .9-.3 3 1.1a10.5 10.5 0 015.5 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.7.1 3 .7.7 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5.1 5.4.4.3.8 1 .8 2.1v3.1c0 .3.2.6.8.5A11 11 0 0016 5Z" fill="#fff" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Registry — 16 skills across 4 orbit rings
// Ring 1 (inner, 4):  JS, Java, HTML, CSS
// Ring 2 (mid-in, 4): TS, React, Python, PHP
// Ring 3 (mid-out, 4): React Native, MongoDB, SQL, Git
// Ring 4 (outer, 4):  Node.js, Docker, Tailwind, GitHub
// ─────────────────────────────────────────────────────────────────────────────

export const TECH_ICONS: TechIcon[] = [
  // ── Ring 1 ────────────────────────────────────────────────────────────────
  { id: "javascript",   label: "JavaScript",   description: "Dynamic scripting language of the web",         color: "#F7DF1E", Icon: IconJS },
  { id: "java",         label: "Java",          description: "Robust, object-oriented JVM language",          color: "#EA2D2E", Icon: IconJava },
  { id: "html",         label: "HTML5",         description: "Semantic structure of the web",                 color: "#E34C26", Icon: IconHTML },
  { id: "css",          label: "CSS3",          description: "Cascading styles, layouts & animations",        color: "#2965F1", Icon: IconCSS },
  // ── Ring 2 ────────────────────────────────────────────────────────────────
  { id: "typescript",   label: "TypeScript",    description: "Typed superset of JavaScript",                  color: "#3178C6", Icon: IconTS },
  { id: "react",        label: "React",         description: "Component-based UI library by Meta",            color: "#61DAFB", Icon: IconReact },
  { id: "python",       label: "Python",        description: "Versatile language for data & backend",         color: "#FFD43B", Icon: IconPython },
  { id: "php",          label: "PHP",           description: "Server-side scripting language",                color: "#8892BF", Icon: IconPHP },
  // ── Ring 3 ────────────────────────────────────────────────────────────────
  { id: "react-native", label: "React Native",  description: "Cross-platform mobile apps with React",         color: "#61DAFB", Icon: IconReactNative },
  { id: "mongodb",      label: "MongoDB",       description: "NoSQL document database",                       color: "#13AA52", Icon: IconMongoDB },
  { id: "sql",          label: "SQL",           description: "Relational database query language",            color: "#F29111", Icon: IconSQL },
  { id: "git",          label: "Git",           description: "Distributed version control system",            color: "#F05032", Icon: IconGit },
  // ── Ring 4 ────────────────────────────────────────────────────────────────
  { id: "nodejs",       label: "Node.js",       description: "JavaScript runtime for the server",             color: "#539E43", Icon: IconNodeJS },
  { id: "docker",       label: "Docker",        description: "Container platform for consistent deployments", color: "#1D63ED", Icon: IconDocker },
  { id: "tailwind",     label: "Tailwind CSS",  description: "Utility-first CSS framework",                   color: "#38BDF8", Icon: IconTailwind },
  { id: "github",       label: "GitHub",        description: "Git hosting & collaboration platform",          color: "#e2e8f0", Icon: IconGitHub },
];
