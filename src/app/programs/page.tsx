"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { programs } from "@/data/site-data";

export default function ProgramsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex items-end bg-brand-950 pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-14 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">What We Do</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our Programs
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Every program is designed to address the full spectrum of needs in the sickle cell community.
          </p>
        </div>
      </section>

      {programs.map((program, i) => (
        <section
          key={program.title}
          id={program.href.split("#")[1]}
          ref={i === 0 ? ref : undefined}
          className={`py-24 scroll-mt-20 ${i % 2 === 0 ? "bg-white" : "bg-brand-50"}`}
        >
          <div className="container-page">
            <div className={`mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.05 * i }}
                  className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase"
                >
                  {program.tagline}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  className="mt-4 font-display text-3xl leading-tight tracking-tight text-brand-950 sm:text-4xl"
                >
                  {program.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 * i }}
                  className="mt-6 text-lg leading-relaxed text-neutral-600"
                >
                  {program.description}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className={`relative h-80 overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-brand-950 py-20 text-center">
        <div className="container-page">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Support Our Programs</h2>
          <p className="mt-4 text-neutral-400">Your donation helps us expand and sustain these initiatives.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
