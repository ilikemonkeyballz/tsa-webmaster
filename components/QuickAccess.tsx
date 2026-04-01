"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    {
      title: "Healthcare",
      description: "Medical services, clinics & mental health support",
      icon: "/icons/cardiogram.png",
      accent: "#1b4965",
      accentLight: "rgba(27,73,101,0.08)",
      categoryValue: "Social Services",
    },
    {
      title: "Food Assistance",
      description: "Food banks, pantries & free meal programs",
      icon: "/icons/burger.png",
      accent: "#2d6a4f",
      accentLight: "rgba(45,106,79,0.08)",
      categoryValue: "Food & Social Services",
    },
    {
      title: "Housing",
      description: "Emergency shelter & housing support services",
      icon: "/icons/house.png",
      accent: "#5c3d2a",
      accentLight: "rgba(92,61,42,0.07)",
      categoryValue: "Shelter & Housing",
    },
    {
      title: "Education",
      description: "Adult learning, GED prep & job training",
      icon: "/icons/book.png",
      accent: "#3a2d6b",
      accentLight: "rgba(58,45,107,0.07)",
      categoryValue: "Employment Services",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-container"
      style={{ background: "transparent" }}
    >
      {/* Section label */}
      <div
        className={`flex flex-col items-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <span
          className="text-xs font-semibold tracking-[0.16em] uppercase mb-4"
          style={{ color: "#74c69d" }}
        >
          Find What You Need
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}
        >
          Quick Access
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/directory#${category.categoryValue.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/directory#${category.categoryValue.toLowerCase().replace(/\s+/g, "-")}`;
              setTimeout(() => {
                const element = document.querySelector(`[data-category="${category.categoryValue}"]`);
                if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 100);
            }}
            className={`group block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div
              className="h-full rounded-[1.25rem] p-7 transition-all duration-300 group-hover:-translate-y-1.5"
              style={{
                background: "#fefcf8",
                boxShadow: "0 1px 3px rgba(45,106,79,0.06), 0 4px 16px rgba(45,106,79,0.05), 0 0 0 1px rgba(116,198,157,0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 2px 8px rgba(45,106,79,0.08), 0 16px 36px rgba(45,106,79,0.11), 0 0 0 1.5px ${category.accent}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 1px 3px rgba(45,106,79,0.06), 0 4px 16px rgba(45,106,79,0.05), 0 0 0 1px rgba(116,198,157,0.12)";
              }}
            >
              {/* Icon container */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: category.accentLight }}
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="w-6 h-6 object-contain"
                  style={{ filter: `brightness(0) saturate(100%) invert(20%) sepia(50%) saturate(400%) hue-rotate(${index * 40}deg)` }}
                />
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}
              >
                {category.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4a4e69" }}>
                {category.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2" style={{ color: category.accent }}>
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
