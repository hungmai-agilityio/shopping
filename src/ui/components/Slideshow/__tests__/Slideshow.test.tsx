import { mockImage } from '@/mocks';
import Slideshow from '@/ui/components/Slideshow';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Slideshow component', () => {
  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('render Slideshow with default props', () => {
    render(<Slideshow images={mockImage} />);

    const activeImage = screen.getByAltText('Image 0');
    expect(activeImage).toBeInTheDocument();
  });

  it('should change active index when clicking on prev button ', () => {
    render(<Slideshow images={mockImage} />);

    const prevButton = screen.getByAltText('icon arrow left');
    fireEvent.click(prevButton);

    const activeImage = screen.getByAltText('Image 2');
    expect(activeImage).toBeInTheDocument();
  });

  it('should change active index when clicking on next button ', () => {
    render(<Slideshow images={mockImage} />);

    const nexButton = screen.getByAltText('icon arrow right');
    fireEvent.click(nexButton);

    const activeImage = screen.getByAltText('Image 1');
    expect(activeImage).toBeInTheDocument();
  });

  it('should repeat the last image after the first image on the "prev click"', () => {
    render(<Slideshow images={mockImage} />);

    const prevButton = screen.getByAltText('icon arrow left');
    fireEvent.click(prevButton);
    fireEvent.click(prevButton);
    fireEvent.click(prevButton);

    const activeImage = screen.getByAltText('Image 0');
    expect(activeImage).toBeInTheDocument();
  });

  it('should loop to first image after last image on "next click"', () => {
    render(<Slideshow images={mockImage} />);

    const nextButton = screen.getByAltText('icon arrow right');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    const activeImage = screen.getByAltText('Image 0');
    expect(activeImage).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Slideshow images={mockImage} />);

    expect(container).toMatchSnapshot();
  });
});
