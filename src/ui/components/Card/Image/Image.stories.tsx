import { Meta, StoryObj } from '@storybook/react';

// Components
import CardImage from '@/ui/components/Card/Image';

const meta: Meta<typeof CardImage> = {
  component: CardImage,
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
    title: {
      description: 'Title is descriptive or promotional '
    },
    isTitleLeft: {
      description:
        'Displays the title line on the left (default is on the right)'
    },
    autoSize: {
      description:
        'Display the image according to the size of the parent tag without `width`, `height` props'
    },
    isBlur: {
      description:
        'To be used as a placeholder image before the src image successfully loads.'
    }
  }
};

export default meta;
type Story = StoryObj<typeof CardImage>;

export const Default: Story = {
  args: {
    src: 'https://i.ibb.co/52YmKP4/jean-3-1.webp',
    alt: 'Jean Image',
    width: 590,
    height: 349
  }
};

export const Second: Story = {
  args: {
    title: 'sadsadsada\n'
  },

  render: () => {
    return (
      <div className="flex w-[590px] h-[349px]">
        <CardImage
          src="https://i.ibb.co/52YmKP4/jean-3-1.webp"
          alt="Jean Image"
          title="Jean Title"
          isTitleLeft
          autoSize
          isBlur
        />
      </div>
    );
  }
};
