"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SPRING = "cubic-bezier(0.34, 1.48, 0.64, 1)";
const EASE   = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Fake activity counts — signs of life (#9) */
const RSVP_COUNTS: Record<string,number> = {
  "Community Health Fair": 47,
  "Free Dental Clinic Day": 31,
  "Mental Health Support Group": 18,
  "Job Skills Workshop": 24,
  "Food Distribution Day": 62,
  "Weekly Community Pantry": 38,
  "Community Meal Program": 55,
  "Career Fair & Job Expo": 89,
  "Senior Flu Shot Clinic": 27,
};

export default function UpcomingEvents() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const eventsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const events = [
    { title: "Community Health Fair",     category: "Healthcare",    date: "January 15, 2026", time: "10:00 AM – 3:00 PM", location: "Bergen Community Center",       description: "Free health screenings, vaccinations, and wellness resources for all community members.",                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800" },
    { title: "Free Dental Clinic Day",    category: "Healthcare",    date: "January 18, 2026", time: "8:00 AM – 4:00 PM",  location: "Hackensack Medical Plaza",        description: "Complimentary dental checkups, cleanings, and consultations for uninsured residents.",                   image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800" },
    { title: "Mental Health Support Group",category:"Healthcare",    date: "January 20, 2026", time: "6:30 PM – 8:00 PM",  location: "Community Wellness Center",       description: "Open support group for adults dealing with anxiety and depression. Licensed counselors present.",         image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800" },
    { title: "Job Skills Workshop",        category: "Employment",   date: "January 22, 2026", time: "6:00 PM – 8:00 PM",  location: "Adult Learning Center",           description: "Resume building, interview preparation, and networking strategies for job seekers.",                      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" },
    { title: "Food Distribution Day",      category: "Food Programs",date: "January 28, 2026", time: "9:00 AM – 12:00 PM", location: "Community Food Bank",             description: "Monthly food distribution for families in need. No appointment necessary.",                              image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" },
    { title: "Weekly Community Pantry",    category: "Food Programs",date: "Every Wednesday",  time: "2:00 PM – 5:00 PM",  location: "St. Cecilia's Church",            description: "Fresh produce, non-perishables, and household essentials available to local families.",                  image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800" },
    { title: "Community Meal Program",     category: "Food Programs",date: "January 25, 2026", time: "5:00 PM – 7:00 PM",  location: "Bergen Community Kitchen",        description: "Free hot meals served to community members. All are welcome, no questions asked.",                      image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800" },
    { title: "Career Fair & Job Expo",     category: "Employment",   date: "February 5, 2026", time: "10:00 AM – 3:00 PM", location: "Bergen County Convention Center", description: "Meet with 50+ employers offering full-time, part-time, and seasonal positions.",                          image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800" },
    { title: "Senior Flu Shot Clinic",     category: "Healthcare",   date: "February 8, 2026", time: "9:00 AM – 1:00 PM",  location: "Senior Center of Bergen County",  description: "Free flu vaccinations for residents 65 and older. Walk-ins welcome.",                                    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800" },
  ];

  const tabs = [
    { id: "all",           label: "All Events" },
    { id: "Healthcare",    label: "Healthcare" },
    { id: "Employment",    label: "Employment" },
    { id: "Food Programs", label: "Food Programs" },
  ];

  const categoryColors: Record<string,string> = {
    Healthcare:      "#1b4965",
    Employment:      "#3a2d6b",
    "Food Programs": "#2d6a4f",
  };
  const categoryRgb: Record<string,string> = {
    Healthcare:      "27,73,101",
    Employment:      "58,45,107",
    "Food Programs": "45,106,79",
  };

  const filteredEvents = activeTab === "all" ? events : events.filter((e) => e.category === activeTab);

  return (
    /* Tight top padding after dense Highlights section = rhythm (#10) */
    <section ref={sectionRef} className="section-container" style={{ paddingTop: "3.5rem", paddingBottom: "6rem" }}>

      {/* Section header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
             style={{ transitionTimingFunction: EASE }}>
          <span className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: "#74c69d" }}>
            What's Happening
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}>
            Upcoming Events
          </h2>
        </div>
        <Link href="/calendar" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200" style={{ color: "#2d6a4f" }}>
          Full calendar →
        </Link>
      </div>

      {/* Tabs — identical pill style to buttons everywhere (#8) */}
      <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
           style={{ transitionTimingFunction: EASE }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); eventsGridRef.current?.scrollIntoView({ behavior:"smooth", block:"start" }); }}
            className="px-4 py-2 rounded-xl text-sm font-semibold"
            style={{
              background:  activeTab === tab.id ? "#2d6a4f" : "transparent",
              color:       activeTab === tab.id ? "#fff" : "#4a4e69",
              boxShadow:   activeTab === tab.id ? "0 4px 14px rgba(45,106,79,0.22)" : "0 0 0 1.5px rgba(116,198,157,0.32)",
              transition: `background 260ms ease, box-shadow 260ms ease, transform 200ms ${SPRING}`,
            }}
            onMouseEnter={(e) => { if (activeTab !== tab.id) (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ""; }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div ref={eventsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredEvents.map((event, index) => {
          const rsvp = RSVP_COUNTS[event.title] ?? 0;
          const rgb  = categoryRgb[event.category] || "45,106,79";
          return (
            <div
              key={index}
              className={`group rounded-[1.375rem] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${index * 70}ms`,
                transitionTimingFunction: EASE,
                background: "#fdfaf5",
                boxShadow: "0 1px 2px rgba(45,106,79,0.05), 0 3px 12px rgba(45,106,79,0.06), 0 0 0 1px rgba(116,198,157,0.13)",
                transition: `box-shadow 260ms ease, transform 260ms ${SPRING}`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-5px) scale(1.004)";
                el.style.boxShadow = `0 0 0 1.5px rgba(${rgb},0.2), 0 8px 24px rgba(${rgb},0.1), 0 20px 48px rgba(45,106,79,0.07), 0 0 36px rgba(${rgb},0.07)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "0 1px 2px rgba(45,106,79,0.05), 0 3px 12px rgba(45,106,79,0.06), 0 0 0 1px rgba(116,198,157,0.13)";
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%), linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.36) 100%)" }} />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: categoryColors[event.category] || "#2d6a4f" }}>
                  {event.category}
                </span>
                {/* RSVP count — sign of life (#9) */}
                <span className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)" }}>
                  <span style={{ color: "#74c69d" }}>●</span> {rsvp} going
                </span>
              </div>

              <div className="p-5 relative">
                {/* Dot motif in card (#3) */}
                <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-25"
                     style={{ backgroundImage: "radial-gradient(circle, rgba(116,198,157,0.25) 1px, transparent 1px)", backgroundSize: "9px 9px" }} />

                <h3 className="text-base font-semibold mb-2.5 leading-snug relative z-10" style={{ color: "#1a4d3e", fontFamily: "'Lora', Georgia, serif" }}>
                  {event.title}
                </h3>
                <div className="space-y-1.5 text-xs mb-3 relative z-10" style={{ color: "#4a4e69" }}>
                  <div className="flex items-center gap-2"><span>📅</span><span className="font-medium">{event.date}</span></div>
                  <div className="flex items-center gap-2"><span>🕐</span><span>{event.time}</span></div>
                  <div className="flex items-center gap-2"><span>📍</span><span>{event.location}</span></div>
                </div>
                <p className="text-xs leading-relaxed mb-3.5 relative z-10" style={{ color: "#8d99ae" }}>{event.description}</p>
                <Link href="/calendar" className="inline-flex items-center gap-1 text-xs font-semibold group/link relative z-10" style={{ color: categoryColors[event.category] || "#2d6a4f", transition: "gap 200ms ease" }}>
                  Learn More
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA — open breathing room below dense grid = rhythm (#10) */}
      <div className={`text-center mt-12 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <Link
          href="/calendar"
          className="inline-block font-semibold px-9 py-3.5 rounded-xl text-sm"
          style={{
            background: "#2d6a4f",
            color: "#fff",
            boxShadow: "0 4px 16px rgba(45,106,79,0.22)",
            transition: `background 260ms ease, box-shadow 260ms ease, transform 200ms ${SPRING}`,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "translateY(-2px) scale(1.03)";
            el.style.boxShadow = "0 8px 28px rgba(45,106,79,0.3), 0 0 0 4px rgba(116,198,157,0.1)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "";
            el.style.boxShadow = "0 4px 16px rgba(45,106,79,0.22)";
          }}
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}
