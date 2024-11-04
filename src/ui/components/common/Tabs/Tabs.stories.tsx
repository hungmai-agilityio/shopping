import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ITab } from '@/ui/components/common/Tabs/Tab';
import { Panel, Tabs } from '@/ui/components';

// Components

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    list: {
      description: 'Render dynamic react node children'
    },
    index: {
      description: 'Tab position order'
    },
    onClick: {
      description: 'Handle event when click '
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const list: Omit<ITab, 'index' | 'onClick'>[] = [
  {
    title: 'Tab 1',
    value: '1'
  },
  {
    title: 'Tab 2',
    value: '2'
  }
];

export const Default: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('1');

    const handleChangeTab = (event: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedTab(event.currentTarget.value);
    };

    return (
      <div>
        <Tabs list={list} index={selectedTab} onClick={handleChangeTab} />
        <Panel index={selectedTab} tabIndex="1">
          <div className="text-center">Content for Tab 1</div>
        </Panel>
        <Panel index={selectedTab} tabIndex="2">
          <div className="text-center">Content for Tab 2</div>
        </Panel>
      </div>
    );
  }
};
