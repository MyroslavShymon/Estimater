import React, { useState } from "react";
import { default as classes } from "./MyTextInput.module.scss";

export interface MyTextInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  children: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  props?: unknown;
}

//организовать смену цветов по атрибутам

const MyTextInput: React.FC<MyTextInputProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <div className={classes["form-control-wrapper"]}>
      <input
        {...props}
        placeholder=" "
        data-title={children}
        className={classes["form-control"]}
        name={children}
      />
      <div
        //"#e91e63"
        className={classes.floater}
        data-title={children}
      ></div>
    </div>
  );
};

export default MyTextInput;
