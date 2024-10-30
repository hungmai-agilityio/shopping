import { ReactNode } from 'react';
import { BreadCrumb, Typography } from '@/ui/components/common';
import { FONT_SIZE, FONT_WEIGHT, TAG, mada, popping } from '@/constants';

interface AuthFormProps {
  title: string;
  subtitle: ReactNode;
  backgroundImage: string;
  children: ReactNode;
}

const AuthForm = ({
  title,
  subtitle,
  backgroundImage,
  children
}: AuthFormProps) => {
  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'My Account', href: '' }
  ];

  return (
    <div
      className={`${popping.className} bg-no-repeat bg-cover text-white`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-overlay py-20">
        <div className="w-full md:max-w-card-sm md:mx-40 mx-5">
          <BreadCrumb items={breadCrumb} color="text-white" />
          <Typography
            color="text-white"
            fontWeight={FONT_WEIGHT.BOLD}
            tag={TAG.H1}
            size={FONT_SIZE.MEDIUM}
            className={`${mada.className} mt-8 text-5xl`}
          >
            My Account
          </Typography>
          <Typography
            color="text-white"
            fontWeight={FONT_WEIGHT.BOLD}
            tag={TAG.H2}
            size={FONT_SIZE.MEDIUM}
            className={`${mada.className} mt-11`}
          >
            {title}
          </Typography>

          <div className="mt-6">{subtitle}</div>
          <div className="mt-10 mb-20">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
