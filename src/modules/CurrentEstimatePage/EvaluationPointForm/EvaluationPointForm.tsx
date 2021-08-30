import * as React from "react";
import { useState } from "react";
import {
  IEstimate,
  IEvaluationPoint,
} from "../../../modules/Estimate/Estimates";
import MyButton from "../../../components/UI/Button/MyButton";
import MyTextInput from "../../../components/UI/TextInput/MyTextInput";
import EvaluationPointModal from "../EvaluationPointModal/EvaluationPointModal";

export interface EvaluationPointFormProps {
  unitPrice: string;
  setUnitPrice: (unitPrice: string) => void;
  evaluationPoints: IEvaluationPoint[];
  setEvaluationPoints: (evaluationPoints: IEvaluationPoint[]) => void;
  currentEstimate: IEstimate;
}

const EvaluationPointForm: React.FC<EvaluationPointFormProps> = ({
  unitPrice,
  setUnitPrice,
  evaluationPoints,
  setEvaluationPoints,
  currentEstimate,
}) => {
  ///Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <form action="">
      <MyTextInput
        value={unitPrice}
        myOnChange={(e) => ({
          isNumber: true,
          value: e.target.value,
          setValue: setUnitPrice,
        })}
      >
        Unit Price
      </MyTextInput>

      <MyButton onClick={() => setIsModalVisible(true)}>Add</MyButton>

      <EvaluationPointModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        evaluationPoints={evaluationPoints}
        setEvaluationPoints={setEvaluationPoints}
        unitPrice={unitPrice}
        currentEstimate={currentEstimate}
      />
    </form>
  );
};

export default EvaluationPointForm;
