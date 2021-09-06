import React, { memo, useRef } from "react";
import MySidebar from "../../components/UI/SidebarNavigation/MySidebar";
import { default as classes } from "./Sidebar.module.scss";
import SidebarOpened from "./SidebarOpened/SidebarOpened";
import SidebarClosed from "./SidebarClosed/SidebarClosed";
// import MyButton from "../UI/Button/MyButton";
// import { theme } from "../../shared/constants/theme";

export interface SidebarProps {
  toggleShow: (opened: boolean) => void;
  opened: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ opened, toggleShow }) => {
  // const sidebarBlock = useRef<HTMLDivElement>();

  return (
    <MySidebar
      onClick={(e) => e.stopPropagation()}
      className={
        opened
          ? `${classes.sidebar} ${classes.sidebar__open}`
          : `${classes.sidebar} ${classes.sidebar__closed}`
      }
    >
      {opened ? (
        <SidebarOpened toggleShow={toggleShow}></SidebarOpened>
      ) : (
        <SidebarClosed toggleShow={toggleShow}></SidebarClosed>
      )}
    </MySidebar>
  );
};

export default memo(Sidebar);
