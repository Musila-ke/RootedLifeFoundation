"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { stats } from "@/data/site-data";

export default function ImpactStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(220,38,38,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(220,38,38,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container-page relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
            By the Numbers
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
            Our Impact
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative rounded-2xl border border-brand-100 bg-white p-8 text-center transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50"
            >
              <div className="font-display text-5xl font-bold text-brand-600 sm:text-6xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-neutral-600">
                {stat.label}
              </div>
              <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-brand-200 transition-all group-hover:w-20 group-hover:bg-brand-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
