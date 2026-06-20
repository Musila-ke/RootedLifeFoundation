"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { volunteerRoles } from "@/data/site-data";
import Link from "next/link";

export default function VolunteerPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Get Involved</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Volunteer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Your time and talent can make a tangible difference in the lives of sickle cell warriors.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase"
            >
              Find Your Fit
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-brand-950 sm:text-5xl"
            >
              Volunteer Roles
            </motion.h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-semibold text-brand-950">{role.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
                  {role.commitment}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-brand-950 sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-neutral-600">
              Fill out our volunteer interest form and we will match you with a role that fits your skills and schedule.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
              >
                Sign Up to Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
