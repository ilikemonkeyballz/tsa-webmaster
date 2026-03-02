"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
const RESET_LEADERBOARD = false;
export default function LeaderboardPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState<Record<number, any[]>>({});
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
    const savedReviews = localStorage.getItem('resourceReviews');
if (RESET_LEADERBOARD) {
      console.log('🔄 Resetting all reviews...');
      localStorage.removeItem('resourceReviews');
      console.log('✅ All reviews have been cleared!');
      console.log('⚠️ Remember to set RESET_LEADERBOARD back to false');
      setReviews({});
      return;
    }
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const resources = [
    { id: 1, name: "Center for Food Action (CFA)", category: "Food & Social Services", town: "Hackensack / Paramus" },
    { id: 2, name: "Family Promise of Bergen County", category: "Shelter & Housing", town: "Ridgewood area" },
    { id: 3, name: "Greater Bergen Community Action (GBCA)", category: "Community Services", town: "Hackensack" },
    { id: 4, name: "Bergen Volunteers", category: "Volunteer Services", town: "Ridgewood / Countywide" },
    { id: 5, name: "Jewish Family & Children's Services (JFCS)", category: "Social Services", town: "Teaneck / Paramus" },
    { id: 6, name: "Meals on Wheels of North Jersey", category: "Senior Services", town: "Countywide" },
    { id: 7, name: "Habitat for Humanity - Bergen & Passaic", category: "Housing", town: "Regional" },
    { id: 8, name: "United Way of Northern New Jersey", category: "Referral Services", town: "Regional" },
    { id: 9, name: "Center for Hope & Safety", category: "Domestic Violence Services", town: "Countywide" },
    { id: 10, name: "Eva's Village", category: "Homeless Services", town: "Paterson" },
    { id: 11, name: "St. Cecilia's Food Pantry", category: "Food & Social Services", town: "Englewood" },
    { id: 12, name: "Ridgewood Fish Food Pantry", category: "Food & Social Services", town: "Ridgewood" },
    { id: 13, name: "Social Service Association of Ridgewood", category: "Social Services", town: "Ridgewood" },
    { id: 14, name: "Oasis – A Haven for Women & Children", category: "Shelter & Housing", town: "Regional" },
    { id: 15, name: "Goodwill NY/NJ", category: "Employment Services", town: "Paramus / Multiple" },
    { id: 16, name: "YWCA Northern NJ", category: "Childcare & Support", town: "Hackensack / Multiple" },
    { id: 17, name: "Cerebral Palsy of NJ", category: "Disability Services", town: "Regional" },
    { id: 18, name: "Habitat ReStore", category: "Volunteer Services", town: "Regional" },
  ];

  const categories = [
    "all",
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

  const getAverageRating = (resourceId: number) => {
    const resourceReviews = reviews[resourceId] || [];
    if (resourceReviews.length === 0) return 0;
    const sum = resourceReviews.reduce((acc: number, review: any) => acc + review.rating, 0);
    return sum / resourceReviews.length;
  };

  const rankedResources = resources
    .map(resource => ({
      ...resource,
      averageRating: getAverageRating(resource.id),
      reviewCount: (reviews[resource.id] || []).length,
    }))
    .filter(r => {
      if (filterCategory === "all") return r.reviewCount > 0;
      return r.reviewCount > 0 && r.category === filterCategory;
    })
    .sort((a, b) => {
      if (b.averageRating !== a.averageRating) {
        return b.averageRating - a.averageRating;
      }
      return b.reviewCount - a.reviewCount;
    });

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "";
  };

  const getMedalColor = (rank: number) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-300 to-gray-500";
    if (rank === 3) return "from-orange-400 to-orange-600";
    return "from-sage to-mint";
  };

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">🏆 Community Resources Leaderboard</h1>
          <p className="text-xl text-mint">
            Top-rated organizations based on community reviews
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* Filter */}
        <div className={`bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <label className="block text-sm font-semibold text-neutral-dark mb-3">
            Filter by Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Leaderboard */}
        {rankedResources.length === 0 ? (
          <div className={`bg-white rounded-xl p-12 text-center border border-neutral-light/20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-6xl mb-6">📊</div>
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">No Reviews Yet</h2>
            <p className="text-lg text-neutral-medium mb-8 max-w-2xl mx-auto">
              Be the first to review community resources! Your feedback helps others find the best services.
            </p>
            <Link
              href="/directory"
              className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Browse Resources
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {rankedResources.map((resource, index) => (
              <div
                key={resource.id}
                className={`bg-white rounded-xl shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 50}ms` }}
              >
                <div className="flex items-center p-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0 mr-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getMedalColor(index + 1)} flex items-center justify-center text-white shadow-lg`}>
                      {index < 3 ? (
                        <span className="text-3xl">{getMedalEmoji(index + 1)}</span>
                      ) : (
                        <span className="text-2xl font-bold">#{index + 1}</span>
                      )}
                    </div>
                  </div>

                  {/* Resource Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-dark mb-2">{resource.name}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.round(resource.averageRating) ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-lg font-bold text-neutral-dark">
                          {resource.averageRating.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-neutral-medium">
                        {resource.reviewCount} {resource.reviewCount === 1 ? 'review' : 'reviews'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="inline-flex items-center bg-mint-bg px-3 py-1 rounded-full text-forest-dark font-medium">
                        {resource.category}
                      </span>
                      <span className="text-neutral-medium">
                        📍 {resource.town}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="flex-shrink-0 ml-6 hidden md:block">
                    <Link
                      href={`/resource/${resource.id}`}
                      className="bg-forest-medium hover:bg-forest-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>

                {/* Mobile View Details Button */}
                <div className="md:hidden px-6 pb-6">
                  <Link
                    href={`/resource/${resource.id}`}
                    className="block w-full bg-forest-medium hover:bg-forest-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {rankedResources.length > 0 && (
          <div className={`mt-12 bg-gradient-to-r from-forest-medium to-ocean-medium text-white rounded-2xl p-12 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Help Others Find Great Resources</h2>
            <p className="text-lg text-mint mb-8 max-w-2xl mx-auto">
              Have you used any of these community services? Share your experience to help others make informed decisions.
            </p>
            <Link
              href="/directory"
              className="inline-block bg-white text-forest-dark font-semibold px-8 py-4 rounded-xl hover:bg-mint-bg transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Leave a Review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}