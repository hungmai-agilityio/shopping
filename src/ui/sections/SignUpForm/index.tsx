'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';

// Constants
import {
  END_POINT,
  MESSAGE_API,
  MESSAGE_VALID,
  STATUS,
  TYPE
} from '@/constants';

// Components
import { Button, InputController, ToastMessage } from '@/ui/components';

// Libs + stores
import { postData, signUpSchema, checkUserByEmail, addUser } from '@/libs';
import { useUserStore } from '@/stores';

// Interfaces
import { IUser } from '@/interfaces';

const SignUpForm = () => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const [formData, setFormData] = useState<IUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    avatar: '',
    address: '',
    gender: '',
    phone: '',
    street: '',
    created_at: '',
    updated_at: ''
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting }
  } = useForm<IUser>({
    resolver: zodResolver(signUpSchema),
    defaultValues: formData
  });

  // Toggle password visibility
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirm = () => setShowConfirm(!showConfirm);

  // Handle form submission
  const onSubmit = async (data: IUser) => {
    const userExists = await checkUserByEmail(data.email);
    if (userExists) {
      setError('email', { type: 'manual', message: MESSAGE_VALID.EMAIL_EXIST });
      return;
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const hashedConfirm = await bcrypt.hash(data.confirm, 10);
    const newData = {
      ...data,
      id: uuidv4(),
      password: hashedPassword,
      confirm: hashedConfirm,
      avatar: '',
      gender: '',
      address: '',
      phone: '',
      street: '',
      create_at: new Date(),
      update_at: new Date()
    };

    setFormData(newData);

    const newUser = await addUser(newData);

    if (newUser.data) {
      setFormData(formData);
      setToast({
        status: STATUS.SUCCESS,
        message: MESSAGE_API.SIGN_UP_SUCCESS
      });

      setUser(newData);
      setTimeout(() => {
        router.push(END_POINT.HOME);
        router.refresh();
      }, 2000);
      return;
    }
    setToast({
      status: STATUS.ERROR,
      message: MESSAGE_API.SIGN_UP_ERROR
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-8 mb-5">
          <div className="basis-1/2">
            <InputController
              name="firstName"
              control={control}
              label="First Name"
              placeholder="First Name"
            />
          </div>
          <div className="basis-1/2">
            <InputController
              name="lastName"
              control={control}
              label="Last Name"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-5">
          <InputController
            name="email"
            control={control}
            type={TYPE.EMAIL}
            label="Email"
            placeholder="Email"
          />
        </div>
        <div className="mb-5">
          <InputController
            name="password"
            control={control}
            type={showPassword ? TYPE.TEXT : TYPE.PASSWORD}
            label="Password"
            placeholder="Password"
            showIcon={showPassword ? '/eye-show.svg' : '/eye-hide.svg'}
            toggleShow={toggleShowPassword}
          />
        </div>
        <div className="mb-5">
          <InputController
            name="confirm"
            control={control}
            type={showConfirm ? TYPE.TEXT : TYPE.PASSWORD}
            label="Entry Keyword Again"
            placeholder="Enter keyword again"
            showIcon={showConfirm ? '/eye-show.svg' : '/eye-hide.svg'}
            toggleShow={toggleShowConfirm}
          />
        </div>
        <div className="flex items-center mb-5">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div className="float-right">
          <Button variant={TYPE.SECOND} type="submit" disabled={isSubmitting}>
            Sign Up
          </Button>
        </div>
      </form>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default SignUpForm;
