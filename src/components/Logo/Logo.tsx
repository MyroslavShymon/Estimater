import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "./Logo.module.scss";

export interface LogoProps {
  title: string;
  link: string;
}

const Logo: React.FC<LogoProps> = ({ title, link }): JSX.Element => {
  return (
    <NavLink to={link} className={classes["logo-wrapper"]}>
      {/* <img src={logo} alt="logo" className={classes.logo} /> */}
      {title}
    </NavLink>
  );
};

export default Logo;
