import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

interface MyHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyHead: React.FC<MyHeadProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes.table__head);

  return (
    <thead {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </thead>
  );
};

export default MyHead;
