import * as React from "react";
import { default as classes } from "../../MyTable.module.scss";

interface MyHeadRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyHeadRow: React.FC<MyHeadRowProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  /* className={classes["table__head-row"]} */

  return (
    <tr {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </tr>
  );
};

export default MyHeadRow;
