import React from "react";
import { NavLink } from "react-router-dom";
import { RouteEnum } from "../../configs/enums/route.enum";
import { default as classes } from "./Navbar.module.scss";

// export interface NavbarProps {}

const Navbar: React.FC = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to={RouteEnum.Estimate}>Estimate</NavLink>
      <NavLink to={RouteEnum.About}>About</NavLink>
    </div>
  );
};

export default Navbar;
