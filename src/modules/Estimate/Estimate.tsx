import React, { useState } from "react";
import { default as style } from "../Page.module.scss";
import { default as classes } from "./Estimate.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import EstimateItem from "./EstimateItem/EstimateItems";
import MyModal from "../../components/UI/Modal/MyModal";
import EstimateForm from "../EstimateForm/EstimateForm";

// export interface EstimateProps {

// }

// const Estimate: React.FC<EstimateProps> = () => {
//     return ( <div>Estimate</div> );
// }

const Estimate: React.FC = (): JSX.Element => {
  const [estimates, setEstimates] = useState([
    { id: 1, title: "Some estimate 1" },
    { id: 2, title: "Some estimate 2" },
    { id: 3, title: "Some estimate 3" },
    { id: 4, title: "Some estimate 4" },
    { id: 5, title: "Some estimate 5" },
    { id: 6, title: "Some estimate 6" },
    { id: 7, title: "Some estimate 7" },
    { id: 8, title: "Some estimate 8" },
    { id: 9, title: "Some estimate 9" },
    { id: 10, title: "Some estimate 10" },
    { id: 11, title: "Some estimate 11" },
    { id: 12, title: "Some estimate 12" },
  ]);
  const [visible, setVisible] = useState(false);

  const add = async () => {
    // await localStorage.setItem("est", estimates[0].title);
  };

  const open = () => {
    setVisible(true);
  };

  return (
    <div className={`${style.page} ${classes["estimate-page"]}`}>
      <h2>Estimate</h2>
      <MyModal setVisible={setVisible} visible={visible}>
        <EstimateForm />
      </MyModal>
      <div className={classes["estimate-wrapper"]}>
        <div className={classes.estimate} onClick={open}>
          <div className={classes["estimate-add"]}>
            <FontAwesomeIcon icon={faPlusCircle} size="4x" />
          </div>
        </div>
        {estimates.map(({ title, id }) => (
          <EstimateItem title={title} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Estimate;
