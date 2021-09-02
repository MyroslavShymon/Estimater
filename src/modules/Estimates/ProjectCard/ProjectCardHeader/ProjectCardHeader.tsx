import * as React from "react";
import { default as classes } from "../ProjectCard.module.scss";
import Delete from "../../../../assets/Delete.svg";
import Bookmark from "../../../../assets/Bookmark.svg";
import MyCardHeader from "../../../../components/UI/Card/CardHeader/MyCardHeader";
import MyButton from "../../../../components/UI/Button/MyButton";

// export interface ProjectCardHeaderProps {<ProjectCardHeaderProps>

// }

const ProjectCardHeader: React.FC = () => {
  return (
    <MyCardHeader className={classes.card__header}>
      <span className={classes.card__title}>Name 1 project</span>
      <div className={classes["card__action-wrapper"]}>
        <MyButton
          shadow={false}
          className={[classes.card__button, classes.card__button_active].join(
            " "
          )}
        >
          <img src={Bookmark} alt="Bookmark icon" />
        </MyButton>
        <MyButton shadow={false} className={classes.card__button}>
          <img src={Delete} alt="Bookmark icon" />
        </MyButton>
      </div>
    </MyCardHeader>
  );
};

export default ProjectCardHeader;
