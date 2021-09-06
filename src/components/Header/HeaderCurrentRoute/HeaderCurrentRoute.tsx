import * as React from "react";
import { useHistory } from "react-router-dom";
import { default as classes } from "../Header.module.scss";
import { NavigationItemsType } from "../../../shared/types/types";
import { navigationItems } from "../../../shared/constants";

// export interface HeaderCurrentRouteProps {

// }<HeaderCurrentRouteProps>

const HeaderCurrentRoute: React.FC = () => {
  const history = useHistory();

  return (
    <div className={classes["header__current-route"]}>
      {
        navigationItems.find(
          (navigationItem: NavigationItemsType) =>
            navigationItem.link == history.location.pathname
        ).data
      }
    </div>
  );
};

export default HeaderCurrentRoute;
