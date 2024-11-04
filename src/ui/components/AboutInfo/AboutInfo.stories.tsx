import type { Meta, StoryObj } from '@storybook/react';

// Components
import { AboutInfo } from '@/ui/components';

const meta: Meta<typeof AboutInfo> = {
  component: AboutInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    title: {
      description: 'About section title',
      control: 'text'
    },
    desc: {
      description: 'Description content',
      control: 'text'
    },
    aboutName: {
      description: 'The name of the object or event',
      control: 'text'
    },
    src: {
      description: 'Image path',
      control: 'text'
    },
    isReverse: {
      description: 'Adjust layout orientation',
      control: 'boolean'
    },
    styles: {
      description: 'Custom css',
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<typeof AboutInfo>;

export const Default: Story = {
  args: {
    title: 'About Our Team',
    desc: 'Meet the team behind the success of our company...',
    aboutName: 'Our Team',
    src: '/store1.webp',
    isReverse: false,
    styles: 'bg-gray-100 p-6 rounded-md'
  }
};

export const ReverseLayout: Story = {
  args: {
    src: '/store2.webp',
    title: 'Our Mission',
    aboutName: 'Mangcoding Store',
    isReverse: true,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
};
