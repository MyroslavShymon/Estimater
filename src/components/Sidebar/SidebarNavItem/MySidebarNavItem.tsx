import * as React from "react";
import { default as classes } from "./MySidebarNavItem.module.scss";
import MyButton from "../../UI/Button/MyButton";

export interface MySidebarNavItemProps {
  children?: string | React.ReactNode;
  image?: string;
}

const MySidebarNavItem: React.FC<MySidebarNavItemProps> = ({
  children,
  image,
}) => {
  return (
    <MyButton
      backgroundHover="linear-gradient(90deg, rgba(144, 111, 217, 0.16) 0%, rgba(178, 154, 233, 0) 100%)"
      borderRadius="10px 0 0 10px"
      className={classes.navigationItem}
      width="md"
      shadow={false}
    >
      <img src={image} alt="" className={classes.navigationItem__img} />
      {children}
    </MyButton>
  );
};

export default MySidebarNavItem;
