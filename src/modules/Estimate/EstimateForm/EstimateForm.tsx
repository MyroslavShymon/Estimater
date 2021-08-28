import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { default as classes } from "./EstimateForm.module.scss";
import MyButton from "../../../components/UI/Button/MyButton";
import MyTextInput from "../../../components/UI/TextInput/MyTextInput";
import { Dispatch, SetStateAction, useState } from "react";
import { IEstimate } from "../Estimates";

export interface EstimateFormProps {
  estimates: IEstimate[];
  setEstimates: Dispatch<SetStateAction<IEstimate[]>>;
}

const EstimateForm: React.FC<EstimateFormProps> = ({
  estimates,
  setEstimates,
}) => {
  const [value, setValue] = useState("");

  const createEstimate = async () => {
    event.preventDefault();
    setValue("");
    if (value) {
      const estimate: IEstimate = {
        id: uuidv4(),
        title: value,
        date: new Date(),
        pin: false,
      };
      setEstimates((estimates) => [...estimates, estimate]);
      await localStorage.setItem(
        "estimates",
        JSON.stringify([...estimates, estimate])
      );

      return;
    }
  };

  return (
    <form className={classes["form-estimate"]} onSubmit={createEstimate}>
      <MyTextInput value={value} onChange={(e) => setValue(e.target.value)}>
        Estimate title
      </MyTextInput>
      <MyButton onClick={createEstimate}>Create</MyButton>
    </form>
  );
};

export default EstimateForm;
