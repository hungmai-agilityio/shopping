import { ReactNode } from 'react';

interface BadgeProps {
  quantity: number;
  children: ReactNode;
}

const Badge = ({ quantity, children }: BadgeProps) => {
  return (
    <div className="relative">
      {quantity > 0 && (
        <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full flex justify-center items-center bg-red-400 text-white text-xs cursor-pointer z-10 overflow-hidden">
          {quantity}
        </div>
      )}
      {children}
    </div>
  );
};

export default Badge;
