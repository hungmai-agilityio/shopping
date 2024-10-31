import { Metadata } from 'next';

// Constants
import {
  END_POINT,
  FONT_SIZE,
  FONT_WEIGHT,
  mada,
  popping,
  TAG,
  TYPE
} from '@/constants';

// Components
import { Button, Card, Hero, Input, Typography } from '@/ui/components';

export const metadata: Metadata = {
  title: 'Contact'
};

const ContactPage = () => {
  const breadCrumb = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: END_POINT.CONTACT }
  ];

  return (
    <div className={`${popping.className}`}>
      <Hero isBreadCrumb items={breadCrumb} styles="md:h-card-lg">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 container">
          <div className="max-w-card-sm lg:text-left text-center">
            <Typography
              fontWeight={FONT_WEIGHT.BOLD}
              color="text-white"
              tag={TAG.H1}
              className={`${mada.className} capitalize lg:text-5xl text-4xl mt-10 mb-6`}
            >
              Contact
            </Typography>
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
        </div>
      </Hero>
      <div className="-mt-28 md:flex hidden">
        <div className="container flex justify-center gap-10 ">
          <Card
            name="Location"
            photo="/location.svg"
            variant={TYPE.CONTACT}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam."
          />
          <Card
            name="Contact"
            photo="/call.svg"
            variant={TYPE.CONTACT}
            mail="T-shirt12@gmail.com"
            phone="(021) 12345678"
          />
        </div>
      </div>
      <section className="mt-32 mb-20 container">
        <Typography
          fontWeight={FONT_WEIGHT.BOLD}
          tag={TAG.H3}
          className={`${mada.className} lg:text-5xl text-4xl mt-10 mb-6 text-center`}
        >
          Send a Message
        </Typography>
        <form className="mt-10 lg:px-28">
          <div className="md:flex gap-8">
            <div className="basis-1/2">
              <Input placeholder="First Name" variant={TYPE.SECOND} required />
            </div>
            <div className="basis-1/2">
              <Input placeholder="Last Name" variant={TYPE.SECOND} required />
            </div>
          </div>
          <div className="mt-6">
            <Input
              placeholder="Your Email"
              variant={TYPE.SECOND}
              required
              type={TYPE.EMAIL}
            />
          </div>
          <div className="mt-6">
            <Input
              placeholder="Description"
              variant={TYPE.THIRD}
              required
              rows={10}
            />
          </div>
          <div className="mt-8 text-center">
            <Button>Submit</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
