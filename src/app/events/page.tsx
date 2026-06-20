"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { events } from "@/data/site-data";

export default function EventsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Get Involved</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Events
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Join us for awareness walks, workshops, community plantings, and more.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                id={event.href.split("#")[1]}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group scroll-mt-20 rounded-2xl border border-brand-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="rounded-full bg-brand-600 px-3 py-1 text-[10px] font-semibold tracking-wider text-white uppercase">
                      {event.type}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
                      {event.title}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {event.location}
                      </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
