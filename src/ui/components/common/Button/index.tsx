import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

// Constants
import { SIZE, TYPE } from '@/constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
  children?: ReactNode;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
}

const Button = ({
  children,
  variant = TYPE.PRIMARY,
  size = SIZE.MEDIUM,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses = 'truncate md:h-12 h-8';
  const sizeClasses = {
    [SIZE.SMALL]: 'w-12 h-12 text-xs',
    [SIZE.MEDIUM]: 'md:text-lg md:w-btn-md w-28 text-xs',
    [SIZE.LARGE]: 'w-full text-base'
  };

  const typeClasses = {
    [TYPE.PRIMARY]: 'bg-gradient-primary text-white font-bold',
    [TYPE.SECOND]: 'bg-white text-purple-500 font-bold',
    [TYPE.THIRD]:
      'w-10 p-2 bg-gray-200 rounded-full drop-shadow-lg text-lg focus:bg-second focus:text-white focus:font-bold'
  };

  return (
    <button
      className={clsx(
        variant !== TYPE.THIRD && baseClasses,
        sizeClasses[size],
        typeClasses[variant],
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
