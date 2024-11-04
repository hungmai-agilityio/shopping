import type { Meta, StoryObj } from '@storybook/react';

// Components
import { NavItem } from '@/ui/components/common/Navbar/Item';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    name: {
      description: 'Name for the navigation bar item',
      control: { type: 'text' }
    },
    url: {
      description: 'path to go to a certain page ',
      control: { type: 'text' }
    },
    isActive: {
      description: 'Nav item active',
      control: { type: 'boolean' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    name: 'About',
    url: '/about'
  }
};

export const Active: Story = {
  args: {
    name: 'Home',
    url: '/',
    isActive: true
  }
};
