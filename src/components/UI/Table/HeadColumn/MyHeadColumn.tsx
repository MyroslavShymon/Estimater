import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

export interface MyHeadColumnProps {
  children: React.ReactNode | string;
}

const MyHeadColumn: React.FC<MyHeadColumnProps> = ({ children }) => {
  return <td className={classes.table__th}>{children}</td>;
};

export default MyHeadColumn;
