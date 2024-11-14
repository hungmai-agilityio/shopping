import { ChangeEvent, memo } from 'react';

// Constants
import { TYPE } from '@/constants';

// Components
import Dropdown, { DropdownProps } from '@/ui/components/common/Dropdown';
import { Button, Input } from '@/ui/components';

interface NoteProps extends Partial<DropdownProps> {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const DropdownNote = memo(
  ({
    isOpen,
    setVisible = () => {},
    value = '',
    onChange,
    onClick,
    styles,
    label = 'products note'
  }: NoteProps) => {
    return (
      <Dropdown
        styles={styles}
        isOpen={isOpen}
        setVisible={setVisible}
        label={label}
      >
        <div className="absolute z-10 bg-white p-2 rounded shadow-lg mt-2 w-96 text-base font-thin">
          <Input
            variant={TYPE.THIRD}
            value={value}
            placeholder="Write your note"
            className="text-sm"
            onChange={onChange}
          />
          <Button onClick={onClick}>Save</Button>
        </div>
      </Dropdown>
    );
  }
);

export default DropdownNote;
