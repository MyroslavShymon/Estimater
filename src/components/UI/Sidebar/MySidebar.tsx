import * as React from "react";
import { default as classes } from "./MySidebar.module.scss";

export interface MySidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string | React.ReactNode;
  props?: unknown;
}

const MySidebar: React.FC<MySidebarProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];
  const { className, ...extractedProps } = props;
  classesResult.push(className);
  classesResult.push(classes.navbar);
  return (
    <div {...extractedProps} className={classesResult.join(" ")}>
      {children}
    </div>
  );
};

export default MySidebar;
