import { Metadata } from 'next';
import Image from 'next/image';

// Constants
import { END_POINT, FONT_SIZE, popping } from '@/constants';

// Components
import { AboutInfo, Heading, Hero, Typography } from '@/ui/components';

export const metadata: Metadata = {
  title: 'About'
};

const AboutPage = () => {
  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: END_POINT.ABOUT_US }
  ];

  return (
    <div className={`${popping.className}`}>
      <Hero isBreadCrumb isHeroSecond items={breadCrumb}>
        <div className="lg:flex justify-between gap-10 container">
          <div className=" max-w-card-sm lg:text-left text-center">
            <Heading>About us</Heading>
            <Typography
              color="text-white"
              className="my-8 md:block hidden"
              size={FONT_SIZE.X_SMALL}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </Typography>
          </div>
          <div className="lg:flex hidden gap-20 relative">
            <Image src="/founder.webp" alt="founder" width={486} height={268} />
          </div>
        </div>
      </Hero>
      <section className="xl:container my-20 px-10">
        <AboutInfo
          aboutName="Mangcoding Store"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper. Klara is an AI powered automated Solution Builder of Growth Strategy, Branding and Digital marketing planning for your business."
          src="/store1.webp"
          title="Profile"
        />
        <AboutInfo
          aboutName="Mangcoding Store"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper. Klara is an AI powered automated Solution Builder of Growth Strategy, Branding and Digital marketing planning for your business."
          src="/store2.webp"
          title="Our Mission"
          isReverse
          styles="my-8"
        />
      </section>
    </div>
  );
};

export default AboutPage;
