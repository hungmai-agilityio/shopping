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

  it('renders badge count when isBadge is true', () => {
    render(<UserIcon {...defaultProps} isBadge={true} badgeCount={5} />);

    const badge = screen.getByText('5');
    expect(badge).toBeInTheDocument();
  });

  it('does not render badge count when isBadge is false', () => {
    render(<UserIcon {...defaultProps} isBadge={false} />);

    const badge = screen.queryByText('5');
    expect(badge).not.toBeInTheDocument();
  });
});
