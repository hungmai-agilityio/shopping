import { render, screen } from '@testing-library/react';

// Constants
import { TYPE } from '@/constants';

// Components
import Input from '@/ui/components/common/Input';

// Test Data
const propsDefault = {
  label: 'Text Input',
  placeholder: 'Enter some text',
  value: 'test value',
  onChange: jest.fn(),
  message: 'This is an error message'
};

describe('Input', () => {
  it('renders PRIMARY type input', () => {
    render(<Input {...propsDefault} variant={TYPE.PRIMARY} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      'focus:border focus:border-green-300 h-12'
    );
  });

  it('renders SECOND type input', () => {
    render(<Input {...propsDefault} variant={TYPE.SECOND} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('border border-gray-400 h-12');
  });

  it('renders type textarea', () => {
    render(<Input {...propsDefault} variant={TYPE.THIRD} rows={6} />);
    const textareaElement = screen.getByDisplayValue(
      'test value'
    ) as HTMLTextAreaElement;

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveClass('border border-gray-400 resize-none');
  });

  it('shows message when provided', () => {
    render(<Input {...propsDefault} message="This is an error message" />);

    const messageElement = screen.getByText('This is an error message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should render match to snapshot', () => {
    const { container } = render(
      <Input {...propsDefault} variant={TYPE.PRIMARY} />
    );
    expect(container).toMatchSnapshot();
  });
});
