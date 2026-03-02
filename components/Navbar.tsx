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

  // Update user state and calendar count when auth changes or on mount
  useEffect(() => {
    // Initial load
    setUser(getUser());
    updateCalendarCount();

    // Listen for auth changes
    const handleAuthChange = () => {
      setUser(getUser());
    };

    // Listen for calendar changes
    const handleStorageChange = () => {
      updateCalendarCount();
    };

    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-page localStorage changes
    window.addEventListener('calendarUpdated', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('calendarUpdated', handleStorageChange);
    };
  }, []);

  const updateCalendarCount = () => {
    const saved = localStorage.getItem('myCalendarEvents');
    if (saved) {
      const events = JSON.parse(saved);
      setCalendarCount(events.length);
    } else {
      setCalendarCount(0);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setShowUserMenu(false);
    window.location.href = '/';
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/directory", label: "Directory" },
  ];

  const productsItems = [
    { href: "/calendar", label: "Events Calendar", icon: "📅" },
    { href: "/my-calendar", label: "My Calendar", icon: "⭐", requiresAuth: true },
    { href: "/bulletin", label: "Community Bulletin", icon: "📌" },
    { href: "/leaderboard", label: "Resource Leaderboard", icon: "🏆" },
    { href: "/submit", label: "Submit Resource", icon: "➕" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-neutral-light/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-3xl font-bold text-forest-dark transition-colors duration-300 group-hover:text-forest-medium">
              BergenConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-neutral-dark hover:text-forest-dark font-medium transition-all duration-300 group"
              >
                <span className="relative z-10 inline-block group-hover:scale-110 transition-transform duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-forest-dark transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}

            {/* Products & Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <button className="relative px-5 py-2 text-neutral-dark hover:text-forest-dark font-medium transition-all duration-300 group flex items-center">
                <span className="relative z-10 inline-block group-hover:scale-110 transition-transform duration-300">
                  Products & Services
                </span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${showProductsDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-forest-dark transition-all duration-300 group-hover:w-3/4"></span>
              </button>

              {showProductsDropdown && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fadeIn">
                  <div className="bg-white rounded-xl shadow-xl border border-neutral-light/20 py-2 overflow-hidden">
                    {productsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center px-4 py-3 text-neutral-dark hover:bg-mint-bg hover:text-forest-dark transition-all duration-200"
                      >
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                        {item.href === "/my-calendar" && calendarCount > 0 && (
                          <span className="ml-auto text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded font-semibold">
                            {calendarCount}
                          </span>
                        )}
                        {item.requiresAuth && !user && (
                          <span className="ml-auto text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded">Login</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="relative px-5 py-2 text-neutral-dark hover:text-forest-dark font-medium transition-all duration-300 group"
            >
              <span className="relative z-10 inline-block group-hover:scale-110 transition-transform duration-300">
                About
              </span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-forest-dark transition-all duration-300 group-hover:w-3/4"></span>
            </Link>

            {/* User Menu */}
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => setShowUserMenu(true)}
                onMouseLeave={() => setShowUserMenu(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-mint-bg rounded-lg hover:bg-seafoam transition-colors">
                  <div className="w-8 h-8 bg-forest-medium rounded-full flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-forest-dark">{user.name}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute top-full right-0 pt-2 w-56 animate-fadeIn">
                    <div className="bg-white rounded-xl shadow-xl border border-neutral-light/20 py-2 overflow-hidden">
                      <div className="px-4 py-3 border-b border-neutral-light/20">
                        <p className="text-sm font-semibold text-neutral-dark">{user.name}</p>
                        <p className="text-xs text-neutral-medium truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/my-calendar"
                        className="flex items-center justify-between px-4 py-3 text-neutral-dark hover:bg-mint-bg transition-colors"
                      >
                        <span>⭐ My Calendar</span>
                        {calendarCount > 0 && (
                          <span className="text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded font-semibold">
                            {calendarCount}
                          </span>
                        )}
                      </Link>
                      <Link
                        href="/my-newsletters"
                        className="flex items-center justify-between px-4 py-3 text-neutral-dark hover:bg-mint-bg transition-colors"
                      >
                        <span>📧 My Newsletters</span>
                        {user.newsletters.length > 0 && (
                          <span className="text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded font-semibold">
                            {user.newsletters.length}
                          </span>
                        )}
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
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
                className="px-5 py-2 bg-forest-medium hover:bg-forest-dark text-white font-semibold rounded-lg transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-neutral-dark hover:bg-mint-bg transition-colors duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-light/20 mt-4">
            <div className="flex flex-col space-y-1">
              {user && (
                <div className="px-4 py-3 bg-mint-bg rounded-lg mb-2">
                  <p className="text-sm font-semibold text-forest-dark">{user.name}</p>
                  <p className="text-xs text-neutral-medium">{user.email}</p>
                </div>
              )}

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-dark hover:text-forest-dark hover:bg-mint-bg font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-neutral-light/20 my-2"></div>
              <p className="text-xs font-semibold text-neutral-medium px-4 py-2">PRODUCTS & SERVICES</p>
              
              {productsItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between text-neutral-dark hover:text-forest-dark hover:bg-mint-bg font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{item.icon}</span>
                    {item.label}
                  </div>
                  {item.href === "/my-calendar" && calendarCount > 0 && (
                    <span className="text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded font-semibold">
                      {calendarCount}
                    </span>
                  )}
                  {item.requiresAuth && !user && (
                    <span className="text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded">Login</span>
                  )}
                </Link>
              ))}
              
              <div className="border-t border-neutral-light/20 my-2"></div>
              
              {user ? (
                <>
                  <Link
                    href="/my-newsletters"
                    className="flex items-center justify-between text-neutral-dark hover:text-forest-dark hover:bg-mint-bg font-medium py-3 px-4 rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>📧 My Newsletters</span>
                    {user.newsletters.length > 0 && (
                      <span className="text-xs bg-sage/20 text-forest-dark px-2 py-1 rounded font-semibold">
                        {user.newsletters.length}
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-left text-red-600 hover:bg-red-50 font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    🚪 Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-forest-dark hover:text-forest-medium hover:bg-mint-bg font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
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