import { render, screen } from '@testing-library/react';

// Components
import ToastMessage from '@/ui/components/common/ToastMessage';
import { STATUS } from '@/constants';

describe('ToastMessage component', () => {
  const defaultProps = {
    status: STATUS.SUCCESS,
    message: 'Messages success'
  };

  it('Should be render with default props', () => {
    render(<ToastMessage {...defaultProps} />);
    const message = screen.getByText('Messages success');
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('bg-green-500');
  });

  it('should be render match to snapshot', () => {
    const { container } = render(<ToastMessage {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
