"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { saveUser, getUser, type User } from "@/lib/auth";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 80);
    const user = getUser();
    if (!user) return;
    if (redirect && redirect !== "/login") {
      router.replace(redirect);
    } else {
      router.replace("/");
    }
  }, [redirect, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = {
      name: formData.name,
      email: formData.email,
      newsletters: [] as number[],
      volunteerSignups: [] as any[],
    };
    saveUser(user);
    router.push(redirect);
  };

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-md w-full border border-neutral-light/20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-dark mb-3">Welcome Back</h1>
          <p className="text-neutral-medium">Sign in to access personalized features</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-neutral-dark mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-200"
              style={{
                borderColor: focused === "name" ? "#52b788" : "rgba(141,153,174,0.3)",
                boxShadow: focused === "name" ? "0 0 0 3px rgba(82,183,136,0.12)" : "none",
              }}
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-dark mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className="w-full px-4 py-3 border rounded-lg outline-none transition-all duration-200"
              style={{
                borderColor: focused === "email" ? "#52b788" : "rgba(141,153,174,0.3)",
                boxShadow: focused === "email" ? "0 0 0 3px rgba(82,183,136,0.12)" : "none",
              }}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest-medium hover:bg-forest-dark text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 p-4 bg-mint-bg rounded-lg border border-sage/20">
          <p className="text-sm text-forest-dark">
            <strong>✨ Benefits of signing in:</strong>
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-dark">
            <li>• Save events to My Calendar</li>
            <li>• Subscribe to organization newsletters</li>
            <li>• Track your saved resources</li>
          </ul>
        </div>

        <p className="text-xs text-neutral-medium text-center mt-6">
          Your information is only stored locally on your device and never shared
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-beige flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
