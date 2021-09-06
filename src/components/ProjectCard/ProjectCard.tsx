import * as React from "react";
import { default as classes } from "./ProjectCard.module.scss";
import ProjectCardHeader from "./ProjectCardHeader/ProjectCardHeader";
import ProjectCardBody from "./ProjectCardBody/ProjectCardBody";
import ProjectCardFooter from "./ProjectCardFooter/ProjectCardFooter";
import MyCard from "../UI/Card/MyCard";

export interface ProjectCardProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  background?: string;
  props?: unknown;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ background, ...props }) => {
  return (
    <MyCard
      style={{ background }}
      className={[classes.card, props.className].join(" ")}
    >
      <ProjectCardHeader />
      <ProjectCardBody />
      <ProjectCardFooter />
    </MyCard>
  );
};

export default ProjectCard;
