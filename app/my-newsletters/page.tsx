"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser, unsubscribeFromNewsletter } from "@/lib/auth";

export default function MyNewslettersPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      router.push('/login?redirect=/my-newsletters');
      return;
    }
    setUser(currentUser);
    setIsVisible(true);
  }, [router]);

  const resources = [
    { id: 1, name: "Center for Food Action (CFA)", category: "Food & Social Services" },
    { id: 2, name: "Family Promise of Bergen County", category: "Shelter & Housing" },
    { id: 3, name: "Greater Bergen Community Action (GBCA)", category: "Community Services" },
    { id: 4, name: "Bergen Volunteers", category: "Volunteer Services" },
    { id: 5, name: "Jewish Family & Children's Services (JFCS)", category: "Social Services" },
    { id: 6, name: "Meals on Wheels of North Jersey", category: "Senior Services" },
    { id: 7, name: "Habitat for Humanity - Bergen & Passaic", category: "Housing" },
    { id: 8, name: "United Way of Northern New Jersey", category: "Referral Services" },
    { id: 9, name: "Center for Hope & Safety", category: "Domestic Violence Services" },
    { id: 10, name: "Eva's Village", category: "Homeless Services" },
  ];

  const subscribedResources = user 
    ? resources.filter(r => user.newsletters.includes(r.id))
    : [];

  const handleUnsubscribe = (resourceId: number) => {
    if (confirm('Are you sure you want to unsubscribe from this newsletter?')) {
      unsubscribeFromNewsletter(resourceId);
      setUser(getUser());
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">📧 My Newsletters</h1>
          <p className="text-xl text-mint">
            Manage your newsletter subscriptions
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* User Info */}
        <div className={`bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-forest-medium rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-dark">{user.name}</h2>
              <p className="text-neutral-medium">{user.email}</p>
              <p className="text-sm text-sage mt-1">{subscribedResources.length} newsletter subscriptions</p>
            </div>
          </div>
        </div>

        {/* Subscriptions */}
        {subscribedResources.length === 0 ? (
          <div className={`bg-white rounded-xl p-12 text-center border border-neutral-light/20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-6xl mb-6">📬</div>
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">No Newsletter Subscriptions</h2>
            <p className="text-lg text-neutral-medium mb-8 max-w-2xl mx-auto">
              Browse the resource directory and subscribe to organization newsletters to stay informed about their programs and services.
            </p>
            <a
              href="/directory"
              className="inline-block bg-forest-medium hover:bg-forest-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Browse Resources
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {subscribedResources.map((resource, index) => (
              <div
                key={resource.id}
                className={`bg-white rounded-xl p-6 shadow-md border border-neutral-light/20 hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-dark mb-2">{resource.name}</h3>
                    <span className="inline-block bg-mint-bg text-forest-dark px-3 py-1 rounded-full text-sm font-medium">
                      {resource.category}
                    </span>
                    <p className="text-sm text-neutral-medium mt-3">
                      📧 Newsletters will be sent to: <strong>{user.email}</strong>
                    </p>
                  </div>
                  <button
                    onClick={() => handleUnsubscribe(resource.id)}
                    className="ml-6 px-6 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-lg transition-colors border border-red-200"
                  >
                    Unsubscribe
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}