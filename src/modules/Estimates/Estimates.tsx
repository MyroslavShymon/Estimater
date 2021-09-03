import * as React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Header from "../../components/Header/Header";
import { default as style } from "../Page.module.scss";
import { default as classes } from "./Estimates.module.scss";
import ProjectStatisticCard from "./ProjectStatisticCard/ProjectStatisticCard";
//  ${classes["estimate-page"]}
//TODO add memo to some components
// export interface EstimatesProps {}<EstimatesProps>
//TODO add menu to MyCard
const Estimates: React.FC = () => {
  return (
    <div className={style.page}>
      <Header />

      <div className={classes["estimates"]}>
        <div className={classes["estimates__data"]}>
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
        <div className={classes["estimates__data"]}>
          <div className={classes.estimates__title}>Statistic</div>
          <ProjectStatisticCard />
        </div>
      </div>
    </div>
  );
};

export default Estimates;
