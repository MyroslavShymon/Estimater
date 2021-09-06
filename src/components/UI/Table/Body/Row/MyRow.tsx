import * as React from "react";
import { default as classes } from "../../MyTable.module.scss";

interface MyRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyRow: React.FC<MyRowProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes["table__body-row"]);

  return (
    <tr {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </tr>
  );
};

export default MyRow;
