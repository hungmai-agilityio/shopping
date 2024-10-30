import { fireEvent, render, screen } from '@testing-library/react';

// Constants
import { TYPE } from '@/constants';

// Components
import Button from '@/ui/components/common/Button';

describe('Button', () => {
  const onClickMock = jest.fn();

  it('renders button with default props', () => {
    render(<Button children="Test Button" variant={TYPE.PRIMARY} />);

    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('bg-gradient-primary text-white');
    expect(buttonElement).not.toBeDisabled();
  });

  it('renders button with variant prop', () => {
    render(<Button children="Test Button" variant={TYPE.SECOND} />);

    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toHaveClass('bg-white text-purple-500 font-bold');
  });

  it('button is disabled when disabled prop is true', () => {
    render(<Button children="Test Button" disabled />);

    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('cursor-not-allowed');
  });

  it('calls the onClick handler when clicked', () => {
    render(
      <Button variant={TYPE.SECOND} onClick={onClickMock}>
        Action
      </Button>
    );

    const buttonElement = screen.getByRole('button', { name: /action/i });
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(
      <Button children="Click me" variant={TYPE.PRIMARY} />
    );

    expect(container).toMatchSnapshot();
  });
});
