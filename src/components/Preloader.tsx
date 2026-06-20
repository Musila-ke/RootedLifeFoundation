"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle radial glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)]" />
          </div>

          <div className="relative text-center">
            <motion.h1
              className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Rooted Life
            </motion.h1>
            <motion.h1
              className="font-display text-4xl font-bold tracking-tight text-brand-400 sm:text-5xl"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Foundation
            </motion.h1>

            <motion.div
              className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-brand-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            />

            <motion.p
              className="mt-5 text-xs font-medium tracking-[0.12em] text-brand-400/60 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Sickle Cell Awareness &amp; Support
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
