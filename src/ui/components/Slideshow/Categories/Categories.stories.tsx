import { Meta, StoryObj } from '@storybook/react';

// Mock data
import { mockCategories } from '@/mocks';

// Components
import SlideCategories from '@/ui/components/Slideshow/Categories';

const meta: Meta<typeof SlideCategories> = {
  component: SlideCategories,
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
type Story = StoryObj<typeof SlideCategories>;

export const Default: Story = {
  args: {
    categories: mockCategories
  }
};
