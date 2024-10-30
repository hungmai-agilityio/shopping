'use client';
import { clsx } from 'clsx';
import { useEffect, useState, memo } from 'react';

// Constants
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';

// Components
import Button from '@/ui/components/common/Button';
import Typography from '@/ui/components/common/Typography';

interface IProps {
  isTitle?: boolean;
  colors: string[];
  onClick?: (color: string) => void;
  titleColor?: string;
}

const ColorPicker = memo(
  ({ isTitle, colors, onClick, titleColor = 'text-black' }: IProps) => {
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    useEffect(() => {
      if (colors.length > 0) {
        setSelectedColor(colors[0]);
        onClick?.(colors[0]);
      }
    }, [colors, onClick]);

    // Handler for color selection
    const handleColorClick = (color: string) => {
      setSelectedColor(color);
      onClick?.(color);
    };

    return (
      <div>
        {isTitle && (
          <Typography
            color={titleColor}
            fontWeight={FONT_WEIGHT.BOLD}
            size={FONT_SIZE.X_SMALL}
          >
            Color
          </Typography>
        )}
        <div className="mt-4 flex items-center gap-3">
          {colors?.map((color) => (
            <Button
              id={color}
              key={color}
              onClick={handleColorClick.bind(null, color)}
              className={clsx(
                `h-4 w-4 rounded-full focus:border focus:border-green-800`,
                {
                  'border border-dark': color === 'White',
                  'ring-2 ring-green-800': color === selectedColor
                }
              )}
              style={{ backgroundColor: color }}
            ></Button>
          ))}
        </div>
      </div>
    );
  }
);

export default ColorPicker;
