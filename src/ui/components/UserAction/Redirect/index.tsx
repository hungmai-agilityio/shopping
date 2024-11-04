'use client';

import { useRouter } from 'next/navigation';

// Constants
import { TYPE } from '@/constants';
import { Button } from '@/ui/components';

// Libs + stores
import { useUserStore } from '@/stores';

interface RedirectProps {
  url: string;
  name: string;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
}

const ButtonRedirect = ({
  url,
  name,
  variant = TYPE.PRIMARY
}: RedirectProps) => {
  const router = useRouter();
  const { user } = useUserStore();
  const handleRedirect = () => {
    router.push(url);
  };

  return (
    <>
      {!user && (
        <Button variant={variant} onClick={handleRedirect}>
          {name}
        </Button>
      )}
    </>
  );
};

export default ButtonRedirect;
