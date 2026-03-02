"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MyCalendarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [myCalendarEvents, setMyCalendarEvents] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
    const saved = localStorage.getItem('myCalendarEvents');
    if (saved) {
      setMyCalendarEvents(JSON.parse(saved));
    }
  }, []);

  const removeFromMyCalendar = (eventId: number) => {
    const updated = myCalendarEvents.filter(id => id !== eventId);
    setMyCalendarEvents(updated);
    localStorage.setItem('myCalendarEvents', JSON.stringify(updated));
  };

  const clearAllEvents = () => {
    if (confirm('Are you sure you want to remove all events from your calendar?')) {
      setMyCalendarEvents([]);
      localStorage.setItem('myCalendarEvents', JSON.stringify([]));
    }
  };

  // All events (same as in calendar page)
  const allEvents = [
    {
      id: 1,
      title: "Community Health Fair",
      date: new Date(2026, 0, 15),
      time: "10:00 AM - 3:00 PM",
      category: "healthcare",
      organizer: "Bergen Medical Center",
      location: "Bergen Community Center",
      description: "Free health screenings and vaccinations",
      color: "bg-ocean-light",
    },
    {
      id: 2,
      title: "Free Dental Clinic",
      date: new Date(2026, 0, 18),
      time: "8:00 AM - 4:00 PM",
      category: "healthcare",
      organizer: "Bergen Medical Center",
      location: "Hackensack Medical Plaza",
      description: "Complimentary dental checkups and cleanings",
      color: "bg-ocean-light",
    },
    {
      id: 3,
      title: "Mental Health Support Group",
      date: new Date(2026, 0, 20),
      time: "6:30 PM - 8:00 PM",
      category: "healthcare",
      organizer: "Bergen Medical Center",
      location: "Community Wellness Center",
      description: "Open support group with licensed counselors",
      color: "bg-ocean-light",
    },
    {
      id: 4,
      title: "Job Skills Workshop",
      date: new Date(2026, 0, 22),
      time: "6:00 PM - 8:00 PM",
      category: "employment",
      organizer: "Greater Bergen Community Action",
      location: "Adult Learning Center",
      description: "Resume building and interview prep",
      color: "bg-forest-medium",
    },
    {
      id: 5,
      title: "Community Meal Program",
      date: new Date(2026, 0, 25),
      time: "5:00 PM - 7:00 PM",
      category: "food",
      organizer: "Center for Food Action",
      location: "Bergen Community Kitchen",
      description: "Free hot meals for community members",
      color: "bg-sage",
    },
    {
      id: 6,
      title: "Food Distribution Day",
      date: new Date(2026, 0, 28),
      time: "9:00 AM - 12:00 PM",
      category: "food",
      organizer: "Center for Food Action",
      location: "Community Food Bank",
      description: "Monthly food distribution for families",
      color: "bg-sage",
    },
    {
      id: 7,
      title: "Career Fair & Job Expo",
      date: new Date(2026, 1, 5),
      time: "10:00 AM - 3:00 PM",
      category: "employment",
      organizer: "Greater Bergen Community Action",
      location: "Bergen County Convention Center",
      description: "Meet with 50+ employers",
      color: "bg-forest-medium",
    },
    {
      id: 8,
      title: "Senior Flu Shot Clinic",
      date: new Date(2026, 1, 8),
      time: "9:00 AM - 1:00 PM",
      category: "healthcare",
      organizer: "Bergen Medical Center",
      location: "Senior Center of Bergen County",
      description: "Free flu vaccinations for seniors 65+",
      color: "bg-ocean-light",
    },
    {
      id: 9,
      title: "Housing Resource Fair",
      date: new Date(2026, 1, 12),
      time: "1:00 PM - 5:00 PM",
      category: "housing",
      organizer: "Greater Bergen Community Action",
      location: "Hackensack Community Center",
      description: "Learn about affordable housing options",
      color: "bg-ocean-dark",
    },
    {
      id: 10,
      title: "Adult Education Open House",
      date: new Date(2026, 1, 15),
      time: "10:00 AM - 2:00 PM",
      category: "education",
      organizer: "Greater Bergen Community Action",
      location: "Adult Learning Center",
      description: "Explore GED and ESL programs",
      color: "bg-forest-light",
    },
  ];

  const savedEvents = allEvents
    .filter(event => myCalendarEvents.includes(event.id))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4">My Calendar</h1>
              <p className="text-xl text-mint">
                Your personalized collection of community events
              </p>
            </div>
            {savedEvents.length > 0 && (
              <button
                onClick={clearAllEvents}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="section-container">
        {savedEvents.length === 0 ? (
          <div className={`bg-white rounded-2xl shadow-lg p-12 text-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-6xl mb-6">📅</div>
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">No Events Saved Yet</h2>
            <p className="text-lg text-neutral-medium mb-8 max-w-2xl mx-auto">
              Start building your personalized calendar by adding events from the Events Calendar page. Simply hover over any event and click "Add to My Calendar".
            </p>
            <Link
              href="/calendar"
              className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Browse Events Calendar
            </Link>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20">
                <div className="text-3xl font-bold text-forest-dark mb-1">{savedEvents.length}</div>
                <div className="text-sm text-neutral-medium">Total Events Saved</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20">
                <div className="text-3xl font-bold text-ocean-light mb-1">
                  {savedEvents.filter(e => e.date >= new Date()).length}
                </div>
                <div className="text-sm text-neutral-medium">Upcoming Events</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20">
                <div className="text-3xl font-bold text-sage mb-1">
                  {new Set(savedEvents.map(e => e.category)).size}
                </div>
                <div className="text-sm text-neutral-medium">Categories</div>
              </div>
            </div>

            {/* Saved Events List */}
            <div className={`space-y-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {savedEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold capitalize`}>
                          {event.category.replace('-', ' ')}
                        </span>
                        <span className="text-sm text-neutral-medium">
                          {event.date.toLocaleDateString("en-US", { 
                            weekday: "long", 
                            month: "long", 
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                        {event.date < new Date() && (
                          <span className="text-xs bg-neutral-light/50 text-neutral-dark px-2 py-1 rounded-full">
                            Past Event
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-dark mb-2">{event.title}</h3>
                      <p className="text-neutral-medium mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-medium">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {event.organizer}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => removeFromMyCalendar(event.id)}
                        className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-red-200"
                      >
                        Remove
                      </button>
                    </div>
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