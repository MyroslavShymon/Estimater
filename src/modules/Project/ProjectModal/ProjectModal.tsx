import * as React from "react";
import { default as classes } from "./ProjectModal.module.scss";
import MyBottomModal from "../../../components/UI/BottomModal/MyBottomModal";
import MyModal from "../../../components/UI/Modal/MyModal";
import MyInputRounded from "../../../components/UI/InputRounded/MyInputRounded";
import MyButton from "../../../components/UI/Button/MyButton";
import CloseModal from "../../../assets/CloseModal.svg";
import { theme } from "../../../shared/constants/theme";

interface ProjectModalProps {
  bottomModalVisible: boolean;
  setBottomModalVisible: (bottomModalVisible: boolean) => void;
}

const useInput = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  bottomModalVisible,
  setBottomModalVisible,
}) => {
  const description = useInput();
  const hourMin = useInput();
  const hourMax = useInput();
  const comments = useInput();

  return (
    <MyModal
      className={classes["modal-wrapper"]}
      visible={bottomModalVisible}
      setVisible={setBottomModalVisible}
    >
      <MyBottomModal
        className={classes.modal}
        setVisible={setBottomModalVisible}
      >
        <div className={classes.modal__header}>
          <h1 className={classes.modal__title}>Add new row</h1>
          <img
            onClick={() => setBottomModalVisible(false)}
            src={CloseModal}
            alt="close modal"
            className={classes.modal__close}
          />
        </div>
        <div className={classes.modal__content}>
          <div className={classes.modal__inputs}>
            <MyInputRounded
              title="Description"
              placeholder="Deep cache for cocktails and ingredients ( history update )"
              inputData={description}
            ></MyInputRounded>
            <MyInputRounded
              title=" Estimate (Hour) min"
              placeholder="Time here"
              inputData={hourMin}
            ></MyInputRounded>
            <MyInputRounded
              title=" Estimate max"
              placeholder="Time here"
              inputData={hourMax}
            ></MyInputRounded>
            <MyInputRounded
              title="Comments"
              placeholder="Text here"
              inputData={comments}
            ></MyInputRounded>
          </div>
          {/* className={classes["modal__buttons-add"]} */}
          <div className={classes.modal__buttons}>
            <MyButton
              shadow={false}
              background={theme.secondary}
              color={theme["text-light"]}
            >
              Add
            </MyButton>
            {/* className={classes["modal__buttons-cancel"]} */}
            <MyButton
              shadow={false}
              background={theme.primary}
              color={theme["text-secondary"]}
            >
              Cancel
            </MyButton>
          </div>
        </div>
      </MyBottomModal>
    </MyModal>
  );
};

export default ProjectModal;
