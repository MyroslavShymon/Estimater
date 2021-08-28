import * as React from "react";
// import { default as classes } from "../MyTable.module.scss";

export interface MyTableHeadProps {
  children: React.ReactNode;
}

const MyTableHead: React.FC<MyTableHeadProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default MyTableHead;
