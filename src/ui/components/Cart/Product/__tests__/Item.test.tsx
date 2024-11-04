import { render } from '@testing-library/react';

// Components
import { CartItem } from '@/ui/components';

// Mocks data
import { mockProduct } from '@/mocks';

describe('CartItem component', () => {
  const defaultProps = {
    id: 't14760fd-7297hj018-087jk266',
    userId: '5435kfd-113230fj-667lpu2',
    productId: '5435k7d-78gf30fj-66fpu2',
    note: '',
    quantity: 1,
    color: 'White',
    product: mockProduct,
    onDelete: jest.fn(),
    onSaveNote: jest.fn(),
    onQuantityChange: jest.fn()
  };

  test('should be render match to snapshot', () => {
    const { container } = render(<CartItem {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
