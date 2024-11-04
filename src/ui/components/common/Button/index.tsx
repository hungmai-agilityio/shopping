import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

// Constants
import { buttonSizeClasses, buttonTypeClasses, SIZE, TYPE } from '@/constants';

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

  return (
    <button
      className={clsx(
        variant !== TYPE.THIRD && baseClasses,
        buttonSizeClasses[size],
        buttonTypeClasses[variant],
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
