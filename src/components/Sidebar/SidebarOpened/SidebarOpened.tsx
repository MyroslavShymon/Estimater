import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "../Sidebar.module.scss";
import MySidebarNavItem from "../../UI/SidebarNavigation/SidebarNavItem/MySidebarNavItem"; //Make sidebar items to UI
import LogoutImage from "../../../assets/Logout.svg";
import { RouteEnum } from "../../../shared/types/enums/route.enum";
import Logo from "../../Logo/Logo";
import MySidebarDown from "../../UI/SidebarNavigation/SidebarDown/MySidebarDown";
import leftArrow from "../../../assets/left-arrow.svg";
import { routers } from "../../../core/router";
import { RouteType } from "../../../shared/types/types";

//TODO sidebar opened
//TODO sidebar closed

export interface SidebarOpenedProps {
  toggleShow: (opened: boolean) => void;
}

const SidebarOpened: React.FC<SidebarOpenedProps> = ({ toggleShow }) => {
  return (
    <>
      <Logo link={RouteEnum.Estimates} />
      {routers.map((sidebarNavItem: RouteType) => {
        if (sidebarNavItem.sidebar)
          return (
            <NavLink
              to={sidebarNavItem.path}
              key={sidebarNavItem.path}
              activeClassName={classes.sidebar__link_active}
            >
              <MySidebarNavItem image={sidebarNavItem.img}>
                {sidebarNavItem.data}
              </MySidebarNavItem>
            </NavLink>
          );
      })}
      <MySidebarDown>
        <MySidebarNavItem image={LogoutImage}>Exit</MySidebarNavItem>
        <MySidebarNavItem
          image={leftArrow}
          setToggle={toggleShow}
        ></MySidebarNavItem>
      </MySidebarDown>
    </>
  );
};

export default SidebarOpened;
