import { Meta, StoryObj } from '@storybook/react';
import { mockImage } from '@/mocks';
import { Carousel } from '@/ui/components';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
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
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: mockImage
  }
};
