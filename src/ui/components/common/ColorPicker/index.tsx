import { clsx } from 'clsx';
import { memo } from 'react';

// Constants
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';

// Components
import { Button, Typography } from '@/ui/components';

interface IProps {
  colors: string[];
  labelColor?: string;
  selectedColor?: string;
  onClick?: (color: string) => void;
}

const ColorPicker = memo(
  ({ colors, labelColor = 'text-black', selectedColor, onClick }: IProps) => {
    // Handler for color selection
    const handleChange = (color: string) => {
      if (onClick) {
        onClick(color);
      }
    };

    return (
      <div>
        {labelColor && (
          <Typography
            color={labelColor}
            fontWeight={FONT_WEIGHT.BOLD}
            size={FONT_SIZE.X_SMALL}
          >
            Color
          </Typography>
        )}
        <div className="mt-4 flex items-center gap-3">
          {colors?.map((color) => (
            <Button
              aria-label={`${color}-picker`}
              id={color}
              key={color}
              onClick={handleChange.bind(null, color)}
              className={clsx(
                `h-4 w-4 rounded-full focus:border focus:border-green-800`,
                {
                  'border border-dark': color === 'White',
                  'ring-2 ring-green-800': color === selectedColor
                }
              )}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default ColorPicker;
