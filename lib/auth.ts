export interface User {
  name: string;
  email: string;
  newsletters: number[];
  volunteerSignups: VolunteerSignup[];
}

export interface VolunteerSignup {
  eventId: number;
  signedUpAt: string;
  status: "confirmed" | "waitlist";
  hoursLogged: number;
  waitlistPosition?: number;
}

export const AUTH_KEY = "communityHubUser";
export const AUTH_CHANGE_EVENT = "authStateChanged";
export const VOLUNTEER_DATA_KEY = "volunteerEventData";

export interface EventVolunteerData {
  confirmed: string[];
  waitlist: string[];
}

export const notifyAuthChange = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
};

export const saveUser = (user: User) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  notifyAuthChange();
};

export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem(AUTH_KEY);
  if (!saved) return null;
  const user = JSON.parse(saved) as User;
  if (!user.volunteerSignups) user.volunteerSignups = [];
  return user;
};

export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
  notifyAuthChange();
};

export const subscribeToNewsletter = (resourceId: number) => {
  const user = getUser();
  if (!user) return false;
  if (!user.newsletters.includes(resourceId)) {
    user.newsletters.push(resourceId);
    saveUser(user);
  }
  return true;
};

export const unsubscribeFromNewsletter = (resourceId: number) => {
  const user = getUser();
  if (!user) return false;
  user.newsletters = user.newsletters.filter((id) => id !== resourceId);
  saveUser(user);
  return true;
};

export const isSubscribedTo = (resourceId: number): boolean => {
  const user = getUser();
  if (!user) return false;
  return user.newsletters.includes(resourceId);
};

export const getEventVolunteerData = (eventId: number): EventVolunteerData => {
  if (typeof window === "undefined") return { confirmed: [], waitlist: [] };
  const raw = localStorage.getItem(`${VOLUNTEER_DATA_KEY}_${eventId}`);
  if (!raw) return { confirmed: [], waitlist: [] };
  return JSON.parse(raw);
};

export const saveEventVolunteerData = (eventId: number, data: EventVolunteerData) => {
  localStorage.setItem(`${VOLUNTEER_DATA_KEY}_${eventId}`, JSON.stringify(data));
};

export const getVolunteerCounts = (
  eventId: number,
  capacity: number
): { confirmed: number; waitlist: number; spotsLeft: number } => {
  const data = getEventVolunteerData(eventId);
  return {
    confirmed: data.confirmed.length,
    waitlist: data.waitlist.length,
    spotsLeft: Math.max(0, capacity - data.confirmed.length),
  };
};

export const signUpForEvent = (
  eventId: number,
  capacity: number
): "confirmed" | "waitlist" | "already_signed_up" | "not_logged_in" => {
  const user = getUser();
  if (!user) return "not_logged_in";

  const existing = user.volunteerSignups.find((s) => s.eventId === eventId);
  if (existing) return "already_signed_up";

  const data = getEventVolunteerData(eventId);
  let status: "confirmed" | "waitlist";
  let waitlistPosition: number | undefined;

  if (data.confirmed.length < capacity) {
    data.confirmed.push(user.email);
    status = "confirmed";
  } else {
    data.waitlist.push(user.email);
    status = "waitlist";
    waitlistPosition = data.waitlist.length;
  }

  saveEventVolunteerData(eventId, data);

  user.volunteerSignups.push({
    eventId,
    signedUpAt: new Date().toISOString(),
    status,
    hoursLogged: 0,
    waitlistPosition,
  });
  saveUser(user);
  return status;
};

export const cancelEventSignup = (eventId: number): boolean => {
  const user = getUser();
  if (!user) return false;

  const signup = user.volunteerSignups.find((s) => s.eventId === eventId);
  if (!signup) return false;

  const data = getEventVolunteerData(eventId);

  if (signup.status === "confirmed") {
    data.confirmed = data.confirmed.filter((e) => e !== user.email);
    if (data.waitlist.length > 0) {
      const promoted = data.waitlist.shift()!;
      data.confirmed.push(promoted);
    }
  } else {
    data.waitlist = data.waitlist.filter((e) => e !== user.email);
  }

  saveEventVolunteerData(eventId, data);
  user.volunteerSignups = user.volunteerSignups.filter((s) => s.eventId !== eventId);
  saveUser(user);
  return true;
};

export const logVolunteerHours = (eventId: number, hours: number): boolean => {
  const user = getUser();
  if (!user) return false;
  const signup = user.volunteerSignups.find((s) => s.eventId === eventId);
  if (!signup) return false;
  signup.hoursLogged = Math.max(0, hours);
  saveUser(user);
  return true;
};

export const getTotalHoursLogged = (): number => {
  const user = getUser();
  if (!user) return 0;
  return user.volunteerSignups.reduce((sum, s) => sum + (s.hoursLogged || 0), 0);
};