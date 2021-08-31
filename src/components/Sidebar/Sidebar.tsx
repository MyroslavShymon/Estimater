import * as React from "react";
import { NavLink } from "react-router-dom";
import MySidebar from "../../components/UI/Sidebar/MySidebar";
import MySidebarNavItem from "./SidebarNavItem/MySidebarNavItem";
import DashboardImage from "../../assets/Category.svg";
import CalculateImage from "../../assets/Vector.svg";
import { RouteEnum } from "../../shared/enums/route.enum";
import { ISidebarNavItem } from "./environment/interfaces";
import { default as classes } from "./Sidebar.module.scss";
import Logo from "../Logo/Logo";

// export interface SidebarProps {}<SidebarProps>

const Sidebar: React.FC = () => {
  const [sidebarNavItems, setSidebarNavItems] = React.useState([
    { link: RouteEnum.Estimates, image: DashboardImage, data: "Dashboard" },
    { link: RouteEnum.Calculate, image: CalculateImage, data: "Calculate" },
  ]);

  return (
    <MySidebar className={classes.sidebar}>
      <Logo link={RouteEnum.Estimates} />
      {sidebarNavItems.map((sidebarNavItem: ISidebarNavItem) => (
        <NavLink to={sidebarNavItem.link} key={sidebarNavItem.link}>
          <MySidebarNavItem image={sidebarNavItem.image}>
            {sidebarNavItem.data}
          </MySidebarNavItem>
        </NavLink>
      ))}
    </MySidebar>
  );
};

export default Sidebar;
