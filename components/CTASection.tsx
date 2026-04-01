"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SPRING = "cubic-bezier(0.34, 1.48, 0.64, 1)";

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden" style={{ background: "#1a4d3e" }}>

      {/* Directional light — top-center source (#2), consistent with hero */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(82,183,136,0.16) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 10% 100%, rgba(45,106,79,0.12) 0%, transparent 50%)",
      }} />

      {/* Recurring dot motif (#3) — same 28px grid, same color */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(116,198,157,0.1) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Soft vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.18) 100%)",
      }} />

      <div className="relative z-10 section-container text-center" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-block text-xs font-semibold tracking-[0.16em] uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{ color: "#95d5b2", border: "1px solid rgba(149,213,178,0.18)", background: "rgba(149,213,178,0.07)" }}>
            Grow the Community
          </span>

          {/* Focus moment: large, centered heading is the one thing that stands out (#7) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#b7e4c7", fontFamily: "'Lora', Georgia, serif", letterSpacing: "-0.02em" }}>
            Know a Resource We're Missing?
          </h2>

          <p className={`text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
             style={{ color: "rgba(149,213,178,0.75)" }}>
            Help us cultivate a comprehensive directory by sharing local resources and services that matter to Bergen County residents.
          </p>
        </div>

        <div className={`flex gap-3 justify-center flex-wrap transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <Link
            href="/submit"
            className="inline-block font-semibold px-9 py-4 rounded-xl text-base"
            style={{
              background: "#74c69d",
              color: "#1a4d3e",
              boxShadow: "0 4px 20px rgba(116,198,157,0.28)",
              transition: `background 260ms ease, box-shadow 260ms ease, transform 200ms ${SPRING}`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px) scale(1.03)";
              el.style.boxShadow = "0 10px 32px rgba(116,198,157,0.38)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "";
              el.style.boxShadow = "0 4px 20px rgba(116,198,157,0.28)";
            }}
          >
            Submit a Resource
          </Link>
          <Link
            href="/directory"
            className="inline-block font-semibold px-9 py-4 rounded-xl text-base"
            style={{
              border: "1.5px solid rgba(183,228,199,0.32)",
              color: "#b7e4c7",
              transition: `background 260ms ease, border-color 260ms ease, transform 200ms ${SPRING}`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px) scale(1.03)";
              el.style.background = "rgba(183,228,199,0.09)";
              el.style.borderColor = "rgba(183,228,199,0.55)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "";
              el.style.background = "transparent";
              el.style.borderColor = "rgba(183,228,199,0.32)";
            }}
          >
            Browse Directory →
          </Link>
        </div>
      </div>
    </section>
  );
}
