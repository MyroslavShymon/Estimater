import { FunctionComponent } from "react";

export type RouteType = {
  path: string;
  component: FunctionComponent;
  exact: boolean;
  data?: string;
  img?: string;
  sidebar?: boolean;
};
