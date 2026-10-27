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

function IconNextJS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#000000" />
      <circle cx="16" cy="16" r="10" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.25" fill="none" />
      <path
        d="M13 11v10M19 11v4.8M13.2 11.2l6.8 9.8"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

function IconExpress() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#18181b" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fontFamily="monospace, system-ui, sans-serif"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        ex
      </text>
      <circle cx="23" cy="21" r="1.5" fill="#6366f1" />
    </svg>
  );
}

function IconMySQL() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#00618A" />
      <ellipse cx="16" cy="11" rx="8" ry="3" fill="#E48E00" />
      <path d="M8 11v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" fill="none" stroke="#E48E00" strokeWidth="1.2" />
      <path d="M8 16v5c0 1.7 3.6 3 8 3s8-1.3 8-3v-5" fill="none" stroke="#E48E00" strokeWidth="1.2" />
      <ellipse cx="16" cy="11" rx="8" ry="3" fill="none" stroke="#E48E00" strokeWidth="1.2" />
      <text
        x="16"
        y="29"
        textAnchor="middle"
        fontSize="6"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="#ffffff"
      >
        MySQL
      </text>
    </svg>
  );
}

function IconElasticsearch() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#181d28" />
      {/* Elastic cluster matching official logo */}
      {/* Top Left - Pink */}
      <circle cx="9.5" cy="11.5" r="3.2" fill="#E8488A" />
      {/* Mid Left - Sky Blue */}
      <circle cx="7.8" cy="17.8" r="3.4" fill="#00A9E0" />
      {/* Bottom Center-Left - Teal (large) */}
      <circle cx="13.5" cy="22.2" r="5" fill="#00BFB3" />
      {/* Top Right - Gold/Yellow (large) */}
      <circle cx="19.2" cy="11.8" r="5.2" fill="#FEC514" />
      {/* Mid Right - Deep Blue */}
      <circle cx="23.8" cy="17.8" r="3.2" fill="#0077CC" />
      {/* Bottom Right - Lime Green */}
      <circle cx="21.2" cy="23.2" r="2.8" fill="#79C24A" />
    </svg>
  );
}

function IconJava() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1e293b" />
      <path d="M12.4 20.5s-1 .6.7.8c2 .2 3 .2 5.2-.2 0 0 .6.4 1.4.7-4.9 2.1-11.1-.1-7.3-1.3ZM11.7 18s-1.1.8.6 1c2.2.2 4 .2 7-.4 0 0 .4.4 1.1.6-6.2 1.8-13.1.2-8.7-1.2Z" fill="#EA2D2E" />
      <path d="M17.5 13.4c1.3 1.5-.3 2.8-.3 2.8s3.2-1.6 1.7-3.6c-1.4-1.9-2.5-2.8 3.3-6-3.7 3.2-5.6 5-4.7 6.8Z" fill="#5382A1" />
      <path d="M22.8 22.4s.8.6-.8 1.1c-2.9.9-12 1.1-14.6.1-1-.4.8-.9.8-.9s-1.2-.8-2 .5c-1 2 22.8 1.7 16.6-.8ZM12.9 15.7s-3.5.8-1.3 1.1c.9.1 2.7.1 4.4-.1 1.4-.1 2.8-.5 2.8-.5s-.5.2-.8.4c-3.3.9-9.7.5-7.9-.4 1.6-.8 2.8-.5 2.8-.5ZM21.3 19.8c3.4-1.8 1.8-3.5.7-3.3-.3.1-.4.2-.4.2s.1-.2.3-.3c2.4-1.6 4.2 2.5-1 3.7 0 0 .3-.3.4-.3Z" fill="#EA2D2E" />
      <path d="M18.9 5s2 2-1.9 5.1c-3.2 2.5-.7 3.9 0 5.5-1.8-1.6-3.1-3-2.2-4.3 1.3-2 4.8-2.9 4.1-6.3Z" fill="#EA2D2E" />
    </svg>
  );
}

