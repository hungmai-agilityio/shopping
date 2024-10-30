import { Meta, StoryObj } from '@storybook/react';

// Components
import { Category } from '@/ui/components/Category';

// Mocks
import { mockTitleCategories } from '@/mocks';

const meta: Meta<typeof Category> = {
  component: Category,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    categories: {
      description: 'List category'
    },
    queryParam: {
      description: 'param to pass in the URL to differentiate the queries'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {
    categories: mockTitleCategories,
    queryParam: 'category'
  }
};
