import { Meta, StoryObj } from '@storybook/react';

// Components
import CartCheckout from '@/ui/components/Cart/Checkout';

const meta: Meta<typeof CartCheckout> = {
  component: CartCheckout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    products: {
      description: 'Total products',
      control: { type: 'number' }
    },
    total: {
      description: 'Total price of the products',
      control: { type: 'number' }
    },
    onCheckout: {
      description: 'payment processing function'
    }
  }
};

export default meta;

type Story = StoryObj<typeof CartCheckout>;

export const Default: Story = {
  args: {
    products: 4,
    total: 160,
    onCheckout: () => alert('Checkout!')
  }
};
