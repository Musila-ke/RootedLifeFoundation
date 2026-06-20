"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

export function DonateCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.06)_0%,transparent_70%)]" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
            Make a Difference
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
            Your Support Powers Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Every donation brings us closer to a world where no warrior fights alone.
            From educational materials to mentor training to tree planting — your
            contribution goes directly to the communities we serve.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-600/25 active:scale-[0.97]"
            >
              Donate Now
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-10 py-4 text-sm font-semibold text-brand-700 transition-all hover:border-brand-300 hover:bg-brand-50"
            >
              Volunteer With Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function VolunteerCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)]" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">
            Get Involved
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl">
            Lend Your Strength
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            Whether you have an hour or a lifetime of experience to share, there is
            a place for you in this movement. Join us in building healthier,
            stronger communities for sickle cell warriors.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-700 px-10 py-4 text-sm font-semibold text-brand-300 transition-all hover:border-brand-500 hover:text-white active:scale-[0.97]"
            >
              Find Your Role
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-xl hover:shadow-brand-600/25 active:scale-[0.97]"
            >
              See Events
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
