import { render, screen } from '@testing-library/react';

// Components
import WishList from '@/ui/components/WishList';

describe('WishList component', () => {
  const defaultProps = {
    id: 'iu129523vg-56vl90bl1-285910f46',
    productId: 'u3k8h9f1-9g22-3h67-2g13-5k6g9k45g4t3',
    image: '/product.webp',
    nameProduct: 'Basic T-Shirt',
    price: 20,
    stoct: 1720,
    onAddCart: jest.fn(),
    onDelete: jest.fn()
  };

  test('render Wish list with default props', () => {
    render(<WishList {...defaultProps} />);

    const product = screen.getByText('Basic T-Shirt');
    expect(product).toBeInTheDocument();
  });

  test('Should match snapshot', () => {
    const { container } = render(<WishList {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
