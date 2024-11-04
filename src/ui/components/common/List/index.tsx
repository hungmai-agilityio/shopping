import Link from 'next/link';

// Constants
import { FONT_SIZE, FONT_WEIGHT, popping, TAG } from '@/constants';

// Components
import { Typography } from '@/ui/components';

interface ListProps {
  heading: string;
  items: Array<{ name: string; url?: string }>;
  color: string;
}
const List = ({ heading, items, color = 'text-black' }: ListProps) => {
  return (
    <div className={`${popping.className}`}>
      <Typography
        fontWeight={FONT_WEIGHT.BOLD}
        color={color}
        tag={TAG.H4}
        size={FONT_SIZE.X_SMALL}
        className="capitalize"
      >
        {heading}
      </Typography>

      <div className="mt-5">
        {items.map((item, index) => (
          <Link
            href={item.url!}
            className={`${color} block mb-4 capitalize text-sm cursor-pointer hover:text-purple-700`}
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
