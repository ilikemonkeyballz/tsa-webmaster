export interface User {
  name: string;
  email: string;
  newsletters: number[]; // Array of resource IDs user is subscribed to
}

export const AUTH_KEY = 'communityHubUser';

// Event to notify components when auth state changes
export const AUTH_CHANGE_EVENT = 'authStateChanged';

export const notifyAuthChange = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
};

export const saveUser = (user: User) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  notifyAuthChange();
};

export const getUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(AUTH_KEY);
  return saved ? JSON.parse(saved) : null;
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
  
  user.newsletters = user.newsletters.filter(id => id !== resourceId);
  saveUser(user);
  return true;
};

export const isSubscribedTo = (resourceId: number): boolean => {
  const user = getUser();
  if (!user) return false;
  return user.newsletters.includes(resourceId);
};