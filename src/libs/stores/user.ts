import { create } from 'zustand';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

// Constants
import { KEY } from '@/constants';

// Interfaces
import { IUser } from '@/interfaces';

interface UserState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: getCookie(KEY.USER)
    ? (JSON.parse(getCookie(KEY.USER) as string) as IUser)
    : null,
  setUser: (user) => {
    set({ user });
    if (user) {
      setCookie(KEY.USER, JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    }
  },
  clearUser: () => {
    set({ user: null });
    deleteCookie(KEY.USER);
  }
}));
