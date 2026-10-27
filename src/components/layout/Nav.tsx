"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-zinc-200/70 bg-white/85 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/85"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ viewTransitionName: "site-header" }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Jehanzeb Siddiqui
          </span>
          <span className="hidden font-mono text-xs text-zinc-400 dark:text-zinc-500 sm:inline-block">
            / engineer
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  }`}
                >
                  {label}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Jehanzeb11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:block"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <div className="flex h-3 w-4 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {links.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-2.5 text-base font-medium transition-colors ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                        : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    )}
                  </Link>
                );
              })}

              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span>Jehanzeb Siddiqui</span>
                <a
                  href="https://github.com/Jehanzeb11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-white"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
