import { render, screen } from '@testing-library/react';

// Mocks
import { mockBreadCrumb } from '@/mocks';

// Components
import Breadcrumb from '@/ui/components/common/BreadCrumb';

describe('BreadCrumb component', () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Shopping', href: '/shopping' },
    { label: 'Electronics', href: '/shopping/electronics' },
    { label: 'Phones', href: '' }
  ];

  it('render with default props', () => {
    render(<Breadcrumb items={mockBreadCrumb} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Phones')).toBeInTheDocument();
  });

  it('should show truncated version when there are more than 3 items', () => {
    render(<Breadcrumb items={breadcrumbItems} separator=">" />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Phones')).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Breadcrumb items={mockBreadCrumb} />);

    expect(container).toMatchSnapshot();
  });
});
