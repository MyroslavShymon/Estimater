import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { IEstimate } from "../Estimates";
import { default as classes } from "../Estimates.module.scss";
import { Dispatch, SetStateAction } from "react";
import { Link, useHistory } from "react-router-dom";

export interface EstimateProps {
  estimate: IEstimate;
  setEstimates: Dispatch<SetStateAction<IEstimate[]>>;
}

const Estimate: React.FC<EstimateProps> = React.memo(
  ({ estimate, setEstimates }) => {
    const history = useHistory();

    const setDateInTemplate = (date: Date): string => {
      const now = new Date();
      const getDate = new Date(date);

      if (now.getDate() === getDate.getDate()) {
        return `${getDate.getHours()}:${
          getDate.getMinutes() < 10 ? "0" : ""
        }${getDate.getMinutes()}`;
      }
      if (now.getFullYear() !== getDate.getFullYear()) {
        return `${getDate.getDay()}.${getDate.getMonth()}.${getDate.getFullYear()}`;
      }
      return `${getDate.getDay()}.${getDate.getMonth()}`;
    };

    const pinEstimate = () => {
      setEstimates((estimates) => {
        const estimatesWithoutPinned = estimates.filter(
          (estimateF) => estimateF.id !== estimate.id
        );

        return [
          {
            id: estimate.id,
            title: estimate.title,
            date: estimate.date,
            pin: !estimate.pin,
          },
          ...estimatesWithoutPinned,
        ].sort((a, b) => String(b.pin).localeCompare(String(a.pin)));
      });
    };

    const deleteEstimate = () => {
      setEstimates((estimates) => {
        return estimates.filter((estimateF) => estimateF.id !== estimate.id);
      });
    };

    return (
      <div className={classes.estimate}>
        <span className={classes["estimate-time"]}>
          {setDateInTemplate(estimate.date)}
        </span>
        <FontAwesomeIcon
          className={
            estimate.pin
              ? `${classes["estimate-pin"]} ${classes["estimate-pin_active"]}`
              : classes["estimate-pin"]
          }
          onClick={pinEstimate}
          icon={faThumbtack}
          size="lg"
        />
        <FontAwesomeIcon
          className={classes.estimate__trash}
          onClick={deleteEstimate}
          icon={faTrashAlt}
          size="lg"
        />
        <Link
          to={`/main_window/${estimate.id}`}
          className={classes.estimate__link}
        >
          <h3 className={classes["estimate-title"]}>{estimate.title}</h3>
        </Link>
      </div>
    );
  }
);

export default Estimate;
