"use client";

import { useState, useEffect } from "react";

export default function CalendarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedOrganizer, setSelectedOrganizer] = useState("all");
  const [myCalendarEvents, setMyCalendarEvents] = useState<number[]>([]);
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
    // Load saved events from localStorage
    const saved = localStorage.getItem('myCalendarEvents');
    if (saved) {
      setMyCalendarEvents(JSON.parse(saved));
    }
  }, []);


  useEffect(() => {
  localStorage.setItem('myCalendarEvents', JSON.stringify(myCalendarEvents));
  
  window.dispatchEvent(new Event('calendarUpdated'));
}, [myCalendarEvents]);

  const toggleEventInMyCalendar = (eventId: number) => {
    setMyCalendarEvents(prev => {
      if (prev.includes(eventId)) {
        return prev.filter(id => id !== eventId);
      } else {
        return [...prev, eventId];
      }
    });
  };

  const categories = [
    { value: "all", label: "All Categories", color: "bg-neutral-light" },
    { value: "healthcare", label: "Healthcare", color: "bg-ocean-light" },
    { value: "employment", label: "Employment", color: "bg-forest-medium" },
    { value: "food", label: "Food Programs", color: "bg-sage" },
    { value: "housing", label: "Housing", color: "bg-ocean-dark" },
    { value: "education", label: "Education", color: "bg-forest-light" },
  ];

  const organizers = [
    { value: "all", label: "All Organizers" },
    { value: "cfa", label: "Center for Food Action" },
    { value: "gbca", label: "Greater Bergen Community Action" },
    { value: "medical", label: "Bergen Medical Center" },
    { value: "volunteer", label: "Bergen Volunteers" },
  ];

  const events = [
    {
      id: 1,
      title: "Community Health Fair",
      date: new Date(2026, 0, 15),
      time: "10:00 AM - 3:00 PM",
      category: "healthcare",
      organizer: "medical",
      location: "Bergen Community Center",
      description: "Free health screenings and vaccinations",
    },
    {
      id: 2,
      title: "Free Dental Clinic",
      date: new Date(2026, 0, 18),
      time: "8:00 AM - 4:00 PM",
      category: "healthcare",
      organizer: "medical",
      location: "Hackensack Medical Plaza",
      description: "Complimentary dental checkups and cleanings",
    },
    {
      id: 3,
      title: "Mental Health Support Group",
      date: new Date(2026, 0, 20),
      time: "6:30 PM - 8:00 PM",
      category: "healthcare",
      organizer: "medical",
      location: "Community Wellness Center",
      description: "Open support group with licensed counselors",
    },
    {
      id: 4,
      title: "Job Skills Workshop",
      date: new Date(2026, 0, 22),
      time: "6:00 PM - 8:00 PM",
      category: "employment",
      organizer: "gbca",
      location: "Adult Learning Center",
      description: "Resume building and interview prep",
    },
    {
      id: 5,
      title: "Community Meal Program",
      date: new Date(2026, 0, 25),
      time: "5:00 PM - 7:00 PM",
      category: "food",
      organizer: "cfa",
      location: "Bergen Community Kitchen",
      description: "Free hot meals for community members",
    },
    {
      id: 6,
      title: "Food Distribution Day",
      date: new Date(2026, 0, 28),
      time: "9:00 AM - 12:00 PM",
      category: "food",
      organizer: "cfa",
      location: "Community Food Bank",
      description: "Monthly food distribution for families",
    },
    {
      id: 7,
      title: "Career Fair & Job Expo",
      date: new Date(2026, 1, 5),
      time: "10:00 AM - 3:00 PM",
      category: "employment",
      organizer: "gbca",
      location: "Bergen County Convention Center",
      description: "Meet with 50+ employers",
    },
    {
      id: 8,
      title: "Senior Flu Shot Clinic",
      date: new Date(2026, 1, 8),
      time: "9:00 AM - 1:00 PM",
      category: "healthcare",
      organizer: "medical",
      location: "Senior Center of Bergen County",
      description: "Free flu vaccinations for seniors 65+",
    },
    {
      id: 9,
      title: "Housing Resource Fair",
      date: new Date(2026, 1, 12),
      time: "1:00 PM - 5:00 PM",
      category: "housing",
      organizer: "gbca",
      location: "Hackensack Community Center",
      description: "Learn about affordable housing options",
    },
    {
      id: 10,
      title: "Adult Education Open House",
      date: new Date(2026, 1, 15),
      time: "10:00 AM - 2:00 PM",
      category: "education",
      organizer: "gbca",
      location: "Adult Learning Center",
      description: "Explore GED and ESL programs",
    },
  ];

  // Filter events
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesOrganizer = selectedOrganizer === "all" || event.organizer === selectedOrganizer;
    return matchesSearch && matchesCategory && matchesOrganizer;
  });

  // Get events for current month
  const monthEvents = filteredEvents.filter(
    (event) =>
      event.date.getMonth() === currentMonth.getMonth() &&
      event.date.getFullYear() === currentMonth.getFullYear()
  );

  // Group events by date
  const eventsByDate = monthEvents.reduce((acc, event) => {
    const dateKey = event.date.toDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  // Generate calendar days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, firstDay };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.value === category);
    return cat?.color || "bg-neutral-light";
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">Events Calendar</h1>
          <p className="text-xl text-mint">
            Stay informed about upcoming community events and programs
          </p>
          <div className="mt-4 flex items-center gap-2 text-seafoam">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-medium">{myCalendarEvents.length} events saved to My Calendar</span>
          </div>
        </div>
      </div>

      <div className="section-container">
        {/* Calendar Header with Filters */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-light/20">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-mint-bg rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-neutral-dark">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-mint-bg rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                🔍 Search Events
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, description..."
                className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                📂 Categories
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Organizer Filter */}
            <div>
              <label className="block text-sm font-semibold text-neutral-dark mb-2">
                👥 Organizers
              </label>
              <select
                value={selectedOrganizer}
                onChange={(e) => setSelectedOrganizer(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none transition-colors"
              >
                {organizers.map((org) => (
                  <option key={org.value} value={org.value}>
                    {org.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(searchTerm || selectedCategory !== "all" || selectedOrganizer !== "all") && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-neutral-medium">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center bg-mint-bg text-forest-dark px-3 py-1 rounded-full text-sm">
                  Search: "{searchTerm}"
                  <button onClick={() => setSearchTerm("")} className="ml-2">×</button>
                </span>
              )}
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center bg-mint-bg text-forest-dark px-3 py-1 rounded-full text-sm">
                  {categories.find((c) => c.value === selectedCategory)?.label}
                  <button onClick={() => setSelectedCategory("all")} className="ml-2">×</button>
                </span>
              )}
              {selectedOrganizer !== "all" && (
                <span className="inline-flex items-center bg-mint-bg text-forest-dark px-3 py-1 rounded-full text-sm">
                  {organizers.find((o) => o.value === selectedOrganizer)?.label}
                  <button onClick={() => setSelectedOrganizer("all")} className="ml-2">×</button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Calendar Grid */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {dayNames.map((day) => (
              <div key={day} className="text-center font-semibold text-neutral-dark py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square"></div>
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
              const dateKey = date.toDateString();
              const dayEvents = eventsByDate[dateKey] || [];
              const isToday = date.toDateString() === new Date().toDateString();

              return (
                <div
                  key={day}
                  className="relative"
                >
                  <div
                    className={`aspect-square border border-neutral-light/30 rounded-lg p-2 hover:bg-mint-bg transition-colors ${
                      isToday ? "bg-sage/10 border-sage" : ""
                    }`}
                    onMouseEnter={() => setHoveredDay(dateKey)}
                  >
                    <div className={`text-sm font-semibold mb-1 ${isToday ? "text-forest-dark" : "text-neutral-dark"}`}>
                      {day}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          className={`${getCategoryColor(event.category)} text-white text-xs p-1 rounded truncate relative`}
                          title={event.title}
                        >
                          {event.title}
                          {myCalendarEvents.includes(event.id) && (
                            <span className="absolute right-1 top-1">⭐</span>
                          )}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-neutral-medium">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover popup for adding to My Calendar - with padding area */}
                  {hoveredDay === dateKey && dayEvents.length > 0 && (
                    <div 
                      className="absolute top-full left-0 pt-2 z-50"
                      onMouseEnter={() => setHoveredDay(dateKey)}
                      onMouseLeave={() => setHoveredDay(null)}
                    >
                      <div className="bg-white border border-neutral-light/30 rounded-lg shadow-xl p-3 w-64 max-h-64 overflow-y-auto">
                        {dayEvents.map((event) => (
                          <div
                            key={event.id}
                            className="mb-3 pb-3 border-b border-neutral-light/20 last:border-0 last:mb-0 last:pb-0"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <h4 className="font-bold text-sm text-neutral-dark mb-1">{event.title}</h4>
                                <p className="text-xs text-neutral-medium mb-2">{event.time}</p>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleEventInMyCalendar(event.id);
                                }}
                                className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                                  myCalendarEvents.includes(event.id)
                                    ? "bg-sage text-white hover:bg-forest-medium"
                                    : "bg-mint-bg text-forest-dark hover:bg-sage hover:text-white"
                                }`}
                              >
                                {myCalendarEvents.includes(event.id) ? "✓ Saved" : "+ Add"}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Upcoming Events List */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">Upcoming Events</h2>
          
          {monthEvents.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-neutral-light/20">
              <p className="text-xl text-neutral-medium">No events found matching your filters.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedOrganizer("all");
                }}
                className="mt-4 text-forest-dark font-semibold hover:text-sage transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {monthEvents
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map((event, index) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                            {categories.find((c) => c.value === event.category)?.label}
                          </span>
                          <span className="text-sm text-neutral-medium">
                            {event.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                          </span>
                          {myCalendarEvents.includes(event.id) && (
                            <span className="text-sage text-sm font-semibold flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                              In My Calendar
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
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => toggleEventInMyCalendar(event.id)}
                          className={`font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
                            myCalendarEvents.includes(event.id)
                              ? "bg-sage text-white hover:bg-forest-medium"
                              : "bg-forest-medium hover:bg-forest-dark text-white"
                          }`}
                        >
                          {myCalendarEvents.includes(event.id) ? "✓ Saved to My Calendar" : "Add to My Calendar"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Legend */}
        <div className={`mt-12 bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-lg font-bold text-neutral-dark mb-4">Category Legend</h3>
          <div className="flex flex-wrap gap-4">
            {categories.filter((c) => c.value !== "all").map((category) => (
              <div key={category.value} className="flex items-center">
                <div className={`w-4 h-4 ${category.color} rounded mr-2`}></div>
                <span className="text-sm text-neutral-dark">{category.label}</span>
              </div>
            ))}
            <div className="flex items-center ml-4">
              <span className="text-sage text-lg mr-2">⭐</span>
              <span className="text-sm text-neutral-dark font-medium">Saved in My Calendar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}