import { render } from '@testing-library/react';

// Components
import { Spinner } from '@/ui/components';

describe('Spinner component', () => {
  test('should be render match to snapshot', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
