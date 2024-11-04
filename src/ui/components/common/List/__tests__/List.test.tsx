import { render, screen } from '@testing-library/react';

// Constants
import { itemsHome } from '@/constants';

// Components
import { List } from '@/ui/components';

describe('List component', () => {
  const defaultProps = {
    heading: 'Home',
    color: 'text-white',
    items: itemsHome
  };
  it('render list with default props', () => {
    render(<List {...defaultProps} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = render(<List {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
