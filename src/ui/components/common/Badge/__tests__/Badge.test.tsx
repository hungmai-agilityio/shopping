import Badge from '@/ui/components/common/Badge';
import Icon from '@/ui/components/common/Icon';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Badge component', () => {
  const onClickMock = jest.fn();

  const defautProps = {
    quantity: 10,
    children: <Icon src="/cart.svg" alt="cart" width={24} height={24} />
  };

  test('renders badge with default props', () => {
    render(<Badge {...defautProps} />);

    const icon = screen.getByAltText('cart');
    expect(icon).toBeInTheDocument();
    const badge = screen.getByText('10');
    expect(badge).toHaveClass(
      'flex justify-center items-center bg-red-400 text-white text-xs cursor-pointer z-10 overflow-hidden'
    );
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Badge {...defautProps} />);

    expect(container).toMatchSnapshot();
  });
});
