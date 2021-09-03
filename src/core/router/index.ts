import Error from "../../modules/Error/Error";
import { RouteEnum } from "../../shared/types/enums/route.enum";
import About from "../../modules/About";
// import Estimate from "../../modules/Estimate/Estimates";
// import CurrentEstimatePage from "../../modules/CurrentEstimatePage/EstimateCurrentPage";
import { RouteType } from "../../shared/types/types";
import Estimates from "../../modules/Estimates/Estimates";
import Calculate from "../../modules/Calculate/Calculate";

export const routers: RouteType[] = [
  { path: RouteEnum.Estimates, component: Estimates, exact: true },
  { path: RouteEnum.About, component: About, exact: true },
  { path: RouteEnum.Error, component: Error, exact: true },
  { path: RouteEnum.Calculate, component: Calculate, exact: true },
];
