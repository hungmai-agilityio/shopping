import { mockProducts } from '@/mocks';
import ColorPicker from '@/ui/components/common/ColorPicker';
import { render, screen } from '@testing-library/react';

describe('Color picker component', () => {
  it('render with default props', () => {
    render(<ColorPicker colors={mockProducts[0].colors} />);
    expect(screen.getByText('Color')).toBeInTheDocument();
  });

  it('should render match to snapshot', () => {
    const { container } = render(
      <ColorPicker colors={mockProducts[0].colors} />
    );
    expect(container).toMatchSnapshot();
  });
});
