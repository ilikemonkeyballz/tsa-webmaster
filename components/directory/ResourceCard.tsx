"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser, subscribeToNewsletter, unsubscribeFromNewsletter, isSubscribedTo } from "@/lib/auth";

interface Resource {
  id: number;
  name: string;
  category: string;
  description: string;
  town: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  eligibility: string;
  fees: string;
  icon: string;
  averageRating?: number;
  reviewCount?: number;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export default function ResourceCard({ 
  resource, 
  reviews, 
  setReviews 
}: { 
  resource: Resource;
  reviews: Record<number, Review[]>;
  setReviews: React.Dispatch<React.SetStateAction<Record<number, Review[]>>>;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClickExpanded, setIsClickExpanded] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
    author: "",
  });
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const router = useRouter();

  const resourceReviews = reviews[resource.id] || [];
  const averageRating = resource.averageRating || 0;

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
    if (currentUser) {
      setIsSubscribed(isSubscribedTo(resource.id));
    }
  }, [resource.id]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    const review: Review = {
      id: Date.now().toString(),
      rating: newReview.rating,
      comment: newReview.comment,
      author: newReview.author || "Anonymous",
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = {
      ...reviews,
      [resource.id]: [...(reviews[resource.id] || []), review],
    };

    setReviews(updatedReviews);
    localStorage.setItem('resourceReviews', JSON.stringify(updatedReviews));

    setNewReview({ rating: 5, comment: "", author: "" });
    setShowReviewModal(false);
    setIsExpanded(false);
    setIsClickExpanded(false);
  };

  const handleViewDetailsClick = () => {
    setIsExpanded(true);
    setIsClickExpanded(true);
  };

  const handleMouseLeave = () => {
    // Only collapse if it was expanded by clicking AND modal is not showing
    if (isClickExpanded && !showReviewModal) {
      setIsExpanded(false);
      setIsClickExpanded(false);
    }
  };

  const handleNewsletterToggle = () => {
    if (!user) {
      router.push(`/login?redirect=/directory`);
      return;
    }

    if (isSubscribed) {
      unsubscribeFromNewsletter(resource.id);
      setIsSubscribed(false);
    } else {
      subscribeToNewsletter(resource.id);
      setIsSubscribed(true);
    }
  };

  return (
    <>
      <div
        className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
          isExpanded ? "shadow-2xl" : "hover:shadow-lg"
        }`}
        onMouseLeave={handleMouseLeave}
      >
        {/* Icon Header */}
        <div className="relative h-32 bg-gradient-to-br from-sage to-mint flex items-center justify-center">
          {resource.icon.startsWith('/') || resource.icon.startsWith('http') ? (
            <img 
              src={resource.icon} 
              alt={resource.name}
              className="w-20 h-20 object-contain"
            />
          ) : (
            <div className="text-6xl">{resource.icon}</div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <span className="inline-block bg-seafoam text-forest-dark text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {resource.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {resource.name}
          </h3>

          {/* Rating Display */}
          {averageRating > 0 && (
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-neutral-dark">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-sm text-neutral-medium">
                ({resource.reviewCount})
              </span>
            </div>
          )}

          {/* Town */}
          <p className="text-sm text-forest-medium font-medium mb-2">
            📍 {resource.town}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {resource.description}
          </p>

          {/* View Details Button */}
          {!isExpanded && (
            <button
              onClick={handleViewDetailsClick}
              className="w-full bg-mint-bg hover:bg-seafoam text-forest-dark font-semibold py-2 px-4 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2"
            >
              View Details
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}

          {/* Expanded Info */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 pt-4 space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-1">📞 Contact</p>
                <p className="text-gray-700">{resource.phone}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">🕒 Hours</p>
                <p className="text-gray-700">{resource.hours}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">✅ Eligibility</p>
                <p className="text-gray-700">{resource.eligibility}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-1">💰 Fees</p>
                <p className="text-gray-700">{resource.fees}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowReviewModal(true);
                  }}
                  className="flex-1 bg-sage hover:bg-forest-medium text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  ⭐ Leave Review
                </button>
                {resource.website !== "Contact for information" && (
                  <a
                    href={resource.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-mint-bg hover:bg-seafoam text-forest-dark font-semibold py-2 px-4 rounded-lg transition-colors text-sm text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                  </a>
                )}
              </div>

              {/* Newsletter RSVP Button */}
              <div className="pt-2">
                <button
                  onClick={handleNewsletterToggle}
                  className={`w-full font-semibold py-2 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2 ${
                    isSubscribed
                      ? "bg-sage text-white hover:bg-forest-medium"
                      : "bg-mint-bg text-forest-dark hover:bg-seafoam border border-sage/30"
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      ✓ Subscribed to Newsletter
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Subscribe to Newsletter
                    </>
                  )}
                </button>
                {!user && (
                  <p className="text-xs text-neutral-medium text-center mt-2">
                    Sign in to subscribe to newsletters
                  </p>
                )}
              </div>

              {/* Reviews Link */}
              {resourceReviews.length > 0 && (
                <div className="pt-2">
                  <p className="text-forest-dark font-medium text-sm">
                    {resourceReviews.length} review{resourceReviews.length !== 1 ? 's' : ''} from the community
                  </p>
                  
                  {/* Show latest review */}
                  {resourceReviews.length > 0 && (
                    <div className="mt-3 bg-mint-bg/50 rounded-lg p-3 border border-sage/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${
                                i < resourceReviews[resourceReviews.length - 1].rating ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-neutral-dark">
                          {resourceReviews[resourceReviews.length - 1].author}
                        </span>
                        <span className="text-xs text-neutral-medium">
                          {resourceReviews[resourceReviews.length - 1].date}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-dark line-clamp-2">
                        "{resourceReviews[resourceReviews.length - 1].comment}"
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowReviewModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-neutral-dark">Leave a Review</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-neutral-medium hover:text-neutral-dark text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-neutral-medium mb-6">{resource.name}</p>

            <form onSubmit={handleSubmitReview} className="space-y-6">
              {/* Star Rating */}
              <div>
                <label className="block text-sm font-semibold text-neutral-dark mb-3">
                  Rating
                </label>
                <div className="flex gap-1 justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <svg
                        className={`w-9 h-9 ${
                          star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-semibold text-neutral-dark mb-2">
                  Your Review
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none resize-none"
                  rows={4}
                  placeholder="Share your experience with this resource..."
                  required
                />
              </div>

              {/* Author Name */}
              <div>
                <label className="block text-sm font-semibold text-neutral-dark mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  className="w-full px-4 py-3 border border-neutral-light/30 rounded-lg focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20 outline-none"
                  placeholder="Anonymous"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-forest-medium hover:bg-forest-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}