import { z } from 'zod';

// Constants
import { MESSAGE_VALID } from '@/constants';

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    email: z
      .string()
      .email(MESSAGE_VALID.EMAIL_ERROR)
      .min(1, 'Email is required'),
    password: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR),
    confirm: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR)
  })
  .refine((data) => data.password === data.confirm, {
    message: MESSAGE_VALID.CONFIRM_ERROR,
    path: ['confirm']
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email(MESSAGE_VALID.EMAIL_ERROR)
    .min(1, 'Email is required'),
  password: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR)
});

export const updateProfileSchema = z.object({
  firstName: z.string().min(1, { message: "Name is required" }),
  street: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().refine(value => {
    return /^\d+$/.test(value) || value === '';
  }, { message: "Phone number must be a number" }),
  gender: z.string().optional(),
});
