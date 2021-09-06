import * as React from "react";
import { default as classes } from "./MySidebarNavItem.module.scss";
import MyButton from "../../Button/MyButton";
import { theme } from "../../../../shared/constants/theme";

export interface MySidebarNavItemProps {
  children?: string | React.ReactNode;
  image?: string;
  props?: unknown;
  setToggle?: (opened: boolean) => void;
}

const MySidebarNavItem: React.FC<MySidebarNavItemProps> = ({
  children,
  image,
  ...props
}) => {
  return (
    <MyButton
      onClick={props.setToggle ? () => props.setToggle(false) : null}
      // {...(props.onClick ? () => props.onClick(false) : console.log("other"))}
      backgroundHover={theme["sidebar-link"]}
      borderRadius="10px 0 0 10px"
      className={classes.navigationItem}
      width="md"
      shadow={false}
      height="lg"
    >
      <img src={image} alt="" className={classes.navigationItem__img} />
      {children}
    </MyButton>
  );
};

export default MySidebarNavItem;
