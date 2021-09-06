import * as React from "react";
import { default as classes } from "./MySidebarDown.module.scss";

export interface SidebarDownProps {
  children: string | React.ReactNode;
}

const SidebarDown: React.FC<SidebarDownProps> = ({ children }) => {
  return <div className={classes["exit-wrapper"]}>{children}</div>;
};

export default SidebarDown;
