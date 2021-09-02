import * as React from "react";
import { default as classes } from "../MyCard.module.scss";
export interface MyCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
  props?: unknown;
}

const MyCardBody: React.FC<MyCardBodyProps> = ({ children, ...props }) => {
  const classesResult: string[] = [];
  const { className, ...extractedProps } = props;
  classesResult.push(className);
  classesResult.push(classes.card__body);
  return (
    <div className={classesResult.join(" ")} {...extractedProps}>
      {children}
    </div>
  );
};

export default MyCardBody;
