import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "../Sidebar.module.scss";
import MySidebarNavItemsMini from "../../UI/SidebarNavigation/SidebarNavItemsMini/MySidebarNavItemsMini";
import rightArrow from "../../../assets/right-arrow.svg";
import LogoutImage from "../../../assets/Logout.svg";
import MySidebarDown from "../../UI/SidebarNavigation/SidebarDown/MySidebarDown";
import { routers } from "../../../core/router";
import { RouteType } from "../../../shared/types/types";

export interface SidebarClosedProps {
  toggleShow: (opened: boolean) => void;
}

const SidebarClosed: React.FC<SidebarClosedProps> = ({ toggleShow }) => {
  return (
    <>
      <div>
        {routers.map((sidebarNavItem: RouteType) => {
          if (sidebarNavItem.sidebar)
            return (
              <NavLink to={sidebarNavItem.path} key={sidebarNavItem.path}>
                <MySidebarNavItemsMini
                  img={sidebarNavItem.img}
                ></MySidebarNavItemsMini>
              </NavLink>
            );
        })}
      </div>
      <MySidebarDown>
        <MySidebarNavItemsMini img={LogoutImage}></MySidebarNavItemsMini>
        <MySidebarNavItemsMini
          setToggle={toggleShow}
          img={rightArrow}
        ></MySidebarNavItemsMini>
      </MySidebarDown>
    </>
  );
};

export default SidebarClosed;
