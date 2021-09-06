import React, { memo, useRef } from "react";
import MySidebar from "../../components/UI/Sidebar/MySidebar";
import { default as classes } from "./Sidebar.module.scss";
import { navigationItems } from "../../shared/constants";
import SidebarOpened from "./SidebarOpened/SidebarOpened";
import SidebarClosed from "./SidebarClosed/SidebarClosed";
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
        opened
          ? `${classes.sidebar} ${classes.sidebar__open}`
          : `${classes.sidebar} ${classes.sidebar__closed}`
      }
    >
      {opened ? (
        <SidebarOpened
          sidebarNavItems={sidebarNavItems}
          toggleShow={toggleShow}
        ></SidebarOpened>
      ) : (
        <SidebarClosed
          sidebarNavItems={sidebarNavItems}
          toggleShow={toggleShow}
        ></SidebarClosed>
      )}
    </MySidebar>
  );
};

export default memo(Sidebar);
