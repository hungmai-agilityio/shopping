import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardProduct } from '@/ui/components';

const meta: Meta<typeof CardProduct> = {
  component: CardProduct,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    id: {
      description: 'Id of product'
    },
    photo: {
      description: 'Image to render for the product',
      control: { type: 'text' }
    },
    name: {
      description: 'Name of the product',
      control: { type: 'text' }
    },

    price: {
      description: 'Price of product',
      control: { type: 'number' }
    },
    rating: {
      description: 'Number of customer reviews',
      control: { type: 'text' }
    },
    sell: {
      description: 'Indicator of whether this product is selling well or not',
      control: { type: 'text' }
    },
    onClick: {
      description: 'Handle click on card'
    },
    onFavorite: {
      description: 'Handle click to icon and add to wishlist'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardProduct>;

export const Default: Story = {
  args: {
    id: 'i7g6i9i2-8f89-6h15-9i0e-6j2f7j33g6i6',
    photo: 'https://i.ibb.co/3d7b9SB/jean-2.webp',
    name: 'Product name',
    price: 23,
    rating: '10k',
    sell: 'Best seller',
    onClick: () => {
      alert('Click Card');
    },
    onFavorite: () => {
      alert('Click Favorite');
    }
  }
};
