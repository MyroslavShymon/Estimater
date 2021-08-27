import React from "react";
import { default as classes } from "./MyButton.module.scss";

export interface MyButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  props?: unknown;
}

// сделать смену цветов

const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={classes["pure-material-button-contained"]}>
      {children}
    </div>
  );
};

export default MyButton;
