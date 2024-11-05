// Constants
import { navItems } from '@/constants';

// Components
import { BurgerMenu, Logo, Navbar, UserAction } from '@/ui/components';

// Libs
import { getUserFromCookie } from '@/libs';

const Header = async () => {
  const user = await getUserFromCookie();

  return (
    <header className="bg-white h-20 shadow-header">
      <div className="container py-6 flex justify-between lg:items-start items-center">
        <Logo
          src="/logo.svg"
          alt="logo-home"
          width={35}
          height={35}
          title="mangcoding Store"
        />
        <div className="lg:hidden block">
          <BurgerMenu user={user} items={navItems} />
        </div>
        <div className="lg:flex hidden gap-10 items-start">
          <Navbar items={navItems} styles="flex gap-10" />
          <UserAction styles="flex gap-10" user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
