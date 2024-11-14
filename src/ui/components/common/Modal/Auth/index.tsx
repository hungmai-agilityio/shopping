'use client';

import { memo } from 'react';
import Image from 'next/image';

// Components
import { Modal } from '@/ui/components';

interface ModalAuthProps {
  onClick: () => void;
  isLogged?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const ModalAuth = memo(
  ({ onClick, isLogged = false, isOpen, onClose }: ModalAuthProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={isLogged ? 'Confirm logout' : 'Authentication request'}
        btnSecond={isLogged ? 'Logout' : 'Yes'}
        onClick={onClick}
      >
        <div>
          {isLogged ? (
            <p>
              Would you like to log out? Click <strong>Sign out</strong> to
              return to the login page.
            </p>
          ) : (
            <p>
              To perform this action, you need to log in, press the{' '}
              <strong>"Yes"</strong> button to proceed with login.
            </p>
          )}
          <div className="my-5">
            <Image
              src="/auth-stop.webp"
              alt="stop action"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
        </div>
      </Modal>
    );
  }
);

export default ModalAuth;
