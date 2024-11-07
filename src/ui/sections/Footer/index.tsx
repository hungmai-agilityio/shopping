import dynamic from 'next/dynamic';

// Constants
import {
  END_POINT,
  FONT_SIZE,
  FONT_WEIGHT,
  itemsCategories,
  itemsContact,
  itemsHome,
  itemsShop,
  TYPE
} from '@/constants';

// Components
import { Icon, List, Logo, Typography } from '@/ui/components';

const ButtonRedirect = dynamic(
  () => import('@/ui/components/UserAction/Redirect'),
  {
    ssr: false
  }
);

const Footer = async () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container grid lg:grid-cols-2 grid-cols-1 py-20 gap-10">
        <div className="max-w-block-text">
          <Logo
            src="/logo.svg"
            alt="logo-home"
            width={35}
            height={35}
            title="mangcoding Store"
            color="text-white"
          />
          <div className="mt-6">
            <Typography
              fontWeight={FONT_WEIGHT.THIN}
              color="text-white"
              size={FONT_SIZE.MIMI}
              className="leading-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              vel tempor dolor augue et lectus.
            </Typography>
          </div>

          <div className="mt-8">
            <ButtonRedirect
              name="Login Now"
              url={END_POINT.SIGN_IN}
              variant={TYPE.SECOND}
            />
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <List color="text-white" heading="Home" items={itemsHome} />
          <List color="text-white" heading="Shop" items={itemsShop} />
          <List
            color="text-white"
            heading="Categories"
            items={itemsCategories}
          />
          <div>
            <List color="text-white" heading="Contact" items={itemsContact} />
            <div className="flex mt-5 gap-5">
              <Icon
                src="/facebook.svg"
                alt="facebook"
                width={32}
                height={32}
                className="cursor-pointer"
                priority
              />
              <Icon
                src="/twetter.svg"
                alt="twetter"
                width={32}
                height={32}
                className="cursor-pointer"
                priority
              />
              <Icon
                src="/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
                className="cursor-pointer"
                priority
              />
              <Icon
                src="/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
                className="cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
