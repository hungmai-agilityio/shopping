'use client';

import { memo } from 'react';

// Components
import { Modal } from '@/ui/components';

interface ModalActionProps {
  onClick: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const ModalDelete = memo(
  ({ isOpen, onClick, onClose }: ModalActionProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirm Deletion"
        btnSecond="Delete"
        onClick={onClick}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
    );
  }
);

export default ModalDelete;
