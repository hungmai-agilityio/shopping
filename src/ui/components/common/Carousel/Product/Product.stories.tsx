import { Meta, StoryObj } from '@storybook/react';

// Mocks
import { mockProducts } from '@/mocks';

// Components
import { CarouselProduct } from '@/ui/components';

const meta: Meta<typeof CarouselProduct> = {
  component: CarouselProduct,
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
type Story = StoryObj<typeof CarouselProduct>;

export const Default: Story = {
  args: {
    products: mockProducts,
    onOrder: () => alert('Move to order product')
  }
};
