import type { Meta, StoryObj } from '@storybook/react';
import { QueryProvider } from '@/Provider';

// Constants
import { navItems } from '@/constants';

// Components
import { BurgerMenu } from '@/ui/components';

const meta: Meta<typeof BurgerMenu> = {
  component: BurgerMenu,
  tags: ['autodocs'],
  decorators: [(Story) => <QueryProvider>{Story()}</QueryProvider>],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    items: {
      description: 'List item to render BurgerMenu'
    }
  }
};

export default meta;

type Story = StoryObj<typeof BurgerMenu>;

export const Default: Story = {
  args: {
    items: navItems
  }
};
