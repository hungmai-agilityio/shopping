import { mockImage } from '@/mocks';
import Slideshow from '@/ui/components/Slideshow';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Slideshow> = {
  component: Slideshow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    images: {
      description: 'List image for slide show'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Slideshow>;

export const Default: Story = {
  args: {
    images: mockImage
  }
};
