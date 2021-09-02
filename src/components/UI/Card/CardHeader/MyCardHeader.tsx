import * as React from "react";
import { default as classes } from "../MyCard.module.scss";
export interface MyCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  props?: unknown;
}

const MyCardHeader: React.FC<MyCardHeaderProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];
  const { className, ...extractedProps } = props;
  classesResult.push(className);
  classesResult.push(classes.card__header);
  return (
    <div className={classesResult.join(" ")} {...extractedProps}>
      {children}
    </div>
  );
};

export default MyCardHeader;
