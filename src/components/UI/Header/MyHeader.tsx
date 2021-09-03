import * as React from "react";
import { IStyles } from "./environment/interfaces";
import { default as classes } from "./MyHeader.module.scss";

export interface MyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  justifyContent?: string;
  ref?: React.MutableRefObject<HTMLDivElement>;
  alignItems?: string;
}

const MyHeader: React.FC<MyHeaderProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];
  const styles: IStyles = {};
  const { justifyContent, alignItems, className, style, ...extractedProps } =
    props;
  classesResult.push(className);
  classesResult.push(classes.header);

  if (justifyContent) {
    switch (justifyContent) {
      case "center":
        styles.justifyContent = "center";
        break;
      case "start":
        styles.justifyContent = "flex-start";
        break;
      case "end":
        styles.justifyContent = "flex-end";
        break;
      case "space-between":
        styles.justifyContent = "space-between";
        break;
      case "space-around":
        styles.justifyContent = "space-around";
        break;
      case "space-evenly":
        styles.justifyContent = "space-evenly";
        break;
      default:
        styles.justifyContent = justifyContent;
        break;
    }
  }

  if (alignItems) {
    switch (alignItems) {
      case "center":
        styles.alignItems = "center";
        break;
      case "start":
        styles.alignItems = "flex-start";
        break;
      case "end":
        styles.alignItems = "flex-end";
        break;
      default:
        styles.alignItems = alignItems;
        break;
    }
  }

  return (
    <div
      {...extractedProps}
      style={{
        ...styles,
        ...style,
      }}
      className={classesResult.join(" ")}
    >
      {children}
    </div>
  );
};

export default MyHeader;
