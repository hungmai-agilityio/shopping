import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import Image from 'next/image';

// Constants
import { TYPE } from '@/constants';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
  htmlFor?: string;
  message?: string;
  icon?: string;
  type?: string;
  rows?: number;
  onClick?: () => void;
}

const Input = forwardRef<HTMLTextAreaElement | HTMLInputElement, InputProps>(
  (
    {
      label,
      value,
      variant,
      htmlFor,
      placeholder,
      name,
      onChange,
      onClick,
      message,
      icon,
      disabled,
      type = TYPE.TEXT,
      rows,
      onKeyDown
    },
    ref
  ) => {
    const typeClasses = {
      [TYPE.PRIMARY]: 'focus:border focus:border-green-300 h-12',
      [TYPE.SECOND]: 'border border-gray-400 h-12',
      [TYPE.THIRD]: `border border-gray-400 resize-none`
    };

    const commonClasses = clsx(
      'w-full mt-1.5 font-bold outline-none font-lg text-dark-gray px-2',
      { ' pr-10': icon }
    );
    const typeClass = typeClasses[variant || TYPE.PRIMARY];

    return (
      <div className="mb-3">
        {label && (
          <label
            htmlFor={htmlFor}
            className="font-bold leading-2-xs capitalize"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {variant === TYPE.THIRD ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={htmlFor}
              name={name}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              placeholder={placeholder}
              className={clsx('py-1 px-2', commonClasses, typeClass)}
              disabled={disabled}
              rows={rows}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={htmlFor}
              name={name}
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              type={type}
              placeholder={placeholder}
              className={clsx(commonClasses, typeClass)}
              disabled={disabled}
            />
          )}
          {icon && (
            <Image
              src={icon}
              alt="icon"
              onClick={onClick}
              width={24}
              height={24}
              className="absolute top-5 right-2 cursor-pointer"
            />
          )}
        </div>
        {message && (
          <span className="text-red-500 mr-1 visible text-xs">{message}</span>
        )}
      </div>
    );
  }
);

export default Input;
