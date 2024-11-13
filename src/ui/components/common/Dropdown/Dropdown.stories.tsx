import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Components
import { Dropdown } from '@/ui/components';

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
    isOpen: {
      description: 'Controls visibility of the dropdown',
      control: 'boolean'
    },
    setVisible: {
      description: 'Function to toggle dropdown visibility'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setVisible] = useState<boolean>(false);

    return (
      <Dropdown {...args} isOpen={isOpen} setVisible={setVisible}>
        <p>{args.children}</p>
      </Dropdown>
    );
  },
  args: {
    children: 'Content inside the dropdown'
  }
};
