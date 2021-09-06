import React, { memo, useRef, useEffect } from "react";
import { theme } from "../../../shared/constants/theme";
import { IStyles } from "./environment/interfaces";
import { default as classes } from "./MyButton.module.scss";

//TODO shadow hover
//TODO shadow active
//TODO fix transition
//TODO add types of button
//TODO custom hook

export interface MyButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  props?: unknown;
  color?: string;
  background?: string;
  backgroundHover?: string;
  // shadowHover;
  shadow?: boolean;
  borderRadius?: "sm" | "md" | "lg" | string;
  width?: "sm" | "md" | "lg" | string;
  ref?: React.MutableRefObject<HTMLDivElement>;
  height?: "sm" | "md" | "lg" | string;
  onClick?: (any: unknown) => unknown;
}

const MyButton: React.FC<MyButtonProps> = memo(({ children, ...props }) => {
  const classesResult: string[] = [];
  const MyDivRef = useRef<HTMLDivElement>();
  const {
    color,
    height,
    style,
    background,
    shadow,
    // shadowHover,
    width,
    borderRadius,
    backgroundHover,
    className,
    ...extractedProps
  } = props;
  const styles: IStyles = {};

  classesResult.push(className);
  classesResult.push(classes["pure-material-button-contained"]);

  const addHoveredOn = () => {
    MyDivRef.current.style.background = backgroundHover;
  };

  const addHoveredOut = () => {
    MyDivRef.current.style.background = "transparent";
    // MyDivRef.current.style.transitionDuration = "0.3";
    // MyDivRef.current.setAttribute("style", "transition:0.5s all easy;");
    // MyDivRef.current.style.transition = "0.5s all easy";
  };

  useEffect(() => {
    if (backgroundHover && MyDivRef.current) {
      MyDivRef.current.addEventListener("mouseover", addHoveredOn);
      MyDivRef.current.addEventListener("mouseout", addHoveredOut);
    }
    return () => {
      if (MyDivRef.current && MyDivRef.current) {
        MyDivRef.current.removeEventListener("mouseover", addHoveredOn);
        MyDivRef.current.removeEventListener("mouseout", addHoveredOut);
      }
    };
  }, []);

  if (color) {
    styles.color = color;
  }
  if (background) {
    styles.background = background;
  }
  if (borderRadius) {
    switch (borderRadius) {
      case "sm":
        styles.borderRadius = "10px";
        break;
      case "md":
        styles.borderRadius = "15px";
        break;
      case "lg":
        styles.borderRadius = "20px";
        break;

      default:
        styles.borderRadius = borderRadius;
        break;
    }
  }
  if (width) {
    switch (width) {
      case "sm":
        styles.width = "150px";
        break;
      case "md":
        styles.width = "190px";
        break;
      case "lg":
        styles.width = "230px";
        break;

      default:
        styles.width = width;
        break;
    }
  }

  if (height) {
    switch (height) {
      case "sm":
        styles.height = "14px";
        break;
      case "md":
        styles.height = "36px";
        break;
      case "lg":
        styles.height = "48px";
        break;

      default:
        styles.height = height;
        break;
    }
  }

  if (shadow === false) {
    styles.boxShadow = `none`;
  }

  return (
    <div
      ref={MyDivRef}
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
});

export default MyButton;
