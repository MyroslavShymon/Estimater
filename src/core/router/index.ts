import Error from "../../modules/Error/Error";
import { RouteEnum } from "../../shared/types/enums/route.enum";
import About from "../../modules/About";
// import Estimate from "../../modules/Estimate/Estimates";
// import CurrentEstimatePage from "../../modules/CurrentEstimatePage/EstimateCurrentPage";
import { RouteType } from "../../shared/types/types";
import Estimates from "../../modules/Estimates/Estimates";
import Calculate from "../../modules/Calculate/Calculate";
import Project from "../../modules/Project/Project";
import DashboardImage from "../../assets/Category.svg";
import CalculateImage from "../../assets/Vector.svg";

export const routers: RouteType[] = [
  {
    path: RouteEnum.Estimates,
    component: Estimates,
    exact: true,
    sidebar: true,
    data: "Estimates",
    img: DashboardImage,
  },
  {
    path: RouteEnum.About,
    component: About,
    exact: true,
    sidebar: false,
    data: "About",
  },
  {
    path: RouteEnum.Error,
    component: Error,
    exact: true,
    sidebar: false,
    data: "Error",
  },
  {
    path: RouteEnum.Calculate,
    component: Calculate,
    exact: true,
    sidebar: true,
    data: "Calculate",
    img: CalculateImage,
  },
  {
    path: RouteEnum.Project,
    component: Project,
    exact: true,
    data: "Project",
  },
];
