"use client";

import { useState, useEffect } from "react";

export default function SubmitResourcePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    town: "",
    address: "",
    phone: "",
    website: "",
    hours: "",
    eligibility: "",
    fees: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    "Food & Social Services",
    "Shelter & Housing",
    "Social Services",
    "Community Services",
    "Senior Services",
    "Employment Services",
    "Volunteer Services",
    "Referral Services",
    "Domestic Violence Services",
    "Homeless Services",
    "Childcare & Support",
    "Disability Services",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        category: "",
        description: "",
        town: "",
        address: "",
        phone: "",
        website: "",
        hours: "",
        eligibility: "",
        fees: "",
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-beige py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold text-neutral-dark mb-3">Submit a Resource</h1>
          <p className="text-lg text-neutral-medium">
            Help us expand our directory by adding a valuable community resource
          </p>
        </div>

        {/* Form Card */}
        <div className={`bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-neutral-light/20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {showSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-forest-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-neutral-dark mb-2">
                Successfully Submitted!
              </h2>
              <p className="text-neutral-medium">
                Thank you for contributing to our community resource directory.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Resource Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Resource Name <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                  placeholder="Enter resource name"
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Category <span className="text-accent-orange">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Description <span className="text-accent-orange">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none resize-none"
                  placeholder="Describe the services and support this resource provides"
                />
              </div>

              {/* Town and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="town" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Town/City <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    value={formData.town}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                    placeholder="e.g., Hackensack"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Street Address <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                    placeholder="123 Main Street"
                  />
                </div>
              </div>

              {/* Phone and Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Phone Number <span className="text-accent-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                    placeholder="(201) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-neutral-dark mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              {/* Hours */}
              <div>
                <label htmlFor="hours" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Hours of Operation <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                  placeholder="Mon-Fri: 9AM-5PM"
                />
              </div>

              {/* Eligibility */}
              <div>
                <label htmlFor="eligibility" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Eligibility Requirements <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="eligibility"
                  name="eligibility"
                  value={formData.eligibility}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                  placeholder="e.g., Open to all, Income-based, Seniors 65+"
                />
              </div>

              {/* Fees */}
              <div>
                <label htmlFor="fees" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Fees <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="fees"
                  name="fees"
                  value={formData.fees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-light/30 focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 transition-colors outline-none"
                  placeholder="e.g., Free, Sliding scale, $25 per visit"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-forest-medium text-white font-bold py-4 px-6 rounded-xl hover:bg-forest-dark hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Resource"
                )}
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="text-center text-neutral-medium text-sm mt-6">
          All submissions will be reviewed before being added to the directory
        </p>
      </div>
    </div>
  );
}