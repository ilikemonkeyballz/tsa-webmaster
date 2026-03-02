"use client";

import { useState } from "react";
import { saveUser, type User } from "@/lib/auth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
  redirectMessage?: string;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess, redirectMessage }: LoginModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user: User = {
      name: formData.name,
      email: formData.email,
      newsletters: [],
    };
    
    saveUser(user);
    onLoginSuccess();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-neutral-dark">Sign In</h2>
          <button
            onClick={onClose}
            className="text-neutral-medium hover:text-neutral-dark text-2xl"
          >
            ×
          </button>
        </div>

        {redirectMessage && (
          <div className="bg-mint-bg border border-sage/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-forest-dark">{redirectMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-neutral-dark mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-dark mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest-medium hover:bg-forest-dark text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-neutral-medium text-center mt-6">
          Your information is only stored locally on your device
        </p>
      </div>
    </div>
  );
}