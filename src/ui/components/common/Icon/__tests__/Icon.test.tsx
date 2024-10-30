import Icon from '@/ui/components/common/Icon';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Icon component', () => {
  const onClickMock = jest.fn();

  const defautProps = {
    src: '/user.svg',
    alt: 'Cart Icon',
    width: 24,
    height: 24,
    onClick: onClickMock
  };

  it('renders icon with default props', () => {
    render(<Icon {...defautProps} />);

    const icon = screen.getByAltText('Cart Icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders icon with badge props', () => {
    render(<Icon {...defautProps} isBadge={true} badgeCount={3} />);

    const icon = screen.getByAltText('Cart Icon');
    expect(icon).toBeInTheDocument();
    const badge = screen.getByText('3');
    expect(badge).toHaveClass('bg-red-400 text-white text-xs font-bold');
  });

  it('hides badge when badgeCount is 0', () => {
    render(<Icon {...defautProps} isBadge={true} badgeCount={0} />);

    const icon = screen.getByAltText('Cart Icon');
    expect(icon).toBeInTheDocument();

    const badge = screen.queryByText('0');
    if (badge) {
      expect(badge).toHaveClass('hidden');
    }
  });

  it('calls the onClick handler when clicked', () => {
    render(<Icon {...defautProps} />);

    const icon = screen.getByAltText('Cart Icon');
    fireEvent.click(icon);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Icon {...defautProps} />);

    expect(container).toMatchSnapshot();
  });
});
