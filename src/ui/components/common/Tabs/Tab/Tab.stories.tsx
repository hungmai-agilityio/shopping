// library
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tab } from '@/ui/components/common/Tabs/Tab';

const meta: Meta<typeof Tab> = {
  component: Tab,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    value: '1',
    title: 'Item one'
  }
};

export const TabActive: Story = {
  args: {
    value: '1',
    title: 'Item one',
    selected: '1'
  }
};
