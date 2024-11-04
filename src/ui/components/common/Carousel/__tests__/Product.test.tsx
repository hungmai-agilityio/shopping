import { render, screen, fireEvent } from '@testing-library/react';
import { mockProducts } from '@/mocks';
import { CarouselProduct } from '@/ui/components';

describe('CarouselProduct', () => {
  const onOrderMock = jest.fn();

  beforeEach(() => {
    render(<CarouselProduct products={mockProducts} onOrder={onOrderMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default props', () => {
    expect(screen.getByText('Basic T-Shirt')).toBeInTheDocument();
    expect(
      screen.getByText('A comfortable and stylish basic t-shirt.')
    ).toBeInTheDocument();
  });

  test('displays the next product when the next button is clicked', () => {
    fireEvent.click(screen.getByAltText('icon arrow right'));

    expect(screen.getByText('Sporty T-Shirt')).toBeInTheDocument();
    expect(
      screen.getByText('Perfect for your workout sessions.')
    ).toBeInTheDocument();
  });

  test('displays the previous product when the previous button is clicked', () => {
    fireEvent.click(screen.getByAltText('icon arrow left'));

    expect(screen.getByText('Graphic T-Shirt')).toBeInTheDocument();
    expect(
      screen.getByText('Unique graphic design for a standout look.')
    ).toBeInTheDocument();
  });

  test('calls onOrder function when "Order Now" button is clicked', () => {
    const orderButton = screen.getByText('Order Now');
    fireEvent.click(orderButton);
    expect(onOrderMock).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <CarouselProduct products={mockProducts} onOrder={onOrderMock} />
    );

    expect(container).toMatchSnapshot();
  });
});
