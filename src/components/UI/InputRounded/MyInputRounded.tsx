import * as React from "react";
import { default as classes } from "./MyInputRounded.module.scss";

interface MyInputRoundedProps {
  //   value: string;
  //   setValue: React.Dispatch<React.SetStateAction<string | number>>;
  inputData: any; //TODO fix
  placeholder: string;
  title: string;
}

const MyInputRounded: React.FC<MyInputRoundedProps> = ({
  inputData,
  placeholder,
  title,
}) => {
  return (
    <div className={classes["input-wrapper"]}>
      <label className={classes.input__text}>{title}</label>
      <input
        type="text"
        className={classes.input}
        placeholder={placeholder}
        {...inputData}
      />
      <div className={classes["input__text-error"]}></div>
    </div>
  );
};

export default MyInputRounded;
