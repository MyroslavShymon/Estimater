import * as React from "react";
import { default as classes } from "./ProjectStatisticCard.module.scss";
import MyCard from "../../../components/UI/Card/MyCard";
import MyCardBody from "../../../components/UI/Card/CardBody/MyCardBody";
import MyCardHeader from "../../../components/UI/Card/CardHeader/MyCardHeader";
import MyButton from "../../../components/UI/Button/MyButton";

// export interface ProjectStatisticCardProps {

// }<ProjectStatisticCardProps>

const ProjectStatisticCard: React.FC = () => {
  return (
    <MyCard className={classes.card}>
      <MyCardHeader className={classes.card__header}>
        <div className={classes["card__header-button-wrapper"]}>
          <MyButton
            shadow={false}
            className={[
              classes["card__header-button"],
              classes["card__header-button_active"],
            ].join(" ")}
          >
            This month
          </MyButton>
          <MyButton shadow={false} className={classes["card__header-button"]}>
            This week
          </MyButton>
        </div>
        <MyButton shadow={false} className={classes["card__header-button"]}>
          All
        </MyButton>
      </MyCardHeader>
      <MyCardBody className={classes["card__body"]}>
        <div className={classes["card__body-item"]}>
          <span className={classes["card__body-title"]}>Total hour</span>
          <time className={classes["card__body-text"]}>248 h.</time>
        </div>
        <div className={classes["card__body-item"]}>
          <span className={classes["card__body-title"]}>Total price</span>
          <span className={classes["card__body-text"]}>$366</span>
        </div>
        <div className={classes["card__body-item"]}>
          <span className={classes["card__body-title"]}>Total price</span>
          <span className={classes["card__body-text"]}>$366</span>
        </div>
      </MyCardBody>
    </MyCard>
  );
};

export default ProjectStatisticCard;
