"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMMUNITY_EVENTS, getCategoryColor, EVENT_CATEGORIES } from "@/lib/events";
import { getUser, signUpForEvent, cancelEventSignup, getVolunteerCounts } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function VolunteerPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);
  const [toast, setToast] = useState<{ text: string; type: "success" | "error" | "waitlist" } | null>(null);
  const [filterCategory, setFilterCategory] = useState("all");
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
    setUser(getUser());
  }, []);

  const showToast = (text: string, type: "success" | "error" | "waitlist") => {
    setToast({ text, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSignup = (eventId: number, capacity: number) => {
    if (!user) {
      router.push("/login?redirect=/volunteer");
      return;
    }
    const result = signUpForEvent(eventId, capacity);
    if (result === "confirmed") {
      showToast("You're confirmed as a volunteer! Check your profile for details.", "success");
    } else if (result === "waitlist") {
      showToast("Event is full — you've been added to the waitlist!", "waitlist");
    } else if (result === "already_signed_up") {
      showToast("You're already signed up for this event.", "error");
    }
    setUser(getUser());
  };

  const handleCancel = (eventId: number) => {
    if (!confirm("Are you sure you want to cancel your volunteer signup?")) return;
    cancelEventSignup(eventId);
    showToast("Signup cancelled.", "error");
    setUser(getUser());
  };

  const volunteerEvents = COMMUNITY_EVENTS.filter((e) => e.volunteersNeeded);
  const filtered = filterCategory === "all" ? volunteerEvents : volunteerEvents.filter((e) => e.category === filterCategory);

  return (
    <div className="min-h-screen bg-beige">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 px-6 py-4 rounded-xl shadow-xl text-white font-semibold max-w-sm transition-all ${
          toast.type === "success" ? "bg-forest-medium" : toast.type === "waitlist" ? "bg-ocean-dark" : "bg-red-500"
        }`}>
          {toast.text}
        </div>
      )}

      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">🙋 Volunteer Sign-Up</h1>
          <p className="text-xl text-mint">Make a difference — sign up to volunteer at community events</p>
          {user ? (
            <div className="mt-4 flex items-center gap-3 text-seafoam">
              <span className="text-sm">Signed in as <strong>{user.name}</strong></span>
              {user.volunteerSignups.length > 0 && (
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">{user.volunteerSignups.length} signup{user.volunteerSignups.length !== 1 ? "s" : ""}</span>
              )}
            </div>
          ) : (
            <div className="mt-4">
              <Link href="/login?redirect=/volunteer" className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">Sign in to volunteer →</Link>
            </div>
          )}
        </div>
      </div>

      <div className="section-container">
        {/* How it works */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { icon: "/icons/user.png", title: "Sign In", desc: "Create a free account to track your volunteer activities." },
            { icon: "/icons/exam.png", title: "Sign Up", desc: "Browse events and claim a volunteer spot. Join the waitlist if full." },
            { icon: "/icons/star.png", title: "Log Hours", desc: "After the event, log your hours from your profile page." },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 text-center">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-lg font-bold text-neutral-dark mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-medium">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div className={`bg-white rounded-xl p-4 mb-6 shadow-md transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-wrap gap-2">
            {EVENT_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilterCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filterCategory === cat.value ? "bg-forest-medium text-white shadow-md" : "bg-mint-bg text-forest-dark hover:bg-seafoam"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Event cards */}
        <div className="space-y-6">
          {filtered.map((event, index) => {
            const counts = getVolunteerCounts(event.id, event.capacity);
            const userSignup = user?.volunteerSignups.find((s) => s.eventId === event.id);
            const isFull = counts.spotsLeft === 0;
            const pct = Math.round((counts.confirmed / event.capacity) * 100);

            return (
              <div
                key={event.id}
                className={`bg-white rounded-2xl shadow-md border border-neutral-light/20 overflow-hidden transition-all duration-700 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${400 + index * 80}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Category stripe */}
                  <div className={`${getCategoryColor(event.category)} md:w-2 w-full h-2 md:h-auto`} />

                  <div className="p-6 flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                            {EVENT_CATEGORIES.find((c) => c.value === event.category)?.label}
                          </span>
                          <span className="text-sm text-neutral-medium">
                            {event.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
                          </span>
                          {userSignup && (
                            <span className={`text-sm font-semibold px-3 py-1 rounded-full ${userSignup.status === "confirmed" ? "bg-forest-medium/10 text-forest-dark" : "bg-ocean-dark/10 text-ocean-dark"}`}>
                              {userSignup.status === "confirmed" ? "Confirmed" : "On Waitlist"}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-dark mb-2">{event.title}</h3>
                        <p className="text-neutral-medium mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-medium mb-4">
                          <span>🕒 {event.time}</span>
                          <span>📍 {event.location}</span>
                          <span>👤 {event.organizer}</span>
                        </div>

                        {/* Capacity bar */}
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="font-medium text-neutral-dark">Volunteer spots</span>
                            <span className={`font-semibold ${isFull ? "text-red-500" : "text-forest-dark"}`}>
                              {counts.confirmed} / {event.capacity} filled
                              {isFull && ` • ${counts.waitlist} on waitlist`}
                            </span>
                          </div>
                          <div className="w-full bg-neutral-light/40 rounded-full h-2.5">
                            <div
                              className={`h-2.5 rounded-full transition-all duration-500 ${isFull ? "bg-red-400" : pct > 75 ? "bg-amber-400" : "bg-forest-medium"}`}
                              style={{ width: `${Math.min(pct, 100)}%` }}
                            />
                          </div>
                          {!isFull && (
                            <p className="text-xs text-neutral-medium mt-1">{counts.spotsLeft} spot{counts.spotsLeft !== 1 ? "s" : ""} remaining</p>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col gap-3 lg:ml-6 lg:flex-shrink-0 lg:w-48">
                        {userSignup ? (
                          <>
                            <div className={`text-center px-4 py-3 rounded-xl font-semibold text-sm ${userSignup.status === "confirmed" ? "bg-forest-medium/10 text-forest-dark" : "bg-ocean-dark/10 text-ocean-dark"}`}>
                              {userSignup.status === "confirmed" ? "You're volunteering!" : "You're on the waitlist"}
                            </div>
                            <button
                              onClick={() => handleCancel(event.id)}
                              className="text-center px-4 py-2 rounded-lg text-sm text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors font-medium"
                            >
                              Cancel Signup
                            </button>
                            <Link href="/profile" className="text-center px-4 py-2 rounded-lg text-sm text-forest-dark bg-mint-bg hover:bg-seafoam transition-colors font-medium">
                              View in Profile →
                            </Link>
                          </>
                        ) : (
                          <button
                            onClick={() => handleSignup(event.id, event.capacity)}
                            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-md hover:scale-105 ${
                              isFull
                                ? "bg-ocean-dark text-white hover:bg-ocean-medium"
                                : "bg-forest-medium text-white hover:bg-forest-dark"
                            }`}
                          >
                            {isFull ? "Join Waitlist" : "Sign Up to Volunteer"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="bg-white rounded-xl p-12 text-center border border-neutral-light/20 mt-6">
            <p className="text-xl text-neutral-medium">No volunteer events in this category right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}