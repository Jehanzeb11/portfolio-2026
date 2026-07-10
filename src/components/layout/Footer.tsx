export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      <p>
        © {year} Your Name · Built with Next.js, Three.js &amp; Motion ·{" "}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-indigo-500"
        >
          Source
        </a>
      </p>
    </footer>
  );
}
