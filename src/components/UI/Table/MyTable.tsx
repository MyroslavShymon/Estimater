import * as React from "react";
import { default as classes } from "./MyTable.module.scss";

interface MyTableProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  props?: unknown;
}

const MyTable: React.FC<MyTableProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes.table);

  return (
    <table {...extractedProps} className={classes.table}>
      {children}
    </table>
  );
};

export default MyTable;
