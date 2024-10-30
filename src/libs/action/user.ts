import bcrypt from 'bcryptjs';
import { END_POINT } from '@/constants';

export const getUserByEmail = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.USERS}?email=${email}`
    );

    const data = await response.json();
    return data.length > 0;
  } catch (error) {
    return false;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.USERS}?email=${email}`
    );

    if (!response.ok) {
      throw new Error('User not found');
    }

    const [user] = await response.json();
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }

    return {
      data: user,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error
    };
  }
};
