import { Meta, StoryObj } from '@storybook/react';

// Components
import Spinner from '@/ui/components/common/Loading/Spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {}
};
