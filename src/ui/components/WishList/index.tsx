import { memo } from 'react';

// Constants
import { CELL, FONT_SIZE, FONT_WEIGHT, mada, SIZE, TAG } from '@/constants';

// Components
import {
  Body,
  Button,
  Cell,
  Empty,
  Head,
  Icon,
  Row,
  Table,
  Typography,
  CardImage
} from '@/ui/components';

// Interfaces
import { IWishlist, IProduct } from '@/interfaces';

// Props interface
interface WishListProps {
  data: IWishlist[];
  products: IProduct[];
  isDisable?: boolean;
  onAddCart: (product: IWishlist) => void;
  onDelete: (id: string) => void;
}

const WishList = memo(
  ({ data, products, isDisable, onAddCart, onDelete }: WishListProps) => {
    const renderRowEmpty = <Empty />;

    const renderRowData = data.map((item) => {
      const product = products.find((p) => p.id === item.productId);

      if (!product) return null;

      return (
        <Row key={item.id} isTD styles="lg:h-40 h-full">
          <Cell size={SIZE.SMALL} type={CELL.TD}>
            <div className="lg:block hidden">
              <Icon
                src="/delete.svg"
                alt="Delete"
                width={24}
                height={24}
                onClick={() => onDelete(item.id)}
                priority
              />
            </div>
          </Cell>
          <Cell size={SIZE.SMALL} type={CELL.TD}>
            <CardImage
              src={product.image || '/product.webp'}
              alt={product.name || 'product image'}
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
                onClick={() => onDelete(item.id)}
                priority
              />
            </div>
          </Cell>
          <Cell size={SIZE.LARGE} type={CELL.TD} label="Name">
            <Typography fontWeight={FONT_WEIGHT.BOLD}>
              {product.name}
            </Typography>
            <Typography
              color="text-gray-500"
              tag={TAG.SPAN}
              size={FONT_SIZE.X_SMALL}
            >
              Color: {item.color}
            </Typography>
          </Cell>
          <Cell size={SIZE.MEDIUM} type={CELL.TD} label="Price">
            <Typography fontWeight={FONT_WEIGHT.BOLD}>
              ${product.price} USD
            </Typography>
            <Typography
              color="text-gray-500"
              tag={TAG.SPAN}
              size={FONT_SIZE.X_SMALL}
            >
              Price
            </Typography>
          </Cell>
          <Cell size={SIZE.MEDIUM} type={CELL.TD} label="Stock Status">
            <Typography fontWeight={FONT_WEIGHT.BOLD}>
              {product.stoct}
            </Typography>
            <Typography
              color="text-gray-500"
              tag={TAG.SPAN}
              size={FONT_SIZE.X_SMALL}
            >
              In Stock
            </Typography>
          </Cell>
          <Cell size={SIZE.SMALL} type={CELL.TD}>
            <Button onClick={() => onAddCart(item)} disabled={isDisable}>
              Add to Cart
            </Button>
          </Cell>
        </Row>
      );
    });

    return (
      <div className={`${mada.className} h-table overflow-y-auto scrollbar`}>
        <Table>
          <Head>
            <Row styles="lg:flex hidden">
              <Cell size={SIZE.SMALL} type={CELL.TH}></Cell>
              <Cell size={SIZE.SMALL} type={CELL.TH}>
                Product
              </Cell>
              <Cell size={SIZE.LARGE} type={CELL.TH}></Cell>
              <Cell size={SIZE.MEDIUM} type={CELL.TH}>
                Price
              </Cell>
              <Cell size={SIZE.MEDIUM} type={CELL.TH}>
                Stock Status
              </Cell>
              <Cell size={SIZE.MEDIUM} type={CELL.TH}></Cell>
            </Row>
          </Head>
          <Body>{data.length === 0 ? renderRowEmpty : renderRowData}</Body>
        </Table>
      </div>
    );
  }
);

export default WishList;
