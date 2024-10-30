import { Meta, StoryObj } from '@storybook/react';

// Constant
import { FONT_SIZE, FONT_WEIGHT, TAG } from '@/constants';

//  Component
import Typography from '@/ui/components/common/Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    tag: {
      description: 'HTML Tag for the Typography component'
    },
    fontWeight: {
      description: 'Font weight for the text'
    },
    color: {
      description: 'Text color class (ex: `text-red-500`, `text-blue-700`)'
    },
    size: {
      description: 'Predefined text size based on the given constants'
    },
    children: {
      description: 'Content of the Typography component'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph text.',
    tag: TAG.P,
    fontWeight: FONT_WEIGHT.NORMAL,
    color: 'text-black',
    size: FONT_SIZE.SMALL
  }
};

export const Heading: Story = {
  args: {
    children: 'This is a Heading',
    tag: TAG.H1,
    fontWeight: FONT_WEIGHT.BOLD,
    color: 'text-purple-500',
    size: FONT_SIZE.LARGE
  }
};

export const Title: Story = {
  args: {
    children: 'This is a Title',
    tag: TAG.H3,
    fontWeight: FONT_WEIGHT.BOLD,
    color: 'text-green-500',
    size: FONT_SIZE.MEDIUM
  }
};

export const CustomText: Story = {
  args: {
    children: 'This is a custom styled text.',
    tag: TAG.SPAN,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: 'text-blue-600',
    size: FONT_SIZE.X_SMALL,
    className: 'italic underline'
  }
};
