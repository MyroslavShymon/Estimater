import * as React from "react";
import { default as classes } from "./MyTable.module.scss";

export interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <table className={classes.table}>{children}</table>;
};

export default Table;
