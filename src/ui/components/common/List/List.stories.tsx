import { Meta, StoryObj } from '@storybook/react';

// Constants
import { itemsHome } from '@/constants';

// Components
import { List } from '@/ui/components';

const meta: Meta<typeof List> = {
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    heading: {
      description: 'Heading of list',
      control: { type: 'text' }
    },
    items: {
      description: 'List item to render Navbar'
    },
    color: {
      description: 'Set color for text (by tailwind css)',
      control: { type: 'text' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    items: itemsHome,
    color: 'text-green-500',
    heading: 'Home'
  }
};
