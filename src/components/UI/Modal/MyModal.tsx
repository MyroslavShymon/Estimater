import * as React from "react";
import { default as classes } from "./MyModal.module.scss";

export interface MyModalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: JSX.Element | string;
}

const MyModal: React.FC<MyModalProps> = ({ setVisible, visible, children }) => {
  const modalClasses = [classes.modal];

  if (visible) {
    modalClasses.push(classes.active);
  }

  return (
    <div className={modalClasses.join(" ")}>
      <div className={classes["modal-content"]}>
        {/* <button onClick={() => setVisible(false)}>Close</button> */}
        {children}
      </div>
    </div>
  );
};

export default MyModal;
