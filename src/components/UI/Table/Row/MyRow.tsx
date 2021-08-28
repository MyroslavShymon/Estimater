import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

export interface MyTableRowProps {
  children: React.ReactNode | string;
}

const MyTableRow: React.FC<MyTableRowProps> = ({ children }) => {
  return <tr className={classes["table__tbody-tr"]}>{children}</tr>;
};

export default MyTableRow;
