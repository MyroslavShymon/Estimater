import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEstimate, IEvaluationPoint } from "../Estimate/Estimates";
import { v4 as uuidv4 } from "uuid";
import { default as classes } from "../Page.module.scss";
import MyTable from "../../components/UI/Table/MyTable";
import MyTableColumn from "../../components/UI/Table/Column/MyColumn";
import MyTableRow from "../../components/UI/Table/Row/MyRow";
import MyTableBody from "../../components/UI/Table/TableBody/MyTableBody";
import MyTableHead from "../../components/UI/Table/TableHead/MyTableHead";
import MyHeadColumn from "../../components/UI/Table/HeadColumn/MyHeadColumn";
import MyTHeadRow from "../../components/UI/Table/HeadRow/MyHeadRow";
import MyTextInput from "../../components/UI/TextInput/MyTextInput";
import MyButton from "../../components/UI/Button/MyButton";
import MyError from "../../components/Error/MyError";
import MyModal from "../../components/UI/Modal/MyModal";

// export interface EstimateIdPageProps {}<EstimateIdPageProps>
//TODO z-index navbar
const EstimateIdPage: React.FC = () => {
  const params: { id: string } = useParams();

  const [currentEstimate, setCurrentEstimate] = useState({} as IEstimate);
  const [evaluationPoints, setEvaluationPoints] = useState(
    [] as IEvaluationPoint[]
  );
  const [unitPrice, setUnitPrice] = useState("");
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  ///Modal
  const [description, setDescription] = useState("");
  const [hourMin, setHourMin] = useState(0);
  const [hourMax, setHourMax] = useState(0);
  const [comments, setComments] = useState("");
  ///\Modal

  useEffect(() => {
    setCurrentEstimate((currentEstimate: IEstimate) => {
      currentEstimate = JSON.parse(localStorage.getItem("estimates")).find(
        (estimate: IEstimate) => estimate.id === params.id
      )
        ? JSON.parse(localStorage.getItem("estimates")).find(
            (estimate: IEstimate) => estimate.id === params.id
          )
        : {};
      return currentEstimate;
    });
  }, []);

  const add = () => {
    setEvaluationPoints([
      ...evaluationPoints,
      {
        id: uuidv4(),
        description,
        hourMin,
        hourMax,
        unit: "hour",
        comments,
      } as IEvaluationPoint,
    ]);
  };

  return (
    <div className={classes.page}>
      <div>
        <h3>{currentEstimate.title}</h3>
        <time>{currentEstimate.date}</time>
      </div>
      <form action="">
        <MyTextInput
          value={unitPrice}
          onChange={(e) => {
            setError("");
            if (isNaN(Number(e.target.value))) {
              if (
                e.target.value.includes(",") &&
                e.target.value.split(",").length === 2
              ) {
                setUnitPrice(e.target.value.replace(",", "."));
                setEvaluationPoints(
                  evaluationPoints.map((evaluationPoint: IEvaluationPoint) => {
                    const newEvaluationPoint = {} as IEvaluationPoint;
                    Object.assign(newEvaluationPoint, evaluationPoint);
                    newEvaluationPoint.unitPrice = Number(e.target.value);
                    newEvaluationPoint.cost = String(
                      Number(e.target.value) * newEvaluationPoint.hourMin
                    );
                    return newEvaluationPoint;
                  })
                );
                return;
              }
              setError("Enter number!");
              setEvaluationPoints(
                evaluationPoints.map((evaluationPoint: IEvaluationPoint) => {
                  const newEvaluationPoint = {} as IEvaluationPoint;
                  Object.assign(newEvaluationPoint, evaluationPoint);
                  newEvaluationPoint.unitPrice = Number(e.target.value);
                  newEvaluationPoint.cost = String(
                    Number(e.target.value) * newEvaluationPoint.hourMin
                  );
                  return newEvaluationPoint;
                })
              );

              return;
            }
            setUnitPrice(e.target.value);
          }}
        >
          Unit Price
        </MyTextInput>
        {error && <MyError>{error}</MyError>}
        <MyButton onClick={() => setIsModalVisible(true)}>Add</MyButton>
        {
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
                onChange={(e) => setHourMin(Number(e.target.value))}
              >
                Estimate (Hour) min
              </MyTextInput>
              <MyTextInput
                value={String(hourMax)}
                onChange={(e) => setHourMax(Number(e.target.value))}
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
        }
      </form>
      <MyTable>
        <MyTableHead>
          <MyTHeadRow>
            <MyHeadColumn>Index</MyHeadColumn>
            <MyHeadColumn>Description</MyHeadColumn>
            <MyHeadColumn>Estimate (Hour) min</MyHeadColumn>
            <MyHeadColumn>Estimate hourMax </MyHeadColumn>
            <MyHeadColumn>Unit</MyHeadColumn>
            <MyHeadColumn>Unit price</MyHeadColumn>
            <MyHeadColumn>Cost USD</MyHeadColumn>
            <MyHeadColumn>Comments</MyHeadColumn>
          </MyTHeadRow>
        </MyTableHead>
        <MyTableBody>
          {evaluationPoints.map((evaluationPoint: IEvaluationPoint, index) => (
            <MyTableRow key={evaluationPoint.id}>
              <MyTableColumn>{index + 1} </MyTableColumn>
              <MyTableColumn>{evaluationPoint.description}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.hourMin}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.hourMax}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.unit}</MyTableColumn>
              <MyTableColumn>{evaluationPoint.unitPrice}</MyTableColumn>
              <MyTableColumn>
                {String(evaluationPoint.unitPrice * evaluationPoint.hourMin) +
                  "$"}
              </MyTableColumn>
              <MyTableColumn>{evaluationPoint.comments}</MyTableColumn>
            </MyTableRow>
          ))}
        </MyTableBody>
      </MyTable>
    </div>
  );
};

export default EstimateIdPage;
