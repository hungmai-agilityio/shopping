import { Meta, StoryObj } from '@storybook/react';

// Components
import { WishList } from '@/ui/components';

// Mock Data
import { mockProduct, mockWishlist } from '@/mocks';

const meta: Meta<typeof WishList> = {
  component: WishList,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique identifier for the wishlist item'
    },
    productId: {
      description: 'Unique identifier for the product'
    },
    image: {
      description: 'URL of the product image'
    },
    nameProduct: {
      description: 'Name of the product'
    },
    price: {
      description: 'Price of the product in USD'
    },
    stoct: {
      description: 'Stock status of the product'
    },
    isDisable: {
      description: 'Disables the "Add to Cart" button if true'
    },
    onAddCart: {
      description: 'Function to handle adding the product to the cart'
    },
    onDelete: {
      description: 'Function to handle deleting the product from the wishlist'
    }
  }
};

export default meta;

type Story = StoryObj<typeof WishList>;

export const Default: Story = {
  args: {
    id: mockWishlist[0].id,
    productId: mockWishlist[0].productId,
    image: mockProduct.image,
    nameProduct: mockProduct.name,
    price: mockProduct.price,
    stoct: mockProduct.stoct,
    isDisable: false,
    onAddCart: (id) => console.log(`Add to cart: ${id}`),
    onDelete: (id) => console.log(`Delete item: ${id}`)
  }
};

export const Disabled: Story = {
  args: {
    id: mockWishlist[0].id,
    productId: mockWishlist[0].productId,
    image: mockProduct.image,
    nameProduct: mockProduct.name,
    price: mockProduct.price,
    stoct: mockProduct.stoct,
    isDisable: true,
    onAddCart: (id) => console.log(`Add to cart: ${id}`),
    onDelete: (id) => console.log(`Delete item: ${id}`)
  }
};
