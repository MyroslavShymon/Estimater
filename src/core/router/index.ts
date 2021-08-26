import { FunctionComponent } from "react";
import Error from "../../modules/Error";
import { RouteEnum } from "../../shared/enums/route.enum";
import About from "../../modules/About";
import Estimate from "../../modules/Estimate/Estimate";

export type RouteType = {
  path: string;
  component: FunctionComponent;
  exact?: boolean;
};

export const routers: RouteType[] = [
  { path: RouteEnum.Estimate, component: Estimate, exact: true },
  { path: RouteEnum.About, component: About, exact: true },
  { path: RouteEnum.Error, component: Error, exact: true },
];
