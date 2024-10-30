import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { navItems } from '@/constants';
import Quantity from '@/ui/components/common/Quantity';

// Components

const meta: Meta<typeof Quantity> = {
  component: Quantity,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    value: {
      description: 'value Quantity'
    },
    isBorder: {
      description: 'set border'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Quantity>;

export const Default: Story = {
  args: {
    value: 2
  }
};

export const Second: Story = {
  args: {
    value: 2,
    isBorder: true
  }
};
