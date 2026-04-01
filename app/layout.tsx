import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "BergenConnect — Bergen County Community Hub",
  description:
    "Connecting Bergen County residents with local events, resources, volunteers, and community services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable} scroll-smooth`}>
      <body
        className={`${dmSans.className} bg-cream`}
        suppressHydrationWarning
      >
        {/* Persistent atmosphere layer — vignette that lives behind every page */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            background: `
              radial-gradient(ellipse 110% 55% at 50% -5%, rgba(82,183,136,0.07) 0%, transparent 58%),
              radial-gradient(ellipse 70% 70% at -3% 55%, rgba(45,106,79,0.05) 0%, transparent 48%),
              radial-gradient(ellipse 55% 45% at 103% 65%, rgba(27,73,101,0.04) 0%, transparent 48%)
            `,
          }}
        />
        <Navbar />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
