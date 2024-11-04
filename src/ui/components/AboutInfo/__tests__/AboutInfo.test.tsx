import { render, screen } from '@testing-library/react';

// Components
import AboutInfo from '@/ui/components/AboutInfo';

describe('About info component', () => {
  const defaultProps = {
    desc: 'description',
    isReverse: false,
    aboutName: 'Card about',
    src: '/store-1.webp',
    title: 'Product'
  };
  test('Should render component with default props', () => {
    render(<AboutInfo {...defaultProps} />);
    const title = screen.getByText(defaultProps.title);

    expect(title).toBeInTheDocument();
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<AboutInfo {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
