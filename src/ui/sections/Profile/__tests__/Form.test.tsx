import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';

// Stores
import { useUserStore } from '@/stores';

// Mocks
import { mockUser } from '@/mocks';

// Sections
import ProfileForm from '@/ui/sections/Profile/Form';

jest.mock('@tanstack/react-query');

jest.mock('@/stores', () => ({
  useUserStore: jest.fn()
}));

describe('ProfileForm Component', () => {
  const setUser = jest.fn();

  beforeEach(() => {
    (useUserStore as unknown as jest.Mock).mockReturnValue({ setUser });
    (useQuery as jest.Mock).mockReturnValue({
      data: mockUser,
      isLoading: false,
      isError: false
    });
    jest.clearAllMocks();
  });

  test('renders form with pre-filled user data', async () => {
    render(<ProfileForm user={mockUser} />);

    expect(screen.getByPlaceholderText('Enter your first name')).toHaveValue(
      mockUser.firstName
    );
    expect(screen.getByPlaceholderText('Enter your street')).toHaveValue(
      mockUser.street
    );
    expect(screen.getByPlaceholderText('Enter your address')).toHaveValue(
      mockUser.address
    );
    expect(screen.getByPlaceholderText('Enter your phone number')).toHaveValue(
      mockUser.phone
    );
    expect(screen.getByRole('radio', { name: 'Male' })).toHaveClass(
      'accent-second h-4 w-4 cursor-pointer mr-2'
    );
  });
});
