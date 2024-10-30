import Link from 'next/link';
import { Metadata } from 'next';

// Constants
import { END_POINT, FONT_SIZE } from '@/constants';

// Components
import { AuthForm, Typography } from '@/ui/components';
import SignInForm from '@/ui/sections/SignInForm';

export const metadata: Metadata = {
  title: 'Sign in'
};

const SignInPage = () => {
  return (
    <AuthForm
      title="Login"
      subtitle={
        <div className="flex items-center gap-1">
          <Typography size={FONT_SIZE.X_SMALL} color="text-white">
            Don't have an account?
          </Typography>
          <Link href={END_POINT.SIGN_UP} className="text-white font-bold">
            Sign Up
          </Link>
        </div>
      }
      backgroundImage="/product.webp"
    >
      <SignInForm />
    </AuthForm>
  );
};

export default SignInPage;
