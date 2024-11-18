// Components
import { Tab, ITab } from '@/ui/components/common/Tabs/Tab';

interface TabsProps {
  list: Omit<ITab, 'selected' | 'onClick'>[];
  selected: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tabs = ({ list, onClick, selected }: TabsProps) => (
  <div className="flex justify-center gap-10 items-center">
    {list.map((item) => (
      <Tab
        key={item.value}
        value={item.value}
        title={item.title}
        selected={selected}
        onClick={onClick}
      />
    ))}
  </div>
);

export default Tabs;
