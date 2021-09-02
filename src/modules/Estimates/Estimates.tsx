import * as React from "react";
import { default as style } from "../Page.module.scss";
import { default as classes } from "./Estimates.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
//  ${classes["estimate-page"]}

// export interface EstimatesProps {}<EstimatesProps>
const Estimates: React.FC = () => {
  return (
    <div className={`${style.page}  ${classes["estimates"]}`}>
      <div className={classes.estimates__title}>Favorite project</div>
      <div className={classes["estimates-wrapper"]}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Estimates;
