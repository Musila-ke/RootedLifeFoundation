"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Handle cached images that won't trigger onLoad
  useEffect(() => {
    if (imgRef.current?.complete) setImgLoaded(true);
  }, []);

  useGSAP(() => {
    const text = textRef.current;
    const image = imageRef.current;
    if (!text || !image) return;

    // Elements start invisible via inline CSS — no flash on mount.
    // GSAP reads current state and animates to visible.
    const lines = text.querySelectorAll<HTMLElement>(".hero-line");
    const fades = text.querySelectorAll<HTMLElement>(".hero-fade");
    const btns = text.querySelectorAll<HTMLElement>(".hero-btn");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 });

    tl.fromTo(
      lines,
      { y: 80, opacity: 0, rotateX: -15 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15 },
    )
      .fromTo(
        fades,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.4",
      )
      .fromTo(
        btns,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
        "-=0.3",
      );

    tl.fromTo(
      image,
      { opacity: 0, x: 60, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1 },
      "-=0.8",
    );

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.set(image, {
          y: self.progress * 40,
          opacity: 1 - self.progress * 0.3,
        });
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-950 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      </div>

      <div className="container-page relative z-10 w-full py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={textRef}>
            <div className="hero-line mb-4 inline-block overflow-hidden" style={{ opacity: 0, transform: "translateY(80px) rotateX(-15deg)" }}>
              <span className="inline-block rounded-full border border-brand-700/50 bg-brand-800/30 px-4 py-1.5 text-xs font-medium tracking-wider text-brand-200 uppercase">
                Nonprofit &middot; Health Equity
              </span>
            </div>

            <h1 className="hero-line overflow-hidden" style={{ overflowWrap: "anywhere", opacity: 0, transform: "translateY(80px) rotateX(-15deg)" }}>
              <span className="block font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-7xl">
                Strength in
              </span>
              <span className="block font-display text-5xl leading-[1.05] text-brand-400 sm:text-6xl md:text-7xl lg:text-7xl">
                Every Sickle.
              </span>
            </h1>

            <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl" style={{ opacity: 0, transform: "translateY(30px)" }}>
              Advancing health equity for sickle cell warriors through education,
              support, advocacy, and environmental action.
            </p>

            <div className="hero-fade mt-10 flex flex-wrap gap-4" style={{ opacity: 0, transform: "translateY(30px)" }}>
              <Link
                href="/donate"
                className="hero-btn inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.97]"
                style={{ opacity: 0, transform: "translateY(20px) scale(0.95)" }}
              >
                Donate Now
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="hero-btn inline-flex items-center gap-2 rounded-full border border-neutral-700 px-8 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-brand-600 hover:text-white active:scale-[0.97]"
                style={{ opacity: 0, transform: "translateY(20px) scale(0.95)" }}
              >
                Our Mission
              </Link>
            </div>

            <div className="hero-fade mt-16 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-brand-800/50 pt-8" style={{ opacity: 0, transform: "translateY(30px)" }}>
              {[
                { label: "Warriors Supported", value: "100+" },
                { label: "Events Hosted", value: "50+" },
                { label: "Partner Orgs", value: "30+" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-xs text-neutral-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="relative hidden md:block" style={{ opacity: 0, transform: "translateX(60px) scale(0.95)" }}>
            <div className="relative overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 bg-brand-800 transition-opacity duration-700 ${imgLoaded ? "opacity-0" : "opacity-100"}`} />
              <img
                ref={imgRef}
                src="/hero-image.jpg"
                alt="African children in community"
                className={`h-[280px] w-full object-cover md:h-[426px] transition-all duration-1000 ease-out ${
                  imgLoaded ? "scale-100 blur-0" : "scale-105 blur-xl"
                }`}
                onLoad={() => setImgLoaded(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-xl border border-brand-700/30 bg-brand-900/60 backdrop-blur-sm px-5 py-3">
              <div className="flex items-center gap-2 text-sm text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-xs">
                  <svg className="h-3.5 w-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <span className="font-medium">100+ Warriors Supported</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
