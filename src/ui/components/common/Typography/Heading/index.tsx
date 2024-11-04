import { FONT_WEIGHT, mada, TAG } from '@/constants';
import { Typography } from '@/ui/components';
import { ReactNode } from 'react';

interface HeadingProp {
  color?: string;
  children: ReactNode;
}
export const Heading = ({ color = 'text-white', children }: HeadingProp) => {
  return (
    <Typography
      fontWeight={FONT_WEIGHT.BOLD}
      color={color}
      tag={TAG.H1}
      className={`${mada.className} capitalize lg:text-heading text-xl my-5 leading-normal`}
    >
      {children}
    </Typography>
  );
};
