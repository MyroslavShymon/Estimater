import * as React from "react";
import { default as classes } from "./ProjectCard.module.scss";
import MyCard from "../../../components/UI/Card/MyCard";
import ProjectCardHeader from "./ProjectCardHeader/ProjectCardHeader";
import ProjectCardBody from "./ProjectCardBody/ProjectCardBody";
import ProjectCardFooter from "./ProjectCardFooter/ProjectCardFooter";
// export interface ProjectCardProps {}<ProjectCardProps>

const ProjectCard: React.FC = () => {
  return (
    <MyCard className={classes.card}>
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </MyCard>
  );
};

export default ProjectCard;
