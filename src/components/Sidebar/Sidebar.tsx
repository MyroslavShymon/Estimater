import React, { memo, useRef } from "react";
import { NavLink } from "react-router-dom";
import MySidebar from "../../components/UI/Sidebar/MySidebar";
import MySidebarNavItem from "./SidebarNavItem/MySidebarNavItem";
import LogoutImage from "../../assets/Logout.svg";
import { RouteEnum } from "../../shared/types/enums/route.enum";
import { ISidebarNavItem } from "./environment/interfaces";
import { default as classes } from "./Sidebar.module.scss";
import Logo from "../Logo/Logo";
import SidebarExit from "./SidebarExit/SidebarExit";
import { navigationItems } from "../../shared/constants";
// import MyButton from "../UI/Button/MyButton";
// import { theme } from "../../shared/constants/theme";

export interface SidebarProps {
  toggleShow: (opened: boolean) => void;
  opened: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ opened, toggleShow }) => {
  const [sidebarNavItems, setSidebarNavItems] = React.useState(navigationItems);
  // const sidebarBlock = useRef<HTMLDivElement>();

  return (
    <MySidebar
      className={
        opened ? `${classes.sidebar} ${classes.sidebar_open}` : classes.sidebar
      }
    >
      {/* <div></div> */}
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
      <SidebarExit>
        <MySidebarNavItem image={LogoutImage}>Exit</MySidebarNavItem>
      </SidebarExit>
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "-35px",
          backgroundColor: "green",
        }}
        onClick={() => toggleShow(opened)}
      >
        Close
      </button>
    </MySidebar>
  );
};

export default memo(Sidebar);
