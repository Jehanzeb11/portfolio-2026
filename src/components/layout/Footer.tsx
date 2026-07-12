export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
      <p>
        © {year} Jehanzeb Siddiqui · Built with Next.js &amp; Motion ·{" "}
        <a
          href="https://github.com/Jehanzeb11"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-indigo-500"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
