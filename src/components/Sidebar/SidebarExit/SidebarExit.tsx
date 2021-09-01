import * as React from "react";
import { default as classes } from "./SidebarExit.module.scss";

export interface SidebarExitProps {
  children: string | React.ReactNode;
}

const SidebarExit: React.FC<SidebarExitProps> = ({ children }) => {
  return <div className={classes["exit-wrapper"]}>{children}</div>;
};

export default SidebarExit;
