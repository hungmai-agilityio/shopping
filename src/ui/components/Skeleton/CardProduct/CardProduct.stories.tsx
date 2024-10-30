import { Meta, StoryObj } from '@storybook/react';

// Components
import CardProductSkeleton from '@/ui/components/Skeleton/CardProduct';

const meta: Meta<typeof CardProductSkeleton> = {
  component: CardProductSkeleton,

  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof CardProductSkeleton>;

export const Default: Story = {
  args: {}
};
