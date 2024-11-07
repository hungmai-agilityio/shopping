import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Sections
import Footer from '@/ui/sections/Footer';

// Libs
import { checkUserLogged } from '@/libs';

jest.mock('@/libs', () => ({
  checkUserLogged: jest.fn()
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

describe('Footer Component', () => {
  const mockPush = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    });
  });

  it('displays the Login Now button when the user is not logged in', async () => {
    (checkUserLogged as jest.Mock).mockResolvedValueOnce(false);

    const result = await Footer();
    render(result);

    const loginButton = await screen.findByRole('button', {
      name: /Login Now/i
    });
    expect(loginButton).toBeInTheDocument();
  });
});
