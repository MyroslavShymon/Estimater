import { FunctionComponent } from "react";

export type RouteType = {
  path: string;
  component: FunctionComponent;
  exact: boolean;
};
