import { mockBreadCrumb } from '@/mocks';
import Hero from '@/ui/components/common/Hero';
import { render, screen } from '@testing-library/react';

describe('Hero component', () => {
  it('render Hero with default props', () => {
    render(<Hero children="Test" />);

    expect(screen.getByText('Test')).toHaveClass('relative z-10');
  });

  it('render Hero with BreakCrumb', () => {
    render(<Hero children="Test" isBreadCrumb items={mockBreadCrumb} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Phones')).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Hero children="Test" />);

    expect(container).toMatchSnapshot();
  });
});
