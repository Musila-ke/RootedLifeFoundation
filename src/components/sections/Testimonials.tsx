"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { testimonials } from "@/data/site-data";

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">
            Voices
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
            Words from the Community
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative rounded-2xl border border-brand-800/50 bg-brand-900/30 p-8"
            >
              <svg
                className="mb-4 h-8 w-8 text-brand-700/50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <p className="text-sm leading-relaxed text-neutral-300">
                {t.quote}
              </p>
              <div className="mt-6 border-t border-brand-800/50 pt-4">
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-xs text-neutral-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
