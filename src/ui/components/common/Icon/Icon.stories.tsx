import { Meta, StoryObj } from '@storybook/react';

// Components
import Icon from '@/ui/components/common/Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
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

    isBadge: {
      description: 'Attribute for users to choose whether to show badges or not'
    },

    badgeCount: {
      description: 'The number that the badge shows'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    src: '/user.svg',
    alt: 'Cart Icon',
    width: 24,
    height: 24,
    onClick: () => {
      alert(123);
    }
  }
};

export const HasBadge: Story = {
  args: {
    src: '/bag.svg',
    alt: 'Cart Icon',
    width: 24,
    height: 24,
    isBadge: true,
    badgeCount: 3,
    onClick: () => {
      alert(123);
    }
  }
};

export const NotAction: Story = {
  args: {
    src: '/star.svg',
    alt: 'Cart Icon',
    width: 106,
    height: 18
  }
};
