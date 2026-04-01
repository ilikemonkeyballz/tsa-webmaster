"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UpcomingEvents() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const eventsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const events = [
    { title: "Community Health Fair", category: "Healthcare", date: "January 15, 2026", time: "10:00 AM – 3:00 PM", location: "Bergen Community Center", description: "Free health screenings, vaccinations, and wellness resources for all community members.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800" },
    { title: "Free Dental Clinic Day", category: "Healthcare", date: "January 18, 2026", time: "8:00 AM – 4:00 PM", location: "Hackensack Medical Plaza", description: "Complimentary dental checkups, cleanings, and consultations for uninsured residents.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800" },
    { title: "Mental Health Support Group", category: "Healthcare", date: "January 20, 2026", time: "6:30 PM – 8:00 PM", location: "Community Wellness Center", description: "Open support group for adults dealing with anxiety and depression. Licensed counselors present.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800" },
    { title: "Job Skills Workshop", category: "Employment", date: "January 22, 2026", time: "6:00 PM – 8:00 PM", location: "Adult Learning Center", description: "Resume building, interview preparation, and networking strategies for job seekers.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" },
    { title: "Food Distribution Day", category: "Food Programs", date: "January 28, 2026", time: "9:00 AM – 12:00 PM", location: "Community Food Bank", description: "Monthly food distribution for families in need. No appointment necessary.", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" },
    { title: "Weekly Community Pantry", category: "Food Programs", date: "Every Wednesday", time: "2:00 PM – 5:00 PM", location: "St. Cecilia's Church", description: "Fresh produce, non-perishables, and household essentials available to local families.", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800" },
    { title: "Community Meal Program", category: "Food Programs", date: "January 25, 2026", time: "5:00 PM – 7:00 PM", location: "Bergen Community Kitchen", description: "Free hot meals served to community members. All are welcome, no questions asked.", image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800" },
    { title: "Career Fair & Job Expo", category: "Employment", date: "February 5, 2026", time: "10:00 AM – 3:00 PM", location: "Bergen County Convention Center", description: "Meet with 50+ employers offering full-time, part-time, and seasonal positions.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800" },
    { title: "Senior Flu Shot Clinic", category: "Healthcare", date: "February 8, 2026", time: "9:00 AM – 1:00 PM", location: "Senior Center of Bergen County", description: "Free flu vaccinations for residents 65 and older. Walk-ins welcome.", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800" },
  ];

  const tabs = [
    { id: "all", label: "All Events" },
    { id: "Healthcare", label: "Healthcare" },
    { id: "Employment", label: "Employment" },
    { id: "Food Programs", label: "Food Programs" },
  ];

  const categoryColors: Record<string, string> = {
    Healthcare: "#1b4965",
    Employment: "#3a2d6b",
    "Food Programs": "#2d6a4f",
  };

  const filteredEvents = activeTab === "all" ? events : events.filter((e) => e.category === activeTab);

  return (
    <section ref={sectionRef} className="section-container">
      <div className="mb-10">
        {/* Offset heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span
              className="text-xs font-semibold tracking-[0.16em] uppercase"
              style={{ color: "#74c69d" }}
            >
              What's Happening
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-3"
              style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}
            >
              Upcoming Events
            </h2>
          </div>

          <Link
            href="/calendar"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
            style={{ color: "#2d6a4f" }}
          >
            View full calendar →
          </Link>
        </div>

        {/* Tabs — same accent token, same radius, consistent everywhere */}
        <div
          className={`flex flex-wrap gap-2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                eventsGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: activeTab === tab.id ? "#2d6a4f" : "transparent",
                color: activeTab === tab.id ? "#fff" : "#4a4e69",
                boxShadow:
                  activeTab === tab.id
                    ? "0 4px 12px rgba(45,106,79,0.2)"
                    : "0 0 0 1.5px rgba(116,198,157,0.35)",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={eventsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`group rounded-[1.25rem] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{
              transitionDelay: `${index * 80}ms`,
              background: "#fefcf8",
              boxShadow:
                "0 1px 3px rgba(45,106,79,0.06), 0 4px 16px rgba(45,106,79,0.05), 0 0 0 1px rgba(116,198,157,0.12)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 2px 8px rgba(45,106,79,0.08), 0 16px 36px rgba(45,106,79,0.1), 0 0 0 1.5px rgba(116,198,157,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 1px 3px rgba(45,106,79,0.06), 0 4px 16px rgba(45,106,79,0.05), 0 0 0 1px rgba(116,198,157,0.12)";
            }}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <span
                className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white tracking-wide"
                style={{ background: categoryColors[event.category] || "#2d6a4f" }}
              >
                {event.category}
              </span>
            </div>

            <div className="p-5">
              <h3
                className="text-base font-semibold mb-3 leading-snug"
                style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}
              >
                {event.title}
              </h3>
              <div className="space-y-1.5 text-xs mb-4" style={{ color: "#4a4e69" }}>
                <div className="flex items-center gap-2"><span>📅</span><span className="font-medium">{event.date}</span></div>
                <div className="flex items-center gap-2"><span>🕐</span><span>{event.time}</span></div>
                <div className="flex items-center gap-2"><span>📍</span><span>{event.location}</span></div>
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#8d99ae" }}>{event.description}</p>
              <Link
                href="/calendar"
                className="inline-flex items-center gap-1 text-xs font-semibold transition-colors duration-200 group/link"
                style={{ color: "#2d6a4f" }}
              >
                Learn More
                <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`text-center mt-10 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <Link
          href="/calendar"
          className="inline-block font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg"
          style={{
            background: "#2d6a4f",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(45,106,79,0.2)",
          }}
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}
