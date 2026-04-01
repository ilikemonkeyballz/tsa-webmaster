"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: "#1a4d3e" }}>
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(82,183,136,0.13) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(45,106,79,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #95d5b2 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 section-container text-center">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span
            className="inline-block text-xs font-semibold tracking-[0.16em] uppercase mb-6 px-4 py-1.5 rounded-full"
            style={{ color: "#95d5b2", border: "1px solid rgba(149,213,178,0.2)", background: "rgba(149,213,178,0.07)" }}
          >
            Grow the Community
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#b7e4c7", fontFamily: "'Lora', Georgia, serif" }}
          >
            Know a Resource We're Missing?
          </h2>
          <p
            className={`text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ color: "rgba(149,213,178,0.8)" }}
          >
            Help us cultivate a comprehensive community directory by sharing local resources and services that matter to Bergen County residents.
          </p>
        </div>

        <div
          className={`flex gap-3 justify-center flex-wrap transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Link
            href="/submit"
            className="inline-block font-semibold px-8 py-4 rounded-xl text-base transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "#74c69d",
              color: "#1a4d3e",
              boxShadow: "0 4px 20px rgba(116,198,157,0.25)",
            }}
          >
            Submit a Resource
          </Link>
          <Link
            href="/directory"
            className="inline-block font-semibold px-8 py-4 rounded-xl text-base transition-all duration-250 hover:-translate-y-0.5 hover:bg-white/10"
            style={{ border: "1.5px solid rgba(183,228,199,0.35)", color: "#b7e4c7" }}
          >
            Browse Directory →
          </Link>
        </div>
      </div>
    </section>
  );
}
