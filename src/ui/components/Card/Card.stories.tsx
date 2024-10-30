import type { Meta, StoryObj } from '@storybook/react';
import { TYPE } from '@/constants';

import Card from '@/ui/components/Card';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    photo: {
      description: 'Image to render for the avatar',
      control: { type: 'text' }
    },
    name: {
      description: 'Name of the person',
      control: { type: 'text' }
    },
    variant: {
      description: 'Type of card - `comment` or `contact`',
      control: { type: 'radio' }
    },
    role: {
      description: "Commentator's position (used only for `comment` variant)",
      control: { type: 'text' }
    },
    comment: {
      description: 'Comment content (used only for `comment` variant)',
      control: { type: 'text' }
    },
    desc: {
      description: 'Description text (used only for `contact` variant)',
      control: { type: 'text' }
    },
    mail: {
      description: 'Email of the contact (used only for `contact` variant)',
      control: { type: 'text' }
    },
    phone: {
      description:
        'Phone number of the contact (used only for `contact` variant)',
      control: { type: 'text' }
    },
    width: {
      description: 'Avatar width (default: 32)',
      control: { type: 'number' }
    },
    height: {
      description: 'Avatar height (default: 32)',
      control: { type: 'number' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CommentCard: Story = {
  args: {
    photo: 'https://i.ibb.co/f9kLWFd/comment-2.webp',
    name: 'User',
    variant: TYPE.COMMENT,
    role: 'Client',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
};

export const ContactCard: Story = {
  args: {
    photo: '/call.svg',
    name: 'Jane Smith',
    variant: TYPE.CONTACT,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    mail: 'jane.smith@xyz.com',
    phone: '(021) 123456789'
  }
};
