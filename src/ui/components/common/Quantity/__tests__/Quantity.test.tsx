import Quantity from '@/ui/components/common/Quantity';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Quantity component', () => {
  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('render default props', () => {
    render(<Quantity value={3} />);
    expect(screen.getByText(3)).toBeInTheDocument();
  });

  it('handled when clicking on "minus"', () => {
    render(<Quantity value={3} />);
    const minus = screen.getByAltText('minus icon');
    fireEvent.click(minus);
    expect(screen.getByText(2)).toBeInTheDocument();
  });

  it('handled when clicking on "plus"', () => {
    render(<Quantity value={3} />);
    const plus = screen.getByAltText('plus icon');
    fireEvent.click(plus);
    expect(screen.getByText(4)).toBeInTheDocument();
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Quantity value={3} />);

    expect(container).toMatchSnapshot();
  });
});
