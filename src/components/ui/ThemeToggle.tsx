"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "motion/react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.88 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative flex h-8 w-16 items-center rounded-full bg-zinc-200 p-1 dark:bg-zinc-700"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={`h-6 w-6 rounded-full ${
          theme === "dark"
            ? "translate-x-8 bg-indigo-400"
            : "translate-x-0 bg-amber-400"
        } flex items-center justify-center text-sm`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.span>
    </motion.button>
  );
}
