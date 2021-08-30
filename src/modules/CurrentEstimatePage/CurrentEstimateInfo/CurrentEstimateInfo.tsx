import * as React from "react";
import { IEstimate } from "../../../modules/Estimate/Estimates";

export interface CurrentEstimateInfoProps {
  currentEstimate: IEstimate;
}

const CurrentEstimateInfo: React.FC<CurrentEstimateInfoProps> = ({
  currentEstimate,
}) => {
  return (
    <div>
      <h3>{currentEstimate.title}</h3>
      <time>{currentEstimate.date}</time>
    </div>
  );
};

export default CurrentEstimateInfo;
