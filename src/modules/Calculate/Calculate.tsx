import * as React from "react";
import { default as style } from "../Page.module.scss";
import { default as classes } from "./Calculate.module.scss";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import MyButton from "../../components/UI/Button/MyButton";
import { theme } from "../../shared/constants/theme";

// export interface CalculateProps {}<CalculateProps>
const Calculate: React.FC = () => {
  return (
    <div className={style.page}>
      <Header />
      <div className={classes.calculate}>
        <MyButton className={classes.calculate__button} width="md">
          +Add new project
        </MyButton>
        <div className={classes["calculate__projects-wrapper"]}>
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-green"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-grey"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-red"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-white"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-yellow"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-violet"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-orange"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-pink"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-red"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-white"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-yellow"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-violet"]}
          />
          <ProjectCard
            className={classes.calculate__card}
            background={theme["color-pink"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculate;
