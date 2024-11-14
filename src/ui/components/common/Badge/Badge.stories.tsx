import { Meta, StoryObj } from '@storybook/react';

// Components
import Badge from '@/ui/components/common/Badge';
import Icon from '@/ui/components/common/Icon';

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    quantity: {
      description: 'Display quantity'
    },
    children: {
      description: 'Content or icon show badge'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    quantity: 10,
    children: <Icon src="/cart.svg" alt="cart" width={24} height={24} />
  }
};
