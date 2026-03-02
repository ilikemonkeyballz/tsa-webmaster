"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Highlights() {
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

  const highlights = [
    {
      name: "Community Food Bank",
      category: "Food Assistance",
      description: "Providing fresh groceries and meals to families in need. Open Monday-Saturday with no appointment necessary.",
      hours: "Mon-Sat: 9AM-5PM",
      contact: "(555) 123-4567",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
    },
    {
      name: "Free Medical Clinic",
      category: "Healthcare",
      description: "Offering free healthcare services including check-ups, vaccinations, and chronic disease management.",
      hours: "Tue-Fri: 8AM-6PM",
      contact: "(555) 234-5678",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
    },
    {
      name: "Adult Learning Center",
      category: "Education",
      description: "GED preparation, English classes, job training, and computer skills workshops for adults of all ages.",
      hours: "Mon-Thu: 10AM-8PM",
      contact: "(555) 345-6789",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    },
  ];

  return (
    <section ref={sectionRef} className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold text-forest-dark mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Featured Resources
        </h2>
        <p className={`text-xl text-sage max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Spotlighting exceptional community services making a difference
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {highlights.map((resource, index) => (
          <div 
            key={index} 
            className={`card group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-52 -mt-8 -mx-8 mb-6 overflow-hidden rounded-t-2xl">
              <img
                src={resource.image}
                alt={resource.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-mint text-forest-dark px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {resource.category}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-forest-dark mb-4">
              {resource.name}
            </h3>
            <p className="text-sage mb-6 leading-relaxed">
              {resource.description}
            </p>

            <div className="space-y-3 text-sm text-forest-medium mb-6 pb-6 border-b border-sage/20">
              <div className="flex items-center">
                <span className="mr-3 text-lg">🕒</span>
                <span>{resource.hours}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-lg">📞</span>
                <span>{resource.contact}</span>
              </div>
            </div>

            <Link
              href="/directory"
              className="text-forest-medium font-semibold hover:text-ocean-medium transition-colors inline-flex items-center group/link"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}