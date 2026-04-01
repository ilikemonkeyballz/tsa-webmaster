"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Highlights() {
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

  const highlights = [
    {
      name: "Community Food Bank",
      category: "Food Assistance",
      description:
        "Providing fresh groceries and meals to families in need. Open Monday–Saturday with no appointment necessary.",
      hours: "Mon–Sat: 9AM–5PM",
      contact: "(555) 123-4567",
      image:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
      accent: "#2d6a4f",
    },
    {
      name: "Free Medical Clinic",
      category: "Healthcare",
      description:
        "Offering free healthcare services including check-ups, vaccinations, and chronic disease management.",
      hours: "Tue–Fri: 8AM–6PM",
      contact: "(555) 234-5678",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
      accent: "#1b4965",
    },
    {
      name: "Adult Learning Center",
      category: "Education",
      description:
        "GED preparation, English classes, job training, and computer skills workshops for adults of all ages.",
      hours: "Mon–Thu: 10AM–8PM",
      contact: "(555) 345-6789",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
      accent: "#3a2d6b",
    },
  ];

  const categoryColors: Record<string, string> = {
    "Food Assistance": "#2d6a4f",
    Healthcare: "#1b4965",
    Education: "#3a2d6b",
  };

  return (
    <section
      ref={sectionRef}
      className="section-container"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(238,247,242,0.5) 30%, rgba(238,247,242,0.5) 70%, transparent 100%)",
      }}
    >
      {/* Offset heading for visual movement */}
      <div
        className={`mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <span
          className="text-xs font-semibold tracking-[0.16em] uppercase"
          style={{ color: "#74c69d" }}
        >
          Spotlights
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mt-3 max-w-sm"
          style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}
        >
          Featured Resources
        </h2>
        <p
          className={`text-base mt-3 max-w-lg transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ color: "#4a4e69" }}
        >
          Exceptional community services making a real difference every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((resource, index) => (
          <div
            key={index}
            className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div
              className="h-full rounded-[1.25rem] overflow-hidden transition-all duration-350"
              style={{
                background: "#fefcf8",
                boxShadow:
                  "0 1px 3px rgba(45,106,79,0.06), 0 4px 16px rgba(45,106,79,0.05), 0 0 0 1px rgba(116,198,157,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 8px rgba(45,106,79,0.08), 0 16px 36px rgba(45,106,79,0.11), 0 0 0 1.5px rgba(116,198,157,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 3px rgba(45,106,79,0.06), 0 4px 16px rgba(45,106,79,0.05), 0 0 0 1px rgba(116,198,157,0.12)";
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white tracking-wide"
                  style={{ background: categoryColors[resource.category] || "#2d6a4f" }}
                >
                  {resource.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}
                >
                  {resource.name}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#4a4e69" }}>
                  {resource.description}
                </p>

                <div
                  className="space-y-2 text-sm mb-5 pb-5"
                  style={{ borderBottom: "1px solid rgba(116,198,157,0.15)", color: "#4a4e69" }}
                >
                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span>{resource.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>{resource.contact}</span>
                  </div>
                </div>

                <Link
                  href="/directory"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link"
                  style={{ color: resource.accent }}
                >
                  Learn More
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
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
