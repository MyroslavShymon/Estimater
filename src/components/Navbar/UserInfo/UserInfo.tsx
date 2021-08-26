import * as React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../../../assets/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouteEnum } from "../../../shared/enums/route.enum";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { default as classes } from "./UserInfo.module.scss";

// export interface UserInfoProps {}
// <UserInfoProps>
const UserInfo: React.FC = (): JSX.Element => {
  return (
    <div className={classes["navbar__user-wrapper"]}>
      <div className={classes["navbar__avatar-wrapper"]}>
        <NavLink
          to={RouteEnum.Settings}
          className={classes["navbar__avatar-setting"]}
        >
          <FontAwesomeIcon icon={faCog} color="white" size="lg" />
        </NavLink>
        <img src={avatar} alt="avatar" className={classes.navbar__avatar} />
      </div>
      <div className={classes["navbar__user-info"]}>
        <div className={classes["navbar__user-name"]}>Myroslav Shymon</div>
        <div className={classes["navbar__user-email"]}>
          myroslav.shymon.jetup@gmail.com
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
