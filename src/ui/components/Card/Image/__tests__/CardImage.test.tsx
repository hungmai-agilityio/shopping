import { render, screen } from '@testing-library/react';

// Components
import CardImage from '@/ui/components/Card/Image';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('Card Image component', () => {
  const defaultProps = {
    src: 'https://i.ibb.co/52YmKP4/jean-3-1.webp',
    alt: 'Jean Image',
    width: 590,
    height: 350
  };

  it('renders Card image with default props', () => {
    render(<CardImage {...defaultProps} />);

    const card = screen.getByAltText('Jean Image');
    expect(card).toBeInTheDocument();
  });

  it('renders Card image with title', () => {
    render(<CardImage {...defaultProps} title="Title jean" />);

    const titleElement = screen.getByText('Title jean');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('bg-white text-purple-500');
  });

  it('renders Card image with blur effect when isBlur is true', () => {
    render(<CardImage {...defaultProps} isBlur={true} />);

    const card = screen.getByAltText('Jean Image');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('placeholder', 'blur');
  });

  it('renders Card image without blur effect when isBlur is false', () => {
    render(<CardImage {...defaultProps} isBlur={false} />);

    const card = screen.getByAltText('Jean Image');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('placeholder', 'empty');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <CardImage {...defaultProps} title="Title jean" />
    );

    expect(container).toMatchSnapshot();
  });
});
