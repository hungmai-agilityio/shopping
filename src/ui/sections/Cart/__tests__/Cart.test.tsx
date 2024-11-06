import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Sections
import CartSection from '@/ui/sections/Cart';

// Mocks
import { mockCart, mockProducts, mockUser } from '@/mocks';

// Libs
import { getUserCart } from '@/libs';

const queryClient = new QueryClient();

jest.mock('@/libs', () => ({
  getUserCart: jest.fn()
}));

describe('CartSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders empty cart image when cart data is empty', () => {
    (getUserCart as jest.Mock).mockResolvedValue([]);

    render(
      <QueryClientProvider client={queryClient}>
        <CartSection productData={mockProducts} user={mockUser} />
      </QueryClientProvider>
    );

    expect(screen.getByAltText('cart-empty')).toBeInTheDocument();
  });

  test('renders cart items and total price', async () => {
    (getUserCart as jest.Mock).mockResolvedValue(mockCart);

    render(
      <QueryClientProvider client={queryClient}>
        <CartSection productData={mockProducts} user={mockUser} />
      </QueryClientProvider>
    );

    expect(await screen.findByText('Cart Products')).toBeInTheDocument();
    expect(await screen.findByText('Basic T-Shirt')).toBeInTheDocument();
  });
});
