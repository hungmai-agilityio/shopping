import { Metadata } from 'next';

// Constants
import { FONT_SIZE, popping } from '@/constants';

// Components
import { Heading, Hero, Typography } from '@/ui/components';
import { CardUpload, ProfileForm } from '@/ui/sections';

// Libs
import { getUserFromCookie } from '@/libs';

export const metadata: Metadata = {
  title: 'Profile'
};

const ProfilePage = async () => {
  const user = await getUserFromCookie();

  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'My Account', href: '' }
  ];

  return (
    <div className={`${popping.className}`}>
      <Hero isBreadCrumb isHeroSecond items={breadCrumb}>
        <div className="lg:flex justify-between gap-10 container">
          <div className="max-w-card-sm lg:text-left text-center">
            <Heading>My Account</Heading>
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
            <CardUpload user={user} />
          </div>
        </div>
      </Hero>
      <ProfileForm user={user} />
    </div>
  );
};

export default ProfilePage;