function IconPython() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1E415E" />
      <path d="M16 5c-4.2 0-3.9 1.8-3.9 1.8V9h7.9v1H9.6S6 9.6 6 13.9c0 4.3 2.8 4.1 2.8 4.1h1.7v-2s-.1-2.8 2.8-2.8h5.7s2.7.1 2.7-2.7V8.2S22.3 5 16 5Zm-2.3 1.8c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9Z" fill="#387EB8" />
      <path d="M16 27c4.2 0 3.9-1.8 3.9-1.8V23h-7.9v-1h10.4S26 22.4 26 18.1c0-4.3-2.8-4.1-2.8-4.1H21.5v2s.1 2.8-2.8 2.8h-5.7s-2.7-.1-2.7 2.7v3.3S9.7 27 16 27Zm2.3-1.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Z" fill="#FFE873" />
    </svg>
  );
}

function IconPHP() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#4F5D95" />
      <ellipse cx="16" cy="16" rx="12" ry="7" fill="#777BB4" />
      <text
        x="16"
        y="19.5"
        textAnchor="middle"
        fontSize="9"
        fontWeight="bold"
        fontFamily="monospace, system-ui, sans-serif"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        php
      </text>
    </svg>
  );
}

function IconDocker() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1D63ED" />
      <g transform="translate(1, 1) scale(1.2)">
        <path
          d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .103.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .103.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .103.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .103.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"
          fill="#ffffff"
        />
      </g>
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
      <rect width="34" height="32" rx="6" fill="#333333" />
      <path
        d="M16 2L3 9.5v13L16 30l13-7.5V9.5Z"
        fill="none"
        stroke="#83CD29"
        strokeWidth="2"
      />
      <path
        d="M11.5 13h2.5v6.2c0 2-.9 3-2.7 3-.8 0-1.5-.2-2.1-.6l.8-1.6c.4.2.8.4 1.2.4.7 0 1.1-.4 1.1-1.3V13Z"
        fill="#83CD29"
      />
      <path
        d="M16.8 21.8c-.9 0-1.8-.3-2.4-.7l.8-1.6c.5.3 1.2.5 1.8.5.8 0 1.2-.3 1.2-.8 0-.5-.3-.8-1.4-1.1-1.4-.5-2.1-1.2-2.1-2.4 0-1.4 1.1-2.4 2.8-2.4.8 0 1.6.2 2.2.6l-.7 1.6c-.5-.3-1-.4-1.5-.4-.7 0-1 .3-1 .7 0 .5.3.7 1.4 1.1 1.5.5 2.2 1.3 2.2 2.5 0 1.5-1.2 2.4-3.3 2.4Z"
        fill="#83CD29"
      />
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

function IconGraphQL() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#181124" />
      <polygon
        points="16,6 25,11 25,21 16,26 7,21 7,11"
        stroke="#E10098"
        strokeWidth="1.2"
        fill="none"
      />
      <polygon
        points="16,6 25,21 7,21"
        stroke="#E10098"
        strokeWidth="1.2"
        fill="none"
      />
      <polygon
        points="7,11 25,11 16,26"
        stroke="#E10098"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="16" cy="6" r="1.8" fill="#E10098" />
      <circle cx="25" cy="11" r="1.8" fill="#E10098" />
      <circle cx="25" cy="21" r="1.8" fill="#E10098" />
      <circle cx="16" cy="26" r="1.8" fill="#E10098" />
      <circle cx="7" cy="21" r="1.8" fill="#E10098" />
      <circle cx="7" cy="11" r="1.8" fill="#E10098" />
    </svg>
  );
}

function IconNestJS() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#1a0e14" />
      <g transform="translate(4, 4)">
        <path
          fill="#E0234E"
          d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z"
        />
      </g>
    </svg>
  );
}

function IconDotNet() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#512BD4" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif, system-ui"
        fill="#ffffff"
        letterSpacing="0.2"
      >
        .NET
      </text>
    </svg>
  );
}

function IconCSharp() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#231b2c" />
      <path
        d="M16 4.5L25.5 10v11L16 26.5 6.5 21V10L16 4.5Z"
        fill="#68217A"
      />
      <text
        x="13.5"
        y="19"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="#ffffff"
      >
        C
      </text>
      <text
        x="20.5"
        y="16.5"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="#00E5FF"
      >
        #
      </text>
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
// Registry — 24 skills matching user's complete stack
// ─────────────────────────────────────────────────────────────────────────────

