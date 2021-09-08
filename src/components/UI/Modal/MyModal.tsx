import * as React from "react";

import { default as classes } from "./MyModal.module.scss";

export interface MyModalProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.MutableRefObject<HTMLDivElement>;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: JSX.Element;
  props?: unknown;
}

const MyModal: React.FC<MyModalProps> = ({
  setVisible,
  visible,
  children,
  ...props
}) => {
  const classesResult: string[] = [classes.modal];
  const { className, ...extractedProps } = props;

  classesResult.push(className);
  if (visible) {
    classesResult.push(classes.active);
  }

  return (
    <div
      {...extractedProps}
      className={classesResult.join(" ")}
      onClick={() => setVisible(false)}
    >
      {children}
    </div>
  );
};

export default MyModal;
