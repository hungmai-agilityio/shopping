import { Meta, StoryObj } from '@storybook/react';
import { ModalAuth } from '@/ui/components';

const meta: Meta<typeof ModalAuth> = {
  component: ModalAuth,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Open modal',
      control: 'boolean'
    },
    onClose: {
      description: 'Handle to close modal'
    },
    onClick: {
      description: 'Handle the action for the confirm button'
    },
    isLogged: {
      description:
        'Check if this modal performs a logout or authentication check'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ModalAuth>;

export const Default: Story = {
  args: {
    onClose: () => alert('Close modal'),
    isOpen: true,
    onClick: () => alert('Confirm')
  }
};

export const Logout: Story = {
  args: {
    onClose: () => alert('Close modal'),
    isOpen: true,
    onClick: () => alert('Confirm'),
    isLogged: true
  }
};
