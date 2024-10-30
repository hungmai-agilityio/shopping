import { fireEvent, render, screen } from '@testing-library/react';

// Components
import CardProduct from '@/ui/components/Card/Product';

describe('Card product component', () => {
  const defaultProps = {
    id: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6',
    photo: 'https://i.ibb.co/3d7b9SB/jean-2.webp',
    name: 'Product name',
    price: 23,
    rating: '10k',
    sell: 'Best seller',
    onClick: jest.fn(),
    onFavorite: jest.fn()
  };

  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('render card product with default props', () => {
    render(<CardProduct {...defaultProps} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
  });

  it('Handle click to favorite icon ', () => {
    render(<CardProduct {...defaultProps} isFavorite/>);
    const heart = screen.getByAltText("heart icon");

    fireEvent.click(heart);
    expect(defaultProps.onFavorite).toHaveBeenCalledTimes(1);
    expect(heart).toHaveClass('border-red-500 p-1');
  });

  it('Handle click to card ', () => {
    render(<CardProduct {...defaultProps} />);
    const name = screen.getByText('Product name');

    fireEvent.click(name);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<CardProduct {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
