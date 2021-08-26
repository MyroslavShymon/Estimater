import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faCog } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar2.jpg";
import { RouteEnum } from "../../configs/enums/route.enum";
import { default as classes } from "./Navbar.module.scss";
// export interface NavbarProps {}

const Navbar: React.FC = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to={RouteEnum.Estimate}>
        <img src={logo} alt="logo" />
      </NavLink>
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
      {/* <NavLink to={RouteEnum.Estimate}>Estimate</NavLink> */}
      <ul>
        <li className={classes.menu__item}>
          <FontAwesomeIcon icon={faCalculator} size="lg" />
          <NavLink to={RouteEnum.Estimate}>Estimate</NavLink>
        </li>
        <li className={classes.menu__item}>
          <NavLink to={RouteEnum.About}>About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
