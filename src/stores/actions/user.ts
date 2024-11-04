import { deleteCookie, getCookie, setCookie } from "cookies-next";

// Constants
import { KEY } from "@/constants";

// Interfaces
import { IUser } from "@/interfaces";


// Get current user in cookies storage
export const getCurrentUser = (): IUser | null => {
  const userCookie = getCookie(KEY.USER);

  if (userCookie) {
    return JSON.parse(userCookie as string) as IUser;
  }

  return null;
};

// Set the current user in a cookie
export const setUserCookie = (user: object) => {
  setCookie(KEY.USER, JSON.stringify(user), {
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });
};

// Clear current user from cookie
export const clearUserCookie = () => {
  deleteCookie(KEY.USER);
};