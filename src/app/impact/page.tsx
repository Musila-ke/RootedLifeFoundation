"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { impactSections, testimonials } from "@/data/site-data";
import Link from "next/link";

export default function ImpactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[30vh] items-end bg-brand-950 pt-20 pb-12 md:min-h-[50vh] md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Our Impact</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Measuring Change
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            We are committed to transparency. Here is the difference your support is making.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2">
            {impactSections.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl border border-brand-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="font-display text-5xl font-bold text-brand-600">{item.stat}</div>
                <h3 className="mt-3 font-display text-xl font-semibold text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
                <div className="mt-4 rounded-lg bg-brand-50 px-4 py-2 text-sm text-brand-700">
                  {item.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-20">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl text-brand-950 sm:text-4xl">Warrior Voices</h2>
          <div className="mt-10 mx-auto max-w-2xl">
            <blockquote className="text-lg italic text-neutral-600">
              "{testimonials[0].quote}"
            </blockquote>
            <p className="mt-4 font-semibold text-brand-950">— {testimonials[0].author}</p>
            <p className="text-sm text-neutral-500">{testimonials[0].role}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl text-brand-950 sm:text-4xl">Help Us Go Further</h2>
          <p className="mt-4 text-neutral-600">Every dollar and every hour of service compounds our impact.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/donate" className="rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white hover:bg-brand-500">Donate</Link>
            <Link href="/volunteer" className="rounded-full border border-brand-200 px-8 py-3 text-sm font-semibold text-brand-700 hover:border-brand-300 hover:bg-brand-50">Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
