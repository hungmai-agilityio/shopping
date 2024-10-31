import { Meta, StoryObj } from '@storybook/react';

// Components
import Brand from '@/ui/components/common/Brand';

const meta: Meta<typeof Brand> = {
  component: Brand,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    src: {
      description: 'Image to render'
    },
    alt: {
      description: 'Describes the image and shows if the image is corrupted'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  args: {
    src: '/brand-1.svg',
    alt: 'brand'
  }
};
