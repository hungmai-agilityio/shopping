import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import Dropdown from '@/ui/components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    styles: {
      description: 'Custom css for dropdown container',
      control: 'text'
    },
    children: {
      description: 'Content inside the dropdown',
      control: 'text'
    },
    isNoteVisible: {
      description: 'Controls visibility of the dropdown',
      control: 'boolean'
    },
    setIsNoteVisible: {
      description: 'Function to toggle dropdown visibility'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => {
    const [isNoteVisible, setIsNoteVisible] = useState<boolean>(false);

    return (
      <Dropdown
        {...args}
        isNoteVisible={isNoteVisible}
        setIsNoteVisible={setIsNoteVisible}
      >
        <p>{args.children}</p>
      </Dropdown>
    );
  },
  args: {
    children: 'Content inside the dropdown'
  }
};
