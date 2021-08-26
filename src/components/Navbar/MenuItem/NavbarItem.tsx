import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "./NavbarItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface NavbarItemProps {
  title: string;
  link: string;
  icon: IconProp;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  link,
  icon,
  title,
}): JSX.Element => {
  return (
    <li className={classes.menu__item}>
      <NavLink to={link} className={classes.menu__link}>
        <FontAwesomeIcon icon={icon} size="lg" className={classes.menu__icon} />
        {title}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
