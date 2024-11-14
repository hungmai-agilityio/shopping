import { Meta, StoryObj } from '@storybook/react';
import ToastMessage from '.';
import { POSITION, STATUS } from '@/constants';

const meta: Meta<typeof ToastMessage> = {
  component: ToastMessage,
  tags: ['autodocs'],
  argTypes: {
    status: {
      description: 'Set status for toast'
    },
    message: {
      description: 'Message to show'
    },
    position: {
      description: 'Set the position for Toast to display'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ToastMessage>;

export const Success: Story = {
  args: {
    status: STATUS.SUCCESS,
    message: 'show message success',
    position: POSITION.TOP_RIGHT
  }
};

export const Error: Story = {
  args: {
    status: STATUS.ERROR,
    message: 'show message error',
    position: POSITION.TOP_LEFT
  }
};

export const WarningRight: Story = {
  args: {
    status: STATUS.WARNING,
    message: 'show message warning',
    position: POSITION.BOT_RIGHT
  }
};

export const WarningLeft: Story = {
  args: {
    status: STATUS.WARNING,
    message: 'show message warning',
    position: POSITION.BOT_LEFT
  }
};
