import React, { useEffect } from "react";
import { default as classes } from "./MyBottomModal.module.scss";

interface MyBottomModalProps extends React.HTMLAttributes<HTMLDivElement> {
  props?: unknown;
  children?: React.ReactNode;
  // [key: string]: unknown;
  setVisible: (visible: boolean) => void;
}

const MyBottomModal: React.FC<MyBottomModalProps> = ({
  children,
  setVisible,
  ...props
}) => {
  const classesResult: string[] = [];

  const { className, ...extractedProps } = props;

  classesResult.push(className);
  classesResult.push(classes.modal);

  return (
    <div
      {...extractedProps}
      className={classesResult.join(" ")}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export default MyBottomModal;
