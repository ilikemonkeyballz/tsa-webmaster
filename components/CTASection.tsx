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
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-forest-dark">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="#a8d5ba"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)"/>
        </svg>
      </div>

      {/* Soft radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(82,183,136,0.12) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 section-container text-center text-white">
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-seafoam transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Know a Resource We're Missing?
        </h2>
        <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light text-mint/90 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Help us cultivate a comprehensive community directory by sharing local resources and services that matter.
        </p>
        <div className={`flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/submit"
            className="inline-block bg-mint hover:bg-seafoam text-forest-dark font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
          >
            Submit a Resource
          </Link>
          <Link
            href="/directory"
            className="inline-block border-2 border-seafoam/50 hover:border-seafoam text-seafoam hover:text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:bg-seafoam/10 text-lg"
          >
            Browse Directory →
          </Link>
        </div>
      </div>
    </section>
  );
}
