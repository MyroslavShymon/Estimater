import React, { Dispatch, SetStateAction, useState } from "react";
import MyError from "../../../components/Error/MyError";
import { default as classes } from "./MyTextInput.module.scss";

interface IValueState {
  value: string;
  setValue: Dispatch<SetStateAction<string | number>>;
  isNumber?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface MyTextInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  children: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  myOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => IValueState;
  props?: unknown;
  color?: string;
}
export const numberToFixed = (number: number, decimalPlaces = 2): string => {
  return number.toFixed(decimalPlaces);
};
//TODO организовать смену цветов по атрибутам

const MyTextInput: React.FC<MyTextInputProps> = ({
  children,
  ...props
}): JSX.Element => {
  const [error, setError] = useState("");

  const { myOnChange, ...extractedProps } = props;

  const filterNumbersInInput = (valueState: IValueState): number => {
    const correctNumber: string =
      valueState.value.includes(",") && valueState.value.split(",").length === 2
        ? valueState.value.replace(",", ".")
        : valueState.value;

    if (isNaN(Number(correctNumber))) {
      setError("Enter number!");
      return;
    }

    setError("");
    valueState.setValue(correctNumber);
  };

  return (
    <div className={classes["form-control-wrapper"]}>
      <input
        {...extractedProps}
        placeholder=" "
        data-title={children}
        className={classes["form-control"]}
        name={children}
        onChange={(e) => {
          if (props.myOnChange) {
            const valueState: IValueState = props.myOnChange(e);
            if (valueState.isNumber) {
              filterNumbersInInput({ ...valueState });
            }
            return;
          }
          props.onChange(e);
        }}
      />
      <div
        //"#e91e63"
        className={classes.floater}
        data-title={children}
      ></div>
      {error && <MyError>{error}</MyError>}
    </div>
  );
};

export default MyTextInput;
