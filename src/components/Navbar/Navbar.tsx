import React, { useState } from "react";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { RouteEnum } from "../../shared/enums/route.enum";
import { default as classes } from "./Navbar.module.scss";
import NavbarItem from "./MenuItem/NavbarItem";
import Logo from "../Logo/Logo";
import UserInfo from "./UserInfo/UserInfo";
// export interface NavbarProps {}

const Navbar: React.FC = (): JSX.Element => {
  const [navbarItems, setNavbarItems] = useState([
    { title: "Estimate", link: RouteEnum.Estimate, icon: faCalculator },
    { title: "About", link: RouteEnum.About, icon: faCalculator },
  ]);

  return (
    <div className={classes.navbar}>
      <Logo title="Estimater" link={RouteEnum.Estimate} />
      <UserInfo />
      <ul>
        {navbarItems.map((navbarItem) => (
          <NavbarItem
            link={navbarItem.link}
            icon={navbarItem.icon}
            title={navbarItem.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
