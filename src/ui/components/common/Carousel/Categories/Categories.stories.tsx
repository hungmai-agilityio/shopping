import { Meta, StoryObj } from '@storybook/react';

// Mock data
import { mockCategories } from '@/mocks';

// Components
import { CarouselCategories } from '@/ui/components';

const meta: Meta<typeof CarouselCategories> = {
  component: CarouselCategories,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    categories: {
      description: 'List Categories for slide show'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CarouselCategories>;

export const Default: Story = {
  args: {
    categories: mockCategories
  }
};
