import { ChangeEvent, memo } from 'react';

// Constants
import { popping } from '@/constants';

interface RadioProps {
  id: string;
  value: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = memo(
  ({ id, value, label, name, checked, onChange }: RadioProps) => {
    return (
      <label
        htmlFor={id}
        className={`${popping.className} flex items-center font-bold text-xs cursor-pointer`}
      >
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          className="accent-second h-4 w-4 cursor-pointer mr-2"
          onChange={onChange}
        />
        {label}
      </label>
    );
  }
);

export default RadioButton;
