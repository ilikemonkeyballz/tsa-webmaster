"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* Fake "live" activity data — makes site feel inhabited (#9) */
const ACTIVITY = [
  { avatar: "MR", name: "Maria R.", action: "joined Community Food Bank", time: "2m ago", color: "#2d6a4f" },
  { avatar: "JK", name: "James K.", action: "signed up to volunteer", time: "5m ago", color: "#1b4965" },
  { avatar: "SP", name: "Sofia P.", action: "added an event to calendar", time: "11m ago", color: "#3a2d6b" },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activityIdx, setActivityIdx] = useState(0);
  const [activityVisible, setActivityVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 80);

    // Rotate activity feed (#9 — signs of life)
    const interval = setInterval(() => {
      setActivityVisible(false);
      setTimeout(() => {
        setActivityIdx((i) => (i + 1) % ACTIVITY.length);
        setActivityVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activity = ACTIVITY[activityIdx];

  return (
    <section className="relative min-h-[93vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')" }}
      >
        {/* Warm directional overlay — light source comes from top-left (#2) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, rgba(18,50,37,0.84) 0%, rgba(32,72,52,0.80) 35%, rgba(20,55,78,0.82) 100%)",
          }}
        />
      </div>

      {/* Recurring dot motif on dark bg (#3) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(149,213,178,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Directional light bloom — top-left source (#2) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 25% 30%, rgba(82,183,136,0.13) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-8 px-4 py-1.5 rounded-full"
            style={{ color: "#95d5b2", border: "1px solid rgba(149,213,178,0.22)", background: "rgba(149,213,178,0.07)" }}
          >
            Bergen County, New Jersey
          </span>
        </div>

        {/* Headline — FOCUS MOMENT for this page (#7) */}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1
            className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white mb-6 leading-[1.1]"
            style={{ fontFamily: "'Lora', Georgia, serif", letterSpacing: "-0.03em" }}
          >
            Your county.<br />
            Your{" "}
            <span
              style={{
                color: "#b7e4c7",
                /* shimmer on the accent word = micro-surprise (#4) */
                background: "linear-gradient(90deg, #95d5b2 0%, #d4f5e4 45%, #95d5b2 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear 1.2s infinite",
              }}
            >
              community.
            </span><br />
            All in one place.
          </h1>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "rgba(183,228,199,0.82)" }}>
            BergenConnect brings together local events, resources, volunteers, and neighbors — so finding help, giving back, or staying informed is always just a click away.
          </p>
        </div>

        {/* CTAs — spring overshoot buttons (#4) */}
        <div className={`flex gap-3 justify-center flex-wrap transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link
            href="/directory"
            className="btn-hero-primary inline-block font-semibold px-9 py-4 rounded-xl text-base"
            style={{
              background: "#74c69d",
              color: "#1a4d3e",
              boxShadow: "0 4px 20px rgba(116,198,157,0.32)",
              transition: "background 260ms ease, box-shadow 260ms ease, transform 200ms cubic-bezier(0.34,1.48,0.64,1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px) scale(1.03)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 32px rgba(116,198,157,0.42)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(116,198,157,0.32)";
            }}
          >
            Explore Resources
          </Link>
          <Link
            href="/calendar"
            className="inline-block font-semibold px-9 py-4 rounded-xl text-base"
            style={{
              border: "1.5px solid rgba(183,228,199,0.38)",
              color: "#b7e4c7",
              transition: "background 260ms ease, border-color 260ms ease, transform 200ms cubic-bezier(0.34,1.48,0.64,1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px) scale(1.03)";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(183,228,199,0.09)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(183,228,199,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(183,228,199,0.38)";
            }}
          >
            View Events →
          </Link>
        </div>

        {/* Stats — tight spacing creates rhythm (#10) */}
        <div className={`mt-14 flex justify-center gap-8 md:gap-14 flex-wrap transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { value: "50+", label: "Partner Organizations" },
            { value: "200+", label: "Community Resources" },
            { value: "1,000+", label: "Residents Served" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              {i > 0 && (
                <div className="absolute -left-4 md:-left-7 top-1/2 -translate-y-1/2 h-8 w-px" style={{ background: "rgba(149,213,178,0.2)" }} />
              )}
              <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Lora', Georgia, serif", color: "#95d5b2" }}>
                {stat.value}
              </div>
              <div className="text-xs tracking-wide mt-0.5" style={{ color: "rgba(183,228,199,0.55)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Live activity ticker — signs of life (#9) */}
        <div className={`mt-10 flex justify-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div
            className="flex items-center gap-3 px-4 py-2.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(149,213,178,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Live indicator */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#74c69d" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#74c69d" }} />
            </span>

            <div
              className="flex items-center gap-2 text-xs transition-all duration-400"
              style={{ color: "rgba(183,228,199,0.75)", opacity: activityVisible ? 1 : 0, transform: activityVisible ? "translateY(0)" : "translateY(4px)" }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-[9px] flex-shrink-0"
                style={{ background: activity.color }}
              >
                {activity.avatar}
              </span>
              <span><strong style={{ color: "#95d5b2" }}>{activity.name}</strong> {activity.action}</span>
              <span style={{ color: "rgba(149,213,178,0.4)" }}>· {activity.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(183,228,199,0.4)" }}>Scroll</span>
        <div className="animate-bounce">
          <svg className="w-4 h-4" style={{ color: "rgba(183,228,199,0.4)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
