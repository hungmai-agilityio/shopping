import type { Meta, StoryObj } from '@storybook/react';
import { QueryProvider } from '@/Provider';
import Header from '@/ui/sections/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  decorators: [(Story) => <QueryProvider>{Story()}</QueryProvider>],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {}
};
