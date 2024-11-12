'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

// Libs + store
import { handleSignIn, loginSchema } from '@/libs';
import { useUserStore } from '@/stores';

// Constants
import { END_POINT, FONT_SIZE, FONT_WEIGHT, STATUS, TYPE } from '@/constants';

// Components
import {
  Button,
  InputController,
  Typography,
  ToastMessage
} from '@/ui/components';

const SignInForm = () => {
  const { push } = useRouter();
  const { setUser } = useUserStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const { data: user, error } = await handleSignIn(data.email, data.password);

    if (error) {
      setToast({
        status: STATUS.ERROR,
        message: error.toString()
      });
      return;
    }

    setUser(user);
    push(END_POINT.HOME);
    window.location.reload();
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="flex justify-between">
          <div className="flex items-center mb-5">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <Typography
            size={FONT_SIZE.MIMI}
            color="text-white"
            fontWeight={FONT_WEIGHT.BOLD}
          >
            Forget Password?
          </Typography>
        </div>

        <div className="float-right">
          <Button variant={TYPE.SECOND} type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </div>
      </form>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </>
  );
};

export default SignInForm;
