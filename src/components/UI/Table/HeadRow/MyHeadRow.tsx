import * as React from "react";
import { default as classes } from "../MyTable.module.scss";

export interface MyTHeadRowProps {
  children: React.ReactNode | string;
}

const MyTHeadRow: React.FC<MyTHeadRowProps> = ({ children }) => {
  return <tr className={classes["table__thead-tr"]}>{children}</tr>;
};

export default MyTHeadRow;
