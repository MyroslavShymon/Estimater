import { FunctionComponent } from "react";
import Error from "../../pages/Error";
import { RouteEnum } from "../../shared/enums/route.enum";
import About from "../../pages/About";
import Estimate from "../../pages/Estimate";

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
