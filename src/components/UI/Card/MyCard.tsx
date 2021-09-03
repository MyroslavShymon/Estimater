import * as React from "react";
import { default as classes } from "./MyCard.module.scss";
export interface MyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  ref?: React.MutableRefObject<HTMLDivElement>;
  props?: unknown;
}

const MyCard: React.FC<MyCardProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];
  const { className, ...extractedProps } = props;
  classesResult.push(className);
  classesResult.push(classes.card);
  return (
    <div className={classesResult.join(" ")} {...extractedProps}>
      {children}
    </div>
  );
};

export default MyCard;
