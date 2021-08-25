import React from "react";
import { default as classes } from "./Navbar.module.scss";

// export interface NavbarProps {}

const Navbar: React.FC = () => {
  return (
    <div className={classes.highlight}>
      <div className={classes.highlight_2}>Class 2</div> Navbar
    </div>
  );
};

export default Navbar;
