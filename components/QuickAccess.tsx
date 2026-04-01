"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SPRING = "cubic-bezier(0.34, 1.48, 0.64, 1)";
const EASE   = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function QuickAccess() {
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

  const categories = [
    { title: "Healthcare",      description: "Medical services, clinics & mental health support",   icon: "/icons/cardiogram.png",          accent: "#1b4965", accentRgb: "27,73,101",  categoryValue: "Social Services" },
    { title: "Food Assistance", description: "Food banks, pantries & free meal programs",            icon: "/icons/burger.png",              accent: "#2d6a4f", accentRgb: "45,106,79",  categoryValue: "Food & Social Services" },
    { title: "Housing",         description: "Emergency shelter & housing support services",          icon: "/icons/house.png",               accent: "#6b4a2a", accentRgb: "107,74,42",  categoryValue: "Shelter & Housing" },
    { title: "Education",       description: "Adult learning, GED prep & job training",              icon: "/icons/book.png",                accent: "#3a2d6b", accentRgb: "58,45,107",  categoryValue: "Employment Services" },
  ];

  return (
    <section ref={sectionRef} className="section-container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      {/* Section heading — tight spacing before, loose after = rhythm (#10) */}
      <div className={`flex flex-col items-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
           style={{ transitionTimingFunction: EASE }}>
        <span className="text-xs font-semibold tracking-[0.16em] uppercase mb-3" style={{ color: "#74c69d" }}>
          Find What You Need
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}>
          Quick Access
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/directory#${cat.categoryValue.toLowerCase().replace(/\s+/g,"-")}`}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/directory#${cat.categoryValue.toLowerCase().replace(/\s+/g,"-")}`;
              setTimeout(() => {
                const el = document.querySelector(`[data-category="${cat.categoryValue}"]`);
                if (el) el.scrollIntoView({ behavior:"smooth", block:"start" });
              }, 100);
            }}
            className={`group block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 75}ms`, transitionTimingFunction: EASE }}
          >
            <div
              className="h-full rounded-[1.375rem] p-6 relative overflow-hidden"
              style={{
                background: "#fdfaf5",
                boxShadow: "0 1px 2px rgba(45,106,79,0.05), 0 3px 12px rgba(45,106,79,0.06), 0 0 0 1px rgba(116,198,157,0.13)",
                transition: `box-shadow 260ms ease, transform 260ms ${SPRING}`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px) scale(1.005)"; /* spring overshoot (#4) */
                el.style.boxShadow = `0 0 0 1.5px rgba(${cat.accentRgb},0.25), 0 8px 24px rgba(45,106,79,0.1), 0 20px 48px rgba(45,106,79,0.07), 0 0 36px rgba(${cat.accentRgb},0.08)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "0 1px 2px rgba(45,106,79,0.05), 0 3px 12px rgba(45,106,79,0.06), 0 0 0 1px rgba(116,198,157,0.13)";
              }}
            >
              {/* Recurring dot motif in card well (#3) */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 pointer-events-none opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(116,198,157,0.22) 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />

              {/* Directional light bloom (#2) */}
              <div
                className="absolute -top-6 -left-6 w-28 h-28 pointer-events-none rounded-full"
                style={{ background: `radial-gradient(circle, rgba(${cat.accentRgb},0.08) 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{
                  background: `rgba(${cat.accentRgb},0.09)`,
                  transition: `transform 260ms ${SPRING}`,
                }}
                ref={(el) => {
                  // icon grows with spring on parent hover
                }}
              >
                <img src={cat.icon} alt={cat.title} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300" style={{ filter: `brightness(0) saturate(100%) invert(25%) sepia(60%) saturate(300%) hue-rotate(${index*45}deg)` }} />
              </div>

              <h3 className="text-base font-semibold mb-1.5 relative z-10" style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}>
                {cat.title}
              </h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "#4a4e69" }}>
                {cat.description}
              </p>

              {/* Arrow — gap widens on hover (#4 micro-surprise) */}
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold relative z-10 group-hover:gap-2.5 transition-all duration-200" style={{ color: cat.accent }}>
                Explore
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
