// Components
import { Tab, ITab } from '@/ui/components/Tabs/Tab';

interface TabsProps {
  list: Omit<ITab, 'index' | 'onClick'>[];
  index: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tabs = ({ list, onClick, index }: TabsProps) => (
  <div className="flex justify-center gap-10 items-center">
    {list.map((item) => (
      <Tab
        key={item.value}
        value={item.value}
        title={item.title}
        index={index}
        onClick={onClick}
      />
    ))}
  </div>
);

export default Tabs;
