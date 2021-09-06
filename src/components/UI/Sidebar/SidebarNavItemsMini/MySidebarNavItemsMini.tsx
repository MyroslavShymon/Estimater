import * as React from "react";
import { default as classes } from "./MySidebarNavItemsMini.module.scss";
import MyButton from "../../Button/MyButton";

export interface SidebarNavItemsMiniProps {
  img: string;
  props?: unknown;
  children?: string | React.ReactNode;
  setToggle?: (opened: boolean) => void;
  className?: string;
}

const SidebarNavItemsMini: React.FC<SidebarNavItemsMiniProps> = ({
  img,
  ...props
}) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes.item);
  return (
    <MyButton
      {...extractedProps}
      onClick={props.setToggle ? () => props.setToggle(true) : null}
      shadow={false}
      className={classesResult.join(" ")}
    >
      <img src={img} alt={img} className={classes["item-img"]} />
    </MyButton>
  );
};

export default SidebarNavItemsMini;
