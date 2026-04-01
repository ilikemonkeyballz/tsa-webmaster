"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white border-t border-forest-medium">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 italic text-seafoam">BergenConnect</h3>
            <p className="text-mint/80 mb-6 leading-relaxed">
              Connecting residents with essential services, support programs, and
              community resources to build a stronger, more informed community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-seafoam">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/directory", label: "Resource Directory" },
                { href: "/calendar",  label: "Events Calendar" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/submit",    label: "Submit Resource" },
                { href: "/about",     label: "About Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-mint/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-seafoam">Contact</h4>
            <ul className="space-y-3 text-mint/80">
              <li>Email: info@bergenconnect.org</li>
              <li>Phone: (201) 555-0100</li>
              <li>Hours: Mon–Fri 9AM–5PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-medium mt-12 pt-8 text-center text-mint/70">
          <p>© 2026 BergenConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
