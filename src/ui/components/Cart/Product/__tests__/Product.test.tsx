import { render } from '@testing-library/react';

// Components
import { CartProduct } from '@/ui/components';

// Mocks data
import { mockCart, mockProducts } from '@/mocks';

describe('CartProduct component', () => {
  const defaultProps = {
    carts: mockCart,
    products: mockProducts,
    onDelete: jest.fn(),
    onSaveNote: jest.fn(),
    onQuantityChange: jest.fn()
  };

  test('should be render match to snapshot', () => {
    const { container } = render(<CartProduct {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
