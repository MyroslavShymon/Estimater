import * as React from "react";
import { default as classes } from "./HeaderUser.module.scss";
import UserImage from "../../../assets/User.png";
import { headerIcons } from "../environment/constants";
import { headerIcon } from "../environment/types";

// export interface HeaderUserProps {}<HeaderUserProps>

const HeaderUser: React.FC = () => {
  return (
    <div className={classes["user-wrapper"]}>
      <div>
        {headerIcons.map((headerIcon: headerIcon) => (
          <img
            className={classes["user__icon"]}
            src={headerIcon.icon}
            alt={headerIcon.alt}
            key={headerIcon.alt}
          />
        ))}
      </div>

      <div className={classes["user"]}>
        <img src={UserImage} alt="avatar" />
        <div className={classes["user__info"]}>
          <span className={classes.user__name}>Artem Osyadly</span>
          <span className={classes.user__role}>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
