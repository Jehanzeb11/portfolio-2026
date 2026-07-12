import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — project enquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-500">
            Contact
          </p>
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white sm:text-5xl">
            Let&apos;s work together
          </h1>
          <p className="mb-8 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            I&apos;m open to full-time roles, freelance projects, and
            collaborations. Fill in the form and I&apos;ll get back to you
            within 24 hours.
          </p>

          <dl className="flex flex-col gap-4 text-sm">
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">Email</dt>
              <dd>
                <a
                  href="mailto:jehanzebsiddiqui20@gmail.com"
                  className="text-indigo-500 hover:underline"
                >
                  jehanzebsiddiqui20@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">Phone</dt>
              <dd>
                <a
                  href="tel:+923452077512"
                  className="text-indigo-500 hover:underline"
                >
                  +92-345-2077512
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">GitHub</dt>
              <dd>
                <a
                  href="https://github.com/Jehanzeb11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  github.com/Jehanzeb11
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">LinkedIn</dt>
              <dd>
                <a
                  href="https://linkedin.com/in/jehanzeb-siddiqui-b02b38266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  linkedin.com/in/jehanzeb-siddiqui-b02b38266
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">Location</dt>
              <dd className="text-zinc-500">Pakistan · Open to remote</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">Availability</dt>
              <dd className="text-zinc-500">Open to opportunities</dd>
            </div>
          </dl>
        </div>

        {/* Right — form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
