import { Meta, StoryObj } from '@storybook/react';

// Components
import { CardSkeleton } from '@/ui/components';

const meta: Meta<typeof CardSkeleton> = {
  component: CardSkeleton
};

export default meta;

type Story = StoryObj<typeof CardSkeleton>;

export const Default: Story = {
  args: {}
};
