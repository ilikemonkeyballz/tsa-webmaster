"use client";

import { useEffect, useRef, useState } from "react";

const MAP_RESOURCES = [
  { id: 1, name: "Center for Food Action (CFA)", category: "Food & Social Services", address: "316 First St, Hackensack, NJ", phone: "(201) 883-9375", website: "https://cfanj.org", hours: "By appointment; varies by site", fees: "Free", lat: 40.8860, lng: -74.0435, icon: "/icons/open-graph-new-image-1-removebg-preview.png" },
  { id: 2, name: "Family Promise of Bergen County", category: "Shelter & Housing", address: "100 Dayton St, Ridgewood, NJ", phone: "(201) 833-8009", website: "https://www.bergenfamilypromise.org", hours: "Dinner daily 4:45–5:50pm", fees: "Free", lat: 40.9793, lng: -74.1151, icon: "/icons/familypromise-removebg-preview.png" },
  { id: 3, name: "Greater Bergen Community Action", category: "Community Services", address: "392 Main Street, Hackensack, NJ", phone: "(201) 968-0200", website: "https://www.greaterbergen.org", hours: "Mon–Fri 9am–5pm", fees: "Free or income-based", lat: 40.8876, lng: -74.0431, icon: "/icons/3_GreaterBergenCommAct.png" },
  { id: 4, name: "Bergen Volunteers", category: "Volunteer Services", address: "64 Passaic St, Hackensack, NJ", phone: "(201) 489-9696", website: "https://bergenvolunteers.org", hours: "Contact for availability", fees: "Free", lat: 40.8858, lng: -74.0467, icon: "/icons/4 - bergen volunteers.png" },
  { id: 5, name: "Jewish Family & Children's Services", category: "Social Services", address: "1485 Teaneck Rd, Teaneck, NJ", phone: "(201) 837-9090", website: "https://www.jfcsnnj.org", hours: "Varies by program", fees: "Sliding scale", lat: 40.8887, lng: -74.0143, icon: "/icons/5 - jewish family children services.png" },
  { id: 7, name: "Habitat for Humanity Bergen & Passaic", category: "Housing", address: "121 Carver Ave, Westwood, NJ", phone: "(201) 457-1020", website: "https://www.habitatbergen.org", hours: "Office hours vary", fees: "Affordable mortgage model", lat: 41.0026, lng: -74.0310, icon: "/icons/7 - habitat for humanity.png" },
  { id: 9, name: "Center for Hope & Safety", category: "Domestic Violence Services", address: "10-12 Fair Lawn Ave, Fair Lawn, NJ", phone: "(201) 794-8894", website: "https://www.hopeandsafetynj.org", hours: "24/7 crisis line", fees: "Free", lat: 40.9401, lng: -74.1179, icon: "/icons/9 - center for hope.png" },
  { id: 10, name: "Eva's Village", category: "Homeless Services", address: "393 Main St, Paterson, NJ", phone: "(973) 523-6220", website: "https://www.evasvillage.org", hours: "Hours vary by service", fees: "Free or subsidized", lat: 40.9176, lng: -74.1719, icon: "/icons/10 - eva's village.png" },
  { id: 15, name: "Goodwill NY/NJ", category: "Employment Services", address: "700 Paramus Park, Paramus, NJ", phone: "Contact via website", website: "https://www.goodwillnynj.org", hours: "Varies by location", fees: "Often free", lat: 40.9448, lng: -74.0706, icon: "/icons/15 - goodwill.png" },
  { id: 16, name: "YWCA Northern New Jersey", category: "Childcare & Support", address: "214 State Street, Hackensack, NJ", phone: "(201) 881-1700", website: "https://ywcannj.org", hours: "Office hours vary by program", fees: "Varies", lat: 40.8878, lng: -74.0445, icon: "/icons/16 - ywca.png" },
  { id: 19, name: "Bergen New Bridge Medical Center", category: "Community Services", address: "230 E Ridgewood Ave, Paramus, NJ", phone: "(201) 967-4000", website: "https://www.newbridgehealth.org", hours: "24/7 emergency", fees: "Insurance / self-pay", lat: 40.9600, lng: -74.0730, icon: "/icons/19 - bergen new bridge.png" },
  { id: 20, name: "Valley Hospital", category: "Community Services", address: "4 Valley Health Plaza, Paramus, NJ", phone: "(201) 447-8000", website: "https://www.valleyhealth.com", hours: "24/7", fees: "Insurance / self-pay", lat: 40.9512, lng: -74.0693, icon: "/icons/20 - valley health.png" },
  { id: 21, name: "Englewood Health", category: "Community Services", address: "350 Engle St, Englewood, NJ", phone: "(201) 894-3000", website: "https://www.englewoodhealth.org", hours: "24/7", fees: "Insurance / self-pay", lat: 40.8934, lng: -73.9726, icon: "/icons/21 - englewood health.png" },
  { id: 22, name: "CarePlus NJ", category: "Community Services", address: "610 Valley Health Plaza, Paramus, NJ", phone: "(201) 265-8200", website: "https://www.careplusnj.org", hours: "Varies by clinic", fees: "Insurance / sliding scale", lat: 40.9448, lng: -74.0740, icon: "/icons/22 - careplus.png" },
  { id: 24, name: "Vantage Health System", category: "Community Services", address: "93 W Palisade Ave, Englewood, NJ", phone: "(201) 567-0059", website: "https://www.vantagenj.org", hours: "Mon–Fri 8:30am–5pm", fees: "Medicaid / sliding scale", lat: 40.8929, lng: -73.9737, icon: "/icons/24 - vantage health.png" },
  { id: 25, name: "The Food Brigade", category: "Food & Social Services", address: "185 W Madison Ave, Dumont, NJ", phone: "(201) 614-4414", website: "https://foodbrigade.org", hours: "By appointment only", fees: "Free", lat: 40.9437, lng: -73.9957, icon: "/icons/25 - food brigade.png" },
  { id: 26, name: "ACAP Bergen County", category: "Senior Services", address: "116 E Century Rd, Paramus, NJ", phone: "(201) 677-8650", website: "https://acapcommunity.org", hours: "2nd Monday monthly at 6pm", fees: "Free", lat: 40.9443, lng: -74.0742, icon: "/icons/26 - acap.png" },
  { id: 29, name: "Housing Authority of Bergen County", category: "Housing", address: "1 Bergen County Plaza, Hackensack, NJ", phone: "(201) 336-7600", website: "https://habcnj.org", hours: "Mon–Fri 8:30am–4:30pm", fees: "Income-based rent", lat: 40.8837, lng: -74.0416, icon: "/icons/29 - habc.png" },
  { id: 30, name: "Bergen County Job Center", category: "Employment Services", address: "60 State Street, Hackensack, NJ", phone: "(201) 329-9600", website: "https://bergenjobcenter.com", hours: "Mon–Fri 8am–4:30pm", fees: "Free", lat: 40.8891, lng: -74.0408, icon: "/icons/30 - bc job center.png" },
  { id: 31, name: "Project SEARCH – Friendship House", category: "Disability Services", address: "496 Kinderkamack Rd, Oradell, NJ", phone: "(201) 488-2121", website: "https://njfriendshiphouse.org", hours: "Contact for schedule", fees: "DDD-funded or self-pay", lat: 40.9554, lng: -74.0363, icon: "/icons/31 - project search.png" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Food & Social Services": "#4CAF50",
  "Shelter & Housing": "#2196F3",
  "Community Services": "#9C27B0",
  "Social Services": "#FF9800",
  "Senior Services": "#795548",
  "Employment Services": "#607D8B",
  "Volunteer Services": "#00BCD4",
  "Domestic Violence Services": "#E91E63",
  "Homeless Services": "#FF5722",
  "Childcare & Support": "#FFC107",
  "Disability Services": "#009688",
  "Housing": "#8BC34A",
};

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedResource, setSelectedResource] = useState<(typeof MAP_RESOURCES)[0] | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      const L = (window as any).L;
      const map = L.map(mapRef.current, { center: [40.9176, -74.0593], zoom: 12 });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);
      leafletMap.current = map;
      setMapLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      if (leafletMap.current) { leafletMap.current.remove(); leafletMap.current = null; }
    };
  }, []);

  // Update markers on filter change
  useEffect(() => {
    if (!mapLoaded || !leafletMap.current) return;
    const L = (window as any).L;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    const filtered = MAP_RESOURCES.filter((r) => {
      const catMatch = selectedCategory === "All" || r.category === selectedCategory;
      const searchMatch = !searchTerm || r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.category.toLowerCase().includes(searchTerm.toLowerCase());
      return catMatch && searchMatch;
    });

    filtered.forEach((resource) => {
      const color = CATEGORY_COLORS[resource.category] || "#666";
      const icon = L.divIcon({
        html: `<div style="background:${color};color:white;width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3)"><span style="transform:rotate(45deg);font-size:16px">${resource.icon}</span></div>`,
        className: "", iconSize: [36, 36], iconAnchor: [18, 36], popupAnchor: [0, -40],
      });

      const marker = L.marker([resource.lat, resource.lng], { icon })
        .addTo(leafletMap.current)
        .bindPopup(`
          <div style="min-width:220px;font-family:sans-serif">
            <div style="background:${color};color:white;margin:-12px -12px 8px;padding:10px 12px;border-radius:4px 4px 0 0">
              <strong style="font-size:13px">${resource.icon} ${resource.name}</strong>
            </div>
            <span style="display:inline-block;background:#e8f5e9;color:#2e7d32;font-size:11px;padding:2px 8px;border-radius:12px;margin-bottom:6px">${resource.category}</span>
            <p style="font-size:12px;color:#555;margin:4px 0">📍 ${resource.address}</p>
            <p style="font-size:12px;color:#555;margin:4px 0">📞 ${resource.phone}</p>
            <p style="font-size:12px;color:#555;margin:4px 0">🕒 ${resource.hours}</p>
            <p style="font-size:12px;color:#555;margin:4px 0">💰 ${resource.fees}</p>
            ${resource.website.startsWith("http") ? `<a href="${resource.website}" target="_blank" rel="noopener" style="display:block;margin-top:8px;text-align:center;background:#2d6a4f;color:white;padding:6px;border-radius:4px;font-size:12px;text-decoration:none">Visit Website →</a>` : ""}
          </div>
        `, { maxWidth: 260 });

      marker.on("click", () => setSelectedResource(resource));
      markersRef.current.push(marker);
    });
  }, [mapLoaded, selectedCategory, searchTerm]);

  const flyTo = (resource: (typeof MAP_RESOURCES)[0]) => {
    if (!leafletMap.current) return;
    leafletMap.current.flyTo([resource.lat, resource.lng], 16, { duration: 1 });
    setSelectedResource(resource);
    const marker = markersRef.current.find((m) => {
      const ll = m.getLatLng();
      return Math.abs(ll.lat - resource.lat) < 0.0001 && Math.abs(ll.lng - resource.lng) < 0.0001;
    });
    if (marker) setTimeout(() => marker.openPopup(), 1100);
  };

  const filteredList = MAP_RESOURCES.filter((r) => {
    const catMatch = selectedCategory === "All" || r.category === selectedCategory;
    const searchMatch = !searchTerm || r.name.toLowerCase().includes(searchTerm.toLowerCase()) || r.category.toLowerCase().includes(searchTerm.toLowerCase());
    return catMatch && searchMatch;
  });

  const allCategories = ["All", ...Object.keys(CATEGORY_COLORS)];

  return (
    <div className="min-h-screen bg-beige">
      <div className={`bg-gradient-to-r from-forest-dark to-forest-medium text-white py-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="section-container">
          <h1 className="text-5xl font-bold mb-4">🗺️ Resource Map</h1>
          <p className="text-xl text-mint">Find community resources near you across Bergen County</p>
          <p className="text-sm text-seafoam mt-2">{MAP_RESOURCES.length} organizations mapped • Click any pin for details</p>
        </div>
      </div>

      <div className="section-container">
        {/* Search + filter bar */}
        <div className={`bg-white rounded-2xl shadow-md p-4 mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="🔍 Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-light/30 rounded-lg outline-none focus:border-forest-medium focus:ring-2 focus:ring-forest-medium/20"
            />
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                    selectedCategory === cat
                      ? "text-white shadow-md border-transparent"
                      : "bg-white text-neutral-dark border-neutral-light/40 hover:border-forest-medium"
                  }`}
                  style={selectedCategory === cat ? { backgroundColor: cat === "All" ? "#2d6a4f" : CATEGORY_COLORS[cat] } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Map + Sidebar */}
        <div className={`flex flex-col lg:flex-row gap-6 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Map */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: "580px", position: "relative" }}>
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-mint-bg z-10">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🗺️</div>
                    <p className="text-forest-dark font-semibold">Loading map...</p>
                    <p className="text-sm text-neutral-medium mt-1">Fetching OpenStreetMap tiles</p>
                  </div>
                </div>
              )}
              <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
            </div>

            {/* Legend */}
            <div className="bg-white rounded-xl p-4 mt-4 shadow-md">
              <h3 className="text-sm font-bold text-neutral-dark mb-3">Category Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                  <div key={cat} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-xs text-neutral-dark">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar list */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: "580px" }}>
              <div className="p-4 bg-forest-medium text-white flex-shrink-0">
                <h3 className="font-bold text-lg">{filteredList.length} Resources</h3>
                <p className="text-mint text-sm">Click a row to fly to it on the map</p>
              </div>
              <div className="overflow-y-auto flex-1">
                {filteredList.length === 0 ? (
                  <div className="p-8 text-center text-neutral-medium">No resources match your search.</div>
                ) : (
                  filteredList.map((resource) => (
                    <button
                      key={resource.id}
                      onClick={() => flyTo(resource)}
                      className={`w-full text-left p-4 border-b border-neutral-light/20 hover:bg-mint-bg transition-colors ${selectedResource?.id === resource.id ? "bg-mint-bg border-l-4 border-l-forest-medium" : ""}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm" style={{ backgroundColor: CATEGORY_COLORS[resource.category] || "#666" }}>
                          {resource.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-neutral-dark leading-tight">{resource.name}</p>
                          <p className="text-xs text-neutral-medium mt-0.5">{resource.category}</p>
                          <p className="text-xs text-neutral-medium truncate">{resource.address}</p>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}