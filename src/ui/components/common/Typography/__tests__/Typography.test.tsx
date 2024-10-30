// Constants
import { FONT_SIZE, FONT_WEIGHT, TAG } from '@/constants';
import Typography from '@/ui/components/common/Typography';
import { render, screen } from '@testing-library/react';

describe('Typography component', () => {
  const defaultProps = {
    children: 'This is a default paragraph text.',
    tag: TAG.P,
    fontWeight: FONT_WEIGHT.NORMAL,
    color: 'text-black',
    size: FONT_SIZE.SMALL
  };

  it('render with default props', () => {
    render(<Typography {...defaultProps} />);
    const typo = screen.getByText('This is a default paragraph text.');
    expect(typo).toBeInTheDocument();
    expect(typo).toHaveClass('font-normal text-black');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<Typography {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
