import * as React from "react";

import { default as classes } from "./MyModal.module.scss";

export interface MyModalProps {
  ref?: React.MutableRefObject<HTMLDivElement>;
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: JSX.Element | string;
}

const MyModal: React.FC<MyModalProps> = ({ setVisible, visible, children }) => {
  const classesResult: string[] = [classes.modal];

  if (visible) {
    classesResult.push(classes.active);
  }

  return (
    <div className={classesResult.join(" ")} onClick={() => setVisible(false)}>
      {children}
    </div>
  );
};

export default MyModal;
