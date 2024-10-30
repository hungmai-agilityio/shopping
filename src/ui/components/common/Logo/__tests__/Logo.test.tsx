import Logo from '@/ui/components/common/Logo';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Logo component', () => {
  const defaultProps = {
    src: '/logo.svg',
    alt: 'web',
    width: 35,
    height: 35,
    title: 'mangcoding Store',
    url: '/'
  };

  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock
    });
  });

  it('renders with default props', () => {
    render(<Logo {...defaultProps} />);
    const nameBrand = screen.getByText(defaultProps.title);

    expect(nameBrand).toBeInTheDocument();
  });

  it('navigates to the correct URL when clicked', () => {
    render(<Logo {...defaultProps} />);

    const logoLink = screen.getByRole('link');
    fireEvent.click(logoLink);
    expect(logoLink).toBeInTheDocument();
  });
});
