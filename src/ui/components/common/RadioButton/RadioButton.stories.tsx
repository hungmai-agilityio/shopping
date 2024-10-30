import { Meta, StoryObj } from '@storybook/react';

import RadioButton from '@/ui/components/common/RadioButton';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    checked: {
      description: 'Default value checked'
    },
    id: {
      description: 'Id of the radio station'
    },
    label: {
      description: 'Radio label'
    },
    value: {
      description: 'Set value of radio'
    },
    name: {
      description: 'Radio name'
    },
    onChange: {
      description: 'Handle change radio active'
    }
  }
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    checked: true,
    id: 'male',
    label: 'Male',
    name: 'gender'
  }
};
