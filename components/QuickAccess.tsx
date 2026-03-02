"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function QuickAccess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Healthcare",
      description: "Medical services & clinics",
      icon: "/icons/cardiogram.png",
      bgColor: "bg-ocean-light",
      hoverColor: "hover:bg-ocean-medium",
      categoryValue: "Social Services",
    },
    {
      title: "Food Assistance",
      description: "Food banks & meal programs",
      icon: "/icons/burger.png",
      bgColor: "bg-forest-light",
      hoverColor: "hover:bg-forest-medium",
      categoryValue: "Food & Social Services",
    },
    {
      title: "Housing",
      description: "Shelter & housing support",
      icon: "/icons/house.png",
      bgColor: "bg-sage",
      hoverColor: "hover:bg-forest-light",
      categoryValue: "Shelter & Housing",
    },
    {
      title: "Education",
      description: "Schools & learning centers",
      icon: "/icons/book.png",
      bgColor: "bg-ocean-dark",
      hoverColor: "hover:bg-forest-dark",
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
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
          >
            <div 
              className={`${category.bgColor} ${category.hoverColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* CHANGED: Icon rendering to support both emojis and images */}
              {category.icon.startsWith('/') || category.icon.startsWith('http') ? (
                <img 
                  src={category.icon} 
                  alt={category.title}
                  className="w-16 h-16 mb-6 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-3">
                {category.title}
              </h3>
              <p className="text-white/90 leading-relaxed">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}