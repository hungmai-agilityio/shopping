import { useState } from 'react';
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
    labelColor: {
      description: 'Set color for label',
      control: 'text'
    },
    selectedColor: {
      description: 'Color that is currently selected',
      control: 'text'
    },
    onClick: {
      description: 'Callback when color changes',
      action: 'colorChanged'
    }
  }
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState<string>(
      mockProducts[0].colors[0]
    );

    const handleColorChange = (color: string) => {
      setSelectedColor(color);
    };

    return (
      <ColorPicker
        colors={mockProducts[0].colors}
        selectedColor={selectedColor}
        onClick={handleColorChange}
      />
    );
  }
};
