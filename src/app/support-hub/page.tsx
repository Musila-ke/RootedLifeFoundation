"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { supportServices } from "@/data/site-data";
import Link from "next/link";

export default function SupportHubPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[30vh] items-end bg-brand-950 pt-20 pb-12 md:min-h-[50vh] md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Resources</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Support Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            You are not alone. Find the resources, connections, and support you need.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-semibold text-brand-950">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-16 rounded-2xl border border-brand-100 bg-brand-50/50 p-8 sm:p-12"
          >
            <h2 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
              Need Immediate Help?
            </h2>
            <p className="mt-3 text-neutral-600">
              If you or someone you know is experiencing a medical emergency, please call 911 immediately.
              For non-emergency SCD support, reach out to our team and we will connect you with the right resources.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
            >
              Contact the Support Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
