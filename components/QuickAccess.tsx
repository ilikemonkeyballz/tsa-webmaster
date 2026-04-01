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
      bg: "linear-gradient(135deg, #1b4965 0%, #2d6a8f 100%)",
      categoryValue: "Social Services",
    },
    {
      title: "Food Assistance",
      description: "Food banks, pantries & free meal programs",
      icon: "/icons/burger.png",
      bg: "linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)",
      categoryValue: "Food & Social Services",
    },
    {
      title: "Housing",
      description: "Emergency shelter & housing support services",
      icon: "/icons/house.png",
      bg: "linear-gradient(135deg, #6b4c3b 0%, #8a6450 100%)",
      categoryValue: "Shelter & Housing",
    },
    {
      title: "Education",
      description: "Adult learning, GED prep & job training",
      icon: "/icons/book.png",
      bg: "linear-gradient(135deg, #3a2d6b 0%, #5a4a9e 100%)",
      categoryValue: "Employment Services",
    },
  ];

  return (
    <section ref={sectionRef} className="section-container bg-cream">
      <h2 className={`text-4xl md:text-5xl font-bold text-center text-forest-dark mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        Quick Access
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/directory#${category.categoryValue.toLowerCase().replace(/\s+/g, '-')}`}
            className="group"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/directory#${category.categoryValue.toLowerCase().replace(/\s+/g, '-')}`;
              setTimeout(() => {
                const element = document.querySelector(`[data-category="${category.categoryValue}"]`);
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
          >
            <div
              className={`p-8 rounded-2xl shadow-lg transition-all duration-500 h-full transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                background: category.bg,
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <img
                src={category.icon}
                alt={category.title}
                className="w-16 h-16 mb-6 object-contain transform group-hover:scale-110 transition-transform duration-300"
                style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
              <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-white/85 leading-relaxed">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
