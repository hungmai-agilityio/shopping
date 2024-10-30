import { render, screen } from '@testing-library/react';
import { NavItem } from '@/ui/components/Navbar/Item';
import { fireEvent } from '@testing-library/react';

describe('NavItem', () => {
  const navName = 'home';
  const navUrl = '/home';

  it('Should render value passed in props', () => {
    render(<NavItem name={navName} />);

    expect(screen.getByText(navName)).toBeInTheDocument();
  });

  it('Should render active', () => {
    render(<NavItem name={navName} isActive={true} />);

    expect(screen.getByText(navName)).toBeInTheDocument();
    expect(screen.getByText(navName)).toHaveClass('text-active font-bold');
  });

  it('Should trigger navigation when clicked', () => {
    render(<NavItem name={navName} url={navUrl} />);

    const linkElement = screen.getByText(navName);
    fireEvent.click(linkElement);

    expect(linkElement.closest('a')).toHaveAttribute('href', navUrl);
  });

  it('Should match snapshot', () => {
    const { container } = render(<NavItem name={navName} url={navUrl} />);
    expect(container).toMatchSnapshot();
  });
});
