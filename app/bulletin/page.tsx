"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function BulletinPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "Community Health Fair",
      date: "January 15, 2026",
      category: "Healthcare",
      color: "bg-ocean-light",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
      description: "Free health screenings, vaccinations, and wellness resources.",
    },
    {
      id: 2,
      title: "Job Skills Workshop",
      date: "January 22, 2026",
      category: "Employment",
      color: "bg-forest-medium",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
      description: "Resume building and interview preparation for job seekers.",
    },
    {
      id: 3,
      title: "Food Distribution Day",
      date: "January 28, 2026",
      category: "Food Programs",
      color: "bg-sage",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600",
      description: "Monthly food distribution for families in need.",
    },
  ];

  const voices = [
    {
      id: 1,
      name: "Maria Rodriguez",
      role: "Community Member",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      quote: "The Community Hub helped me find the resources I needed when I was struggling. The food pantry and job training programs changed my life.",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Local Volunteer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      quote: "Volunteering through Community Hub has been incredibly rewarding. It's amazing to see neighbors helping neighbors every single day.",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      role: "Program Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400",
      quote: "This platform has revolutionized how we connect with residents. We can reach so many more people who need our services.",
    },
    {
      id: 4,
      name: "David Martinez",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      quote: "After losing my job, the career services here helped me start my own business. I'm now giving back by mentoring others.",
    },
  ];

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">Community Bulletin Board</h1>
          <p className="text-xl text-mint">
            Stay connected with events, updates, and voices from our community
          </p>
        </div>
      </div>

      {/* Event Highlights */}
      <section className={`section-container transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">📌 Event Highlights</h2>
          <p className="text-lg text-neutral-medium">Don't miss these upcoming community events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden border border-neutral-light/20 hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${event.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                  {event.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-neutral-medium mb-2">📅 {event.date}</p>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{event.title}</h3>
                <p className="text-neutral-medium mb-4">{event.description}</p>
                <Link
                  href="/calendar"
                  className="inline-flex items-center text-forest-dark font-semibold hover:text-sage transition-colors"
                >
                  View on Calendar
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Voices */}
      <section className={`section-container bg-white transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">💬 Community Voices</h2>
          <p className="text-lg text-neutral-medium">Hear from the people who make our community strong</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {voices.map((voice, index) => (
            <div
              key={voice.id}
              className={`bg-mint-bg rounded-xl p-8 border border-sage/20 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 600}ms` }}
            >
              <div className="flex items-start mb-4">
                <img
                  src={voice.image}
                  alt={voice.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-sage"
                />
                <div>
                  <h3 className="text-lg font-bold text-neutral-dark">{voice.name}</h3>
                  <p className="text-sm text-neutral-medium">{voice.role}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-sage opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-neutral-dark leading-relaxed italic pl-6">{voice.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={`section-container text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-forest-medium to-ocean-medium text-white rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Story</h2>
          <p className="text-lg text-mint mb-8 max-w-2xl mx-auto">
            Your experience matters. Help inspire others by sharing how Community Hub has impacted your life.
          </p>
          <Link
            href="/submit"
            className="inline-block bg-white text-forest-dark font-semibold px-8 py-4 rounded-xl hover:bg-mint-bg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Share Your Voice
          </Link>
        </div>
      </section>
    </div>
  );
}