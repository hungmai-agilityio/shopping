import { render, screen } from '@testing-library/react';

// Mock data
import { mockProducts, mockWishlist } from '@/mocks';

// Components
import WishList from '@/ui/components/WishList';

describe('WishList component', () => {
  const defaultProps = {
    data: mockWishlist,
    products: mockProducts,
    onAddCart: jest.fn(),
    onDelete: jest.fn()
  };

  it('render Wish list with default props', () => {
    render(<WishList {...defaultProps} />);

    const product = screen.getByText('Basic T-Shirt');
    expect(product).toBeInTheDocument();
  });

  it('should render empty state when no product data is provided', () => {
    render(<WishList {...defaultProps} data={[]} />);

    expect(screen.getByAltText('cart empty')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<WishList {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
