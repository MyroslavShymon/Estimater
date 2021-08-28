import * as React from "react";
// import { default as classes } from "../MyTable.module.scss";

export interface MyTableBodyProps {
  children: React.ReactNode;
}

const MyTableBody: React.FC<MyTableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default MyTableBody;
