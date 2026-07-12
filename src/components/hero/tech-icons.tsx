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
      <text
        x="4" y="24"
        fontSize="16"
        fontWeight="bold"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="#323330"
        dominantBaseline="auto"
        textAnchor="start"
      >
        JS
      </text>
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
    <svg viewBox="0 0 512 512" aria-hidden="true">
      {/* Official HTML5 shield */}
      <path d="M71 460L30 0h452l-41 460-185 52z" fill="#E44D26"/>
      <path d="M256 472l149-41 35-394H256z" fill="#F16529"/>
      {/* "5" numeral */}
      <path d="M256 208h-75l-5-58h80V94H114l15 171h127zm0 147l-64-17-4-45h-56l8 87 116 32z" fill="#EBEBEB"/>
      <path d="M256 208v56h70l-7 73-63 17v58l116-32 9-97 9-75zm0-114v56h137l5-56z" fill="#fff"/>
    </svg>
  );
}

function IconCSS() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true">
      {/* Official CSS3 shield */}
      <path d="M71 460L30 0h452l-41 460-185 52z" fill="#1572B6"/>
      <path d="M256 472l149-41 35-394H256z" fill="#33A9DC"/>
      {/* "3" numeral */}
      <path d="M256 208h-80l5 57h75v-57zm-3 151l-64-18-4-42h-56l7 85 117 33z" fill="#EBEBEB"/>
      <path d="M256 208v57h69l-7 73-62 17v59l116-33 2-16 13-140 14-57H256zm0-114v56h136l5-56z" fill="#fff"/>
    </svg>
  );
}

function IconTS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#3178C6" />
      <text
        x="4" y="24"
        fontSize="16"
        fontWeight="bold"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="#ffffff"
        dominantBaseline="auto"
        textAnchor="start"
      >
        TS
      </text>
    </svg>
  );
}

function IconReact() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#0f1923" />
      <rect width="32" height="32" rx="6" fill="url(#react-bg)" opacity="0.6" />
      <defs>
        <radialGradient id="react-bg" cx="50%" cy="50%" r="60%">
          <stop stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="1" stopColor="#0f1923" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Core */}
      <circle cx="16" cy="16" r="3" fill="#61DAFB" />
      {/* Three orbits */}
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
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
      <rect width="32" height="32" rx="6" fill="url(#php-bg)" />
      <defs>
        <linearGradient id="php-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      {/* PHP pill shape */}
      <ellipse cx="16" cy="16" rx="12" ry="6" fill="#7c86c7" opacity="0.4" />
      <ellipse cx="16" cy="16" rx="12" ry="6" stroke="#a5b4fc" strokeWidth="1" fill="none" />
      {/* PHP text lettering */}
      <text
        x="16" y="20"
        textAnchor="middle"
        fontSize="8.5"
        fontWeight="bold"
        fontFamily="monospace"
        fill="white"
        letterSpacing="0.5"
      >
        PHP
      </text>
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
      {/* Dark green background matching Node.js brand */}
      <rect width="34" height="32" rx="6" fill="#333333" />
      {/* Hexagon outline scaled to fit 32×32 with padding */}
      <path
        d="M16 2L3 9.5v13L16 30l13-7.5V9.5Z"
        fill="none"
        stroke="#83CD29"
        strokeWidth="2"
      />
      {/* "J" — left letter */}
      <path
        d="M11.5 13h2.5v6.2c0 2-.9 3-2.7 3-.8 0-1.5-.2-2.1-.6l.8-1.6c.4.2.8.4 1.2.4.7 0 1.1-.4 1.1-1.3V13Z"
        fill="#83CD29"
      />
      {/* "S" — right letter */}
      <path
        d="M16.8 21.8c-.9 0-1.8-.3-2.4-.7l.8-1.6c.5.3 1.2.5 1.8.5.8 0 1.2-.3 1.2-.8 0-.5-.3-.8-1.4-1.1-1.4-.5-2.1-1.2-2.1-2.4 0-1.4 1.1-2.4 2.8-2.4.8 0 1.6.2 2.2.6l-.7 1.6c-.5-.3-1-.4-1.5-.4-.7 0-1 .3-1 .7 0 .5.3.7 1.4 1.1 1.5.5 2.2 1.3 2.2 2.5 0 1.5-1.2 2.4-3.3 2.4Z"
        fill="#83CD29"
      />
    </svg>
  );
}

function IconDocker() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Docker blue background */}
      <rect width="32" height="32" rx="6" fill="#1D63ED" />
      {/* Whale scaled into 32×32 — use transform to fit the 24×24 path into ~28×28 area centered */}
      <g transform="translate(0.67 0.67) scale(1.2)">
        <path
          d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .103.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .103.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"
          fill="#ffffff"
        />
      </g>
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
  { id: "css",          label: "CSS3",          description: "Cascading styles, layouts & animations",        color: "#60a5fa", Icon: IconCSS },
  // ── Ring 2 ────────────────────────────────────────────────────────────────
  { id: "typescript",   label: "TypeScript",    description: "Typed superset of JavaScript",                  color: "#3178C6", Icon: IconTS },
  { id: "react",        label: "React",         description: "Component-based UI library by Meta",            color: "#61DAFB", Icon: IconReact },
  { id: "python",       label: "Python",        description: "Versatile language for data & backend",         color: "#FFD43B", Icon: IconPython },
  { id: "php",          label: "PHP",           description: "Server-side scripting language",                color: "#a5b4fc", Icon: IconPHP },
  // ── Ring 3 ────────────────────────────────────────────────────────────────
  { id: "react-native", label: "React Native",  description: "Cross-platform mobile apps with React",         color: "#61DAFB", Icon: IconReactNative },
  { id: "mongodb",      label: "MongoDB",       description: "NoSQL document database",                       color: "#13AA52", Icon: IconMongoDB },
  { id: "sql",          label: "SQL",           description: "Relational database query language",            color: "#F29111", Icon: IconSQL },
  { id: "git",          label: "Git",           description: "Distributed version control system",            color: "#F05032", Icon: IconGit },
  // ── Ring 4 ────────────────────────────────────────────────────────────────
  { id: "nodejs",       label: "Node.js",       description: "JavaScript runtime for the server",             color: "#539E43", Icon: IconNodeJS },
  { id: "docker",       label: "Docker",        description: "Container platform for consistent deployments", color: "#1D63ED", Icon: IconDocker },
  { id: "tailwind",     label: "Tailwind CSS",  description: "Utility-first CSS framework",                   color: "#38BDF8", Icon: IconTailwind },
  { id: "github",       label: "GitHub",        description: "Git hosting & collaboration platform",          color: "#c0c8d8", Icon: IconGitHub },
];
