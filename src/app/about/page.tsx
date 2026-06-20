"use client";

import Link from "next/link";
import { teamMembers, stats } from "@/data/site-data";

export default function AboutPage() {
  return (
    <>
      <section className="relative flex items-end bg-brand-950 pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-14 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">About Us</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Our Story
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
              Rooted in community. Driven by purpose.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              Rooted Life Foundation was founded in 2020 by a group of healthcare
              providers, environmental justice advocates, and sickle cell warriors
              who recognized a critical gap: the communities most affected by SCD
              were receiving the least support.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              What started as a small support group in Charlotte, North Carolina has
              grown into a multi-program nonprofit serving hundreds of warriors and
              families across the region. Our name reflects our belief: when we are
              rooted in purpose, community, and action, we can weather any storm.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 rounded-2xl border border-brand-100 bg-brand-50/50 p-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-brand-600">{s.value}</div>
                  <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
              Our Team
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
              Meet the People Behind the Mission
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-400">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">{member.name}</h3>
                <p className="text-sm font-medium text-brand-600">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">Our Values</span>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
              What Guides Us
            </h2>
          </div>
          <div className="mt-12 mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {[
              { title: "Community First", desc: "Every decision starts with what serves warriors and their families best." },
              { title: "Health Equity", desc: "We fight for a world where your health outcomes aren't determined by your zip code." },
              { title: "Environmental Justice", desc: "Clean air, water, and neighborhoods are not privileges — they are rights." },
              { title: "Warrior-Led", desc: "Our programs are shaped and led by the people who live with SCD every day." },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-brand-100 p-6">
                <h3 className="font-display text-lg font-semibold text-brand-950">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-950 py-20 text-center">
        <div className="container-page">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Want to be part of our story?</h2>
          <p className="mt-4 text-neutral-400">Join us in building a future where no warrior fights alone.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/donate" className="rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500">Donate</Link>
            <Link href="/volunteer" className="rounded-full border border-brand-700 px-8 py-3 text-sm font-semibold text-brand-300 transition-all hover:border-brand-500 hover:text-white">Volunteer</Link>
          </div>
        </div>
      </section>
    </>
  );
}
