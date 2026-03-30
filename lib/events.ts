export interface CommunityEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  category: string;
  organizer: string;
  organizerKey: string;
  location: string;
  description: string;
  color: string;
  capacity: number; // max volunteers
  volunteersNeeded: boolean;
}

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 1,
    title: "Community Health Fair",
    date: new Date(2026, 0, 15),
    time: "10:00 AM - 3:00 PM",
    category: "healthcare",
    organizer: "Bergen Medical Center",
    organizerKey: "medical",
    location: "Bergen Community Center",
    description: "Free health screenings and vaccinations",
    color: "bg-ocean-light",
    capacity: 20,
    volunteersNeeded: true,
  },
  {
    id: 2,
    title: "Free Dental Clinic",
    date: new Date(2026, 0, 18),
    time: "8:00 AM - 4:00 PM",
    category: "healthcare",
    organizer: "Bergen Medical Center",
    organizerKey: "medical",
    location: "Hackensack Medical Plaza",
    description: "Complimentary dental checkups and cleanings",
    color: "bg-ocean-light",
    capacity: 10,
    volunteersNeeded: true,
  },
  {
    id: 3,
    title: "Mental Health Support Group",
    date: new Date(2026, 0, 20),
    time: "6:30 PM - 8:00 PM",
    category: "healthcare",
    organizer: "Bergen Medical Center",
    organizerKey: "medical",
    location: "Community Wellness Center",
    description: "Open support group with licensed counselors",
    color: "bg-ocean-light",
    capacity: 15,
    volunteersNeeded: false,
  },
  {
    id: 4,
    title: "Job Skills Workshop",
    date: new Date(2026, 0, 22),
    time: "6:00 PM - 8:00 PM",
    category: "employment",
    organizer: "Greater Bergen Community Action",
    organizerKey: "gbca",
    location: "Adult Learning Center",
    description: "Resume building and interview prep",
    color: "bg-forest-medium",
    capacity: 25,
    volunteersNeeded: true,
  },
  {
    id: 5,
    title: "Community Meal Program",
    date: new Date(2026, 0, 25),
    time: "5:00 PM - 7:00 PM",
    category: "food",
    organizer: "Center for Food Action",
    organizerKey: "cfa",
    location: "Bergen Community Kitchen",
    description: "Free hot meals for community members",
    color: "bg-sage",
    capacity: 30,
    volunteersNeeded: true,
  },
  {
    id: 6,
    title: "Food Distribution Day",
    date: new Date(2026, 0, 28),
    time: "9:00 AM - 12:00 PM",
    category: "food",
    organizer: "Center for Food Action",
    organizerKey: "cfa",
    location: "Community Food Bank",
    description: "Monthly food distribution for families",
    color: "bg-sage",
    capacity: 40,
    volunteersNeeded: true,
  },
  {
    id: 7,
    title: "Career Fair & Job Expo",
    date: new Date(2026, 1, 5),
    time: "10:00 AM - 3:00 PM",
    category: "employment",
    organizer: "Greater Bergen Community Action",
    organizerKey: "gbca",
    location: "Bergen County Convention Center",
    description: "Meet with 50+ employers",
    color: "bg-forest-medium",
    capacity: 50,
    volunteersNeeded: true,
  },
  {
    id: 8,
    title: "Senior Flu Shot Clinic",
    date: new Date(2026, 1, 8),
    time: "9:00 AM - 1:00 PM",
    category: "healthcare",
    organizer: "Bergen Medical Center",
    organizerKey: "medical",
    location: "Senior Center of Bergen County",
    description: "Free flu vaccinations for seniors 65+",
    color: "bg-ocean-light",
    capacity: 15,
    volunteersNeeded: true,
  },
  {
    id: 9,
    title: "Housing Resource Fair",
    date: new Date(2026, 1, 12),
    time: "1:00 PM - 5:00 PM",
    category: "housing",
    organizer: "Greater Bergen Community Action",
    organizerKey: "gbca",
    location: "Hackensack Community Center",
    description: "Learn about affordable housing options",
    color: "bg-ocean-dark",
    capacity: 20,
    volunteersNeeded: true,
  },
  {
    id: 10,
    title: "Adult Education Open House",
    date: new Date(2026, 1, 15),
    time: "10:00 AM - 2:00 PM",
    category: "education",
    organizer: "Greater Bergen Community Action",
    organizerKey: "gbca",
    location: "Adult Learning Center",
    description: "Explore GED and ESL programs",
    color: "bg-forest-light",
    capacity: 30,
    volunteersNeeded: false,
  },
];

// Category display info
export const EVENT_CATEGORIES = [
  { value: "all", label: "All Categories", color: "bg-neutral-light" },
  { value: "healthcare", label: "Healthcare", color: "bg-ocean-light" },
  { value: "employment", label: "Employment", color: "bg-forest-medium" },
  { value: "food", label: "Food Programs", color: "bg-sage" },
  { value: "housing", label: "Housing", color: "bg-ocean-dark" },
  { value: "education", label: "Education", color: "bg-forest-light" },
];

export const getCategoryColor = (category: string): string => {
  const cat = EVENT_CATEGORIES.find((c) => c.value === category);
  return cat?.color || "bg-neutral-light";
};