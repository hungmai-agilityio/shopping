import { ReactNode } from 'react';
import { BreadCrumb, Heading, Typography } from '@/ui/components/common';
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
    <section
      className={`${popping.className} bg-no-repeat bg-cover text-white`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-overlay py-20">
        <div className="w-full container">
          <div className="md:max-w-card-sm">
            <BreadCrumb items={breadCrumb} color="text-white" />
            <Heading>My Account</Heading>
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
    </section>
  );
};

export default AuthForm;
