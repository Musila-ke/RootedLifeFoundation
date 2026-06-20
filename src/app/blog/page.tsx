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
  "Finding Strength in Community: Tanya's Story":
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=85&auto=format&fit=crop",
  "Breathing Easier: Kevin's Story":
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=85&auto=format&fit=crop",
};

export default function BlogPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end bg-brand-950 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Resources</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Stories, insights, and updates from the Rooted Life community.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Link href={post.href} className="group block">
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    {blogImageMap[post.title] ? (
                      <BlurImage
                        src={blogImageMap[post.title]}
                        alt={post.title}
                        className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-48 items-center justify-center rounded-2xl bg-brand-50 transition-colors group-hover:bg-brand-100">
                        <span className="text-6xl font-display font-bold text-brand-200 group-hover:text-brand-300">RL</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-brand-950 transition-colors group-hover:text-brand-600">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>
                  <div className="mt-4 text-sm text-neutral-500">By {post.author}</div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
