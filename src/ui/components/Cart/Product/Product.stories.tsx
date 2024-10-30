import { Meta, StoryObj } from '@storybook/react';

// Components
import { CartProduct } from '@/ui/components';

import { mockCart, mockProducts } from '@/mocks';

const meta: Meta<typeof CartProduct> = {
  component: CartProduct,
  tags: ['autodocs'],

  argTypes: {
    carts: {
      description: 'List of products displayed in CartProduct'
    },
    products: {
      description: 'List of product for find and render data'
    },
    onSaveNote: {
      description: 'Function to handle when clicking the "Add note" button'
    },
    onDelete: {
      description:
        'Function to handle when clicking on the product deletion icon'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CartProduct>;

export const Default: Story = {
  args: {
    carts: mockCart,
    products: mockProducts,
    onSaveNote: (id: string, note: string) =>
      console.log(`Saved note for cart with id: ${id}: ${note}`),
    onDelete: (id) => console.log(`Delete item: ${id}`)
  }
};
