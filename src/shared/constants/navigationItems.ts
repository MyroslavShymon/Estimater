import { RouteEnum } from "../types/enums/route.enum";
import DashboardImage from "../../assets/Category.svg";
import CalculateImage from "../../assets/Vector.svg";
import { NavigationItemsType } from "../types/types";

export const navigationItems: NavigationItemsType[] = [
  { link: RouteEnum.Estimates, image: DashboardImage, data: "Dashboard" },
  { link: RouteEnum.Calculate, image: CalculateImage, data: "Calculate" },
];
