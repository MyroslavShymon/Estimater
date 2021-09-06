import * as React from "react";
import { default as classes } from "../../MyTable.module.scss";

interface MyFooterCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  //   props?: unknown;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const MyFooterCell: React.FC<MyFooterCellProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes["table__footer-cell"]);

  return (
    <td {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </td>
  );
};

export default MyFooterCell;
