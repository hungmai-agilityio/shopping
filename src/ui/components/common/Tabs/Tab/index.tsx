import { clsx } from 'clsx';

export interface ITab {
  selected: string;
  value: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tab = ({ value, selected, title, onClick }: ITab) => (
  <button
    value={value}
    className={clsx('h-14 font-base lg:text-2xl text-lg text-dark-gray', {
      'border-b-2 border-b-second text-second font-bold': selected === value
    })}
    onClick={onClick}
  >
    {title}
  </button>
);
