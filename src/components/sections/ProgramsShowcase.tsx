"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { programs } from "@/data/site-data";

export default function ProgramsShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-brand-950 py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
            Our Programs
          </h2>
          <p className="mt-4 text-neutral-400">
            From peer mentorship to environmental justice, every program is designed
            to address the full spectrum of needs in the SCD community.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="overflow-hidden rounded-2xl border border-brand-800/30 bg-brand-950"
            >
              {/* Program image */}
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                >
                  Learn more
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full border border-brand-700 px-8 py-3 text-sm font-semibold text-brand-300 transition-all hover:border-brand-500 hover:text-white"
          >
            View All Programs
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
