"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 80);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')",
        }}
      >
        {/* Warm tinted overlay — not pure dark, has a forest hue */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, rgba(20,54,40,0.88) 0%, rgba(35,80,58,0.82) 40%, rgba(22,60,82,0.84) 100%)",
          }}
        />
      </div>

      {/* Soft grain texture for warmth */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* Subtle radial warm bloom center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(82,183,136,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-8 px-4 py-1.5 rounded-full"
            style={{
              color: "#95d5b2",
              border: "1px solid rgba(149,213,178,0.25)",
              background: "rgba(149,213,178,0.08)",
            }}
          >
            Bergen County, New Jersey
          </span>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-[4.25rem] font-bold text-white mb-6 leading-[1.12]"
            style={{ fontFamily: "'Lora', Georgia, serif", letterSpacing: "-0.025em" }}
          >
            Your county.
            <br />
            Your{" "}
            <em
              className="not-italic"
              style={{ color: "#b7e4c7" }}
            >
              community.
            </em>
            <br />
            All in one place.
          </h1>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(183,228,199,0.85)" }}
          >
            BergenConnect brings together local events, resources, volunteers, and neighbors —
            so finding help, giving back, or staying informed is always just a click away.
          </p>
        </div>

        <div
          className={`flex gap-3 justify-center flex-wrap transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            href="/directory"
            className="inline-block font-semibold px-8 py-4 rounded-xl text-base transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              background: "#74c69d",
              color: "#1a4d3e",
              boxShadow: "0 4px 20px rgba(116,198,157,0.3)",
            }}
          >
            Explore Resources
          </Link>
          <Link
            href="/calendar"
            className="inline-block font-semibold px-8 py-4 rounded-xl text-base transition-all duration-250 hover:-translate-y-0.5 hover:bg-white/10"
            style={{
              border: "1.5px solid rgba(183,228,199,0.4)",
              color: "#b7e4c7",
            }}
          >
            View Events →
          </Link>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 flex justify-center gap-10 md:gap-16 flex-wrap transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { value: "50+", label: "Partner Organizations" },
            { value: "200+", label: "Community Resources" },
            { value: "1,000+", label: "Residents Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Lora', Georgia, serif", color: "#95d5b2" }}
              >
                {stat.value}
              </div>
              <div className="text-xs tracking-wide mt-1" style={{ color: "rgba(183,228,199,0.6)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="animate-bounce flex flex-col items-center gap-1">
            <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(183,228,199,0.5)" }}>
              Scroll
            </span>
            <svg className="w-4 h-4" style={{ color: "rgba(183,228,199,0.5)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
