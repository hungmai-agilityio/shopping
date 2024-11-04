import { ReactNode } from 'react';
import { clsx } from 'clsx';

// Components
import Breadcrumb, { BreadcrumbItem } from '@/ui/components/common/BreadCrumb';

interface HeroProps {
  isHeroSecond?: boolean;
  isBreadCrumb?: boolean;
  styles?: string;
  children: ReactNode;
  items?: BreadcrumbItem[];
}

const Hero = ({
  isHeroSecond = false,
  isBreadCrumb,
  styles,
  children,
  items
}: HeroProps) => {
  return (
    <div
      className={clsx(
        'relative w-full h-full overflow-hidden py-10 px-28',
        styles
      )}
    >
      {isBreadCrumb && (
        <Breadcrumb
          items={items!}
          color="text-white"
          styles="relative container z-20 md:flex hidden"
        />
      )}
      <div className="relative z-10">{children}</div>

      <div
        className={clsx('absolute inset-0 bg-gradient-primary ', {
          'top-0 left-0 right-0 bottom-0 -skew-y-6 origin-top-left max-h-hero':
            isHeroSecond
        })}
      ></div>
    </div>
  );
};

export default Hero;
