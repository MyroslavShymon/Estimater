import * as React from "react";
import { NavLink } from "react-router-dom";
import MySidebar from "../../components/UI/Sidebar/MySidebar";
import MySidebarNavItem from "./SidebarNavItem/MySidebarNavItem";
import DashboardImage from "../../assets/Category.svg";
import CalculateImage from "../../assets/Vector.svg";
import LogoutImage from "../../assets/Logout.svg";
import { RouteEnum } from "../../shared/types/enums/route.enum";
import { ISidebarNavItem } from "./environment/interfaces";
import { default as classes } from "./Sidebar.module.scss";
import Logo from "../Logo/Logo";
import SidebarExit from "./SidebarExit/SidebarExit";
// import MyButton from "../UI/Button/MyButton";
// import { theme } from "../../shared/constants/theme";

// export interface SidebarProps {}<SidebarProps>

const Sidebar: React.FC = () => {
  const [sidebarNavItems, setSidebarNavItems] = React.useState([
    { link: RouteEnum.Estimates, image: DashboardImage, data: "Dashboard" },
    { link: RouteEnum.Calculate, image: CalculateImage, data: "Calculate" },
  ]);

  return (
    <MySidebar>
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
    </MySidebar>
  );
};

export default Sidebar;
