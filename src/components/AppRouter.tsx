import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routers, RouteType } from "../core/router/index";
import { RouteEnum } from "../configs/enums/route.enum";
import Error from "../pages/Error";
// import Error from "../pages/Error";
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
      {/* <Route path="/error">
        <Error />
      </Route> */}
      <Redirect to={RouteEnum.Error} />
    </Switch>
  );
};

export default AppRouter;
