import { navItems } from '@/constants';
import { BurgerMenu, Logo, Navbar } from '@/ui/components';
import dynamic from 'next/dynamic';

const UserAction = dynamic(() => import('@/ui/components/UserAction'), {
  ssr: false
});

const Header = () => {
  return (
    <header className="bg-white h-20 shadow-header">
      <div className="container py-6 flex justify-between lg:items-start items-center ">
        <Logo
          src="/logo.svg"
          alt="logo-home"
          width={35}
          height={35}
          title="mangcoding Store"
        />
        <div className="lg:hidden block">
          <BurgerMenu items={navItems} />
        </div>
        <div className="lg:flex hidden gap-10 items-start">
          <Navbar items={navItems} styles="flex gap-10" />
          <UserAction styles="flex gap-10" />
        </div>
      </div>
    </header>
  );
};

export default Header;
