'use client';

import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

// Constants
import { STATUS } from '@/constants';

interface ToastProps {
  status: STATUS.SUCCESS | STATUS.ERROR | STATUS.WARNING;
  message: string;
}

const ToastMessage = ({ status, message }: ToastProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  const toastStyles = {
    [STATUS.SUCCESS]: 'bg-green-500',
    [STATUS.ERROR]: 'bg-red-500',
    [STATUS.WARNING]: 'bg-yellow-500'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={clsx(
        'text-white font-semibold fixed top-4 right-4 py-2 px-4 rounded shadow-lg transition-opacity ease-in-out max-w-lg truncate',
        toastStyles[status]
      )}
    >
      {message}
    </div>
  );
};

export default ToastMessage;
