"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function ContactPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[30vh] items-end bg-brand-950 pt-20 pb-12 md:min-h-[50vh] md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Get in Touch</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <h2 className="font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
                Let's Start a Conversation
              </h2>
              <p className="mt-4 text-neutral-600">
                Whether you have a question about our programs, want to partner with
                us, or just want to learn more — we would love to hear from you.
              </p>
              <div className="mt-10 space-y-6">
                {[
                  { label: "Email", value: "hello@rootedlifefoundation.org" },
                  { label: "Phone", value: "(704) 555-0142" },
                  { label: "Location", value: "Charlotte, North Carolina" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">{item.label}</div>
                    <div className="mt-1 text-neutral-700">{item.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-brand-100 bg-brand-50/50 p-8"
            >
              <h3 className="font-display text-xl font-semibold text-brand-950">Send a Message</h3>
              <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" placeholder="How can we help?" />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
