import { Meta, StoryObj } from '@storybook/react';

// Mock data
import { mockCategories } from '@/mocks';

// section
import CategorySection from '@/ui/sections/Category';

const meta: Meta<typeof CategorySection> = {
  component: CategorySection,
  tags: ['autodocs'],
  argTypes: {
    categories: {
      description: 'List Categories for slide show'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CategorySection>;

export const Default: Story = {
  args: {
    categories: mockCategories
  }
};
