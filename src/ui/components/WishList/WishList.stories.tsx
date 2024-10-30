import { Meta, StoryObj } from '@storybook/react';

// Components
import WishList from '@/ui/components/WishList';
import { mockProducts, mockWishlist } from '@/mocks';

const meta: Meta<typeof WishList> = {
  component: WishList,
  tags: ['autodocs'],

  argTypes: {
    data: {
      description: 'List of products displayed in wishlist'
    },
    products: {
      description: 'List products for find and render data info'
    },
    onAddCart: {
      description: 'Function to handle when clicking the "Add to Cart" button'
    },
    onDelete: {
      description:
        'Function to handle when clicking on the product deletion icon'
    }
  }
};

export default meta;

type Story = StoryObj<typeof WishList>;

export const Default: Story = {
  args: {
    data: mockWishlist,
    products: mockProducts,
    onAddCart: (id) => console.log(`Add to cart: ${id}`),
    onDelete: (id) => console.log(`Delete item: ${id}`)
  }
};

export const Empty: Story = {
  args: {
    data: [],
    products: mockProducts,
    onAddCart: (id) => console.log(`Add to cart: ${id}`),
    onDelete: (id) => console.log(`Delete item: ${id}`)
  }
};
