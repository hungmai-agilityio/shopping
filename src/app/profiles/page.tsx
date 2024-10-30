import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Constants
import { FONT_SIZE, FONT_WEIGHT, TAG, mada, popping } from '@/constants';

// Components
import { Hero, Typography } from '@/ui/components';

// Lazy load the CardUpload and ProfileForm components
const CardUpload = dynamic(() => import('@/ui/sections/Profile/CardUpload'), {
  ssr: false
});
const ProfileForm = dynamic(() => import('@/ui/sections/Profile/Form'), {
  ssr: false
});

export const metadata: Metadata = {
  title: 'Profile'
};

const ProfilePage = () => {
  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'My Account', href: '' }
  ];

  return (
    <div className={`${popping.className}`}>
      <Hero isBreadCrumb isHeroSecond items={breadCrumb}>
        <div className="lg:flex justify-between gap-10 container">
          <div className="max-w-card-sm lg:text-left text-center">
            <Typography
              fontWeight={FONT_WEIGHT.BOLD}
              color="text-white"
              tag={TAG.H1}
              size={FONT_SIZE.MEDIUM}
              className={`${mada.className} capitalize my-5`}
            >
              My Account
            </Typography>
            <Typography
              color="text-white"
              className="my-8"
              size={FONT_SIZE.X_SMALL}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </Typography>
          </div>
          <div className="md:block flex justify-center">
            <CardUpload />
          </div>
        </div>
      </Hero>
      <ProfileForm />
    </div>
  );
};

export default ProfilePage;
