import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Components
import Input from '@/ui/components/common/Input';

// Constants
import { TYPE } from '@/constants';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the input field',
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Placeholder text inside the input field',
      control: { type: 'text' }
    },
    value: {
      description: 'Value of the input field',
      control: { type: 'text' }
    },
    variant: {
      description: 'Style variant of the input field',
      options: [TYPE.PRIMARY, TYPE.SECOND, TYPE.THIRD],
      control: { type: 'radio' }
    },
    type: {
      description: 'HTML type of the input field',
      options: ['text', 'password', 'email', 'number'],
      control: { type: 'select' }
    },
    icon: {
      description: 'Optional icon to display on the input field',
      control: { type: 'text' }
    },
    message: {
      description: 'Error or helper message below the input',
      control: { type: 'text' }
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: { type: 'boolean' }
    },
    onClick: {
      description: 'Event handler for when the icon is clicked'
    },
    rows: {
      description: 'Number of rows for a textarea',
      control: { type: 'number' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    const [textInput, setTextInput] = useState('');

    const handleTextInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setTextInput(event.target.value);
    };

    return (
      <Input
        label="Text Input"
        placeholder="Enter some text"
        value={textInput}
        onChange={handleTextInputChange}
        variant={TYPE.PRIMARY}
        message="This field is required"
      />
    );
  }
};

export const WithMessage: Story = {
  render: () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };

    return (
      <Input
        label="Email"
        placeholder="Enter your email"
        variant={TYPE.SECOND}
        type="email"
        value={email}
        onChange={handleEmailChange}
        message={email ? '' : 'This field is required'}
        disabled={false}
      />
    );
  }
};

export const WithIcon: Story = {
  render: () => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setPassword(event.target.value);
    };

    return (
      <Input
        label="Password"
        placeholder="value..."
        variant={TYPE.PRIMARY}
        type="password"
        icon="/eye-show.svg"
        onChange={handlePasswordChange}
        onClick={() => alert('Icon clicked!')}
        value={password}
        message={password ? '' : 'Start typing...'}
      />
    );
  }
};

export const Textarea: Story = {
  render: () => {
    const [comments, setComments] = useState('');

    const handleCommentsChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setComments(event.target.value);
    };

    return (
      <Input
        label="Comments"
        placeholder="Write your comments..."
        variant={TYPE.THIRD}
        type="text"
        rows={4}
        value={comments}
        onChange={handleCommentsChange}
        message={comments.length > 20 ? 'Maximum 20 characters' : ''}
      />
    );
  }
};
