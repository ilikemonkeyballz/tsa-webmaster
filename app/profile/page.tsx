"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getUser, logout, logVolunteerHours, getTotalHoursLogged, cancelEventSignup } from "@/lib/auth";
import { COMMUNITY_EVENTS, getCategoryColor, EVENT_CATEGORIES } from "@/lib/events";

export default function ProfilePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);
  const [editingHours, setEditingHours] = useState<number | null>(null);
  const [hoursInput, setHoursInput] = useState("");
  const [activeTab, setActiveTab] = useState<"volunteer" | "calendar" | "newsletters">("volunteer");
  const [toast, setToast] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      router.push("/login?redirect=/profile");
      return;
    }
    setUser(currentUser);
    setIsVisible(true);
  }, [router]);

  const refresh = () => setUser(getUser());

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogHours = (eventId: number) => {
    const hours = parseFloat(hoursInput);
    if (isNaN(hours) || hours < 0) return;
    logVolunteerHours(eventId, hours);
    setEditingHours(null);
    setHoursInput("");
    refresh();
    showToast("Hours logged successfully!");
  };

  const handleCancelSignup = (eventId: number) => {
    if (!confirm("Are you sure you want to cancel this volunteer signup?")) return;
    cancelEventSignup(eventId);
    refresh();
    showToast("Signup cancelled.");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) return null;

  const savedCalendarIds: number[] = JSON.parse(localStorage.getItem("myCalendarEvents") || "[]");
  const totalHours = getTotalHoursLogged();
  const confirmedCount = user.volunteerSignups.filter((s) => s.status === "confirmed").length;
  const waitlistCount = user.volunteerSignups.filter((s) => s.status === "waitlist").length;

  // Resources for newsletter display
  const RESOURCES_BRIEF = [
    { id: 1, name: "Center for Food Action (CFA)", category: "Food & Social Services" },
    { id: 2, name: "Family Promise of Bergen County", category: "Shelter & Housing" },
    { id: 3, name: "Greater Bergen Community Action", category: "Community Services" },
    { id: 4, name: "Bergen Volunteers", category: "Volunteer Services" },
    { id: 5, name: "Jewish Family & Children's Services", category: "Social Services" },
    { id: 6, name: "Meals on Wheels of North Jersey", category: "Senior Services" },
    { id: 7, name: "Habitat for Humanity Bergen & Passaic", category: "Housing" },
    { id: 8, name: "United Way of Northern NJ", category: "Referral Services" },
    { id: 9, name: "Center for Hope & Safety", category: "Domestic Violence Services" },
    { id: 10, name: "Eva's Village", category: "Homeless Services" },
  ];

  const subscribedResources = RESOURCES_BRIEF.filter((r) => user.newsletters.includes(r.id));
  const savedEvents = COMMUNITY_EVENTS.filter((e) => savedCalendarIds.includes(e.id)).sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="min-h-screen bg-beige">
      {toast && (
        <div className="fixed top-24 right-6 z-50 px-6 py-4 rounded-xl shadow-xl bg-forest-medium text-white font-semibold transition-all">
          {toast}
        </div>
      )}

      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-4xl font-bold">{user.name}</h1>
                <p className="text-mint text-lg">{user.email}</p>
                <p className="text-seafoam text-sm mt-1">Community Member</p>
              </div>
            </div>
            <button onClick={handleLogout} className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-semibold transition-colors text-sm">
              🚪 Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`bg-white border-b border-neutral-light/20 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-neutral-light/20">
            {[
              { value: confirmedCount, label: "Confirmed Signups", icon: "✅" },
              { value: waitlistCount, label: "On Waitlist", icon: "⏳" },
              { value: `${totalHours}h`, label: "Hours Volunteered", icon: "⭐" },
              { value: savedEvents.length, label: "Saved Events", icon: "📅" },
            ].map((stat, i) => (
              <div key={i} className="py-6 px-4 text-center">
                <div className="text-2xl font-bold text-forest-dark">{stat.value}</div>
                <div className="text-xs text-neutral-medium mt-1">{stat.icon} {stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
        {/* Tabs */}
        <div className={`flex gap-1 bg-white rounded-xl p-1 shadow-md mb-8 w-fit transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {([
            { id: "volunteer", label: "🙋 Volunteer Signups" },
            { id: "calendar", label: "📅 My Calendar" },
            { id: "newsletters", label: "📧 Newsletters" },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === tab.id ? "bg-forest-medium text-white shadow-sm" : "text-neutral-dark hover:bg-mint-bg"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Volunteer Signups Tab */}
        {activeTab === "volunteer" && (
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {user.volunteerSignups.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-neutral-light/20">
                <div className="text-6xl mb-4">🙋</div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-3">No Volunteer Signups Yet</h2>
                <p className="text-neutral-medium mb-6">Sign up for community events to get started!</p>
                <Link href="/volunteer" className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105">Browse Volunteer Events</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {user.volunteerSignups.map((signup) => {
                  const event = COMMUNITY_EVENTS.find((e) => e.id === signup.eventId);
                  if (!event) return null;
                  const isPast = event.date < new Date();
                  return (
                    <div key={signup.eventId} className="bg-white rounded-2xl shadow-md border border-neutral-light/20 overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className={`${getCategoryColor(event.category)} md:w-1.5 w-full h-1.5 md:h-auto`} />
                        <div className="p-6 flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${signup.status === "confirmed" ? "bg-forest-medium/10 text-forest-dark" : "bg-ocean-dark/10 text-ocean-dark"}`}>
                                  {signup.status === "confirmed" ? "✅ Confirmed" : "⏳ Waitlist"}
                                </span>
                                {isPast && <span className="text-xs bg-neutral-light/50 text-neutral-dark px-2 py-1 rounded-full">Past Event</span>}
                                <span className="text-sm text-neutral-medium">{event.date.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" })}</span>
                              </div>
                              <h3 className="text-xl font-bold text-neutral-dark mb-1">{event.title}</h3>
                              <div className="flex flex-wrap gap-3 text-sm text-neutral-medium mb-2">
                                <span>🕒 {event.time}</span>
                                <span>📍 {event.location}</span>
                              </div>
                              <p className="text-xs text-neutral-medium">Signed up {new Date(signup.signedUpAt).toLocaleDateString()}</p>

                              {/* Hours section */}
                              {isPast && signup.status === "confirmed" && (
                                <div className="mt-4 p-3 bg-mint-bg rounded-lg border border-sage/20">
                                  <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div>
                                      <p className="text-sm font-semibold text-forest-dark">
                                        {signup.hoursLogged > 0 ? `⭐ ${signup.hoursLogged} hours logged` : "Log your volunteer hours"}
                                      </p>
                                      {signup.hoursLogged === 0 && <p className="text-xs text-neutral-medium mt-0.5">Help us track community impact!</p>}
                                    </div>
                                    {editingHours === signup.eventId ? (
                                      <div className="flex items-center gap-2">
                                        <input
                                          type="number"
                                          min="0"
                                          step="0.5"
                                          value={hoursInput}
                                          onChange={(e) => setHoursInput(e.target.value)}
                                          placeholder="Hours"
                                          className="w-20 px-3 py-1.5 border border-neutral-light/30 rounded-lg text-sm outline-none focus:border-forest-medium"
                                        />
                                        <button onClick={() => handleLogHours(signup.eventId)} className="px-3 py-1.5 bg-forest-medium text-white rounded-lg text-sm font-semibold hover:bg-forest-dark transition-colors">Save</button>
                                        <button onClick={() => setEditingHours(null)} className="px-3 py-1.5 bg-neutral-light/40 text-neutral-dark rounded-lg text-sm hover:bg-neutral-light transition-colors">✕</button>
                                      </div>
                                    ) : (
                                      <button onClick={() => { setEditingHours(signup.eventId); setHoursInput(String(signup.hoursLogged || "")); }} className="px-3 py-1.5 bg-forest-medium text-white rounded-lg text-sm font-semibold hover:bg-forest-dark transition-colors">
                                        {signup.hoursLogged > 0 ? "Edit Hours" : "Log Hours"}
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Actions */}
                            {!isPast && (
                              <button onClick={() => handleCancelSignup(signup.eventId)} className="self-start px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg font-medium transition-colors">
                                Cancel Signup
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Hours summary */}
                {totalHours > 0 && (
                  <div className="bg-gradient-to-r from-forest-medium to-ocean-medium text-white rounded-2xl p-8 text-center">
                    <div className="text-5xl font-bold mb-2">{totalHours}</div>
                    <p className="text-mint text-lg">Total Hours Volunteered</p>
                    <p className="text-seafoam text-sm mt-1">Thank you for your contribution to the community! 🌱</p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 text-center">
              <Link href="/volunteer" className="inline-flex items-center gap-2 bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105">
                🙋 Browse More Volunteer Events
              </Link>
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === "calendar" && (
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {savedEvents.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-neutral-light/20">
                <div className="text-6xl mb-4">📅</div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-3">No Saved Events</h2>
                <p className="text-neutral-medium mb-6">Save events from the calendar to see them here.</p>
                <Link href="/calendar" className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105">Browse Calendar</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {savedEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl p-5 shadow-md border border-neutral-light/20 flex items-center justify-between gap-4 flex-wrap hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`${getCategoryColor(event.category)} w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold`}>
                        {event.date.getDate()}
                      </div>
                      <div>
                        <h3 className="font-bold text-neutral-dark">{event.title}</h3>
                        <p className="text-sm text-neutral-medium">{event.date.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric" })} • {event.time}</p>
                        <p className="text-xs text-neutral-medium">📍 {event.location}</p>
                      </div>
                    </div>
                    {event.date < new Date() && <span className="text-xs bg-neutral-light/50 text-neutral-dark px-2 py-1 rounded-full">Past</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Newsletters Tab */}
        {activeTab === "newsletters" && (
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {subscribedResources.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-neutral-light/20">
                <div className="text-6xl mb-4">📧</div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-3">No Newsletter Subscriptions</h2>
                <p className="text-neutral-medium mb-6">Subscribe to organization newsletters from the Directory.</p>
                <Link href="/directory" className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105">Browse Directory</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {subscribedResources.map((resource) => (
                  <div key={resource.id} className="bg-white rounded-xl p-5 shadow-md border border-neutral-light/20 flex items-center justify-between flex-wrap gap-4 hover:shadow-lg transition-all">
                    <div>
                      <h3 className="font-bold text-neutral-dark">{resource.name}</h3>
                      <span className="inline-block bg-mint-bg text-forest-dark px-3 py-1 rounded-full text-sm font-medium mt-1">{resource.category}</span>
                      <p className="text-sm text-neutral-medium mt-1">📧 Newsletters sent to: <strong>{user.email}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}