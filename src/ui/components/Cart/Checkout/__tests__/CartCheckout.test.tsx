import { fireEvent, render, screen } from '@testing-library/react';

// Components
import CartCheckout from '@/ui/components/Cart/Checkout';

describe('Cart checkout component', () => {
  beforeEach(() => {
    jest.fn().mockClear();
  });

  const defaultProps = {
    price: 160,
    quantity: 4,
    onCheckout: jest.fn()
  };
  it('render with default props', () => {
    render(<CartCheckout {...defaultProps} />);

    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  it('should update coupon code with "handleChange"', () => {
    render(<CartCheckout {...defaultProps} />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'SAVE20' } });

    expect(inputElement.value).toBe('SAVE20');
  });

  it('should clear coupon code and call onCheckout when handleCheckout is called', () => {
    render(<CartCheckout {...defaultProps} />);

    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'DISCOUNT50' } });
    const checkoutButton = screen.getByText('Checkout');
    fireEvent.click(checkoutButton);

    expect(inputElement.value).toBe('');
    expect(defaultProps.onCheckout).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<CartCheckout {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
