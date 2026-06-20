"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { partners } from "@/data/site-data";
import Link from "next/link";

const partnerCategories = [...new Set(partners.map((p) => p.category))];

export default function PartnersPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Collaboration</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Partners
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            We are proud to work alongside these organizations to advance health equity for the SCD community.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          {partnerCategories.map((category, ci) => (
            <div key={category} className="mb-16 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase mb-6"
              >
                {category}
              </motion.h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {partners
                  .filter((p) => p.category === category)
                  .map((partner, i) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.05 * i + 0.1 * ci }}
                      className="flex items-center gap-4 rounded-xl border border-brand-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-400">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-brand-950">{partner.name}</div>
                        <div className="text-xs text-neutral-500">{partner.category}</div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 rounded-2xl border border-brand-100 bg-brand-50/50 p-8 sm:p-12 text-center"
          >
            <h2 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
              Become a Partner
            </h2>
            <p className="mt-3 text-neutral-600">
              If your organization shares our commitment to health equity and SCD awareness,
              we would love to explore a partnership.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
            >
              Reach Out to Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
