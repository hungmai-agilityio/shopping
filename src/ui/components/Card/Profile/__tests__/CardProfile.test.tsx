import { render, screen, fireEvent } from '@testing-library/react';
import CardProfile from '@/ui/components/Card/Profile';

jest.mock('next/image', () => {
  return (props: any) => <img {...props} />;
});

describe('CardProfile component', () => {
  const defaultProps = {
    useName: 'John Doe',
    photo: '',
    detail: 'Software Engineer',
    onButtonClick: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<CardProfile {...defaultProps} />);

    expect(screen.getByText(defaultProps.useName)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.detail)).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.useName)).toBeInTheDocument();
  });

  it('should call onButtonClick when the button is clicked', () => {
    render(<CardProfile {...defaultProps} />);

    const button = screen.getByRole('button', { name: /update/i });
    fireEvent.click(button);

    expect(defaultProps.onButtonClick).toHaveBeenCalledTimes(1);
  });
});
