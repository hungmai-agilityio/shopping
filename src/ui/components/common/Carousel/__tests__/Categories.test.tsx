import { render, screen, fireEvent } from '@testing-library/react';
import { CarouselCategories } from '@/ui/components';
import { mockCategories } from '@/mocks';

describe('CarouselCategories', () => {
  beforeEach(() => {
    render(<CarouselCategories categories={mockCategories} />);
  });

  test('renders the initial category correctly', () => {
    expect(screen.getByAltText('t-shirt')).toBeInTheDocument();
    expect(screen.getByText('t-shirt')).toBeInTheDocument();
  });

  test('displays the next category when the next button is clicked', () => {
    const nextButton = screen.getByAltText('icon arrow right');
    fireEvent.click(nextButton);

    expect(screen.getByAltText('jacket')).toBeInTheDocument();
    expect(screen.getByText('jacket')).toBeInTheDocument();
  });

  test('displays the previous category when the previous button is clicked', () => {
    const prevButton = screen.getByAltText('icon arrow left');
    fireEvent.click(prevButton);

    expect(screen.getByAltText('jeans')).toBeInTheDocument();
    expect(screen.getByText('jeans')).toBeInTheDocument();
  });

  test('updates active category when a category image is clicked', () => {
    const nextCategoryThumbnail = screen.getByAltText('jacket');
    fireEvent.click(nextCategoryThumbnail);

    expect(screen.getByAltText('jacket')).toBeInTheDocument();
    expect(screen.getByText('jacket')).toBeInTheDocument();
  });

  test('loops to the first category after the last category when clicking next', () => {
    const nextButton = screen.getByAltText('icon arrow right');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByAltText('t-shirt')).toBeInTheDocument();
  });

  it('loops to the last category from the first category when clicking previous', () => {
    const prevButton = screen.getByAltText('icon arrow left');
    fireEvent.click(prevButton);

    expect(screen.getByAltText('jeans')).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <CarouselCategories categories={mockCategories} />
    );

    expect(container).toMatchSnapshot();
  });
});
