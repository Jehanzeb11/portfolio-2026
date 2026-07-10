"use client";

import { motion } from "motion/react";

export function ResumePanel() {
  return (
    <section
      className="relative overflow-hidden py-24"
      aria-label="Resume download"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 to-purple-700" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-200">
            Resume
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-indigo-100">
            Download my resume for a full overview of my experience, education,
            and skills.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition-colors hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ↓ Download PDF
            </motion.a>
            <a
              href="/contact"
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Say hello →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
