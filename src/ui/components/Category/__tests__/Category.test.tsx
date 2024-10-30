import { render, screen } from '@testing-library/react';

// Components
import { Category } from '@/ui/components/Category';

// Mock useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  }),
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue(null),
    toString: () => ''
  })
}));

describe('Category Component', () => {
  const categories = ['Category1', 'Category2', 'Category3'];

  it('should render categories', () => {
    render(<Category categories={categories} queryParam="query" />);

    categories.forEach((category) => {
      const elements = screen.queryAllByText(category);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('Should match snapshot', () => {
    const { container } = render(
      <Category categories={categories} queryParam="query" />
    );
    expect(container).toMatchSnapshot();
  });
});
