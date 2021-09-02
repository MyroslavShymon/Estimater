import * as React from "react";
import { default as classes } from "../MyCard.module.scss";
export interface MyCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  props?: unknown;
}

const MyCardFooter: React.FC<MyCardFooterProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];
  const { className, ...extractedProps } = props;
  classesResult.push(className);
  classesResult.push(classes.card__footer);
  return (
    <div className={classesResult.join(" ")} {...extractedProps}>
      {children}
    </div>
  );
};

export default MyCardFooter;
