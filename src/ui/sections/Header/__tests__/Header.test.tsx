import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Libs
import { getUserFromCookie } from '@/libs';

// Sections
import { Header } from '@/ui/sections';

// Mocks
import { mockUser } from '@/mocks';

jest.mock('@/libs', () => ({
  getUserFromCookie: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn()
}));

const queryClient = new QueryClient();

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays the BurgerMenu when the user is logged out', async () => {
    (getUserFromCookie as jest.Mock).mockResolvedValueOnce(null);

    const result = await Header();
    render(
      <QueryClientProvider client={queryClient}>{result}</QueryClientProvider>
    );

    const burgerMenu = await screen.findByAltText('menu');

    expect(burgerMenu).toBeInTheDocument();
  });

  it('displays the UserAction components when the user is logged in', async () => {
    (getUserFromCookie as jest.Mock).mockResolvedValueOnce(mockUser);

    const result = await Header();
    render(
      <QueryClientProvider client={queryClient}>{result}</QueryClientProvider>
    );

    const userActions = await screen.getAllByAltText('user icon');

    expect(userActions.length).toBeGreaterThan(0);
    expect(userActions[0]).toBeInTheDocument();
  });
});
