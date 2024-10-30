import type { Meta, StoryObj } from '@storybook/react';

// Components
import UserAction from '@/ui/components/UserAction';
import { QueryProvider } from '@/Provider';

const meta: Meta<typeof UserAction> = {
  component: UserAction,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  decorators: [(Story) => <QueryProvider>{Story()}</QueryProvider>],
  argTypes: {
    styles: {
      description: 'Custom CSS classes to style the UserAction component.',
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof UserAction>;

export const Default: Story = {
  args: {
    styles: 'flex gap-6'
  }
};
