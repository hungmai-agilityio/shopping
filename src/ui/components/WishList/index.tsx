import { memo } from 'react';

// Constants
import { CELL, FONT_SIZE, FONT_WEIGHT, mada, SIZE, TAG } from '@/constants';

// Components
import {
  Button,
  Cell,
  Icon,
  Row,
  Typography,
  CardImage
} from '@/ui/components';

// Props interface
interface WishListProps {
  id: string;
  productId: string;
  image: string;
  nameProduct: string;
  price: number;
  stoct: number;
  isDisable?: boolean;
  onAddCart: (productId: string) => void;
  onDelete: (id: string) => void;
}

const WishList = memo(
  ({
    id,
    productId,
    image,
    nameProduct,
    isDisable,
    price,
    stoct,
    onAddCart,
    onDelete
  }: WishListProps) => {
    return (
      <Row isTD styles="lg:h-40 h-full">
        <Cell size={SIZE.SMALL} type={CELL.TD}>
          <div className="lg:block hidden">
            <Icon
              src="/delete.svg"
              alt="Delete"
              width={24}
              height={24}
              onClick={onDelete.bind(null, id)}
              priority
            />
          </div>
        </Cell>
        <Cell size={SIZE.SMALL} type={CELL.TD}>
          <CardImage
            src={image || '/product.webp'}
            alt={nameProduct || 'product image'}
            width={80}
            height={80}
            isBlur
          />
          <div className="lg:hidden block text-center">
            <Icon
              src="/delete.svg"
              alt="Delete"
              width={24}
              height={24}
              onClick={onDelete.bind(null, id)}
              priority
            />
          </div>
        </Cell>
        <Cell size={SIZE.LARGE} type={CELL.TD} label="Name">
          <Typography fontWeight={FONT_WEIGHT.BOLD}>{nameProduct}</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            size={FONT_SIZE.X_SMALL}
          >
            Color: White
          </Typography>
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD} label="Price">
          <Typography fontWeight={FONT_WEIGHT.BOLD}>${price} USD</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            size={FONT_SIZE.X_SMALL}
          >
            Price
          </Typography>
        </Cell>
        <Cell size={SIZE.MEDIUM} type={CELL.TD} label="Stock Status">
          <Typography fontWeight={FONT_WEIGHT.BOLD}>{stoct}</Typography>
          <Typography
            color="text-gray-500"
            tag={TAG.SPAN}
            size={FONT_SIZE.X_SMALL}
          >
            In Stock
          </Typography>
        </Cell>
        <Cell size={SIZE.SMALL} type={CELL.TD}>
          <Button
            onClick={onAddCart.bind(null, productId)}
            disabled={isDisable}
          >
            Add to Cart
          </Button>
        </Cell>
      </Row>
    );
  }
);

export default WishList;
