import { Meta, StoryObj } from '@storybook/react';
import { mockProducts } from '@/mocks';

import { ColorPicker } from '@/ui/components';

const meta: Meta<typeof ColorPicker> = {
  component: ColorPicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    colors: {
      description: 'List colors'
    },
    isTitle: {
      description: 'Check to show title',
      control: 'boolean'
    },
    titleColor: {
      description: 'Set color for title',
      control: 'text'
    },
    onClick: {
      description: 'Handles color selection'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    colors: mockProducts[0].colors,
    isTitle: true
  }
};
