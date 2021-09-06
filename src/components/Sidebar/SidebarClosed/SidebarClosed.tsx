import * as React from "react";
import { NavLink } from "react-router-dom";
import { default as classes } from "../Sidebar.module.scss";
import MySidebarNavItemsMini from "../../UI/Sidebar/SidebarNavItemsMini/MySidebarNavItemsMini";
import rightArrow from "../../../assets/right-arrow.svg";
import LogoutImage from "../../../assets/Logout.svg";
import { NavigationItemsType } from "../../../shared/types/types";
import MySidebarDown from "../../UI/Sidebar/SidebarDown/MySidebarDown";

export interface SidebarClosedProps {
  sidebarNavItems: NavigationItemsType[];
  toggleShow: (opened: boolean) => void;
}

const SidebarClosed: React.FC<SidebarClosedProps> = ({
  sidebarNavItems,
  toggleShow,
}) => {
  return (
    <>
      <div>
        {sidebarNavItems.map((sidebarNavItem: NavigationItemsType) => (
          <NavLink to={sidebarNavItem.link} key={sidebarNavItem.link}>
            <MySidebarNavItemsMini
              img={sidebarNavItem.image}
            ></MySidebarNavItemsMini>
          </NavLink>
        ))}
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
