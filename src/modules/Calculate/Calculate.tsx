import * as React from "react";
import { default as style } from "../Page.module.scss";
import { default as classes } from "./Calculate.module.scss";
import Header from "../../components/Header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import MyButton from "../../components/UI/Button/MyButton";
import { theme } from "../../shared/constants/theme";

// export interface CalculateProps {}<CalculateProps>
console.log("====================================");
console.log(theme["color-green"]);
console.log("====================================");

const Calculate: React.FC = () => {
  return (
    <div className={style.page}>
      <Header />
      <div className={classes.calculate}>
        <MyButton className={classes.calculate__button} width="md">
          +Add new project
        </MyButton>
        <div className={classes["calculate__projects-wrapper"]}>
          <ProjectCard background={theme["color-green"]} />
          <ProjectCard background={theme["color-grey"]} />
          <ProjectCard background={theme["color-red"]} />
          <ProjectCard background={theme["color-white"]} />
          <ProjectCard background={theme["color-yellow"]} />
          <ProjectCard background={theme["color-violet"]} />
          <ProjectCard background={theme["color-orange"]} />
          <ProjectCard background={theme["color-pink"]} />
          <ProjectCard background={theme["color-red"]} />
          <ProjectCard background={theme["color-white"]} />
          <ProjectCard background={theme["color-yellow"]} />
          <ProjectCard background={theme["color-violet"]} />
          <ProjectCard background={theme["color-pink"]} />
        </div>
      </div>
    </div>
  );
};

export default Calculate;
