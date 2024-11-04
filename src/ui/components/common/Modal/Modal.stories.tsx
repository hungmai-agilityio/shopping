import { Modal } from '@/ui/components';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    buttonName: {
      description: 'name of Button confirm',
      control: 'text'
    },
    children: {
      description: 'Content in modal'
    },
    isConfirm: {
      description: 'A confirmation button will be displayed',
      control: 'boolean'
    },
    isOpen: {
      description: 'Open modal',
      control: 'boolean'
    },
    onClose: {
      description: 'Handle to close modal'
    },
    onConfirm: {
      description: 'Handle the action for the confirm button'
    },
    title: {
      description: 'Title for modal'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    onClose: () => alert('Close modal'),
    children: 'This is content',
    isOpen: true,
    title: 'Modal Title'
  }
};

export const Confirm: Story = {
  args: {
    onClose: () => alert('Close modal'),
    children: 'This is content',
    isOpen: true,
    title: 'Modal Title',
    buttonName: 'Confirm',
    isConfirm: true,
    onConfirm: () => alert('Confirm')
  }
};
