import { Meta, StoryObj } from '@storybook/react';

// Components
import Button from '@/ui/components/common/Button';

// Constants
import { SIZE, TYPE } from '@/constants';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      description: 'Name of the button or Content inside '
    },
    variant: {
      description: 'Set type optional for Button'
    },
    onClick: {
      description: 'Handle the event when clicking on the button'
    },

    disabled: {
      description: 'Set disabled button'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.PRIMARY,
    onClick: () => alert('submit')
  }
};

export const Secondary: Story = {
  args: {
    children: 'Submit',
    variant: TYPE.SECOND,
    onClick: () => alert('submit')
  }
};

export const Third: Story = {
  args: {
    children: 'M',
    variant: TYPE.THIRD,
    size: SIZE.SMALL
  }
};

export const Large: Story = {
  parameters: {
    layout: 'left'
  },
  args: {
    children: 'Submit',
    variant: TYPE.PRIMARY,
    size: SIZE.LARGE,
    onClick: () => alert('submit')
  }
};

export const Disabled: Story = {
  args: {
    children: 'Send',
    disabled: true
  }
};
