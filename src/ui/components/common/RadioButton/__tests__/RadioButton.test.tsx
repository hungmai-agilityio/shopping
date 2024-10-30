import { fireEvent, render, screen } from '@testing-library/react';

// Components
import RadioButton from '@/ui/components/common/RadioButton';

describe('RadioButton component', () => {
  const defaultProps = {
    id: '1',
    checked: false,
    label: 'radio button',
    name: '',
    value: '',
    onChange: jest.fn()
  };

  it('Should be render with checked', () => {
    render(<RadioButton {...defaultProps} checked />);

    const checkbox = screen.getByRole('radio') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<RadioButton {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
