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

  const events = [
    {
      title: "Community Health Fair",
      category: "Healthcare",
      date: "January 15, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Bergen Community Center",
      description: "Free health screenings, vaccinations, and wellness resources for all community members.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
    },
    {
      title: "Free Dental Clinic Day",
      category: "Healthcare",
      date: "January 18, 2026",
      time: "8:00 AM - 4:00 PM",
      location: "Hackensack Medical Plaza",
      description: "Complimentary dental checkups, cleanings, and consultations for uninsured residents.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800",
    },
    {
      title: "Mental Health Support Group",
      category: "Healthcare",
      date: "January 20, 2026",
      time: "6:30 PM - 8:00 PM",
      location: "Community Wellness Center",
      description: "Open support group for adults dealing with anxiety and depression. Licensed counselors present.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    },
    {
      title: "Job Skills Workshop",
      category: "Employment",
      date: "January 22, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Adult Learning Center",
      description: "Resume building, interview preparation, and networking strategies for job seekers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    },
    {
      title: "Food Distribution Day",
      category: "Food Programs",
      date: "January 28, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "Community Food Bank",
      description: "Monthly food distribution for families in need. No appointment necessary.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
    },
    {
      title: "Weekly Community Pantry",
      category: "Food Programs",
      date: "Every Wednesday",
      time: "2:00 PM - 5:00 PM",
      location: "St. Cecilia's Church",
      description: "Fresh produce, non-perishables, and household essentials available to local families.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800",
    },
    {
      title: "Community Meal Program",
      category: "Food Programs",
      date: "January 25, 2026",
      time: "5:00 PM - 7:00 PM",
      location: "Bergen Community Kitchen",
      description: "Free hot meals served to community members. All are welcome, no questions asked.",
      image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800",
    },
    {
      title: "Career Fair & Job Expo",
      category: "Employment",
      date: "February 5, 2026",
      time: "10:00 AM - 3:00 PM",
      location: "Bergen County Convention Center",
      description: "Meet with 50+ employers offering full-time, part-time, and seasonal positions.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800",
    },
    {
      title: "Senior Flu Shot Clinic",
      category: "Healthcare",
      date: "February 8, 2026",
      time: "9:00 AM - 1:00 PM",
      location: "Senior Center of Bergen County",
      description: "Free flu vaccinations for residents 65 and older. Walk-ins welcome.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800",
    },
  ];

  const tabs = [
    { id: "all", label: "All Events" },
    { id: "Healthcare", label: "Healthcare" },
    { id: "Employment", label: "Employment" },
    { id: "Food Programs", label: "Food Programs" },
  ];

  const filteredEvents = activeTab === "all" 
  ? events 
  : events.filter(event => event.category === activeTab);

const handleTabClick = (tabId: string) => {
  setActiveTab(tabId);
  eventsGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleViewAllClick = () => {
  setActiveTab("all");
  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};

  return (
    <section ref={sectionRef} className="section-container bg-white">
      <div className="mb-12">
        <h2 className={`text-4xl md:text-5xl font-bold text-neutral-dark mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          View All Upcoming Events
        </h2>
        
        {/* Tabs */}
        <div className={`flex flex-wrap gap-4 border-b-2 border-neutral-light/20 pb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-2 font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-forest-dark border-forest-dark"
                  : "text-neutral-medium border-transparent hover:text-forest-dark hover:border-neutral-light"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={eventsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`group bg-white border border-neutral-light/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150 + 400}ms` }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-sage text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                {event.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-dark mb-3 group-hover:text-forest-dark transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 text-sm text-neutral-medium mb-4">
                <div className="flex items-center">
                  <span className="mr-2">📅</span>
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🕐</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-neutral-medium text-sm mb-4 leading-relaxed">
                {event.description}
              </p>

              <Link
                href="/events"
                className="inline-flex items-center text-forest-dark font-semibold hover:text-sage transition-colors group/link"
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
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button
          onClick={handleViewAllClick}
          className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          View All Events
        </button>
      </div>
    </section>
  );
}