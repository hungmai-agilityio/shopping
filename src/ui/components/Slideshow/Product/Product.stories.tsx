import { Meta, StoryObj } from '@storybook/react';

// Mocks
import { mockProducts } from '@/mocks';

// Components
import SlideProduct from '@/ui/components/Slideshow/Product';

const meta: Meta<typeof SlideProduct> = {
  component: SlideProduct,
  tags: ['autodocs'],

  argTypes: {
    products: {
      description: 'List image for slide show'
    },
    onOrder: {
      description: 'Handle order product'
    }
  }
};

export default meta;
type Story = StoryObj<typeof SlideProduct>;

export const Default: Story = {
  args: {
    products: mockProducts,
    onOrder: () => alert('Move to order product')
  }
};
