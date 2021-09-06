import React from "react";
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

// export interface EstimateProps {

// }

// const About: React.FC<EstimateProps> = () => {
//     return ( <div>About</div> );
// }
const tableData = [
  {
    desc: "- Create cache module1",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )2",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module3",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )4",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module5",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )6",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module7",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )8",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Create cache module9",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit.",
  },
  {
    desc: "- Deep cache for cocktails & ingredients ( history update )10",
    min: 8,
    max: 8,
    unit: "Hour",
    unitPrice: "",
    costUsd: "$168.26",
    comments: "Lorem ipsum dolor sit amet eos.",
  },
];
//TODO MyFooter
const About: React.FC = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className={style.page}>
      {/* <button onClick={() => history.push("/gdfggfh")}>
        Push to not correct route
      </button> */}
      <Header />
      <div className={classes["projects-wrapper"]}>
        <div className={classes.projects__data}>Header</div>
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
              <MyRow key={row.desc}>
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
              <MyFooterCell rowspan="2" align="right">
                <MyButton className={classes.projects__button}>
                  +Add new row
                </MyButton>
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
