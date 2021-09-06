import * as React from "react";
import { default as classes } from "../../MyTable.module.scss";

interface MyFooterRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  props?: unknown;
  children?: React.ReactNode;
}

const MyFooterRow: React.FC<MyFooterRowProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes["table__footer-row"]);

  return (
    <tr {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </tr>
  );
};

export default MyFooterRow;
