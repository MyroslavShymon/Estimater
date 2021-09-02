import * as React from "react";
import { default as classes } from "../ProjectCard.module.scss";
import MyCardBody from "../../../../components/UI/Card/CardBody/MyCardBody";

// export interface ProjectCardBodyProps {

// }<ProjectCardBodyProps>

const ProjectCardBody: React.FC = () => {
  return (
    <MyCardBody>
      <div className={classes["card__totals-wrapper"]}>
        <div className={classes.card__totals}>
          <div className={classes["card__total-item"]}>
            <span className={classes["card__total-title"]}>Total hour</span>
            <time className={classes["card__total-text"]}>248 h.</time>
          </div>
          <div className={classes["card__total-item"]}>
            <span className={classes["card__total-title"]}>Total price</span>
            <span className={classes["card__total-text"]}>$366</span>
          </div>
        </div>
        <div>
          <time className={classes.card__date}>18.02.2021</time>
        </div>
      </div>
    </MyCardBody>
  );
};

export default ProjectCardBody;
