export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  const categories = [
    { name: "All Resources", value: "all", icon: "/icons/resource-allocation.png" },
    { name: "Food & Social Services", value: "Food & Social Services", icon: "/icons/restaurant.png" },
    { name: "Shelter & Housing", value: "Shelter & Housing", icon: "/icons/house.png" },
    { name: "Social Services", value: "Social Services", icon: "/icons/public-service.png" },
    { name: "Community Services", value: "Community Services", icon: "/icons/public-health.png" },
    { name: "Senior Services", value: "Senior Services", icon: "/icons/aged.png" },
    { name: "Employment Services", value: "Employment Services", icon: "/icons/job-seeker.png" },
    { name: "Volunteer Services", value: "Volunteer Services", icon: "/icons/volunteer.png" },
    { name: "Referral Services", value: "Referral Services", icon: "/icons/viber.png" },
    { name: "Domestic Violence Services", value: "Domestic Violence Services", icon: "/icons/stop-violence.png" },
    { name: "Homeless Services", value: "Homeless Services", icon: "/icons/house.png" },
    { name: "Childcare & Support", value: "Childcare & Support", icon: "/icons/baby-boy.png" },
    { name: "Disability Services", value: "Disability Services", icon: "/icons/disabled.png" },
  ];

  return (
    <div className="lg:w-72 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center text-sm ${
                selectedCategory === category.value
                  ? "bg-[#B3D89C] text-gray-900 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="mr-3 text-lg">
                {category.icon.startsWith('/') || category.icon.startsWith('http') ? (
                  <img 
                    src={category.icon} 
                    alt={category.name}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  category.icon
                )}
              </span>
              
              <span className="line-clamp-1">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}