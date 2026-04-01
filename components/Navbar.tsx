"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getUser, logout, AUTH_CHANGE_EVENT } from "@/lib/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);
  const [calendarCount, setCalendarCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setUser(getUser());
    updateCalendarCount();

    const handleAuthChange = () => setUser(getUser());
    const handleStorageChange = () => updateCalendarCount();

    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("calendarUpdated", handleStorageChange);

    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("calendarUpdated", handleStorageChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateCalendarCount = () => {
    const saved = localStorage.getItem("myCalendarEvents");
    setCalendarCount(saved ? JSON.parse(saved).length : 0);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setShowUserMenu(false);
    window.location.href = "/";
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/directory", label: "Directory" },
  ];

  const productsItems = [
    { href: "/calendar", label: "Events Calendar", icon: "/icons/calendar.png" },
    { href: "/my-calendar", label: "My Calendar", icon: "/icons/star.png", requiresAuth: false },
    { href: "/volunteer", label: "Volunteer Sign-Up", icon: "/icons/charity-organization.png", requiresAuth: false },
    { href: "/map", label: "Resource Map", icon: "/icons/map.png", requiresAuth: false },
    { href: "/bulletin", label: "Community Bulletin", icon: "/icons/pin.png" },
    { href: "/leaderboard", label: "Resource Leaderboard", icon: "/icons/trophy.png" },
    { href: "/submit", label: "Submit Resource", icon: "➕" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(250,248,244,0.92)"
          : "rgba(250,248,244,0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: scrolled
          ? "0 1px 0 rgba(116,198,157,0.18), 0 4px 24px rgba(45,106,79,0.07)"
          : "0 1px 0 rgba(116,198,157,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className="text-2xl font-bold transition-colors duration-300 group-hover:text-forest-medium"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: "#1a4d3e",
                letterSpacing: "-0.02em",
              }}
            >
              BergenConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 font-medium transition-all duration-250 rounded-lg hover:bg-mint-bg"
                style={{ color: "#4a4e69", fontSize: "0.9375rem" }}
              >
                {item.label}
              </Link>
            ))}

            {/* Products & Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 font-medium rounded-lg hover:bg-mint-bg transition-colors duration-200"
                style={{ color: "#4a4e69", fontSize: "0.9375rem" }}
              >
                Products & Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${showProductsDropdown ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showProductsDropdown && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fadeIn">
                  <div
                    className="rounded-xl py-2 overflow-hidden"
                    style={{
                      background: "#fefcf8",
                      boxShadow: "0 4px 6px rgba(45,106,79,0.06), 0 16px 40px rgba(45,106,79,0.1), 0 0 0 1px rgba(116,198,157,0.15)",
                    }}
                  >
                    {productsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-2.5 transition-colors duration-150 hover:bg-mint-bg"
                        style={{ color: "#2b2d42" }}
                      >
                        {item.icon.startsWith("/") ? (
                          <img src={item.icon} alt="" className="w-5 h-5 mr-3 object-contain opacity-75" />
                        ) : (
                          <span className="text-lg mr-3">{item.icon}</span>
                        )}
                        <span className="font-medium text-sm">{item.label}</span>
                        {item.href === "/my-calendar" && calendarCount > 0 && (
                          <span className="ml-auto text-xs bg-mint-bg text-forest-dark px-2 py-0.5 rounded-full font-semibold">
                            {calendarCount}
                          </span>
                        )}
                        {item.requiresAuth && !user && (
                          <span className="ml-auto text-xs bg-mint-bg text-forest-dark px-2 py-0.5 rounded-full">Login</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-4 py-2 font-medium rounded-lg hover:bg-mint-bg transition-colors duration-200"
              style={{ color: "#4a4e69", fontSize: "0.9375rem" }}
            >
              About
            </Link>

            {/* User Menu */}
            {user ? (
              <div
                className="relative ml-2"
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
              >
                <button
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 hover:bg-mint-bg"
                  style={{ border: "1.5px solid rgba(116,198,157,0.3)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: "#2d6a4f" }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-forest-dark">{user.name}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute top-full right-0 pt-2 w-56 animate-fadeIn">
                    <div
                      className="rounded-xl py-2 overflow-hidden"
                      style={{
                        background: "#fefcf8",
                        boxShadow: "0 4px 6px rgba(45,106,79,0.06), 0 16px 40px rgba(45,106,79,0.1), 0 0 0 1px rgba(116,198,157,0.15)",
                      }}
                    >
                      <div className="px-4 py-3 mb-1" style={{ borderBottom: "1px solid rgba(116,198,157,0.15)" }}>
                        <p className="text-sm font-semibold text-neutral-dark">{user.name}</p>
                        <p className="text-xs text-neutral-medium truncate">{user.email}</p>
                      </div>
                      {[
                        { href: "/profile", icon: "/icons/user.png", label: "My Profile" },
                        { href: "/my-calendar", icon: "/icons/star.png", label: "My Calendar", badge: calendarCount },
                        { href: "/my-newsletters", icon: "/icons/email.png", label: "My Newsletters", badge: user.newsletters.length },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-2.5 hover:bg-mint-bg transition-colors duration-150"
                          style={{ color: "#2b2d42" }}
                        >
                          <span className="flex items-center text-sm">
                            <img src={item.icon} alt="" className="w-4 h-4 mr-2.5 object-contain opacity-70" />
                            {item.label}
                          </span>
                          {item.badge && item.badge > 0 ? (
                            <span className="text-xs bg-mint-bg text-forest-dark px-2 py-0.5 rounded-full font-semibold">
                              {item.badge}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-red-50 text-red-600"
                      >
                        🚪 Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="ml-2 px-5 py-2 font-semibold rounded-xl text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "#2d6a4f",
                  fontSize: "0.9rem",
                }}
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-mint-bg transition-colors duration-200 text-neutral-dark"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 mt-1" style={{ borderTop: "1px solid rgba(116,198,157,0.15)" }}>
            <div className="flex flex-col gap-1 pt-3">
              {user && (
                <div className="px-4 py-3 bg-mint-bg rounded-xl mb-2">
                  <p className="text-sm font-semibold text-forest-dark">{user.name}</p>
                  <p className="text-xs text-neutral-medium">{user.email}</p>
                </div>
              )}
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-neutral-dark hover:text-forest-dark hover:bg-mint-bg font-medium py-2.5 px-4 rounded-xl transition-all duration-200" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-mint-bg my-1 mx-1" />
              <p className="text-xs font-semibold text-neutral-light px-4 py-1 tracking-wider uppercase">Products & Services</p>
              {productsItems.map((item) => (
                <Link key={item.href} href={item.href} className="flex items-center justify-between text-neutral-dark hover:text-forest-dark hover:bg-mint-bg font-medium py-2.5 px-4 rounded-xl transition-all duration-200" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center text-sm">
                    {item.icon.startsWith("/") ? <img src={item.icon} alt="" className="w-5 h-5 mr-3 object-contain opacity-70" /> : <span className="text-lg mr-3">{item.icon}</span>}
                    {item.label}
                  </div>
                  {item.href === "/my-calendar" && calendarCount > 0 && <span className="text-xs bg-mint-bg text-forest-dark px-2 py-0.5 rounded-full font-semibold">{calendarCount}</span>}
                </Link>
              ))}
              <div className="h-px bg-mint-bg my-1 mx-1" />
              {user ? (
                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-left text-red-600 hover:bg-red-50 font-medium py-2.5 px-4 rounded-xl transition-all duration-200 text-sm">
                  🚪 Sign Out
                </button>
              ) : (
                <Link href="/login" className="text-forest-dark hover:bg-mint-bg font-medium py-2.5 px-4 rounded-xl transition-all duration-200" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
