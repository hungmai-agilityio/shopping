import { Meta, StoryObj } from '@storybook/react';

// Components
import Breadcrumb from '@/ui/components/common/BreadCrumb';

// Mock data
import { mockBreadCrumb } from '@/mocks';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items containing label and href',
      control: { type: 'object' }
    },

    separator: {
      description: 'Character or icon used to separate breadcrumb items',
      control: { type: 'text' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: mockBreadCrumb,
    separator: '/',
  }
};

export const Custom: Story = {
  args: {
    items: mockBreadCrumb,
    separator: '>',
    color: 'text-pink-500'
  }
};
