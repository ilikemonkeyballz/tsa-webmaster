"use client";

import { useState, useEffect } from "react";
import { COMMUNITY_EVENTS, EVENT_CATEGORIES, getCategoryColor } from "@/lib/events";
import { signUpForEvent, cancelEventSignup, getUser, getVolunteerCounts } from "@/lib/auth";
import Link from "next/link";

const organizers = [
  { value: "all", label: "All Organizers" },
  { value: "cfa", label: "Center for Food Action" },
  { value: "gbca", label: "Greater Bergen Community Action" },
  { value: "medical", label: "Bergen Medical Center" },
  { value: "volunteer", label: "Bergen Volunteers" },
];

const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function CalendarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedOrganizer, setSelectedOrganizer] = useState("all");
  const [myCalendarEvents, setMyCalendarEvents] = useState<number[]>([]);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [signupMessage, setSignupMessage] = useState<{text: string; type: "success"|"error"|"waitlist"} | null>(null);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);

  useEffect(() => {
    setIsVisible(true);
    const saved = localStorage.getItem("myCalendarEvents");
    if (saved) setMyCalendarEvents(JSON.parse(saved));
    setUser(getUser());
  }, []);

  useEffect(() => {
    localStorage.setItem("myCalendarEvents", JSON.stringify(myCalendarEvents));
    window.dispatchEvent(new Event("calendarUpdated"));
  }, [myCalendarEvents]);

  const toggleEventInMyCalendar = (eventId: number) => {
    setMyCalendarEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

  const handleVolunteerSignup = (eventId: number, capacity: number) => {
    const result = signUpForEvent(eventId, capacity);
    if (result === "not_logged_in") {
      setSignupMessage({ text: "Please sign in to volunteer for events.", type: "error" });
    } else if (result === "already_signed_up") {
      setSignupMessage({ text: "You are already signed up for this event.", type: "error" });
    } else if (result === "confirmed") {
      setSignupMessage({ text: "You're confirmed as a volunteer! Check My Profile for details.", type: "success" });
      setUser(getUser());
    } else if (result === "waitlist") {
      setSignupMessage({ text: "Event is full — you've been added to the waitlist!", type: "waitlist" });
      setUser(getUser());
    }
    setTimeout(() => setSignupMessage(null), 4000);
  };

  const filteredEvents = COMMUNITY_EVENTS.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesOrganizer = selectedOrganizer === "all" || event.organizerKey === selectedOrganizer;
    return matchesSearch && matchesCategory && matchesOrganizer;
  });

  const monthEvents = filteredEvents.filter(
    (e) => e.date.getMonth() === currentMonth.getMonth() && e.date.getFullYear() === currentMonth.getFullYear()
  );

  const eventsByDate = monthEvents.reduce((acc, event) => {
    const key = event.date.toDateString();
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {} as Record<string, typeof COMMUNITY_EVENTS>);

  const { daysInMonth, startingDayOfWeek } = (() => {
    const y = currentMonth.getFullYear(), m = currentMonth.getMonth();
    return {
      daysInMonth: new Date(y, m + 1, 0).getDate(),
      startingDayOfWeek: new Date(y, m, 1).getDay(),
    };
  })();

  return (
    <div className="min-h-screen bg-beige">
      {/* Signup toast */}
      {signupMessage && (
        <div className={`fixed top-24 right-6 z-50 px-6 py-4 rounded-xl shadow-xl text-white font-semibold transition-all ${
          signupMessage.type === "success" ? "bg-forest-medium" :
          signupMessage.type === "waitlist" ? "bg-ocean-dark" : "bg-red-500"
        }`}>
          {signupMessage.text}
        </div>
      )}

      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">Events Calendar</h1>
          <p className="text-xl text-mint">Stay informed about upcoming community events and programs</p>
          <div className="mt-4 flex items-center gap-4 text-seafoam flex-wrap">
            <span className="text-sm font-medium">{myCalendarEvents.length} events saved to My Calendar</span>
            {user && user.volunteerSignups.length > 0 && (
              <span className="text-sm font-medium">• {user.volunteerSignups.length} volunteer signup{user.volunteerSignups.length !== 1 ? "s" : ""}</span>
            )}
          </div>
        </div>
      </div>

      <div className="section-container">
        {/* Filters */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-light/20">
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-mint-bg rounded-lg transition-colors">
              <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            <h2 className="text-3xl font-bold text-neutral-dark">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
            <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-mint-bg rounded-lg transition-colors">
              <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">🔍 Search Events</label>
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by title, description..." className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none transition-colors"/>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">📂 Categories</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none transition-colors">
                {EVENT_CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">👥 Organizers</label>
              <select value={selectedOrganizer} onChange={(e) => setSelectedOrganizer(e.target.value)} className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none transition-colors">
                {organizers.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map((d) => <div key={d} className="text-center font-semibold text-neutral-dark py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startingDayOfWeek }).map((_, i) => <div key={`empty-${i}`} className="aspect-square"/>)}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              const dateKey = date.toDateString();
              const dayEvents = eventsByDate[dateKey] || [];
              const isToday = date.toDateString() === new Date().toDateString();
              return (
                <div key={day} className="relative">
                  <div
                    className={`aspect-square border border-neutral-light/30 rounded-lg p-2 hover:bg-mint-bg transition-colors ${isToday ? "bg-sage/10 border-sage" : ""}`}
                    onMouseEnter={() => setHoveredDay(dateKey)}
                    onMouseLeave={() => !dayEvents.length && setHoveredDay(null)}
                  >
                    <div className={`text-sm font-semibold mb-1 ${isToday ? "text-forest-dark" : "text-neutral-dark"}`}>{day}</div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div key={event.id} className={`${getCategoryColor(event.category)} text-white text-xs p-1 rounded truncate relative`} title={event.title}>
                          {event.title}
                          {myCalendarEvents.includes(event.id) && <span className="absolute right-1 top-0.5">⭐</span>}
                        </div>
                      ))}
                      {dayEvents.length > 2 && <div className="text-xs text-neutral-medium">+{dayEvents.length - 2} more</div>}
                    </div>
                  </div>
                  {hoveredDay === dateKey && dayEvents.length > 0 && (
                    <div className="absolute top-full left-0 pt-2 z-50" onMouseEnter={() => setHoveredDay(dateKey)} onMouseLeave={() => setHoveredDay(null)}>
                      <div className="bg-white border border-neutral-light/30 rounded-lg shadow-xl p-3 w-72 max-h-72 overflow-y-auto">
                        {dayEvents.map((event) => {
                          const counts = getVolunteerCounts(event.id, event.capacity);
                          const userSignup = user?.volunteerSignups.find((s) => s.eventId === event.id);
                          return (
                            <div key={event.id} className="mb-3 pb-3 border-b border-neutral-light/20 last:border-0 last:mb-0 last:pb-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex-1">
                                  <h4 className="font-bold text-sm text-neutral-dark mb-1">{event.title}</h4>
                                  <p className="text-xs text-neutral-medium">{event.time}</p>
                                </div>
                                <button onClick={() => toggleEventInMyCalendar(event.id)} className={`flex-shrink-0 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${myCalendarEvents.includes(event.id) ? "bg-sage text-white" : "bg-mint-bg text-forest-dark hover:bg-sage hover:text-white"}`}>
                                  {myCalendarEvents.includes(event.id) ? "✓ Saved" : "+ Save"}
                                </button>
                              </div>
                              {event.volunteersNeeded && (
                                <div className="mt-1">
                                  <div className="text-xs text-neutral-medium mb-1">{counts.spotsLeft > 0 ? `${counts.spotsLeft} volunteer spots left` : `Full — ${counts.waitlist} on waitlist`}</div>
                                  {userSignup ? (
                                    <span className={`text-xs font-semibold px-2 py-1 rounded ${userSignup.status === "confirmed" ? "bg-forest-medium/10 text-forest-dark" : "bg-ocean-dark/10 text-ocean-dark"}`}>
                                      {userSignup.status === "confirmed" ? "✓ Volunteering" : "⏳ On Waitlist"}
                                    </span>
                                  ) : (
                                    <button onClick={() => handleVolunteerSignup(event.id, event.capacity)} className="text-xs bg-forest-medium text-white px-2 py-1 rounded hover:bg-forest-dark transition-colors">
                                      {counts.spotsLeft > 0 ? "Volunteer" : "Join Waitlist"}
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events List */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">Upcoming Events</h2>
          {monthEvents.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-neutral-light/20">
              <p className="text-xl text-neutral-medium">No events found matching your filters.</p>
              <button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setSelectedOrganizer("all"); }} className="mt-4 text-forest-dark font-semibold hover:text-sage transition-colors">Clear all filters</button>
            </div>
          ) : (
            <div className="space-y-4">
              {[...monthEvents].sort((a, b) => a.date.getTime() - b.date.getTime()).map((event, index) => {
                const counts = getVolunteerCounts(event.id, event.capacity);
                const userSignup = user?.volunteerSignups.find((s) => s.eventId === event.id);
                return (
                  <div key={event.id} className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>{EVENT_CATEGORIES.find((c) => c.value === event.category)?.label}</span>
                          <span className="text-sm text-neutral-medium">{event.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                          {myCalendarEvents.includes(event.id) && <span className="text-sage text-sm font-semibold">⭐ Saved</span>}
                          {userSignup && (
                            <span className={`text-sm font-semibold px-2 py-0.5 rounded ${userSignup.status === "confirmed" ? "bg-forest-medium/10 text-forest-dark" : "bg-ocean-dark/10 text-ocean-dark"}`}>
                              {userSignup.status === "confirmed" ? "✓ Volunteering" : "⏳ Waitlisted"}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-dark mb-2">{event.title}</h3>
                        <p className="text-neutral-medium mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-medium">
                          <span>🕒 {event.time}</span>
                          <span>📍 {event.location}</span>
                          <span>👤 {event.organizer}</span>
                        </div>
                        {event.volunteersNeeded && (
                          <div className="mt-3 flex items-center gap-3 flex-wrap">
                            <div className="text-sm">
                              <span className={`font-semibold ${counts.spotsLeft > 0 ? "text-forest-dark" : "text-red-500"}`}>
                                {counts.spotsLeft > 0 ? `${counts.spotsLeft} volunteer spots left` : "Volunteer spots full"}
                              </span>
                              {counts.waitlist > 0 && <span className="text-neutral-medium ml-2">({counts.waitlist} on waitlist)</span>}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <button onClick={() => toggleEventInMyCalendar(event.id)} className={`font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${myCalendarEvents.includes(event.id) ? "bg-sage text-white hover:bg-forest-medium" : "bg-forest-medium hover:bg-forest-dark text-white"}`}>
                          {myCalendarEvents.includes(event.id) ? "✓ Saved" : "Save to Calendar"}
                        </button>
                        {event.volunteersNeeded && !userSignup && (
                          <button onClick={() => handleVolunteerSignup(event.id, event.capacity)} className="font-semibold px-6 py-3 rounded-lg border-2 border-forest-medium text-forest-dark hover:bg-forest-medium hover:text-white transition-all duration-300">
                            {counts.spotsLeft > 0 ? "Volunteer" : "Join Waitlist"}
                          </button>
                        )}
                        {userSignup && (
                          <Link href="/profile" className="text-center font-semibold px-6 py-3 rounded-lg bg-mint-bg text-forest-dark hover:bg-seafoam transition-all duration-300 text-sm">
                            View in Profile →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Legend */}
        <div className={`mt-12 bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-lg font-bold text-neutral-dark mb-4">Category Legend</h3>
          <div className="flex flex-wrap gap-4">
            {EVENT_CATEGORIES.filter((c) => c.value !== "all").map((c) => (
              <div key={c.value} className="flex items-center">
                <div className={`w-4 h-4 ${c.color} rounded mr-2`}></div>
                <span className="text-sm text-neutral-dark">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}