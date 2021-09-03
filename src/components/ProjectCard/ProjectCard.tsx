import * as React from "react";
import { default as classes } from "./ProjectCard.module.scss";
import ProjectCardHeader from "./ProjectCardHeader/ProjectCardHeader";
import ProjectCardBody from "./ProjectCardBody/ProjectCardBody";
import ProjectCardFooter from "./ProjectCardFooter/ProjectCardFooter";
import MyCard from "../UI/Card/MyCard";

export interface ProjectCardProps {
  background?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ background }) => {
  console.log("====================================");
  console.log("background", background);
  console.log("====================================");
  return (
    <MyCard style={{ background }} className={classes.card}>
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </MyCard>
  );
};

export default ProjectCard;
