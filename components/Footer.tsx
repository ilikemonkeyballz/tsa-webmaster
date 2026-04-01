"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#111f18", borderTop: "1px solid rgba(82,183,136,0.1)" }}>
      {/* Light source: subtle top glow (#2) */}
      <div style={{
        position: "absolute",
        left: 0, right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(116,198,157,0.35) 50%, transparent 100%)",
        marginTop: "-1px",
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" style={{ paddingTop: "4.5rem", paddingBottom: "3.5rem" }}>
        {/* Rhythm: wide open brand area, tight link lists (#10) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Lora', Georgia, serif", color: "#74c69d", letterSpacing: "-0.01em" }}>
              BergenConnect
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(149,213,178,0.55)" }}>
              Connecting Bergen County residents with essential services, support programs, and community resources.
            </p>

            {/* Signs of life: "recently active" communities (#9) */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#74c69d" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#74c69d" }} />
              </span>
              <span className="text-xs" style={{ color: "rgba(116,198,157,0.6)" }}>
                247 residents active this week
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: "#52b788" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
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
                    className="text-sm transition-all duration-200 inline-block"
                    style={{ color: "rgba(149,213,178,0.55)" }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "#95d5b2";
                      (e.target as HTMLAnchorElement).style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLAnchorElement).style.color = "rgba(149,213,178,0.55)";
                      (e.target as HTMLAnchorElement).style.paddingLeft = "0";
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase mb-5" style={{ color: "#52b788" }}>
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(149,213,178,0.55)" }}>
              <li>info@bergenconnect.org</li>
              <li>(201) 555-0100</li>
              <li>Mon–Fri 9AM–5PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid rgba(82,183,136,0.08)", color: "rgba(116,198,157,0.35)" }}>
          <p>© 2026 BergenConnect. All rights reserved.</p>
          <p>Built for Bergen County communities.</p>
        </div>
      </div>
    </footer>
  );
}
