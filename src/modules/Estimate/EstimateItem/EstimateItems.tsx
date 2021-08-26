import * as React from "react";
import { default as classes } from "../Estimate.module.scss";

export interface EstimateItemProps {
  title: string;
}

const EstimateItem: React.FC<EstimateItemProps> = ({ title }) => {
  return (
    <div className={classes.estimate}>
      <h3 className={classes["estimate-title"]}>{title}</h3>
    </div>
  );
};

export default EstimateItem;
