import React, { useRef, useEffect, useState } from "react";
import { default as style } from "./Page.module.scss";
import { default as classes } from "./Project/Project.module.scss";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header";
import MyTable from "../components/UI/Table/MyTable";
import MyHead from "../components/UI/Table/Head/MyHead";
import MyHeadRow from "../components/UI/Table/Head/Row/MyHeadRow";
import MyHeadCell from "../components/UI/Table/Head/Cell/MyHeadCell";
import MyBody from "../components/UI/Table/Body/MyBody";
import MyRow from "../components/UI/Table/Body/Row/MyRow";
import MyCell from "../components/UI/Table/Body/Cell/MyCell";
import MyFooter from "../components/UI/Table/Footer/MyFooter";
import MyButton from "../components/UI/Button/MyButton";
import MyFooterRow from "../components/UI/Table/Footer/MyFooterRow/MyFooterRow";
import MyFooterCell from "../components/UI/Table/Footer/MyFooterCell/MyFooterCell";
import { theme } from "../shared/constants/theme";
import MyBottomModal from "../components/UI/BottomModal/MyBottomModal";
import MyModal from "../components/UI/Modal/MyModal";
import MyInputRounded from "../components/UI/InputRounded/MyInputRounded";

// export interface EstimateProps {

// }

// const About: React.FC<EstimateProps> = () => {
//     return ( <div>About</div> );
// }

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

const tableData = [
  {
    id: 1,
    desc: "- Create cache module1",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 2,
    desc: "- Deep cache for cocktails & ingredients ( history update )2",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 3,
    desc: "- Create cache module3",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 4,
    desc: "- Deep cache for cocktails & ingredients ( history update )4",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 5,
    desc: "- Create cache module5",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 6,
    desc: "- Deep cache for cocktails & ingredients ( history update )6",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 7,
    desc: "- Create cache module7",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 8,
    desc: "- Create cache module7",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 9,
    desc: "- Create cache module7",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    id: 10,
    desc: "- Create cache module7",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
];

//TODO MyFooter
const About: React.FC = (): JSX.Element => {
  const history = useHistory();
  const [fixButton, setFixButton] = useState(false);
  const [tabs, setTabs] = useState([
    { id: 1, title: "Back-end", active: true },
    { id: 2, title: "App", active: false },
  ]);
  const [bottomModalVisible, setBottomModalVisible] = useState(false);

  const description = useInput();
  const hourMin = useInput();
  const hourMax = useInput();
  const comments = useInput();

  const scrollListener = () => {
    setFixButton(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const showBottomModal = () => {
    console.log("showBottomModal");

    setBottomModalVisible(true);
  };

  return (
    <div className={style.page}>
      {/* <button onClick={() => history.push("/gdfggfh")}>
        Push to not correct route
      </button> */}
      <Header />
      {bottomModalVisible && (
        <MyModal
          visible={bottomModalVisible}
          setVisible={setBottomModalVisible}
        >
          <MyBottomModal setVisible={setBottomModalVisible}>
            <h1>Add new row</h1>
            <div>
              <div>
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
              <div>
                <MyButton>Add</MyButton>
                <MyButton>Cancel</MyButton>
              </div>
            </div>
          </MyBottomModal>
        </MyModal>
      )}
      <div className={classes["projects-wrapper"]}>
        <div className={classes.projects__data}>
          <div className={classes.projects__types}>
            <div className={classes["buttons-group"]}>
              {tabs.map((tab) => (
                <MyButton
                  key={tab.id}
                  shadow={false}
                  height="31px"
                  background="transparent"
                  borderRadius="16px"
                  className={
                    tab.active
                      ? [
                          classes["buttons-group__item"],
                          classes["buttons-group__item_active"],
                        ].join(" ")
                      : classes["buttons-group__item"]
                  }
                >
                  {tab.title}
                </MyButton>
              ))}
            </div>
            <div className={classes["projects__types-add"]}>+Add new tab</div>
          </div>
        </div>
        <MyTable className={classes.projects}>
          <MyHead>
            <MyHeadRow>
              <MyHeadCell>Description</MyHeadCell>
              <MyHeadCell>Estimate (Hour) min</MyHeadCell>
              <MyHeadCell>Estimate max</MyHeadCell>
              <MyHeadCell>Unit</MyHeadCell>
              <MyHeadCell>Unit price</MyHeadCell>
              <MyHeadCell>Cost USD</MyHeadCell>
              <MyHeadCell>Comments</MyHeadCell>
            </MyHeadRow>
          </MyHead>
          <MyBody>
            {tableData.map((row) => (
              <MyRow key={row.id}>
                <MyCell>{row.desc}</MyCell>
                <MyCell>{row.min}</MyCell>
                <MyCell>{row.max}</MyCell>
                <MyCell>{row.unit}</MyCell>
                <MyCell> {row.unitPrice}</MyCell>
                <MyCell>{row.costUsd}</MyCell>
                <MyCell>{row.comments}</MyCell>
              </MyRow>
            ))}
          </MyBody>
          <MyFooter>
            <MyFooterRow>
              <MyFooterCell>Total</MyFooterCell>
              <MyFooterCell>49</MyFooterCell>
              <MyFooterCell></MyFooterCell>
              <MyFooterCell></MyFooterCell>
              <MyFooterCell></MyFooterCell>
              <MyFooterCell>$2885.00</MyFooterCell>
              <MyFooterCell rowSpan="2" align="right">
                {fixButton ? (
                  <MyButton
                    onClick={showBottomModal}
                    className={[
                      classes.projects__button,
                      classes.projects__button_scroll,
                    ].join(" ")}
                  >
                    +Add new row
                  </MyButton>
                ) : (
                  <MyButton
                    className={classes.projects__button}
                    onClick={showBottomModal}
                  >
                    +Add new row
                  </MyButton>
                )}
              </MyFooterCell>
            </MyFooterRow>
            <MyFooterRow>
              <MyFooterCell>All projects</MyFooterCell>
              <MyFooterCell>197</MyFooterCell>
              <MyFooterCell></MyFooterCell>
              <MyFooterCell></MyFooterCell>
              <MyFooterCell></MyFooterCell>
              <MyFooterCell>$5854.24</MyFooterCell>
              {/* <MyFooterCell>2.4</MyFooterCell> */}
            </MyFooterRow>
          </MyFooter>
        </MyTable>
      </div>
    </div>
  );
};

export default About;
