import { ReactNode } from 'react';
import clsx from 'clsx';

// Constants
import { FONT_SIZE, FONT_WEIGHT, TAG } from '@/constants';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  color?: string;
  fontWeight?: FONT_WEIGHT;
  size?: FONT_SIZE;
  tag?: TAG;
}

const Typography = ({
  children,
  tag = TAG.P,
  fontWeight = FONT_WEIGHT.NORMAL,
  color = 'text-black',
  size = FONT_SIZE.SMALL,
  className
}: TypographyProps) => {
  const Typo = tag;

  return (
    <Typo className={clsx(`font-${fontWeight}`, color, size, className)}>
      {children}
    </Typo>
  );
};

export default Typography;
