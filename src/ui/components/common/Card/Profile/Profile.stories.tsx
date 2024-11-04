import type { Meta, StoryObj } from '@storybook/react';
import { CardProfile } from '@/ui/components';

const meta: Meta<typeof CardProfile> = {
  component: CardProfile,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    photo: {
      description: 'Image to render for the avatar',
      control: { type: 'text' }
    },
    useName: {
      description: 'Name of the person',
      control: { type: 'text' }
    },
    detail: {
      description: 'Additional details about the user',
      control: { type: 'text' }
    },
    onButtonClick: {
      description: 'Function to handle button click',
      action: 'clicked'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardProfile>;

export const DefaultProfile: Story = {
  args: {
    photo: 'https://i.ibb.co/h1pRWGY/jacke2wwwt-5-2.webp',
    useName: 'John Doe'
  }
};

export const EmptyImage: Story = {
  args: {
    photo: '',
    useName: 'Jane Smith',
    detail: 'Designer at ABC Inc.'
  }
};
