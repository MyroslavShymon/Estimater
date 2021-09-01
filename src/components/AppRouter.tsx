import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouteEnum } from "../shared/types/enums/route.enum";
import { routers } from "../core/router";
import { RouteType } from "../shared/types/types";
// import Error from "../modules/Error";
// export interface AppRouterProps {}

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Switch>
      {routers.map((route: RouteType) => (
        <Route
          key={route.path}
          component={route.component}
          path={route.path}
          exact={route.exact}
        />
      ))}
      <Redirect to={RouteEnum.Error} />
    </Switch>
  );
};

export default AppRouter;
