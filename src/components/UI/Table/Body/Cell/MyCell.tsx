import * as React from "react";
import { default as classes } from "../../MyTable.module.scss";

interface MyCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyCell: React.FC<MyCellProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes["table__body-cell"]);

  return (
    <td {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </td>
  );
};

export default MyCell;
