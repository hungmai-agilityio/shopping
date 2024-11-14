import { Meta, StoryObj } from '@storybook/react';
import { ModalDelete } from '@/ui/components';

const meta: Meta<typeof ModalDelete> = {
  component: ModalDelete,
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
    }
  }
};

export default meta;

type Story = StoryObj<typeof ModalDelete>;

export const Default: Story = {
  args: {
    onClose: () => alert('Close modal'),
    isOpen: true,
    onClick: () => alert('Confirm')
  }
};
