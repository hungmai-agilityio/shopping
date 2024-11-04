import { render } from '@testing-library/react';

// Components
import { Brand } from '@/ui/components';

describe('Brand component', () => {
  test('should be render match to snapshot', () => {
    const { container } = render(<Brand src="brand-1.svg" alt="brand" />);

    expect(container).toMatchSnapshot();
  });
});
