import * as React from "react";
import { default as classes } from "../../MyTable.module.scss";

interface MyHeadCellProps
  extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyHeadCell: React.FC<MyHeadCellProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes["table__head-cell"]);

  return (
    <th {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </th>
  );
};

export default MyHeadCell;
