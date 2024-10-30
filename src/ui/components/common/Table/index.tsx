import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
const Table = ({ children }: IProps) => {
  return (
    <table className="border-separate border-spacing-y-tb-md text-dark">
      {children}
    </table>
  );
};

export default Table;
