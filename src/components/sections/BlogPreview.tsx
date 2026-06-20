"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { blogPosts } from "@/data/site-data";
import BlurImage from "@/components/BlurImage";

const blogImageMap: Record<string, string> = {
  "Understanding Sickle Cell Crises: What's Happening in the Body":
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=85&auto=format&fit=crop",
  "Clean Air, Stronger Warriors: Our Tree Planting Impact":
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=85&auto=format&fit=crop",
  "Warrior Spotlight: Malik's Journey from Patient to Advocate":
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85&auto=format&fit=crop",
};

export default function BlogPreview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-24 sm:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
            From Our Blog
          </span>
          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
              Latest Updates
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Read all posts
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => {
            const imgSrc = blogImageMap[post.title];
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Link href={post.href} className="group block">
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    {imgSrc ? (
                      <BlurImage
                        src={imgSrc}
                        alt={post.title}
                        className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-105"
                        containerClass="rounded-2xl"
                      />
                    ) : (
                      <div className="flex h-48 items-center justify-center rounded-2xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                        <span className="text-6xl font-display font-bold text-brand-200 transition-colors group-hover:text-brand-300">
                          RL
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-brand-950 transition-colors group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                    Read More
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
