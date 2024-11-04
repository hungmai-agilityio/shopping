import { create } from 'zustand';
// Storage action
import { clearUserCookie, getCurrentUser, setUserCookie } from '@/stores/actions/user';

// Interfaces
import { IUser } from '@/interfaces';


interface UserState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: getCurrentUser(),
  setUser: (user) => {
    set({ user });
    if (user) {
      setUserCookie(user);
    }
  },
  clearUser: () => {
    set({ user: null });
    clearUserCookie();
  }
}));
