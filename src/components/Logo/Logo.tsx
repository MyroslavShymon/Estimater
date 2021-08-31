import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "./Logo.module.scss";
import logo from "../../assets/Logo_JetUp.svg";

export interface LogoProps {
  link: string;
}

const Logo: React.FC<LogoProps> = ({ link }): JSX.Element => {
  return (
    <NavLink to={link} className={classes["logo-wrapper"]}>
      <img src={logo} alt="logo" className={classes.logo} />
      {/* <h1>{title}</h1> */}
    </NavLink>
  );
};

export default Logo;
