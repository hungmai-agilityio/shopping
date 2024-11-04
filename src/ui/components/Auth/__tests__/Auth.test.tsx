import AuthForm from '@/ui/components/Auth';
import { render } from '@testing-library/react';

describe('Auth component', () => {
  const defaultProps = {
    title: 'Form',
    subtitle: 'Sub form',
    backgroundImage: '/product.webp',
    children: 'form login'
  };
  test('should be render match to snapshot', () => {
    const { container } = render(<AuthForm {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
