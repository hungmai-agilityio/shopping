'use client';

import { useRouter } from 'next/navigation';

// Constants
import { TYPE } from '@/constants';

// Components
import { Button } from '@/ui/components';

interface RedirectProps {
  isLogged: boolean;
  url: string;
  name: string;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
}

const ButtonRedirect = ({
  isLogged,
  url,
  name,
  variant = TYPE.PRIMARY
}: RedirectProps) => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(url);
  };

  return (
    <>
      {!isLogged && (
        <Button variant={variant} onClick={handleRedirect}>
          {name}
        </Button>
      )}
    </>
  );
};

export default ButtonRedirect;
