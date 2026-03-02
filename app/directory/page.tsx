"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/directory/SearchBar";
import FilterSidebar from "@/components/directory/FilterSidebar";
import ResourceCard from "@/components/directory/ResourceCard";
import Link from "next/link";

const RESET_LEADERBOARD = false;
export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState<Record<number, any[]>>({});

  useEffect(() => {
    setIsVisible(true);
    // Load reviews from localStorage
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

  // Calculate average rating for a resource
  const getAverageRating = (resourceId: number) => {
    const resourceReviews = reviews[resourceId] || [];
    if (resourceReviews.length === 0) return 0;
    const sum = resourceReviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / resourceReviews.length;
  };

  // Real Bergen County resources
  const resources = [
        {
      id: 1,
      name: "Center for Food Action (CFA)",
      category: "Food & Social Services",
      description: "Food pantry services, rental and utility assistance, advocacy, and case management",
      town: "Hackensack / Englewood / Multiple",
      address: "316 First St, Hackensack, NJ 07601",
      phone: "(201) 883-9375",
      website: "https://cfanj.org",
      hours: "By appointment; distribution hours vary by site",
      eligibility: "Low-income households in Bergen & Passaic counties",
      fees: "Free",
      icon: "/icons/open-graph-new-image-1-removebg-preview.png",
    },
        {
      id: 2,
      name: "Family Promise of Bergen County",
      category: "Shelter & Housing",
      description: "Emergency shelter for families, daily meals, rapid rehousing, and case management",
      town: "Ridgewood / Countywide",
      address: "100 Dayton St, Ridgewood, NJ 07450",
      phone: "(201) 833-8009",
      website: "https://www.bergenfamilypromise.org",
      hours: "Dinner daily 4:45–5:50pm; shelter by referral",
      eligibility: "Families experiencing homelessness",
      fees: "Free",
      icon: "/icons/familypromise-removebg-preview.png",
    },
        {
      id: 3,
      name: "Greater Bergen Community Action (GBCA)",
      category: "Community Services",
      description: "Energy assistance, rental support, early childhood education, workforce and anti-poverty programs",
      town: "Hackensack",
      address: "392 Main Street, Hackensack, NJ 07601",
      phone: "(201) 968-0200",
      website: "https://www.greaterbergen.org",
      hours: "Mon–Fri 9am–5pm (varies by program)",
      eligibility: "Low-income individuals and families",
      fees: "Free or income-based",
      icon: "🏘️",
    },
    {
      id: 4,
      name: "Bergen Volunteers",
      category: "Volunteer Services",
      description: "Friendly visiting, mentoring, caregiver respite, volunteer placement",
      town: "Ridgewood / Countywide",
      address: "Countywide volunteer organization",
      phone: "Contact via website",
      website: "https://bergenvolunteers.org",
      hours: "Contact for availability",
      eligibility: "Older adults, homebound, volunteers",
      fees: "Free",
      icon: "🤝",
    },
    {
    
      id: 5,
      name: "Jewish Family & Children's Services of Northern NJ",
      category: "Social Services",
      description: "Counseling, elder support, homecare services, and community-based social programs",
      town: "Teaneck / Paramus / Regional",
      address: "1485 Teaneck Rd, Teaneck, NJ 07666",
      phone: "(201) 837-9090",
      website: "https://www.jfcsnnj.org",
      hours: "Varies by program",
      eligibility: "Community members",
      fees: "Sliding scale / insurance accepted",
      icon: "💙",
    },
    {
      id: 6,
      name: "Meals on Wheels of North Jersey",
      category: "Senior Services",
      description: "Home-delivered meals for homebound seniors",
      town: "Countywide",
      address: "Meal delivery across multiple counties",
      phone: "Contact via website",
      website: "https://www.mealsonwheelsnj.org",
      hours: "Daily deliveries",
      eligibility: "Homebound seniors",
      fees: "Suggested donation",
      icon: "🍱",
    },
    {

      id: 7,
      name: "Habitat for Humanity of Bergen & Passaic",
      category: "Housing",
      description: "Affordable home builds, home repairs, and homeowner education programs",
      town: "Westwood / Regional",
      address: "121 Carver Ave, Westwood, NJ 07675",
      phone: "(201) 457-1020",
      website: "https://www.habitatbergen.org",
      hours: "Office hours vary (call to confirm)",
      eligibility: "Low-income qualifying families",
      fees: "Affordable mortgage model",
      icon: "🔨",
    },
    {
      id: 8,
      name: "United Way of Northern New Jersey",
      category: "Referral Services",
      description: "Community initiatives, 211 referrals, fundraising",
      town: "Regional (serves Bergen)",
      address: "Serves northern NJ",
      phone: "Dial 211",
      website: "https://unitedwaynnj.org",
      hours: "211 available 24/7",
      eligibility: "Community-wide",
      fees: "Varies by program",
      icon: "📞",
    },
    {
      
      id: 9,
      name: "Center for Hope & Safety",
      category: "Domestic Violence Services",
      description: "24/7 domestic violence crisis shelter, legal advocacy, and counseling",
      town: "Bergen County",
      address: "10-12 Fair Lawn Ave, Fair Lawn, NJ 07410",
      phone: "(201) 794-8894",
      website: "https://www.hopeandsafetynj.org",
      hours: "24/7 crisis line; office hours vary",
      eligibility: "Survivors of domestic violence",
      fees: "Free",
      icon: "🛡️",
    },
        {
      id: 10,
      name: "Eva's Village",
      category: "Homeless Services",
      description: "Emergency shelter, meals, job training, counseling, and recovery programs",
      town: "Paterson (serves region)",
      address: "393 Main St, Paterson, NJ 07501",
      phone: "(973) 523-6220",
      website: "https://www.evasvillage.org",
      hours: "Hours vary by service",
      eligibility: "Individuals experiencing homelessness",
      fees: "Free or subsidized",
      icon: "🏚️",
    },
    {
      id: 11,
      name: "St. Cecilia's Food Pantry",
      category: "Food & Social Services",
      description: "Food distribution to local residents",
      town: "Englewood",
      address: "Englewood, NJ",
      phone: "Contact church office",
      website: "Contact for information",
      hours: "Verify hours with church",
      eligibility: "Residents of Englewood area",
      fees: "Free",
      icon: "🍞",
    },
    {
      id: 12,
      name: "Ridgewood Fish Food Pantry",
      category: "Food & Social Services",
      description: "Emergency food assistance",
      town: "Ridgewood",
      address: "Ridgewood, NJ",
      phone: "Contact for information",
      website: "Contact for information",
      hours: "Confirm schedule",
      eligibility: "Local residents",
      fees: "Free",
      icon: "🥫",
    },
    {
      id: 13,
      name: "Social Service Association of Ridgewood",
      category: "Social Services",
      description: "Emergency assistance, food pantry, casework",
      town: "Ridgewood",
      address: "Ridgewood and vicinity",
      phone: "Contact for information",
      website: "Contact for information",
      hours: "Check for hours",
      eligibility: "Local residents",
      fees: "Free or sliding scale",
      icon: "🤲",
    },
    {
      id: 14,
      name: "Oasis – A Haven for Women & Children",
      category: "Shelter & Housing",
      description: "Shelter and services for women and children",
      town: "Regional",
      address: "Regional services",
      phone: "Contact for information",
      website: "Contact for information",
      hours: "24/7 services",
      eligibility: "Survivors and at-risk families",
      fees: "Free",
      icon: "🌸",
    },
    {
      id: 15,
      name: "Goodwill NY/NJ",
      category: "Employment Services",
      description: "Job training, employment placement, career services",
      town: "Paramus / Multiple",
      address: "Multiple locations",
      phone: "Contact via website",
      website: "https://www.goodwillnynj.org",
      hours: "Varies by location",
      eligibility: "Job seekers",
      fees: "Often free",
      icon: "💼",
    },
    {
      id: 16,
      name: "YWCA Northern New Jersey",
      category: "Childcare & Support",
      description: "Childcare, sexual violence services (healingSPACE), youth and wellness programs",
      town: "Hackensack / Regional",
      address: "214 State Street, Suite 207, Hackensack, NJ 07601",
      phone: "(201) 881-1700",
      website: "https://ywcannj.org",
      hours: "Office hours vary by program",
      eligibility: "Women, families, and children",
      fees: "Varies by program",
      icon: "👶",
    },
    {
      id: 17,
      name: "Cerebral Palsy of NJ",
      category: "Disability Services",
      description: "Services for individuals with CP and disabilities",
      town: "Regional",
      address: "Regional programs",
      phone: "Contact via website",
      website: "https://www.cpnj.org",
      hours: "Contact for services",
      eligibility: "People with disabilities",
      fees: "Varies by program",
      icon: "♿",
    },
    {
      id: 18,
      name: "Habitat ReStore",
      category: "Volunteer Services",
      description: "Retail resale to fund builds, volunteer opportunities",
      town: "Regional",
      address: "Check local affiliate",
      phone: "Contact via website",
      website: "https://www.habitat.org/restores",
      hours: "Store hours vary",
      eligibility: "Public shoppers & volunteers",
      fees: "Retail prices",
      icon: "🛠️",
    },
    {
      id: 19,
      name: "Bergen New Bridge Medical Center",
      category: "Community Services",
      description: "Hospital services including emergency & behavioral health",
      town: "Paramus",
      address: "230 E Ridgewood Ave, Paramus, NJ 07652",
      phone: "(201) 967-4000",
      website: "https://www.newbridgehealth.org",
      hours: "24/7 emergency",
      eligibility: "All patients",
      fees: "Insurance / self-pay",
      icon: "🏥",
  },
  {
      id: 20,
      name: "Valley Hospital",
      category: "Community Services",
      description: "Full-service hospital & emergency department",
      town: "Paramus",
      address: "4 Valley Health Plaza, Paramus, NJ 07652",
      phone: "(201) 447-8000",
      website: "https://www.valleyhealth.com",
      hours: "24/7",
      eligibility: "All patients",
      fees: "Insurance / self-pay",
      icon: "🏥",
  },
  {
    id: 21,
    name: "Englewood Health",
    category: "Community Services",
    description: "Acute care hospital & outpatient services",
    town: "Englewood",
    address: "350 Engle St, Englewood, NJ 07631",
    phone: "(201) 894-3000",
    website: "https://www.englewoodhealth.org",
    hours: "24/7",
    eligibility: "All patients",
    fees: "Insurance / self-pay",
    icon: "🏥",
  },

  {
    id: 22, 
    name: "CarePlus NJ",
    category: "Community Services",
    description: "Behavioral health & outpatient mental health services",
    town: "Paramus / Englewood",
    address: "Multiple locations",
    phone: "(201) 265-8200",
    website: "https://www.careplusnj.org",
    hours: "Varies by clinic",
    eligibility: "Residents needing behavioral health services",
    fees: "Insurance / sliding scale",
    icon: "🧠",
  },
  {
    id: 23,
    name: "Bergen County Food Security Task Force",
    category: "Food & Social Services",
    description: "Coordinates countywide food banks & pantries",
    town: "Hackensack / Countywide",
    address: "One Bergen County Plaza, Hackensack, NJ",
    phone: "(201) 336-7400",
    website: "https://bergenfightshunger.org",
    hours: "Office weekdays",
    eligibility: "Residents facing food insecurity",
    fees: "Free",
    icon: "🥫",
  },
  {
    id: 24,
    name: "Vantage Health System",
    category: "Community Services",
    description: "Mental health counseling & addiction services",
    town: "Englewood / Dumont",
    address: "93 W Palisade Ave, Englewood, NJ 07631",
    phone: "(201) 567-0059",
    website: "https://www.vantagenj.org",
    hours: "Mon–Fri 8:30am–5pm",
    eligibility: "Individuals with mental health needs",
    fees: "Medicaid / sliding scale",
    icon: "🧠",
  },

  {
    id: 25,
    name: "The Food Brigade",
    category: "Food & Social Services",
    description: "Free client-choice community market in a grocery store setting",
    town: "Dumont",
    address: "185 W Madison Ave, Dumond, NJ 07628",
    phone: "(201) 614-4414",
    website: "https://foodbrigade.org",
    hours: "Open by appoinment only",
    eligibility: "Must meet income eligibility shown on website",
    fees: "Free",
    icon: ""
  }
  ];

  // Add ratings to resources
  const resourcesWithRatings = resources.map(resource => ({
    ...resource,
    averageRating: getAverageRating(resource.id),
    reviewCount: (reviews[resource.id] || []).length,
  }));

  // Filter resources
  const filteredResources = resourcesWithRatings.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.town.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get top rated resources for leaderboard
  const topRatedResources = [...resourcesWithRatings]
    .filter(r => r.reviewCount > 0)
    .sort((a, b) => {
      if (b.averageRating !== a.averageRating) {
        return b.averageRating - a.averageRating;
      }
      return b.reviewCount - a.reviewCount;
    })
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">Bergen County Resources</h1>
          <p className="text-xl text-mint">
            Discover local services and support programs in your community
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`section-container transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Main Content */}
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Resource Grid */}
          <div className="flex-1">
            <div className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-neutral-medium">
                Showing {filteredResources.length} of {resources.length}{" "}
                resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <div
                  key={resource.id}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <ResourceCard resource={resource} reviews={reviews} setReviews={setReviews} />
                </div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-neutral-medium">
                  No resources found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      {topRatedResources.length > 0 && (
        <div className="section-container bg-white">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2">🏆 Top Rated Resources</h2>
                <p className="text-lg text-neutral-medium">Highly recommended by our community</p>
              </div>
              <Link
                href="/leaderboard"
                className="hidden md:inline-flex items-center text-forest-dark font-semibold hover:text-sage transition-colors"
              >
                View Full Leaderboard
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRatedResources.slice(0, 6).map((resource, index) => (
                <div
                  key={resource.id}
                  className="bg-mint-bg border border-sage/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 
                        index === 2 ? 'bg-orange-600' : 
                        'bg-sage'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-dark mb-2">{resource.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.round(resource.averageRating) ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-neutral-dark">
                          {resource.averageRating.toFixed(1)}
                        </span>
                        <span className="text-sm text-neutral-medium">
                          ({resource.reviewCount} {resource.reviewCount === 1 ? 'review' : 'reviews'})
                        </span>
                      </div>
                      <p className="text-sm text-neutral-medium mb-2">{resource.town}</p>
                      <span className="inline-block bg-white px-2 py-1 rounded text-xs font-medium text-forest-dark">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                href="/leaderboard"
                className="inline-flex items-center text-forest-dark font-semibold hover:text-sage transition-colors"
              >
                View Full Leaderboard
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}