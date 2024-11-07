import { render, screen } from '@testing-library/react';

// Mocks
import { mockUser } from '@/mocks';

// Sections
import CardUpload from '@/ui/sections/Profile/CardUpload';

jest.mock('@tanstack/react-query');

describe('CardUpload Component', () => {
  beforeEach(() => {
    require('@tanstack/react-query').useQuery.mockReturnValue({
      data: mockUser,
      isLoading: false,
      isError: false
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders user information correctly', async () => {
    render(<CardUpload user={mockUser} />);

    expect(screen.getByText('User Client')).toBeInTheDocument();
    expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
  });
});
