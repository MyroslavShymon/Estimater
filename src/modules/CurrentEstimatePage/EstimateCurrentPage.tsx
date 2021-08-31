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
//TODO add loader

const CurrentEstimatePage: React.FC = () => {
  const params: { id: string } = useParams();

  const [estimates, setEstimates] = useState([] as IEstimate[]);
  const [currentEstimate, setCurrentEstimate] = useState({} as IEstimate);
  const [evaluationPoints, setEvaluationPoints] = useState(
    [] as IEvaluationPoint[]
  );

  const [unitPrice, setUnitPrice] = useState("");

  useEffect(() => {
    const estimates: IEstimate[] = localStorage.getItem("estimates")
      ? JSON.parse(localStorage.getItem("estimates"))
      : [];
    setEstimates(estimates);
    setCurrentEstimate((currentEstimate: IEstimate) => {
      currentEstimate = estimates.find(
        (estimate: IEstimate) => estimate.id === params.id
      );

      if (!currentEstimate) {
        return;
      }

      // if ("unitPrice" in currentEstimate.evaluationPoint[0]) {
      //   setUnitPrice(String(currentEstimate.evaluationPoint[0].unitPrice));
      // }

      if ("evaluationPoint" in currentEstimate) {
        setUnitPrice(String(currentEstimate.evaluationPoint[0].unitPrice));
      }

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
      console.log("====================================");
      console.log("estimates", estimates);
      console.log("====================================");
      localStorage.setItem("estimates", JSON.stringify(estimates));
      // localStorage.setItem(
      //   "estimates",
      //   JSON.stringify(
      //     estimates.map((estimate: IEstimate) => {
      //       if (estimate.id === currentEstimate.id) {
      //         estimate.evaluationPoint = currentEstimate.evaluationPoint;
      //       }
      //       return estimate;
      //     })
      //   )
      // );
    };
  }, [unitPrice]);

  const deleteEvaluationPoint = (id: string) => {
    setEvaluationPoints((evaluationPoints: IEvaluationPoint[]) => {
      const filteredEvaluationPoints: IEvaluationPoint[] =
        evaluationPoints.filter(
          (evaluationPoint: IEvaluationPoint) => evaluationPoint.id !== id
        );

      if (filteredEvaluationPoints) {
        const filteredEstimates = estimates.map((estimate: IEstimate) => {
          if (estimate.id === currentEstimate.id) {
            estimate.evaluationPoint = filteredEvaluationPoints;
          }
          return estimate;
        });
        localStorage.setItem("estimates", JSON.stringify(filteredEstimates));
      }
      return filteredEvaluationPoints;
    });
  };

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

      <EvaluationPointsTable
        evaluationPoints={evaluationPoints}
        deleteEvaluationPoint={deleteEvaluationPoint}
      />
    </div>
  );
};

export default CurrentEstimatePage;
