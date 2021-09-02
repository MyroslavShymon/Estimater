import * as React from "react";
import { default as classes } from "../ProjectCard.module.scss";
import MyButton from "../../../../components/UI/Button/MyButton";
import MyCardFooter from "../../../../components/UI/Card/CardFooter/MyCardFooter";

// export interface ProjectCardFooterProps {

// }<ProjectCardFooterProps>

const ProjectCardFooter: React.FC = () => {
  return (
    <MyCardFooter className={classes.card__footer}>
      <div className={classes["card__footer-button-wrapper"]}>
        <MyButton
          shadow={false}
          className={[
            classes["card__footer-button"],
            classes["card__footer-button_active"],
          ].join(" ")}
        >
          Back-end
        </MyButton>
        <MyButton shadow={false} className={classes["card__footer-button"]}>
          App
        </MyButton>
      </div>

      <MyButton shadow={false} className={classes["card__footer-button"]}>
        All
      </MyButton>
    </MyCardFooter>
  );
};

export default ProjectCardFooter;
