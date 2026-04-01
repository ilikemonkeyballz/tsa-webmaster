"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SPRING = "cubic-bezier(0.34, 1.48, 0.64, 1)";
const EASE   = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      name: "Community Food Bank",
      category: "Food Assistance",
      description: "Providing fresh groceries and meals to families in need. Open Monday–Saturday with no appointment necessary.",
      hours: "Mon–Sat: 9AM–5PM",
      contact: "(555) 123-4567",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
      accent: "#2d6a4f", accentRgb: "45,106,79",
      /* Focus moment: first card is the "feature" card (#7) */
      featured: true,
    },
    {
      name: "Free Medical Clinic",
      category: "Healthcare",
      description: "Offering free healthcare services including check-ups, vaccinations, and chronic disease management.",
      hours: "Tue–Fri: 8AM–6PM",
      contact: "(555) 234-5678",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
      accent: "#1b4965", accentRgb: "27,73,101",
      featured: false,
    },
    {
      name: "Adult Learning Center",
      category: "Education",
      description: "GED preparation, English classes, job training, and computer skills workshops for adults of all ages.",
      hours: "Mon–Thu: 10AM–8PM",
      contact: "(555) 345-6789",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
      accent: "#3a2d6b", accentRgb: "58,45,107",
      featured: false,
    },
  ];

  const categoryColors: Record<string,string> = {
    "Food Assistance": "#2d6a4f",
    Healthcare: "#1b4965",
    Education: "#3a2d6b",
  };

  return (
    /* Rhythm: generous open space above this section (#10) */
    <section
      ref={sectionRef}
      className="section-container"
      style={{ paddingTop: "6rem", paddingBottom: "5rem" }}
    >
      {/* Heading block — left-offset for visual asymmetry (#10 rhythm) */}
      <div className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
           style={{ transitionTimingFunction: EASE }}>
        <span className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: "#74c69d" }}>
          Spotlights
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}>
          Featured Resources
        </h2>
        <p className="text-sm mt-3 max-w-md" style={{ color: "#4a4e69" }}>
          Exceptional community services making a real difference every day.
        </p>
      </div>

      {/* Slight asymmetric grid — featured card is taller = focus moment (#7) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {highlights.map((resource, index) => (
          <div
            key={index}
            className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{
              transitionDelay: `${index * 110}ms`,
              transitionTimingFunction: EASE,
              /* Featured card sits slightly higher = hierarchy (#7) */
              marginTop: resource.featured ? "0" : "1.5rem",
            }}
          >
            <div
              className="h-full rounded-[1.375rem] overflow-hidden relative"
              style={{
                background: "#fdfaf5",
                boxShadow: resource.featured
                  /* Featured card has a stronger glow — the focus moment (#7) */
                  ? `0 0 0 1.5px rgba(${resource.accentRgb},0.2), 0 8px 32px rgba(${resource.accentRgb},0.14), 0 24px 56px rgba(45,106,79,0.08)`
                  : "0 1px 2px rgba(45,106,79,0.05), 0 3px 12px rgba(45,106,79,0.06), 0 0 0 1px rgba(116,198,157,0.13)",
                transition: `box-shadow 260ms ease, transform 260ms ${SPRING}`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-6px) scale(1.005)";
                el.style.boxShadow = `0 0 0 1.5px rgba(${resource.accentRgb},0.25), 0 8px 28px rgba(${resource.accentRgb},0.14), 0 24px 56px rgba(45,106,79,0.09), 0 0 40px rgba(${resource.accentRgb},0.07)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = resource.featured
                  ? `0 0 0 1.5px rgba(${resource.accentRgb},0.2), 0 8px 32px rgba(${resource.accentRgb},0.14), 0 24px 56px rgba(45,106,79,0.08)`
                  : "0 1px 2px rgba(45,106,79,0.05), 0 3px 12px rgba(45,106,79,0.06), 0 0 0 1px rgba(116,198,157,0.13)";
              }}
            >
              {/* Image — taller on featured (#7) */}
              <div className={`relative overflow-hidden ${resource.featured ? "h-56" : "h-44"}`}>
                <img
                  src={resource.image}
                  alt={resource.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Directional light from top-right on image (#2) */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%), linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.38) 100%)" }} />
                <span
                  className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: categoryColors[resource.category] || "#2d6a4f" }}
                >
                  {resource.category}
                </span>
                {resource.featured && (
                  <span className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(116,198,157,0.2)", color: "#95d5b2", border: "1px solid rgba(116,198,157,0.3)" }}>
                    ★ Featured
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 relative">
                {/* Dot motif in corner (#3) */}
                <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none opacity-30"
                     style={{ backgroundImage: "radial-gradient(circle, rgba(116,198,157,0.25) 1px, transparent 1px)", backgroundSize: "10px 10px" }} />

                <h3 className="text-lg font-semibold mb-2 relative z-10" style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}>
                  {resource.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4 relative z-10" style={{ color: "#4a4e69" }}>
                  {resource.description}
                </p>
                <div className="space-y-1.5 text-sm mb-4 pb-4 relative z-10" style={{ borderBottom: "1px solid rgba(116,198,157,0.14)", color: "#4a4e69" }}>
                  <div className="flex items-center gap-2"><span>🕒</span><span>{resource.hours}</span></div>
                  <div className="flex items-center gap-2"><span>📞</span><span>{resource.contact}</span></div>
                </div>
                <Link href="/directory" className="inline-flex items-center gap-1.5 text-sm font-semibold group/link relative z-10 transition-all duration-200" style={{ color: resource.accent }}>
                  Learn More
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
