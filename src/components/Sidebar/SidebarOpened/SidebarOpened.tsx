import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "../Sidebar.module.scss";
import MySidebarNavItem from "../../UI/Sidebar/SidebarNavItem/MySidebarNavItem"; //Make sidebar items to UI
import LogoutImage from "../../../assets/Logout.svg";
import { RouteEnum } from "../../../shared/types/enums/route.enum";
import { ISidebarNavItem } from "../environment/interfaces";
import Logo from "../../Logo/Logo";
import MySidebarDown from "../../UI/Sidebar/SidebarDown/MySidebarDown";
import { NavigationItemsType } from "../../../shared/types/types";
import leftArrow from "../../../assets/left-arrow.svg";

//TODO sidebar opened
//TODO sidebar closed

export interface SidebarOpenedProps {
  sidebarNavItems: NavigationItemsType[];
  toggleShow: (opened: boolean) => void;
}

const SidebarOpened: React.FC<SidebarOpenedProps> = ({
  sidebarNavItems,
  toggleShow,
}) => {
  return (
    <>
      <Logo link={RouteEnum.Estimates} />
      {sidebarNavItems.map((sidebarNavItem: ISidebarNavItem) => (
        <NavLink
          to={sidebarNavItem.link}
          key={sidebarNavItem.link}
          activeClassName={classes.sidebar__link_active}
        >
          <MySidebarNavItem image={sidebarNavItem.image}>
            {sidebarNavItem.data}
          </MySidebarNavItem>
        </NavLink>
      ))}
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
