"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#152e24",
        borderTop: "1px solid rgba(82,183,136,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3
              className="text-xl font-bold mb-4"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                color: "#95d5b2",
                letterSpacing: "-0.01em",
              }}
            >
              BergenConnect
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(149,213,178,0.65)" }}>
              Connecting residents with essential services, support programs, and community resources to build a stronger, more informed Bergen County.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#74c69d" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/directory", label: "Resource Directory" },
                { href: "/calendar", label: "Events Calendar" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/submit", label: "Submit Resource" },
                { href: "/about", label: "About Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(149,213,178,0.6)" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#b7e4c7")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(149,213,178,0.6)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#74c69d" }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(149,213,178,0.6)" }}>
              <li>info@bergenconnect.org</li>
              <li>(201) 555-0100</li>
              <li>Mon–Fri 9AM–5PM</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(82,183,136,0.1)",
            color: "rgba(149,213,178,0.4)",
          }}
        >
          © 2026 BergenConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
