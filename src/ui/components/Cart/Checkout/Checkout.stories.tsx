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
    quantity: {
      description: 'Total products',
      control: { type: 'number' }
    },
    price: {
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
    quantity: 4,
    price: 160,
    onCheckout: () => alert('Checkout!')
  }
};
