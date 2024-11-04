import { render } from '@testing-library/react';
import { CardProductSkeleton } from '@/ui/components';

describe('Skeleton Card product component', () => {
  test('should be render match to snapshot', () => {
    const { container } = render(<CardProductSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
