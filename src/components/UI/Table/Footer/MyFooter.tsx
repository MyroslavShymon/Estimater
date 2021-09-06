import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

interface MyFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyFooter: React.FC<MyFooterProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  // classesResult.push(classes.table__footer);

  return (
    <tfoot {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </tfoot>
  );
};

export default MyFooter;
