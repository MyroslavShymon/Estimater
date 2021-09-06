import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

interface MyBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyBody: React.FC<MyBodyProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  /* className={classes.table__body} */

  return (
    <tbody {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </tbody>
  );
};

export default MyBody;
