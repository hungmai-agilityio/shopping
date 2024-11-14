import { Button } from '@/ui/components/common';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  btnSecond?: string;
  onClick?: () => void;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  btnSecond,
  onClick
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full z-10">
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4 border-t flex justify-between">
          <Button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </Button>
          {onClick && <Button onClick={onClick}>{btnSecond}</Button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
