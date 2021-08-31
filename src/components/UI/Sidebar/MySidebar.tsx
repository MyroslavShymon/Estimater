import * as React from "react";
import { default as classes } from "./MySidebar.module.scss";

export interface MySidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string | React.ReactNode;
  props?: unknown;
}

const MySidebar: React.FC<MySidebarProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.navbar}>
      {children}
    </div>
  );
};

export default MySidebar;
