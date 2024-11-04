import { render, screen } from '@testing-library/react';

// Components
import { Card } from '@/ui/components';

// Constants
import { TYPE } from '@/constants';

describe('Card component', () => {
  const commentProps = {
    photo: 'https://i.ibb.co/f9kLWFd/comment-2.webp',
    name: 'account123',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    role: 'client'
  };

  const contactProps = {
    photo: 'https://i.ibb.co/Jv5m9bT/contact.webp',
    name: 'Jane Smith',
    desc: 'Project Manager at XYZ Company',
    mail: 'jane.smith@xyz.com',
    phone: '+123456789'
  };

  it('renders Card comment component with default props', () => {
    render(<Card {...commentProps} variant={TYPE.COMMENT} />);
    const name = screen.getByText(commentProps.name);
    const role = screen.getByText(commentProps.role);

    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });

  it('renders Card contact component with default props', () => {
    render(<Card {...contactProps} variant={TYPE.CONTACT} />);
    const name = screen.getByText(contactProps.name);
    const desc = screen.getByText(contactProps.desc);

    expect(name).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  it('matches snapshot for comment variant', () => {
    const { container } = render(
      <Card {...commentProps} variant={TYPE.COMMENT} />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot for contact variant', () => {
    const { container } = render(
      <Card {...contactProps} variant={TYPE.CONTACT} />
    );
    expect(container).toMatchSnapshot();
  });
});
