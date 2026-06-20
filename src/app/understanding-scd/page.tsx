"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function UnderstandingSCDPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section className="relative flex items-end bg-brand-950 pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-14 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.12)_0%,transparent_60%)]" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-brand-400 uppercase">Education</span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Understanding SCD
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            What sickle cell disease is, who it affects, and why awareness matters.
          </p>
        </div>
      </section>

      <section ref={ref} className="bg-white py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl space-y-12">
            {[
              {
                title: "What is Sickle Cell Disease?",
                content: "Sickle cell disease (SCD) is a genetic blood disorder affecting hemoglobin — the protein in red blood cells that carries oxygen throughout the body. In SCD, a genetic mutation causes red blood cells to become misshapen, forming a crescent or 'sickle' shape instead of the normal round, flexible disc. These sickle cells are stiff and sticky, causing them to get stuck in small blood vessels, which blocks blood flow and oxygen to tissues, resulting in severe pain episodes called crises.",
              },
              {
                title: "Who Does SCD Affect?",
                content: "SCD affects millions of people worldwide, with the highest prevalence among individuals of African, Mediterranean, Middle Eastern, Indian, Caribbean, and Latin American descent. In the United States alone, approximately 100,000 people live with SCD. It is one of the most common genetic disorders globally, yet it remains underfunded and under-researched compared to other diseases with similar prevalence.",
              },
              {
                title: "Common Symptoms & Complications",
                content: "Symptoms of SCD vary from person to person but can include: chronic anemia, recurrent pain crises (vaso-occlusive episodes), fatigue and weakness, jaundice (yellowing of skin and eyes), swelling in hands and feet, frequent infections, delayed growth in children, and vision problems. Long-term complications can include organ damage, stroke, pulmonary hypertension, and leg ulcers.",
              },
              {
                title: "Management & Treatment",
                content: "While there is no universal cure for SCD, treatments are available to manage symptoms and reduce complications. These include pain management strategies, hydroxyurea (a medication that reduces crisis frequency), blood transfusions, and bone marrow/stem cell transplants in eligible patients. Recent advances in gene therapy have also shown promise. Lifestyle factors — including hydration, temperature regulation, and avoiding triggers — play a significant role in crisis prevention.",
              },
              {
                title: "Why Environmental Factors Matter",
                content: "Environmental factors play a significant role in triggering SCD crises. Extreme temperatures, poor air quality, and high pollen counts can all precipitate pain episodes. This is why environmental justice is a core pillar of our work: addressing the environmental triggers that disproportionately affect SCD warriors in underserved communities through tree planting, air quality monitoring, and advocacy for cleaner neighborhoods.",
              },
              {
                title: "How You Can Help",
                content: "Awareness is the first step. Share accurate information about SCD, support research and advocacy organizations, donate to nonprofits serving the SCD community, and advocate for equitable healthcare policies. If you or someone you know has SCD, connect with a support network — no one should navigate this journey alone.",
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              >
                <h2 className="font-display text-2xl font-semibold text-brand-950">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
