import Link from 'next/link';
import { Metadata } from 'next';

// Constants
import { END_POINT, FONT_SIZE } from '@/constants';

// Components
import { AuthForm, Typography } from '@/ui/components';
import SignUpForm from '@/ui/sections/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign up'
};

const SignUpPage = () => {
  return (
    <AuthForm
      title="Sign Up"
      subtitle={
        <div className="flex items-center gap-1">
          <Typography size={FONT_SIZE.X_SMALL} color="text-white">
            You have an account?
          </Typography>
          <Link href={END_POINT.SIGN_IN} className="text-white font-bold">
            Login
          </Link>
        </div>
      }
      backgroundImage="/product.webp"
    >
      <SignUpForm />
    </AuthForm>
  );
};

export default SignUpPage;
