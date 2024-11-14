import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { UserIcon } from '@/ui/components';

describe('UserIcon component', () => {
  const defaultProps = {
    src: '/user.svg',
    alt: 'User icon',
    onClick: jest.fn()
  };

  it('renders the icon with default props', () => {
    render(<UserIcon {...defaultProps} />);

    const icon = screen.getByAltText('User icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/user.svg');
  });

  it('calls the onClick handler when clicked', () => {
    render(<UserIcon {...defaultProps} />);

    const icon = screen.getByAltText('User icon');
    fireEvent.click(icon);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
