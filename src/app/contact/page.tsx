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
                  href="mailto:hello@yourname.dev"
                  className="text-indigo-500 hover:underline"
                >
                  hello@yourname.dev
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">
                Location
              </dt>
              <dd className="text-zinc-500">Remote · UTC+0</dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-900 dark:text-white">
                Availability
              </dt>
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
