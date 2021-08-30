import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEstimate, IEvaluationPoint } from "../Estimate/Estimates";
import { default as classes } from "../Page.module.scss";
import EvaluationPointForm from "./EvaluationPointForm/EvaluationPointForm";
import CurrentEstimateInfo from "./CurrentEstimateInfo/CurrentEstimateInfo";
import EvaluationPointsTable from "./EvaluationPointsTable/EvaluationPointsTable";

// export interface CurrentEstimatePageProps {}<CurrentEstimatePageProps>
//TODO z-index navbar
const CurrentEstimatePage: React.FC = () => {
  const params: { id: string } = useParams();

  const [currentEstimate, setCurrentEstimate] = useState({} as IEstimate);
  const [evaluationPoints, setEvaluationPoints] = useState(
    [] as IEvaluationPoint[]
  );

  const [unitPrice, setUnitPrice] = useState("");

  useEffect(() => {
    setCurrentEstimate((currentEstimate: IEstimate) => {
      currentEstimate = JSON.parse(localStorage.getItem("estimates")).find(
        (estimate: IEstimate) => estimate.id === params.id
      )
        ? JSON.parse(localStorage.getItem("estimates")).find(
            (estimate: IEstimate) => estimate.id === params.id
          )
        : {};

      setUnitPrice(
        currentEstimate.evaluationPoint[0].unitPrice
          ? String(currentEstimate.evaluationPoint[0].unitPrice)
          : ""
      );

      setEvaluationPoints((evaluationPoints: IEvaluationPoint[]) => {
        evaluationPoints = currentEstimate.evaluationPoint
          ? currentEstimate.evaluationPoint
          : [];
        return evaluationPoints;
      });
      return currentEstimate;
    });
  }, []);

  useEffect(() => {
    setEvaluationPoints((evaluationPoints) => {
      return evaluationPoints.map((evaluationPoint: IEvaluationPoint) => {
        evaluationPoint.unitPrice = Number(unitPrice);
        evaluationPoint.cost = String(
          Number(unitPrice) * evaluationPoint.hourMin
        );
        return evaluationPoint;
      });
    });
    return () => {
      const estimates: IEstimate[] = localStorage.getItem("estimates")
        ? JSON.parse(localStorage.getItem("estimates"))
        : [];

      localStorage.setItem(
        "estimates",
        JSON.stringify(
          estimates.map((estimate: IEstimate) => {
            if (estimate.id === currentEstimate.id) {
              estimate.evaluationPoint = currentEstimate.evaluationPoint;
            }
            return estimate;
          })
        )
      );
    };
  }, [unitPrice]);

  return (
    <div className={classes.page}>
      <CurrentEstimateInfo currentEstimate={currentEstimate} />

      <EvaluationPointForm
        unitPrice={unitPrice}
        setUnitPrice={setUnitPrice}
        evaluationPoints={evaluationPoints}
        setEvaluationPoints={setEvaluationPoints}
        currentEstimate={currentEstimate}
      />

      <EvaluationPointsTable evaluationPoints={evaluationPoints} />
    </div>
  );
};

export default CurrentEstimatePage;
