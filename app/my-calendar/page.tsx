"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMMUNITY_EVENTS, getCategoryColor, EVENT_CATEGORIES } from "@/lib/events";

export default function MyCalendarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [myCalendarEvents, setMyCalendarEvents] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    const saved = localStorage.getItem("myCalendarEvents");
    if (saved) setMyCalendarEvents(JSON.parse(saved));
  }, []);

  const removeFromMyCalendar = (eventId: number) => {
    const updated = myCalendarEvents.filter((id) => id !== eventId);
    setMyCalendarEvents(updated);
    localStorage.setItem("myCalendarEvents", JSON.stringify(updated));
    window.dispatchEvent(new Event("calendarUpdated"));
  };

  const clearAllEvents = () => {
    if (confirm("Are you sure you want to remove all events from your calendar?")) {
      setMyCalendarEvents([]);
      localStorage.setItem("myCalendarEvents", JSON.stringify([]));
      window.dispatchEvent(new Event("calendarUpdated"));
    }
  };

  const savedEvents = COMMUNITY_EVENTS
    .filter((e) => myCalendarEvents.includes(e.id))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="min-h-screen bg-beige">
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4">My Calendar</h1>
              <p className="text-xl text-mint">Your personalized collection of community events</p>
            </div>
            {savedEvents.length > 0 && (
              <button onClick={clearAllEvents} className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold">Clear All</button>
            )}
          </div>
        </div>
      </div>

      <div className="section-container">
        {savedEvents.length === 0 ? (
          <div className={`bg-white rounded-2xl shadow-lg p-12 text-center transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-6xl mb-6">📅</div>
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">No Events Saved Yet</h2>
            <p className="text-lg text-neutral-medium mb-8 max-w-2xl mx-auto">Browse the Events Calendar and save events to build your personal schedule.</p>
            <Link href="/calendar" className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">Browse Events Calendar</Link>
          </div>
        ) : (
          <>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20">
                <div className="text-3xl font-bold text-forest-dark mb-1">{savedEvents.length}</div>
                <div className="text-sm text-neutral-medium">Total Events Saved</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20">
                <div className="text-3xl font-bold text-ocean-light mb-1">{savedEvents.filter((e) => e.date >= new Date()).length}</div>
                <div className="text-sm text-neutral-medium">Upcoming Events</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20">
                <div className="text-3xl font-bold text-sage mb-1">{new Set(savedEvents.map((e) => e.category)).size}</div>
                <div className="text-sm text-neutral-medium">Categories</div>
              </div>
            </div>

            <div className={`space-y-4 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              {savedEvents.map((event, index) => (
                <div key={event.id} className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-semibold capitalize`}>
                          {EVENT_CATEGORIES.find((c) => c.value === event.category)?.label || event.category}
                        </span>
                        <span className="text-sm text-neutral-medium">{event.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
                        {event.date < new Date() && <span className="text-xs bg-neutral-light/50 text-neutral-dark px-2 py-1 rounded-full">Past Event</span>}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-dark mb-2">{event.title}</h3>
                      <p className="text-neutral-medium mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-medium">
                        <span>🕒 {event.time}</span>
                        <span>📍 {event.location}</span>
                        <span>👤 {event.organizer}</span>
                      </div>
                    </div>
                    <button onClick={() => removeFromMyCalendar(event.id)} className="flex-shrink-0 bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-red-200">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}