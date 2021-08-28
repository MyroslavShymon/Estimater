import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

export interface MyTableColumnProps {
  children: React.ReactNode | string;
}

const MyTableColumn: React.FC<MyTableColumnProps> = ({ children }) => {
  return <td className={classes.table__td}>{children}</td>;
};

export default MyTableColumn;
