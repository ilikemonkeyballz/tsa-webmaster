"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 80);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/85 via-forest-medium/80 to-ocean-dark/85"></div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#95d5b2"/>
              <circle cx="10" cy="10" r="1" fill="#b7e4c7"/>
              <circle cx="50" cy="50" r="1" fill="#74c69d"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Your county.<br />
            Your <span className="text-seafoam italic">community.</span><br />
            All in one place.
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl text-seafoam mb-8 font-light tracking-wide">
            Where Connections Grow Stronger
          </p>
        </div>

        <div className={`mt-12 text-white text-base md:text-lg max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6 leading-relaxed">
            <p className="text-lg md:text-xl text-mint">
              BergenConnect brings together local events, resources, volunteers, and neighbors. So finding help, giving back, or staying informed is always just a click away.
            </p>
            <p className="text-base md:text-lg text-white/80">
              Discover resources that nourish, support that sustains, and services that help you flourish.
            </p>
          </div>
        </div>

        <div className={`mt-16 flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/directory"
            className="inline-block bg-sage hover:bg-mint text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 text-lg"
          >
            Explore Resources
          </Link>
          <Link
            href="/calendar"
            className="inline-block border-2 border-seafoam/60 hover:border-seafoam text-seafoam hover:text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:bg-seafoam/10 text-lg"
          >
            View Events →
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <div className="text-white/70 text-sm mb-2 font-medium">Discover More</div>
            <svg
              className="w-6 h-6 mx-auto text-white/70"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
