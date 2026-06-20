"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

const donationTiers = [
  { amount: "$25", desc: "Provides educational materials for one warrior family" },
  { amount: "$50", desc: "Funds a mentorship session with a trained warrior mentor" },
  { amount: "$100", desc: "Supplies trees for a community planting event" },
  { amount: "$250", desc: "Sponsors a half-day wellness workshop" },
  { amount: "$500", desc: "Funds a school-based SCD awareness presentation" },
  { amount: "$1,000", desc: "Supports a full community awareness walk" },
];

export default function DonatePage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Support Our Work</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Donate
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Your donation directly supports sickle cell warriors and their families through education, mentorship, and environmental action.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="rounded-2xl border border-brand-100 bg-brand-50/50 p-8 sm:p-12"
            >
              <h2 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
                Make a Donation
              </h2>
              <p className="mt-3 text-neutral-600">
                Rooted Life Foundation is a registered 501(c)(3) nonprofit. Your donation is tax-deductible to the extent allowed by law.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {donationTiers.slice(0, 3).map((tier) => (
                  <div
                    key={tier.amount}
                    className="cursor-pointer rounded-xl border border-brand-200 bg-white p-6 text-center transition-all hover:border-brand-400 hover:shadow-md"
                  >
                    <div className="font-display text-3xl font-bold text-brand-600">{tier.amount}</div>
                    <p className="mt-2 text-xs text-neutral-500">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {donationTiers.slice(3).map((tier) => (
                  <div
                    key={tier.amount}
                    className="cursor-pointer rounded-xl border border-brand-200 bg-white p-6 text-center transition-all hover:border-brand-400 hover:shadow-md"
                  >
                    <div className="font-display text-3xl font-bold text-brand-600">{tier.amount}</div>
                    <p className="mt-2 text-xs text-neutral-500">{tier.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-neutral-500">
                  Prefer to donate by check? Make payable to <strong>Rooted Life Foundation</strong> and mail to our headquarters.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Contact us for mailing address
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
