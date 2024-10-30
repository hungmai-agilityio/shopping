import { Meta, StoryObj } from '@storybook/react';
import ToastMessage from '.';
import { STATUS } from '@/constants';

const meta: Meta<typeof ToastMessage> = {
  component: ToastMessage,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Set status for toast'
    },
    message: {
      description: 'Message to show'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ToastMessage>;

export const Success: Story = {
  args: {
    status: STATUS.SUCCESS,
    message: 'show message success'
  }
};

export const Error: Story = {
  args: {
    status: STATUS.ERROR,
    message: 'show message error'
  }
};

export const Warning: Story = {
  args: {
    status: STATUS.WARNING,
    message: 'show message warning'
  }
};
