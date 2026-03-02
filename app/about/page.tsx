"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Community Hub</h1>
          <p className="text-xl md:text-2xl text-mint leading-relaxed">
            Building bridges between residents and resources, one connection at a time
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-neutral-light/20">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-6">Our Story</h2>
          <div className="space-y-4 text-neutral-medium leading-relaxed text-lg">
            <p>
              Community Hub was born from a simple observation: too many residents in Bergen County didn't know where to turn when they needed help. Valuable resources existed, but finding them was like searching for a needle in a haystack.
            </p>
            <p>
              In 2023, a group of local volunteers, social workers, and community advocates came together with a shared vision. We imagined a place where anyone could easily discover the support services available in their community—from food assistance and healthcare to job training and housing support.
            </p>
            <p>
              What started as a simple spreadsheet has grown into a comprehensive directory serving thousands of residents each month. Today, Community Hub stands as a testament to what's possible when neighbors help neighbors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-mint-bg rounded-2xl shadow-lg p-8 md:p-12 border border-sage/20">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-6">Our Mission</h2>
          <p className="text-neutral-dark leading-relaxed text-lg mb-6">
            To connect every Bergen County resident with the resources they need to thrive, ensuring that no one has to navigate life's challenges alone.
          </p>
          <p className="text-neutral-medium leading-relaxed text-lg">
            We believe that access to community resources should be simple, transparent, and available to everyone—regardless of income, background, or circumstance.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-12 text-center">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Accessibility */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-light/20 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-forest-dark mb-3">Accessibility</h3>
            <p className="text-neutral-medium leading-relaxed">
              Information should be free, easy to find, and available to everyone in our community without barriers.
            </p>
          </div>

          {/* Compassion */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-light/20 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-bold text-forest-dark mb-3">Compassion</h3>
            <p className="text-neutral-medium leading-relaxed">
              We approach every interaction with empathy, understanding that asking for help takes courage.
            </p>
          </div>

          {/* Community */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-light/20 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-forest-dark mb-3">Community</h3>
            <p className="text-neutral-medium leading-relaxed">
              We're stronger together. Every resource shared strengthens the fabric of our community.
            </p>
          </div>

          {/* Accuracy */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-light/20 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-forest-dark mb-3">Accuracy</h3>
            <p className="text-neutral-medium leading-relaxed">
              We're committed to maintaining up-to-date, verified information that residents can trust.
            </p>
          </div>

          {/* Inclusivity */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-light/20 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="text-xl font-bold text-forest-dark mb-3">Inclusivity</h3>
            <p className="text-neutral-medium leading-relaxed">
              Our directory serves all members of our diverse community with dignity and respect.
            </p>
          </div>

          {/* Collaboration */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-neutral-light/20 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-forest-dark mb-3">Collaboration</h3>
            <p className="text-neutral-medium leading-relaxed">
              We partner with local organizations, volunteers, and residents to grow our impact.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className={`bg-gradient-to-r from-forest-medium to-ocean-medium text-white py-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-seafoam mb-2">15,000+</div>
              <p className="text-lg text-mint">Residents Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-seafoam mb-2">150+</div>
              <p className="text-lg text-mint">Community Resources</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-seafoam mb-2">50+</div>
              <p className="text-lg text-mint">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-forest-dark mb-6">Join Us in Making a Difference</h2>
        <p className="text-lg text-neutral-medium mb-8 leading-relaxed">
          Whether you're looking for support or have resources to share, Community Hub is here for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/directory"
            className="bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Explore Resources
          </a>
          <a
            href="/submit"
            className="bg-white hover:bg-mint-bg text-forest-dark border-2 border-forest-medium font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Submit a Resource
          </a>
        </div>
      </section>
    </div>
  );
}