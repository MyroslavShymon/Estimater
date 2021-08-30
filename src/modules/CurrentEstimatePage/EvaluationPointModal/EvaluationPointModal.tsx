import * as React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IEstimate, IEvaluationPoint } from "../../Estimate/Estimates";
import MyTextInput from "../../../components/UI/TextInput/MyTextInput";
import MyModal from "../../../components/UI/Modal/MyModal";
import MyButton from "../../../components/UI/Button/MyButton";

export interface EvaluationPointModalProps {
  evaluationPoints: IEvaluationPoint[];
  setEvaluationPoints: (evaluationPoints: IEvaluationPoint[]) => void;
  isModalVisible: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
  unitPrice: string;
  currentEstimate: IEstimate;
}

const EvaluationPointModal: React.FC<EvaluationPointModalProps> = ({
  evaluationPoints,
  setEvaluationPoints,
  isModalVisible,
  setIsModalVisible,
  unitPrice,
  currentEstimate,
}) => {
  const [description, setDescription] = useState("");
  const [hourMin, setHourMin] = useState(0);
  const [hourMax, setHourMax] = useState(0);
  const [comments, setComments] = useState("");
  const add = () => {
    const newEvaluationPoints = [
      ...evaluationPoints,
      {
        id: uuidv4(),
        description,
        hourMin,
        hourMax,
        unit: "hour",
        comments,
        unitPrice: Number(unitPrice),
        cost: String(Number(unitPrice) * hourMin),
      } as IEvaluationPoint,
    ];
    currentEstimate.evaluationPoint = newEvaluationPoints;

    let estimates: IEstimate[] = localStorage.getItem("estimates")
      ? JSON.parse(localStorage.getItem("estimates"))
      : [];

    if (estimates.length) {
      estimates = estimates.map((estimate): IEstimate => {
        estimate.id === currentEstimate.id
          ? (estimate.evaluationPoint = newEvaluationPoints)
          : estimate.evaluationPoint;
        return estimate;
      });
    }

    localStorage.setItem("estimates", JSON.stringify(estimates));
    setEvaluationPoints(newEvaluationPoints);
  };
  return (
    <MyModal visible={isModalVisible} setVisible={setIsModalVisible}>
      <div>
        <MyTextInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
          Description
        </MyTextInput>
        <MyTextInput
          value={String(hourMin)}
          myOnChange={(e) => ({
            isNumber: true,
            value: e.target.value,
            setValue: setHourMin,
          })}
        >
          Estimate (Hour) min
        </MyTextInput>
        <MyTextInput
          value={String(hourMax)}
          myOnChange={(e) => ({
            isNumber: true,
            value: e.target.value,
            setValue: setHourMax,
          })}
        >
          Estimate hourMax
        </MyTextInput>
        <MyTextInput
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        >
          Comments
        </MyTextInput>
        <MyButton onClick={add}>Add</MyButton>
      </div>
    </MyModal>
  );
};

export default EvaluationPointModal;