export const TECH_ICONS: TechIcon[] = [
  // ── Core Web & Types ───────────────────────────────────────────────────────
  { id: "javascript",    label: "JavaScript",    description: "Dynamic scripting language of the web (ES6+)",   color: "#F7DF1E", Icon: IconJS },
  { id: "typescript",    label: "TypeScript",    description: "Strict typing across full-stack codebases",       color: "#3178C6", Icon: IconTS },
  { id: "html",          label: "HTML5",         description: "Semantic structure & web standards",             color: "#E34C26", Icon: IconHTML },
  { id: "css",           label: "CSS3",          description: "Cascading styles, modern layouts & responsive UI", color: "#60a5fa", Icon: IconCSS },
  // ── Frontend & Frameworks ──────────────────────────────────────────────────
  { id: "react",         label: "React.js",      description: "Component-based UI architecture & state systems", color: "#61DAFB", Icon: IconReact },
  { id: "nextjs",        label: "Next.js",       description: "Full-stack React framework (App Router & SSR)",   color: "#ffffff", Icon: IconNextJS },
  { id: "react-native",  label: "React Native",  description: "Cross-platform mobile apps for iOS and Android",  color: "#61DAFB", Icon: IconReactNative },
  { id: "tailwind",      label: "Tailwind CSS",  description: "Utility-first design system & styling",           color: "#38BDF8", Icon: IconTailwind },
  // ── Backend & APIs ─────────────────────────────────────────────────────────
  { id: "nodejs",        label: "Node.js",       description: "High-performance JavaScript runtime for servers",  color: "#83CD29", Icon: IconNodeJS },
  { id: "express",       label: "Express.js",    description: "Fast, unopinionated REST API framework",          color: "#a1a1aa", Icon: IconExpress },
  { id: "nestjs",        label: "NestJS",        description: "Enterprise TypeScript progressive Node.js framework", color: "#E0234E", Icon: IconNestJS },
  { id: "csharp",        label: "C#",            description: "Modern, type-safe object-oriented language by Microsoft", color: "#68217A", Icon: IconCSharp },
  { id: "dotnet",        label: ".NET",          description: "Cross-platform developer platform by Microsoft",  color: "#512BD4", Icon: IconDotNet },
  { id: "python",        label: "Python",        description: "Versatile programming language for scripts & backend", color: "#FFD43B", Icon: IconPython },
  { id: "java",          label: "Java",          description: "Robust, object-oriented enterprise language",     color: "#EA2D2E", Icon: IconJava },
  { id: "php",           label: "PHP",           description: "Server-side scripting language for web services", color: "#777BB4", Icon: IconPHP },
  // ── Databases & Search ─────────────────────────────────────────────────────
  { id: "mongodb",       label: "MongoDB",       description: "NoSQL document database for MERN stack",          color: "#13AA52", Icon: IconMongoDB },
  { id: "elasticsearch", label: "ElasticSearch", description: "Distributed search, indexing & analytics engine",  color: "#00BFB3", Icon: IconElasticsearch },
  { id: "mysql",         label: "MySQL",         description: "Relational database management & SQL queries",    color: "#E48E00", Icon: IconMySQL },
  { id: "sql",           label: "SQL",           description: "Relational query language & schema design",       color: "#F29111", Icon: IconSQL },
  { id: "graphql",       label: "GraphQL",       description: "Declarative query language & flexible API layer",  color: "#E10098", Icon: IconGraphQL },
  // ── DevOps & Tools ─────────────────────────────────────────────────────────
  { id: "docker",        label: "Docker",        description: "Container platform for consistent deployments",    color: "#1D63ED", Icon: IconDocker },
  { id: "git",           label: "Git",           description: "Distributed version control system",              color: "#F05032", Icon: IconGit },
  { id: "github",        label: "GitHub",        description: "Code collaboration, PRs & CI/CD workflows",       color: "#c0c8d8", Icon: IconGitHub },
];
