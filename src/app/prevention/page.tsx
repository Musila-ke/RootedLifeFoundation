"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function PreventionPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const topics = [
    {
      title: "Hydration is Key",
      content: "Dehydration is one of the most common triggers for sickle cell crises. Warriors should aim to drink 8-12 glasses of water daily, and increase intake during hot weather, exercise, or travel. Avoid excessive caffeine and alcohol, which can contribute to dehydration.",
    },
    {
      title: "Temperature Management",
      content: "Extreme temperatures — both hot and cold — can trigger crises. Dress in layers during cold weather, use air conditioning in extreme heat, avoid swimming in cold water, and warm up gradually before physical activity.",
    },
    {
      title: "Avoid Overexertion",
      content: "While regular, moderate exercise is beneficial, overexertion can trigger a crisis. Listen to your body, take frequent breaks, stay hydrated during physical activity, and avoid exercise during extreme weather or when feeling unwell.",
    },
    {
      title: "Know Your Triggers",
      content: "Common SCD triggers include: dehydration, extreme temperatures, stress, infection, high altitude, smoking and secondhand smoke, alcohol consumption, and physical overexertion. Identifying and avoiding personal triggers is an essential part of crisis prevention.",
    },
    {
      title: "Environmental Precautions",
      content: "Poor air quality is a significant trigger for many warriors. Monitor local air quality indexes, wear masks on high-pollution days, use air purifiers indoors, and advocate for cleaner air in your community. Our tree planting initiatives directly address this by improving neighborhood air quality.",
    },
    {
      title: "Regular Medical Care",
      content: "Consistent medical follow-up is crucial for crisis prevention. This includes regular check-ups with a hematologist, staying current on vaccinations, taking prescribed medications (such as hydroxyurea) as directed, and routine blood work to monitor for complications.",
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[30vh] items-end bg-brand-950 pt-20 pb-12 md:min-h-[50vh] md:pt-32 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Education</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Crisis Prevention
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Practical strategies for reducing the frequency and severity of sickle cell crises.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {topics.map((topic, i) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className="rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{topic.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
