"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import BlurImage from "@/components/BlurImage";

const stories = [
  {
    name: "Tanya R.",
    title: "Finding Strength in Community",
    excerpt: "After years of managing SCD in silence, Tanya found a support network that changed everything. Now she mentors other warriors.",
    href: "/blog/warrior-spotlight-tanya",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Malik J.",
    title: "From Patient to Advocate",
    excerpt: "Malik turned decades of personal experience with SCD into a mission to build peer support programs reaching hundreds of families.",
    href: "/blog/warrior-spotlight-malik",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&auto=format&fit=crop",
  },
  {
    name: "Kevin A.",
    title: "Breathing Easier",
    excerpt: "After the tree planting initiative came to his neighborhood, Kevin noticed a real difference in his quality of life.",
    href: "/blog/warrior-spotlight-kevin",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=85&auto=format&fit=crop",
  },
];

export default function WarriorStoriesPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Community</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Warrior Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Real voices from the SCD community. These are the stories that inspire our work.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Link href={story.href} className="group block">
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    <BlurImage
                      src={story.image}
                      alt={story.title}
                      className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="font-display text-lg font-semibold leading-snug text-brand-950 transition-colors group-hover:text-brand-600">
                    {story.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{story.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                    Read {story.name.split(" ")[0]}'s story
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
