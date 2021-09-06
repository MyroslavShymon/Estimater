import * as React from "react";
import { useHistory } from "react-router-dom";
import { default as classes } from "../Header.module.scss";
import { routers } from "../../../core/router";
import { RouteType } from "../../../shared/types/types";

// export interface HeaderCurrentRouteProps {

// }<HeaderCurrentRouteProps>
const HeaderCurrentRoute: React.FC = () => {
  const history = useHistory();

  return (
    <div className={classes["header__current-route"]}>
      {
        routers.find(
          (navigationItem: RouteType) =>
            navigationItem.path == history.location.pathname
        ).data
      }
    </div>
  );
};

export default HeaderCurrentRoute;
