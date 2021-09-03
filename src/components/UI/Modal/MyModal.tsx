import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { default as classes } from "./MyModal.module.scss";

export interface MyModalProps {
  ref?: React.MutableRefObject<HTMLDivElement>;
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
    <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          className={classes["modal-icon"]}
          onClick={() => setVisible(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default MyModal;
