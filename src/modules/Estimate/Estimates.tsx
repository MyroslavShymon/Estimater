import React, { useState, useEffect } from "react";
import { default as style } from "../Page.module.scss";
import { default as classes } from "./Estimates.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Estimate from "./Estimate/Estimate";
import MyModal from "../../components/UI/Modal/MyModal";
import EstimateForm from "./EstimateForm/EstimateForm";

//TODO rename estimates
//TODO time < 15:30 : make drug n drop : null
//TODO make hook

// export interface EstimateProps {

// }

// const Estimate: React.FC<EstimateProps> = () => {
//     return ( <div>Estimate</div> );
// }

export interface IEvaluationPoint {
  id: string;
  description: string;
  hourMin: number;
  hourMax: number;
  unit: string;
  unitPrice?: number;
  cost?: string;
  comments: string;
}

export interface IEstimate {
  id: string;
  title: string;
  date: Date;
  pin: boolean;
  evaluationPoint?: IEvaluationPoint[];
}

const Estimates: React.FC = (): JSX.Element => {
  const [estimates, setEstimates] = useState([] as IEstimate[]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setEstimates((estimates) => {
      return (estimates = localStorage.getItem("estimates")
        ? JSON.parse(localStorage.getItem("estimates"))
        : []);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("estimates", JSON.stringify(estimates));
  }, [estimates]);

  const open = () => {
    setVisible(true);
  };

  return (
    <div className={`${style.page} ${classes["estimate-page"]}`}>
      <h2>Estimate</h2>
      <MyModal setVisible={setVisible} visible={visible}>
        <EstimateForm estimates={estimates} setEstimates={setEstimates} />
      </MyModal>
      <div className={classes["estimate-wrapper"]}>
        <div className={classes.estimate} onClick={open}>
          <div className={classes["estimate-add"]}>
            <FontAwesomeIcon icon={faPlusCircle} size="4x" />
          </div>
        </div>
        {estimates !== null
          ? estimates.map((estimate) => (
              <Estimate
                estimate={estimate}
                key={estimate.id}
                setEstimates={setEstimates}
              />
            ))
          : []}
      </div>
    </div>
  );
};

export default Estimates;
