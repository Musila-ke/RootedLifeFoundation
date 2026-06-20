"use client";

import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, animate } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);

  const { scrollY } = useScroll();
  const [threshold, setThreshold] = useState(0);

  useIsomorphicLayoutEffect(() => {
    setThreshold(window.innerHeight * 0.4);
  }, []);

  const bgOpacity = useTransform(scrollY, [0, threshold || 1], [0, 1]);

  // Switch text colors at 20vh
  useIsomorphicLayoutEffect(() => {
    const check = () => setScrolled(window.scrollY > window.innerHeight * 0.2);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Animate underline position on navigation
  useIsomorphicLayoutEffect(() => {
    const nav = navRef.current;
    const underline = underlineRef.current;
    if (!nav || !underline) return;

    const active = nav.querySelector<HTMLElement>("[data-active]");
    if (!active) {
      animate(underline, { opacity: 0 }, { duration: 0.15 });
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();

    animate(
      underline,
      {
        left: linkRect.left - navRect.left + nav.scrollLeft,
        width: linkRect.width,
        opacity: 1,
      },
      { duration: 0.35, ease: [0.76, 0, 0.24, 1] }
    );
  }, [pathname]);

  // On first mount, jump to active without animation
  useIsomorphicLayoutEffect(() => {
    const nav = navRef.current;
    const underline = underlineRef.current;
    if (!nav || !underline) return;

    const active = nav.querySelector<HTMLElement>("[data-active]");
    if (!active) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    underline.style.left = `${linkRect.left - navRect.left}px`;
    underline.style.width = `${linkRect.width}px`;
    underline.style.opacity = "1";
  }, []);

  // Re-measure on resize without animation
  useIsomorphicLayoutEffect(() => {
    const nav = navRef.current;
    const underline = underlineRef.current;
    if (!nav || !underline) return;

    const measure = () => {
      const active = nav.querySelector<HTMLElement>("[data-active]");
      if (!active) return;
      const navRect = nav.getBoundingClientRect();
      const linkRect = active.getBoundingClientRect();
      underline.style.left = `${linkRect.left - navRect.left}px`;
      underline.style.width = `${linkRect.width}px`;
    };

    const ro = new ResizeObserver(measure);
    ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-white/95 backdrop-blur-md shadow-sm"
        style={{ opacity: bgOpacity }}
      />

      <div className="container-page relative flex h-16 items-center justify-between">
        <div className="relative z-10 -ml-6">
          <Logo variant="navbar" />
        </div>

        <nav ref={navRef} className="relative z-10 hidden items-center md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-active={active || undefined}
                className={`relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? active
                      ? "text-brand-700"
                      : "text-text-secondary hover:text-brand-700"
                    : active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Single underline — animated via imperative animate() */}
          <span
            ref={underlineRef}
            className={`pointer-events-none absolute bottom-0 h-0.5 rounded-full ${
              scrolled ? "bg-brand-600" : "bg-white"
            }`}
            style={{ left: 0, width: 0, opacity: 0 }}
          />

          <Link
            href="/donate"
            className="ml-3 rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:shadow-lg active:scale-[0.97]"
          >
            Donate
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-text" : "bg-white"
              }`}
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-text" : "bg-white"
              }`}
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                scrolled ? "bg-text" : "bg-white"
              }`}
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-6 bg-brand-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {NAV_LINKS.map((link, i) => {
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-display text-2xl transition-colors ${
                      active ? "text-brand-400" : "text-white hover:text-brand-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-brand-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-brand-700"
              >
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
