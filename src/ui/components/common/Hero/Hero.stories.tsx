import { mockBreadCrumb } from '@/mocks';
import Hero from '@/ui/components/common/Hero';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hero> = {
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Content to render inside Hero'
    },

    isBreadCrumb: {
      description: 'Show isBreadCrumb with data "items'
    },

    isHeroSecond: {
      description: 'Render another UI of Hero',
      control: { type: 'boolean' }
    },
    items: {
      description: 'Breadcrumb data, including name and path',
      control: { type: 'object' }
    },

    styles: {
      description: 'Custom css'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    items: mockBreadCrumb,
    children: <p className="text-white text-xl font-bold">Children</p>,
    isBreadCrumb: true
  }
};

export const Second: Story = {
  args: {
    items: mockBreadCrumb,
    children: <p className="text-white text-xl font-bold">Children</p>,
    isBreadCrumb: true,
    isHeroSecond: true
  }
};
