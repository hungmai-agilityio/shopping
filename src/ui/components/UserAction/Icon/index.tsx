import { Icon } from '@/ui/components';

interface UserIconProps {
  src: string;
  alt: string;
  onClick?: () => void;
  isBadge?: boolean;
  badgeCount?: number;
}

const UserIcon = ({
  src,
  alt,
  onClick,
  isBadge = false,
  badgeCount = 0
}: UserIconProps) => {
  return (
    <Icon
      src={src}
      alt={alt}
      width={24}
      height={24}
      onClick={onClick}
      isBadge={isBadge}
      badgeCount={badgeCount}
      priority
    />
  );
};

export default UserIcon;
