import * as React from "react";
import { default as classes } from "./EstimateForm.module.scss";
import MyButton from "../../components/UI/Button/MyButton";
import MyTextInput from "../../components/UI/TextInput/MyTextInput";
import { useState } from "react";

// export interface EstimateFormProps {}<EstimateFormProps>

const EstimateForm: React.FC = () => {
  const [value, setValue] = useState("");

  const createEstimate = (title: string) => {
    if (title) {
      console.log("===============title=====================");
      console.log(title);
      console.log("================title====================");
      return;
    }
    console.log("====================================");
    console.log("Козака спідкала невдача");
    console.log("====================================");
  };
  return (
    <form className={classes["form-estimate"]}>
      <MyTextInput value={value} onChange={(e) => setValue(e.target.value)}>
        Estimate title
      </MyTextInput>
      <MyButton onClick={() => createEstimate(value)}>Create</MyButton>
    </form>
  );
};

export default EstimateForm;
