import { Icon } from '@/ui/components';

interface UserIconProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const UserIcon = ({ src, alt, onClick }: UserIconProps) => {
  return (
    <Icon
      src={src}
      alt={alt}
      width={24}
      height={24}
      onClick={onClick}
      priority
    />
  );
};

export default UserIcon;
