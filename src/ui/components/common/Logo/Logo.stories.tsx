import type { Meta, StoryObj } from '@storybook/react';

// Components
import Logo from '@/ui/components/common/Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },

  argTypes: {
    src: {
      description: 'Image to render'
    },

    alt: {
      description: 'Describes the image and shows if the image is corrupted'
    },

    width: {
      description: 'Width for images'
    },
    height: {
      description: 'Height for images'
    },
    url: {
      description: 'path to a certain location'
    },
    color: {
      description: 'Text color class (ex: `text-red-500`, `text-blue-700`)'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    src: '/logo.svg',
    alt: 'web',
    width: 35,
    height: 35,
    title: 'mangcoding Store'
  }
};
