import React, { memo } from "react";
import { IStyles } from "./environment/interfaces";
import { default as classes } from "./MyButton.module.scss";
import styled, { css } from "styled-components";

//TODO shadow hover
//TODO shadow active
//TODO fix transition
//TODO add types of button
//TODO Theme with styled-components

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
}

const MyButton: React.FC<MyButtonProps> = memo(({ children, ...props }) => {
  const classesResult: string[] = [];
  const {
    color,
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

  if (shadow === false) {
    styles.boxShadow = `none`;
  }

  const Button = styled.div`
    ${(styles) => {
      return (
        styles &&
        backgroundHover &&
        css`
          :hover {
            transition: all 1s ease-out;
            background: ${() => backgroundHover};
          }
        `
      );
    }}
  `;

  return (
    <Button
      {...extractedProps}
      style={{
        ...styles,
        ...style,
      }}
      className={classesResult.join(" ")}
    >
      {children}
    </Button>
  );
});

export default MyButton;
